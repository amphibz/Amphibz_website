# Amphibious Achievement website

A static rebuild of [amphibious.mit.edu](https://amphibious.mit.edu/), hosted on GitHub Pages.

**Live site:** https://jaybhan.github.io/Amphibz_website/

## Structure

```
index.html                        Home
about-us.html                     About Us
mentors.html                      Our Mentors
cohorts.html                      Cohorts
sponsors.html                     Our Sponsors
ergathon.html                     ERG-A-THON
gala.html                         Gala & Archives
gallery.html                      Gallery
high-school-application.html      Join Us → High School Application
college-mentor-application.html   Join Us → College Mentor Application
join-us.html                      Redirects to the high school application
404.html                          Not-found page
assets/css/style.css              All styles (colors, fonts, layout)
assets/js/main.js                 Mobile menu, scroll header, slideshow, photo lightbox
```

It's plain HTML/CSS/JS with no build step. Edit a file, commit, and push to `main`, and GitHub Pages redeploys in about a minute.

## Editing notes

- **Header and footer are repeated in every page.** If you add or rename a nav item, update the `<nav class="main-nav">` block, the `#fixedHeader` copy, and the `#sidecarNav` (mobile menu) in each `.html` file.
- **Copy to fill in:** some pages (About Us, ERG-A-THON, Gala, and the two application pages) have short summary text in place of the full write-ups. Look for `<!-- Paste the official ... -->` comments to find where the official text goes. Mentor bios can go as a `<p>` under each person's role in `mentors.html`.
- **Images** currently load from the Squarespace image CDN (`images.squarespace-cdn.com`). If the Squarespace site is ever shut down, those images will stop loading. To avoid that, download them into `assets/img/` and update the `src` URLs.
- **Fonts:** Monda (headings and body) and Ubuntu (navigation and buttons), both from Google Fonts, same as the original site.
