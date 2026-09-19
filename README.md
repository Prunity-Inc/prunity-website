# Prunity Audio website

A simplified, editable recreation using the content and logo from https://prunity.lovable.app/.
Plain HTML and CSS: no installation or build step needed. Open index.html to preview.
The contact link opens an email app; this site does not include a contact-form backend or audio demo.

## Publish on GitHub Pages
1. Create a new PUBLIC repository named prunity-website under the intended GitHub account or organization. Do not use your private ML/app repository.
2. Extract this ZIP. Upload index.html, styles.css, the assets folder, CNAME, and .nojekyll to the repository root (not inside an extra prunity-website folder). README.md is optional.
3. Settings > Pages > Build and deployment: Deploy from a branch, main, /(root), Save.
4. Under Custom domain enter prunityaudio.com and Save BEFORE changing DNS.
5. In Namecheap > Domain List > Manage > Advanced DNS, use the records below if Namecheap is your active DNS provider. If your nameservers point elsewhere, edit DNS at that provider.

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-OWNER.github.io |

Replace YOUR-GITHUB-OWNER with the account or organization that owns the repository (for example Prunity-Inc only if that is where you create it). Do not include https:// or the repository name.
Replace conflicting website records for @ and www, including parking/URL redirects and old A/AAAA/CNAME records. KEEP Google Workspace MX records and all email/domain verification TXT records, including SPF, DKIM, and DMARC. You do not need to change nameservers.
6. Allow DNS to propagate (up to 24 hours). Back in GitHub Pages, enable Enforce HTTPS when available.
7. Check https://prunityaudio.com and https://www.prunityaudio.com, the logo, navigation, and email link. Verify that your Google Workspace email still works.

## Edit later
Change text in index.html and colors/layout in styles.css. Commit updates to main; Pages republishes automatically.
Before publishing, verify the company name, founder biography, and email address. This draft uses Prunity Inc. and farnaz.jazaeri@prunityaudio.com.

## D-U-N-S and Apple enrollment
Apple's D-U-N-S request checklist covers your legal entity name, headquarters/mailing address and work contact information. Apple organization enrollment separately requires a publicly available, functional website with meaningful company content and an associated domain. This website does not guarantee approval.
https://developer.apple.com/help/account/membership/D-U-N-S/
https://developer.apple.com/programs/enroll/

GitHub setup reference:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
