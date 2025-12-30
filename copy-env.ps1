# Run this script to copy the .env.local file from official website to landing page
# This will enable the Contentful logo on the landing page

Copy-Item "C:\Users\User\Downloads\vsg-secretary-corporate-website\.env.local" "C:\Users\User\Downloads\vsg-secretary---professional-sdn-bhd-conversion-landing-page (1)\.env.local" -Force

Write-Host "✅ .env.local file copied successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Stop the dev server (Ctrl+C in terminal)"
Write-Host "2. Run: npm run dev"
Write-Host "3. Open http://localhost:3000 - logo should now appear!"
