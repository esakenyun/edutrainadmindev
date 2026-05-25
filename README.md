# Edutrain Admin

Edutrain Admin is a Next.js-based admin dashboard for managing Edutrain learning products and supporting content. The application is built for internal operators who need to handle trainings, webinars, workshops, user accounts, orders, and dashboard statistics from a single interface.

## What This Project Does

This project provides an authenticated admin panel with pages for:

- Monitoring high-level platform statistics on the dashboard
- Managing `training`, `webinar`, and `workshop` records
- Viewing detail pages and registered participants for each event
- Managing admin and user account data
- Reviewing and verifying orders
- Managing site content such as banners, videos, and FAQs
- Organizing categories, subcategories, and job-role-related content

The UI is built with the Next.js App Router and a component-driven structure inside `src/components`.

## Main Stack

- `Next.js 16`
- `React 18`
- `Tailwind CSS`
- `Axios`
- `Zustand`
- `MUI` and `MUI Data Grid`
- `Headless UI`
- `Chart.js` / `react-chartjs-2`
- `sonner` for notifications

## Version History

This repository is an update of an older Edutrain Admin codebase, so the stack version matters for anyone comparing implementations.

### Previous baseline

- Project baseline committed on `2024-06-28`
- Built with `Next.js 14.1.4`
- Used `React 18`
- Used `eslint-config-next 14.1.4`
- Used `eslint ^8`

### Current updated stack

- Dependency update committed on `2026-05-25`
- Built with `Next.js 16.2.6`
- Uses `React 18.3.1`
- Uses `eslint-config-next 16.2.6`
- Uses `eslint ^9.0.0`
- Adds `zustand ^5.0.8` for the mock API store and local data workflows

In short: this project started as a 2024 Next.js 14 admin app and has since been updated in 2026 to Next.js 16 with newer linting and local mock-state support.

## Project Structure

```text
src/
  app/
    auth/                  Login page
    dashboard/             Protected admin routes
  components/
    pages/                 Page-level UI composition
    card/                  Reusable cards
    modal/                 CRUD and confirmation modals
    table/                 Data tables
    navigation/            Sidebar and topbar
    chart/                 Dashboard charts
  helpers/                 API and domain helpers
  store/                   Mock API state with Zustand
```

## Authentication Flow

- Login starts at `/auth`
- A token is stored in cookies after successful login
- Dashboard routes under `/dashboard/*` are protected by `src/proxy.js`
- Logout removes the token and clears the default auth header

## API Mode and Mock Mode

This project supports two runtime modes:

### 1. Mock mode

Mock mode is enabled by default. If `NEXT_PUBLIC_USE_MOCK_API` is not set, or is set to anything other than `"false"`, the app uses a local Zustand-backed mock store.

This is useful for:

- UI development
- Demoing the dashboard without a backend
- Testing CRUD flows locally

The mock store lives in `src/store/useMockApiStore.js` and includes seeded data for:

- admin and user accounts
- trainings
- webinars
- workshops
- orders
- banners
- videos
- FAQs
- categories and subcategories

Example mock login:

- Email: `admin@edutrain.dev`
- Password: `password123`

### 2. Real API mode

To connect the app to a backend API, set:

```env
NEXT_PUBLIC_USE_MOCK_API=false
NEXT_PUBLIC_API_URL=http://localhost:8000
```

The helpers in `src/helpers` will then call the backend instead of the mock store.

## Available Domain Helpers

The app already contains helper modules for key admin domains, including:

- `authHelper`
- `statisticHelper`
- `trainingHelper`
- `webinarHelper`
- `workshopHelper`
- `orderHelper`
- `userAccountHelper`
- `adminAccountHelper`
- `bannerHelper`
- `videoContentHelper`
- `faqHelper`
- `categoryHelper`
- `subCategoryHelper`

These helpers centralize data fetching and CRUD behavior for both mock and API-backed execution.

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Other Scripts

```bash
npm run build
npm run start
npm run lint
```

## Notes for Development

- Most pages are written as client components
- Many create/edit flows are handled through modal components
- Some pages still contain commented legacy UI blocks from earlier iterations
- The current repo does not include an `.env.example`, so environment variables should be added manually
