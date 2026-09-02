# APF

A static blog website with Vercel Speed Insights integration.

## Features

- Static HTML blog
- Dark mode support
- Responsive design
- Vercel Speed Insights for performance monitoring

## Vercel Speed Insights

This project uses Vercel Speed Insights to track web vitals and performance metrics. The Speed Insights script is included in all HTML pages:

- `index.html`
- `post.html`
- `404.html`

### Setup

1. Enable Speed Insights in your [Vercel Dashboard](https://vercel.com/dashboard) for this project
2. Deploy the site to Vercel
3. Speed Insights will automatically start collecting performance data

The `@vercel/speed-insights` package is included in `package.json` for reference and documentation purposes.

## Deployment

Deploy to Vercel:

```bash
vercel
```

Speed Insights will automatically be activated once the project is deployed and the feature is enabled in the dashboard.
