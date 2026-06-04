# Ziarra Partner Platform Demo

Simple Next.js representation app for the Ziarra creator-partner model.

## What This Demo Shows

- Creators apply to become Ziarra partners.
- Ziarra approves creators.
- Creators promote Ziarra-owned packages with referral links and promo codes.
- Customers book through Ziarra checkout.
- Ziarra tracks clicks, bookings, commissions, and payouts.
- Admin controls creators, packages, commissions, payouts, and fraud checks.

## Main Routes

- `/` - overview of the Ziarra creator model
- `/auth/apply` - creator partner application form
- `/creator/dashboard` - creator dashboard demo
- `/creator/packages` - packages creators can promote
- `/creator/links` - referral links and promo codes
- `/creator/bookings` - privacy-safe referred bookings
- `/creator/earnings` - commission view
- `/creator/payouts` - payout request view
- `/admin/dashboard` - admin control dashboard
- `/admin/packages` - Ziarra package management
- `/admin/creators` - creator roster

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3003`.

## Notes

This is a front-end representation app. It intentionally does not include the old database, API, Prisma, auth, or payment implementation files.
