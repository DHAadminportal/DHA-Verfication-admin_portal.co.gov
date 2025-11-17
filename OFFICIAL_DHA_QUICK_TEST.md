# 🇿🇦 Official DHA Website - Quick Test Guide

## ✅ What's New

### Pages Created
1. **`official-index.html`** - Official government homepage
2. **`official-all-applicants.html`** - All 13 applicants display
3. **`official-verify.html`** - Document verification portal
4. **Updated `server/index.js`** - Routes to serve official pages

### Features
✓ South African flag strip (7-color) on every page
✓ SVG coat of arms in header
✓ Official DHA styling (green/white/black/gold)
✓ All 13 applicants with correct info
✓ Official PDF downloads with coat of arms
✓ QR code verification system
✓ 100% responsive design

## 📱 Quick Test on Your Phone

### Test 1: Homepage
```
URL: https://inshallah786-y0lf.onrender.com/
Expected:
- ✓ South African flag strip at top
- ✓ DHA coat of arms in header
- ✓ Green/white/black styling
- ✓ 6 service cards visible
- ✓ Scrolls smoothly on mobile
```

### Test 2: All Applicants
```
URL: https://inshallah786-y0lf.onrender.com/all-applicants
Expected:
- ✓ 13 applicant cards load
- ✓ Each card shows: name, type, permit #, status
- ✓ QR codes display (emoji 📱 or actual QR image)
- ✓ PDF button downloads document
- ✓ Single column on mobile
- ✓ Multiple columns on desktop
```

### Test 3: PDF Download
```
Steps:
1. Go to all-applicants page
2. Click "⬇ PDF" button on any applicant
3. PDF should download

Expected in PDF:
- ✓ Coat of arms on page
- ✓ DHA header with branding
- ✓ Applicant name and details
- ✓ Permit number
- ✓ Issue/expiry dates
- ✓ QR code for verification
- ✓ Official DHA styling
```

### Test 4: QR Verification
```
Steps:
1. Download PDF from any applicant
2. Print or view PDF on screen
3. Scan QR code with phone camera
4. Should open verification page with applicant details

Expected:
- ✓ Verification page loads
- ✓ Shows "✓ Document Verified Successfully"
- ✓ Shows applicant name, type, permit number
- ✓ Shows nationality and dates
```

### Test 5: Verify Document Page
```
URL: https://inshallah786-y0lf.onrender.com/verify
Expected:
- ✓ Two input fields visible
- ✓ Can enter permit number (e.g., PR/PTA/2025/10/13459)
- ✓ Can enter file/ID number
- ✓ Results show when verified
- ✓ Error message when not found
- ✓ Mobile responsive
```

## 🧪 13 Applicants to Test

| # | Name | Type | Permit # | To Test |
|---|------|------|----------|---------|
| 1 | Muhammad Mohsin | Permanent Residence | PR/PTA/2025/10/13459 | PDF + QR |
| 2 | Ahmad Nadeem | Permanent Residence | PR/PTA/2025/10/13458 | PDF + QR |
| 3 | Tasleem Mohsin | Permanent Residence | PR/PTA/2025/10/16790 | PDF |
| 4 | Qusai Farid Hussein | Permanent Residence | PR/PTA/2025/10/16792 | PDF |
| 5 | Haroon Rashid | Permanent Residence | PR/PTA/2025/10/13456 | PDF |
| 6 | Khunsha Rashid | Permanent Residence | PR/PTA/2025/10/13457 | PDF |
| 7 | Haris Faisal | Permanent Residence | PR/PTA/2025/10/16791 | PDF |
| 8 | Muhammad Hasnain Younis | Permanent Residence | PR/PTA/2025/10/16789 | PDF + QR |
| 9 | IKRAM IBRAHIM YUSUF MANSURI | General Work Permit | WP/PTA/2025/10/13001 | PDF + QR |
| 10 | ANISHA IKRAM MANSURI | Relative's Permit | REL/PTA/2025/10/13001 | PDF + QR |
| 11 | ZANEERAH ALLY | Birth Certificate | F7895390 | PDF |
| 12 | Anna Munaf | Naturalization Certificate | NAT/PTA/2025/10/16001 | PDF |
| 13 | FAATI ABDURAHMAN ISA | Refugee Status (Section 24) | REF/PTA/2025/10/13001 | PDF + QR |

## 🔧 Testing Checklist

### Desktop Testing (1400px+)
- [ ] Visit homepage - see multi-column layout
- [ ] All cards display side-by-side
- [ ] Navigation horizontal
- [ ] Footer displays all sections

