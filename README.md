404-LDN Website
Project Overview
Welcome to the 404-LDN website project! This repository contains the essential files for a dark, gritty, London-inspired fashion brand website, built with a mobile-first approach. It's designed to be simple, editable, and effective in showcasing your brand's unique aesthetic and products.
Features
 * Dark Mode & Gritty Aesthetic: A distinct visual style inspired by London's urban landscape.
 * Big Bold Fonts: Typography that makes a statement.
 * Homepage Focus: One large, impactful image of your flagship product.
 * Clear Calls to Action (CTA): "Don't Get Left" or "Shop Now" buttons for immediate engagement.
 * Custom Countdown Timer: Builds hype for upcoming drops.
 * Mobile-First Design: Optimized for seamless Browse on mobile devices.
 * Smooth Scrolling: Enhances user experience when navigating sections on the homepage.
 * Print-on-Demand (POD) Integration: Designed to link directly to Printful or Printify products.
 * Newsletter/Email Capture: For building an email list for exclusives and updates.
Pages
The website is structured into the following distinct HTML pages:
 * index.html (Home): Features your flagship product photo, brand message, and the drop countdown timer.
 * shop.html (Shop): A dedicated page to embed or link directly to your Print-on-Demand products.
 * about.html (About): Your brand's mission, story, and the "why" behind 404-LDN.
 * contact.html (Contact/Links): All your social media links (Instagram, TikTok, etc.) and an email list signup form.
Technologies Used
 * HTML5: For the website structure and content.
 * CSS3: For styling, layout, and the dark, gritty aesthetic.
 * JavaScript (ES6+): For interactive elements like the mobile menu, countdown timer, and smooth scrolling.
Project Structure
404-LDN-Website/
├── index.html        (Homepage)
├── shop.html         (Shop page)
├── about.html        (About page)
├── contact.html      (Contact/Links page)
├── style.css         (All global CSS styling)
└── script.js         (All global JavaScript functionalities)

Setup and Installation
 * Clone the repository (or download):
   git clone https://github.com/your-username/404-LDN-Website.git
cd 404-LDN-Website

   If you don't use Git, you can simply download the ZIP file and extract it.
 * Open in browser:
   Navigate to the 404-LDN-Website folder on your computer and simply double-click the index.html file. It will open in your default web browser.
Customization
To make this website truly yours, you'll need to update the placeholder content:
 * Flagship Image (index.html):
   * Open style.css. On line ~157, change the url() for #home::before to the path or URL of your high-resolution flagship product image.
 * Brand Message & CTA (index.html):
   * Edit the <h1> and <p> tags within the .hero-content div (around lines 40-42 in index.html).
   * Update the href for the "Don't Get Left" button (around line 43 in index.html) to link to shop.html.
 * Countdown Timer (script.js):
   * Open script.js. On line ~387, modify new Date("2025-07-20T18:00:00") to your desired drop date and time. Use the YYYY-MM-DDTHH:MM:SS format.
 * Shop Integration (shop.html):
   * On line ~305 in shop.html, replace "YOUR_PRINTFUL_PRINTIFY_STORE_LINK" with the direct URL to your Printful or Printify store.
   * If you have an embed code from Printful/Printify to display products directly, replace the <div class="shop-embed-placeholder">...</div> (around lines 300-302 in shop.html) with that embed code.
 * About Section (about.html):
   * Change the src of the <img> tag (around line 318 in about.html) to a photo of yourself or a brand-representative image.
   * Update the paragraphs within the .about-text div (around lines 320-324 in about.html) with your brand's unique story and mission.
 * Contact & Social Links (contact.html):
   * Replace "YOUR_INSTAGRAM_LINK", "YOUR_TIKTOK_LINK", and mailto:YOUR_EMAIL_ADDRESS (around lines 333-335 in contact.html) with your actual social media profiles and email.
   * The email capture form is a basic HTML structure. To make it functional, you will need to integrate it with a third-party email marketing service (e.g., Mailchimp, SendGrid). Consult your chosen service's documentation for the correct action URL to use in the <form> tag.
 * Colors & Fonts (style.css):
   * All primary colors are defined as CSS variables at the top of style.css (around lines 14-20). Adjust these hexadecimal color codes to match your brand's palette.
   * Google Fonts are used (Oswald for headings, Roboto Mono for body). You can change the @import links and font-family declarations if you prefer different fonts.
Usage
 * Open index.html in your web browser.
 * Navigate between pages using the header navigation.
 * On mobile, use the hamburger menu to reveal the navigation links.
Potential Enhancements
 * Backend for Newsletter: Implement a server-side script or integrate with a service (e.g., Netlify Forms, Mailchimp) to handle email newsletter sign-ups.
 * Product Gallery: Instead of just a placeholder, develop a simple grid of product images on the shop.html page, each linking to its respective Printful/Printify product page.
 * Blog/News Section: Add a new page or section for blog posts, announcements, or lookbooks.
 * Optimized Images: Ensure all images are compressed and sized appropriately for faster loading times.
 * SEO Optimization: Add meta descriptions, keywords, and semantic HTML to improve search engine visibility.
Credits
 * Icons from Icons8
 * Fonts from Google Fonts
