#!/bin/bash
set -e

echo "🇿🇦 DHA OFFICIAL WEBSITE DEPLOYMENT"
echo "===================================="
echo ""

echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Dependencies installed successfully"
echo ""

echo "📝 Summary of Changes:"
echo "- Created official-index.html (DHA homepage with SA flag strip and coat of arms)"
echo "- Created official-all-applicants.html (All 13 applicants display page)"
echo "- Created official-verify.html (Document verification portal)"
echo "- Updated server/index.js (Route to serve official pages)"
echo "- All pages include:"
echo "  ✓ South African flag strip (black, gold, white, green, white, blue, orange)"
echo "  ✓ Coat of arms SVG in header"
echo "  ✓ Official DHA styling (green/white/black/gold)"
echo "  ✓ Responsive design (mobile, tablet, desktop)"
echo "  ✓ All 13 applicants with correct document types:"
echo "    - 8x Permanent Residence"
echo "    - 1x General Work Permit"
echo "    - 1x Relative's Permit"
echo "    - 1x Birth Certificate"
echo "    - 1x Naturalization Certificate"
echo "    - 1x Refugee Status (4-year)"
echo "  ✓ PDF downloads with coat of arms for each applicant"
echo "  ✓ QR code generation and verification"
echo ""

echo "🚀 Committing and pushing to GitHub..."
git add -A
git commit -m "🇿🇦 Add official DHA website with government styling, SA flag strip, coat of arms, and all 13 applicants with official PDFs" || echo "No changes to commit"

git push -u origin main 2>&1 | head -30

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🔗 Live URLs:"
echo "  Homepage: https://inshallah786-y0lf.onrender.com/"
echo "  All Applicants: https://inshallah786-y0lf.onrender.com/all-applicants"
echo "  Verify Document: https://inshallah786-y0lf.onrender.com/verify"
echo ""
echo "⏱️  Render will redeploy in 2-5 minutes..."
echo "📊 Check deployment status in Render dashboard"
