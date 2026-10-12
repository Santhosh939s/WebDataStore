# WebDataStore

A zero-database, cross-device auto-saving web app with live side-by-side profiles for **Santhosh** and **Jaya**.

## ✨ Features
- **Dual Side-by-Side Profiles**: Live simultaneous view for both Santhosh and Jaya.
- **Instant Auto-Save**: IP addresses and passwords save automatically as you type or paste (no submit button needed).
- **Cross-Device Visibility**: Open the site on any laptop, mobile phone, or tablet anywhere in the world — all saved data is instantly synchronized.
- **Zero Database Setup**: No MongoDB, no Firebase, no SQL, and no connection strings required.
- **Copy & Paste Helpers**: One-click copy with clipboard integration and show/hide password toggle.
- **Live Sync Polling**: Background real-time sync ensures changes made by a friend appear on your screen without manual refreshes.
- **Share Modal & QR Code**: Built-in QR code generator to instantly open the page on mobile phones.

---

## 🚀 How to Run Locally

### Option A: Direct Open
Simply double-click [index.html](file:///s:/gravity%20projects/web%20data%20store/index.html) in your browser. It connects directly to the cloud sync and works immediately!

### Option B: Local Node.js Server
If you want to run a local server that saves to [data.json](file:///s:/gravity%20projects/web%20data%20store/data.json):
```bash
npm start
# OR
node server.js
```
Then open `http://localhost:3000` in your browser.

---

## 🌐 Deploy to Vercel (100% Free)

You can host this site on Vercel so you and your friend can access it anywhere:

### Method 1: Using Vercel CLI
```bash
npx vercel
```
Follow the quick prompts (accept defaults). Vercel will give you a public URL (e.g., `https://web-data-store-xxx.vercel.app`).

### Method 2: Drag & Drop via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository, or deploy via CLI.

Once deployed, share the link with your friend or open it on your phone — any data entered will automatically sync across all devices!
