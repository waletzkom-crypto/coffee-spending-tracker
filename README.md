# ☕ Coffee Spending Tracker

A beautiful web application that analyzes bank statements to track coffee spending habits using Claude AI.

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Your API Key
Edit the `.env` file and add your Claude API key:
```
CLAUDE_API_KEY=sk-ant-api03-your-new-key-here
```

**IMPORTANT:** Generate a NEW API key from https://console.anthropic.com/settings/keys

### 3. Start the Server
```bash
npm start
```

### 4. Open the App
Navigate to: http://localhost:3000

That's it! Users can now upload PDFs without needing their own API key.

---

## 🌐 Deploy to the Internet (Free Options)

### Option 1: Deploy to Render (Recommended - Free Tier)

1. **Create account** at https://render.com
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository** (or upload these files)
4. **Configure:**
   - Name: `coffee-tracker`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. **Add Environment Variable:**
   - Key: `CLAUDE_API_KEY`
   - Value: Your Claude API key
6. **Click "Create Web Service"**

Your app will be live at: `https://coffee-tracker-xxxx.onrender.com`

### Option 2: Deploy to Railway (Free $5 Credit)

1. **Create account** at https://railway.app
2. **Click "New Project" → "Deploy from GitHub"**
3. **Select your repository**
4. **Add environment variable:**
   - `CLAUDE_API_KEY` = your API key
5. **Deploy!**

### Option 3: Deploy to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Add environment variable** in Vercel dashboard:
   - Go to Settings → Environment Variables
   - Add `CLAUDE_API_KEY` with your key

---

## 📁 Project Structure

```
coffee-spending-tracker/
├── coffee-spending-tracker.html  # Frontend application
├── server.js                     # Backend API server
├── package.json                  # Dependencies
├── .env                          # API key (DO NOT COMMIT)
├── .gitignore                    # Git ignore file
└── README.md                     # This file
```

---

## 🔒 Security Notes

- **NEVER commit your `.env` file** to version control
- The `.gitignore` file prevents this
- Users never see or need your API key
- All API calls go through your backend server

---

## 🛠️ How It Works

1. Users upload up to 3 PDF bank statements
2. PDFs are sent to your backend server
3. Server forwards to Claude API using YOUR API key
4. Claude analyzes PDFs and extracts coffee transactions
5. Results displayed with beautiful charts and insights

---

## 💰 Cost Estimates

Claude API pricing (as of 2024):
- ~$3 per 1M input tokens
- Each PDF analysis ≈ 10K-50K tokens
- Cost per user: ~$0.05-$0.15

**Budget for 100 users/month: ~$5-15**

---

## 🐛 Troubleshooting

### "Server configuration error"
- Make sure you set `CLAUDE_API_KEY` in `.env` file
- Restart the server after adding the key

### "Network error"
- Check if server is running
- Make sure you're accessing the correct URL

### PDFs not processing
- Check file size (keep under 10MB)
- Ensure PDFs are text-based, not scanned images
- Check server logs for error details

---

## 📝 License

MIT License - Feel free to use and modify!

---

## 🎉 Features

✅ No API key required from users
✅ Beautiful coffee-themed design
✅ Drag & drop PDF upload
✅ Smart coffee transaction detection
✅ Interactive charts and visualizations
✅ Spending insights and savings calculations
✅ Export to CSV/PDF
✅ Fully responsive design
✅ Real-time transaction filtering

---

## 🔗 Share Your App

Once deployed, simply share the URL with anyone!
They can use it immediately without any setup.
