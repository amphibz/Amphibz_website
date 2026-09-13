# Amphibious Achievement website

A static rebuild of [amphibious.mit.edu](https://amphibious.mit.edu/), hosted on GitHub Pages.

**Live site:** https://amphibz.github.io/Amphibz_website/

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
- **Page layout** uses a simple 12-column grid carried over from Squarespace: a `<div class="row">` holds `<div class="col" style="--w:50%">` columns, and each column holds `.block` elements (text, images, buttons, galleries). Copy an existing block to add a new one.
- **Images** live in `assets/img/<page>/`. Add a photo by dropping it into that folder and pointing an `<img src="...">` at it. Keep photos under ~1500px wide so pages load quickly.
- **Mentor bios** are the `<figcaption class="caption-hover">` under each photo in `mentors.html`: they appear over the photo on hover, and below it on phones.
- **Fonts:** Monda (headings and body) and Ubuntu (navigation and buttons), both from Google Fonts, same as the original site.
