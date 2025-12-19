# Vercel Deployment Guide

This guide will help you deploy the S&G Global Advisors application to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. A PostgreSQL database (Neon, Supabase, or other provider)
3. (Optional) SMTP credentials for email notifications

## Deployment Steps

### 1. Install Vercel CLI (Optional but Recommended)

```bash
npm install -g vercel
```

### 2. Build the Application Locally (Test)

```bash
npm install
npm run build
```

This will build the frontend to `dist/public`.

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (Select your account)
- Link to existing project? **No**
- What's your project's name? (e.g., `global-advisor`)
- In which directory is your code located? **./** (current directory)

For production deployment:
```bash
vercel --prod
```

#### Option B: Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Vercel will auto-detect the settings from `vercel.json`
5. Configure environment variables (see below)
6. Click **"Deploy"**

### 4. Configure Environment Variables

In your Vercel project settings, add the following environment variables:

#### Required

```
DATABASE_URL=postgresql://user:password@host:port/database
```

#### Optional (for email functionality)

```
EMAIL_ENABLED=true
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=noreply@sgglobaladvisors.com
EMAIL_TO=contact@sgglobaladvisors.com
```

#### How to Set Environment Variables:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with its value
4. Select the environments (Production, Preview, Development)
5. Click **Save**

### 5. Run Database Migration

After deployment, you need to run the database migration to create/update tables:

```bash
# Set DATABASE_URL in your local environment
export DATABASE_URL=your_database_url

# Run migration
npm run db:push
```

**Note:** You can also run this locally before deploying if you prefer.

### 6. Verify Deployment

1. Visit your deployed URL (provided by Vercel)
2. Test the contact form
3. Check that inquiries are saved to the database
4. (If email is configured) Verify email notifications are sent

## Project Structure for Vercel

- **Frontend**: Built to `dist/public` (static files)
- **API Routes**: Serverless functions in `api/` directory
- **Configuration**: `vercel.json` defines routing and build settings

## How It Works

1. **Frontend**: Vite builds the React app to static files served by Vercel
2. **API Routes**: Serverless functions in `api/contact.ts` handle form submissions
3. **Database**: Uses Neon serverless PostgreSQL (works well with Vercel's serverless functions)
4. **Email**: Optional SMTP integration for notifications

## Routing

- `/api/contact` → Handled by `api/contact.ts` serverless function
- All other routes → Served by `index.html` (React Router handles client-side routing)

## Troubleshooting

### Build Errors

- Make sure all dependencies are in `package.json`
- Check that `DATABASE_URL` is set in environment variables
- Review build logs in Vercel dashboard

### API Errors

- Check function logs in Vercel dashboard
- Verify `DATABASE_URL` is correctly set
- Ensure database allows connections from Vercel's IPs (if firewall is enabled)

### Email Not Working

- Verify `EMAIL_ENABLED=true` is set
- Check all SMTP variables are configured
- Review function logs for email errors (emails are non-blocking)

### Database Connection Issues

- Verify `DATABASE_URL` format is correct
- For Neon: Make sure SSL is enabled (`?sslmode=require`)
- Check database firewall settings

## Custom Domain

To add a custom domain:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Add your domain
4. Follow DNS configuration instructions

## Continuous Deployment

Vercel automatically deploys when you push to your main branch:

1. Connect your Git repository
2. Push changes to main/master branch
3. Vercel automatically builds and deploys

## Performance

- Frontend is served as static files (very fast)
- API routes are serverless functions (auto-scaling)
- Database uses serverless PostgreSQL (scales automatically)

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Discord](https://vercel.com/discord)
- Project issues: Check function logs in Vercel dashboard

