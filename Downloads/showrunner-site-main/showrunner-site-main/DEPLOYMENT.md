# ShowRunner Deployment Guide

This guide will help you deploy ShowRunner to Vercel and get it working properly.

## Prerequisites

1. **OpenAI API Key**: Get one from [OpenAI Platform](https://platform.openai.com/api-keys)
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Git Repository**: Your code should be in a Git repository

## Step 1: Prepare Your Repository

Make sure your repository has all the necessary files:

```
showrunner-site/
├── api/
│   └── generate.js      # API endpoint
├── index.html           # Landing page
├── DemoMode.html        # Event planner
├── about.html           # About page
├── test-api.html        # API testing page
├── package.json         # Dependencies
├── vercel.json          # Vercel config
├── .gitignore           # Git ignore rules
├── env.example          # Environment template
└── README.md           # Documentation
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm deployment settings
   - Wait for deployment to complete

### Option B: Deploy via GitHub Integration

1. **Push your code to GitHub**
2. **Go to [vercel.com](https://vercel.com)**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure project settings**
6. **Deploy**

## Step 3: Configure Environment Variables

After deployment, you need to set up your environment variables:

1. **Go to your Vercel project dashboard**
2. **Navigate to Settings → Environment Variables**
3. **Add the following variables**:

   | Name | Value | Environment |
   |------|-------|-------------|
   | `OPENAI_API_KEY` | `your_openai_api_key_here` | Production, Preview, Development |
   | `OPENAI_MODEL` | `gpt-4o` | Production, Preview, Development |

4. **Click "Save"**

## Step 4: Test Your Deployment

1. **Visit your deployed URL** (e.g., `https://your-project.vercel.app`)
2. **Navigate to `/test-api.html`** to test the API functionality
3. **Run the environment check** to verify your API key is working
4. **Test text generation** to ensure AI responses work
5. **Test text-to-speech** to verify audio functionality

## Step 5: Troubleshooting

### Common Issues

#### API Key Not Working
- **Error**: "OpenAI API key not configured"
- **Solution**: Double-check your environment variables in Vercel dashboard
- **Verify**: Make sure the API key is valid and has sufficient credits

#### CORS Errors
- **Error**: "CORS policy" errors in browser console
- **Solution**: The API is configured to handle CORS automatically
- **Check**: Ensure you're accessing the site via HTTPS

#### 500 Server Errors
- **Error**: "Something went wrong" from API
- **Solution**: Check Vercel function logs in the dashboard
- **Common Cause**: Invalid API key or network issues

#### Text-to-Speech Not Working
- **Error**: Audio doesn't play
- **Solution**: Ensure your OpenAI account has access to TTS models
- **Check**: Verify the `tts-1` model is available in your account

### Checking Logs

1. **Go to your Vercel project dashboard**
2. **Click on "Functions" tab**
3. **Find the `/api/generate` function**
4. **Click "View Function Logs"**
5. **Look for error messages**

## Step 6: Customization

### Changing the AI Model

You can customize which OpenAI model to use:

1. **Add environment variable**:
   ```
   OPENAI_MODEL=gpt-4-turbo
   ```

2. **Available models**:
   - `gpt-4o` (default, fastest)
   - `gpt-4-turbo`
   - `gpt-3.5-turbo`

### Updating Google Sheets Integration

The current Google Sheets integration uses a CORS proxy. To update it:

1. **Create your own Google Apps Script**
2. **Update the URL in `DemoMode.html` line 380**
3. **Test the integration**

## Step 7: Production Checklist

Before going live, verify:

- [ ] API key is configured and working
- [ ] Text generation works correctly
- [ ] Text-to-speech functionality works
- [ ] All pages load without errors
- [ ] Mobile responsiveness works
- [ ] Google Sheets integration (if needed) works
- [ ] Environment variables are set for all environments

## Support

If you encounter issues:

1. **Check the logs** in Vercel dashboard
2. **Test with the test page** (`/test-api.html`)
3. **Verify your OpenAI API key** has sufficient credits
4. **Check the [README.md](README.md)** for additional troubleshooting

## Next Steps

Once deployed and working:

1. **Customize the branding** in the HTML files
2. **Add your own Google Sheets integration** if needed
3. **Set up custom domain** in Vercel dashboard
4. **Configure analytics** if desired
5. **Set up monitoring** for API usage

---

**Need help?** Check the main [README.md](README.md) for more detailed information about the project structure and API endpoints. 