### Tablet Testing (768px)
- [ ] Visit homepage - cards adapt to tablet size
- [ ] Navigation adjusts for tablet
- [ ] All applicants grid adjusts
- [ ] Buttons still clickable

### Mobile Testing (480px)
- [ ] Visit homepage - everything in single column
- [ ] Navigation stacks vertically
- [ ] Cards are full width
- [ ] Buttons are large enough to tap
- [ ] No horizontal scrolling
- [ ] Font sizes are readable

### Feature Testing
- [ ] Homepage loads in <3 seconds
- [ ] All applicants page loads all 13 cards
- [ ] QR codes display as images (not emoji)
- [ ] PDF downloads work for each applicant
- [ ] Verify page shows results
- [ ] Filter buttons work (All, Residence, Work, Visas, Certs)

### Visual Testing
- [ ] Flag strip visible at top of each page
- [ ] Coat of arms displays in header
- [ ] Green/white/black/gold colors correct
- [ ] Status badges show "✓ ACTIVE"
- [ ] No layout breaks on any screen size
- [ ] Images load (no broken icons)

## 🎯 Key Test Scenarios

### Scenario 1: First-Time User
1. Visit homepage
2. See overview of services
3. Click "All Applicants"
4. Browse 13 applicants
5. Download PDF for Muhammad Mohsin
6. Verify it has coat of arms

### Scenario 2: Document Verification
1. Download any PDF
2. Scan QR code on PDF
3. Verify page shows applicant details
4. Or go to /verify manually
5. Enter permit number
6. See verification results

### Scenario 3: Mobile User
1. Open homepage on phone
2. Scroll through all content
3. Click navigation items
4. Try filtering applicants
5. Download PDF on phone
6. Verify responsive layout

## 📊 Expected Data

### Permanent Residence (8 applicants)
- All show "Indefinite" expiry
- All show issue date 2025-10
- All show "Issued" status
- Nationalities: Pakistani (7), Jordanian (1)

### Work Permit (1 applicant)
- Expiry: 2028-10-13
- Category: GENERAL WORK VISA SECTION 19(2)
- Nationality: Indian

### Relative's Permit (1 applicant)
- Expiry: 2028-10-13
- Category: RELATIVE'S VISA (SPOUSE)
- Nationality: Indian

### Birth Certificate (1 applicant)
- No expiry (N/A)
- DOB: 2014-03-20
- Nationality: South African

### Naturalization (1 applicant)
- Expiry: Permanent
- Citizenship acquired
- Nationality: South African

### Refugee (1 applicant)
- Expiry: 2029-10-13 (4 years)
- Category: 4-Year Refugee Permit
- Nationality: Eritrean

## 🆘 Troubleshooting

### Issue: Flag strip not visible
**Solution:** Check browser zoom is at 100%, not zoomed in/out

### Issue: Coat of arms missing
**Solution:** SVG image should load automatically - refresh page or clear cache

### Issue: QR codes showing as emoji
**Solution:** If API endpoint working, they'll convert to images after page load

### Issue: PDF not downloading
**Solution:** 
- Check internet connection
- Try different applicant
- Check browser download settings

### Issue: Page not responsive on mobile
**Solution:**
- Ensure viewport meta tag is in HTML (it is)
- Force refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
- Try different mobile browser

## 📞 Support Links

**Live Website:** https://inshallah786-y0lf.onrender.com/

**Admin Features:**
- Get JSON data: `/api/applicants`
- Verify single applicant: `/api/applicants/:id`
- Download PDF: `/api/applicants/:id/pdf`
- Get QR code: `/api/applicants/:id/qr`

**Official DHA:** https://www.dha.gov.za/

## ✅ Sign-Off Checklist

Before declaring complete:
- [ ] Homepage displays with flag strip and coat of arms
- [ ] All 13 applicants display on applicants page
- [ ] Can download PDF for each applicant
- [ ] PDF contains coat of arms
- [ ] QR codes work and verify correctly
- [ ] Verification page functions
- [ ] Mobile responsive (tested on actual phone)
- [ ] Tablet responsive (tested on actual tablet)
- [ ] Desktop responsive (tested on actual desktop)
- [ ] No console errors in browser
- [ ] All navigation links work
- [ ] Back buttons work
- [ ] Filter buttons work

## 🎉 Success Indicators

✅ **When deployment is successful, you'll see:**
- Professional government website
- South African flag and coat of arms on every page
- All 13 applicants with correct information
- Official PDF documents with watermarks
- QR code verification system
- Fully responsive design
- Fast loading times
- No errors in console

**You're ready to deploy!**
