-- Profiles table (extends Supabase Auth)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  wallet_balance DECIMAL(12, 2) DEFAULT 0.00,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Campaigns (Ads)
CREATE TABLE campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  advertiser_id UUID REFERENCES profiles(id) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  media_url TEXT NOT NULL,
  tags TEXT[],
  total_budget DECIMAL(12, 2) NOT NULL, -- Total amount paid by advertiser
  platform_fee DECIMAL(12, 2) NOT NULL, -- 20% of total_budget
  distributable_budget DECIMAL(12, 2) NOT NULL, -- 80% of total_budget
  max_clicks INTEGER NOT NULL,
  payout_per_click DECIMAL(12, 5) NOT NULL, -- distributable_budget / max_clicks
  remaining_clicks INTEGER NOT NULL,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'paused', 'completed', 'deleted')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Shares (Tracking who shared which ad)
CREATE TABLE shares (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) NOT NULL,
  campaign_id UUID REFERENCES campaigns(id) NOT NULL,
  unique_code TEXT UNIQUE NOT NULL, -- used in the referral URL
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, campaign_id)
);

-- Clicks (Tracking unique clicks per share)
CREATE TABLE clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  share_id UUID REFERENCES shares(id) NOT NULL,
  clicker_identifier TEXT NOT NULL, -- IP or device fingerprint for uniqueness
  earned_amount DECIMAL(12, 5) DEFAULT 0.00,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(share_id, clicker_identifier)
);

-- Transactions (Wallet history)
CREATE TABLE transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) NOT NULL,
  amount DECIMAL(12, 2) NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('earning', 'withdrawal', 'payment', 'transfer_send', 'transfer_receive')),
  related_entity_id UUID, -- Campaign ID or Share ID or Other User ID
  status TEXT DEFAULT 'completed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE shares ENABLE ROW LEVEL SECURITY;
ALTER TABLE clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Basic Policies (To be refined)
CREATE POLICY "Public profiles are viewable by everyone." ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile." ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Active campaigns are viewable by everyone." ON campaigns FOR SELECT USING (status = 'active');
CREATE POLICY "Advertisers can manage their own campaigns." ON campaigns ALL USING (auth.uid() = advertiser_id);

CREATE POLICY "Users can see their own shares." ON shares FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create shares." ON shares FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can see their own transactions." ON transactions FOR SELECT USING (auth.uid() = user_id);

-- Function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
