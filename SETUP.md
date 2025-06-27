# Setup Instructions

## Environment Variables

To make the COA viewer work properly, you need to set up your Supabase environment variables.

### 1. Create a `.env.local` file in the root directory:

```bash
# Supabase Configuration
SUPABASE_URL=https://elhsobjvwmjfminxxcwy.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Next.js Configuration (if needed for client-side)
NEXT_PUBLIC_SUPABASE_URL=https://elhsobjvwmjfminxxcwy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 2. Get your Supabase keys:

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy the "service_role" key (not the anon key for the API routes)
4. Replace `your_service_role_key_here` with your actual service role key

### 3. Restart your development server:

```bash
npm run dev
```

## Current Issue

The COAs are showing up dark/empty because the Supabase environment variables are not configured. Once you add the proper `SUPABASE_SERVICE_ROLE_KEY` to your `.env.local` file, the PDFs should load correctly with a white background.

## Storage Structure

Make sure your Supabase storage bucket is set up as:
- Bucket name: `coas`
- File path: `pdfs/{filename}.pdf`

For example, a file should be stored at: `pdfs/1750782428263_COA_Cake_QA202506245421.pdf` 