# The Fifth Season Collective — Website

A static site for [thefifthseasoncollective.com](https://thefifthseasoncollective.com).

## File Structure

```
/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Scroll reveals + nav behavior
└── README.md
```

---

## Setup Checklist

### 1. Calendly (Booking)

1. Create a free account at [calendly.com](https://calendly.com)
2. Create an event type called "Clarity Call" (20 min, free)
3. In `index.html`, find the comment block `<!-- TO ACTIVATE -->` and replace the placeholder div with:

```html
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/YOUR-USERNAME/clarity-call" 
     style="min-width:320px;height:630px;">
</div>
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### 2. Stripe (Payments)

1. Create a [Stripe](https://stripe.com) account
2. Go to **Payment Links** → Create two payment links:
   - **Half Day Deposit** — $1,000
   - **Full Day Deposit** — $2,000
3. In `index.html`, replace the two placeholder Stripe links:
   - `https://buy.stripe.com/YOUR_HALF_DAY_LINK`
   - `https://buy.stripe.com/YOUR_FULL_DAY_LINK`

### 3. Email

Update all instances of `hello@thefifthseasoncollective.com` with the real email address.

---

## Deploying to GitHub Pages

1. Create a new GitHub repository named `thefifthseasoncollective.com` (or any name)
2. Push all files:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

3. In the GitHub repo, go to **Settings → Pages**
4. Set source to: `Deploy from branch → main → / (root)`
5. GitHub will give you a `github.io` URL

---

## Connecting Namecheap Domain

1. In GitHub Pages settings, add custom domain: `thefifthseasoncollective.com`
2. GitHub will create a `CNAME` file automatically
3. In **Namecheap DNS settings**, add these records:

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | YOUR-USERNAME.github.io |

4. Wait 10–30 minutes for DNS to propagate
5. Enable **Enforce HTTPS** in GitHub Pages settings once it's active

---

## Customization Notes

- **Colors** — All tokens are in `css/style.css` under `:root`
- **Copy** — All text is in `index.html`, clearly labeled by section
- **Testimonials** — Replace placeholder quotes with real ones as they come in
- **Photos** — Add a `/images/` folder and reference in HTML for before/afters when ready
