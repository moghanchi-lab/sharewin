# ShareWin - Share More, Earn More

A monorepo containing the native mobile app and admin dashboard for the ShareWin platform.

## Structure
- `apps/mobile`: React Native (Expo) app for users and advertisers.
- `apps/admin`: React (Vite) dashboard for platform administrators.
- `packages/shared`: Common types and business logic.
- `supabase`: Database schema and migrations.

## Getting Started

### Prerequisites
- Node.js & npm
- Expo Go app on your mobile device
- Supabase account

### Installation
1. Clone the repository
2. Run `npm install` in the root directory.

### Running the Apps
- **Mobile:** `npm run mobile`
- **Admin:** `npm run admin`

## Environment Variables
Create `.env` files in `apps/mobile` and `apps/admin` with:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

## Deployment
The Admin Panel is configured for deployment on **Render**.
- Build Command: `npm run build:admin`
- Publish Directory: `apps/admin/dist`
