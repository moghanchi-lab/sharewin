export const PLATFORM_FEE_PERCENT = 20;
export const MAX_CLICKS_PER_USER_PER_AD = 10;

export interface Campaign {
  id: string;
  advertiser_id: string;
  title: string;
  description: string;
  media_url: string;
  total_budget: number;
  platform_fee: number;
  distributable_budget: number;
  max_clicks: number;
  payout_per_click: number;
  remaining_clicks: number;
  status: 'pending' | 'active' | 'paused' | 'completed';
}

export const calculateCampaignPayouts = (totalBudget: number, maxClicks: number) => {
  const platformFee = totalBudget * (PLATFORM_FEE_PERCENT / 100);
  const distributable = totalBudget - platformFee;
  const payoutPerClick = distributable / maxClicks;

  return {
    platformFee,
    distributable,
    payoutPerClick
  };
};

export const canUserEarnFromClick = (userClicksOnAd: number) => {
  return userClicksOnAd < MAX_CLICKS_PER_USER_PER_AD;
};
