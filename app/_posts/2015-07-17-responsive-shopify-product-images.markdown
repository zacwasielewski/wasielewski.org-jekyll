---
layout: post
status: publish
published: true
title: Responsive Shopify product images
author: Zac Wasielewski
author_email: zac@wasielewski.org
date: '2015-07-17 02:13:49 -0400'
date_gmt: '2015-07-17 02:13:49 -0400'
categories:
- Uncategorized
tags:
- Shopify
- CSS
- Responsive Design
- Web Development
comments: []
---
<span class="run-in">I love Shopify</span>, but during some recent theme development, I noticed certain pages loading slowly, especially on an iPhone. The slowness was most obvious on category pages listing many products.  A quick debugging session revealed that load times could improve by serving smaller, mobile-optimized images.

Of course, I still wanted desktop users to see the large, full-resolution images. Which is essentially the perfect use-case for [responsive images](https://responsiveimages.org/). So I created a `.liquid` snippet (with supporting Javascript) than you can use to enable responsive product images on Shopify:

[github.com/zacwasielewski/shopify-responsive-images](https://github.com/zacwasielewski/shopify-responsive-images)

## What are responsive images, and why should I bother?

People view your web site on a variety of screens, from handheld phones to large, high-resolution widescreen monitors. So we build our sites to be responsive, and they look great on any device. But why should tiny phones waste time and bandwidth downloading big, beautiful, desktop-worthy images? They shouldn't. For maximum performance, your site should serve only what the user *needs*, and nothing more.

"Responsive images" solve this problem by pre-generating an array of various-sized images, then allowing the browser to choose the most appropriate size to download. So a desktop browser will retrieve large, full-quality images, while a mobile browser will download a smaller, optimized version.

## How do responsive images work?

The basic code snippet is simply an `<img>` tag with two additional attributes:

- <strong>`sizes`</strong> tells the image's size relative to the viewport, for one or more media queries (`vw` = "viewport width")
- <strong>`scrcset`</strong> lists the name and width of each available size variation for this image

So the following example declares that the image will occupy 50% of the viewport width when the viewport is over 480 pixels wide, and 100% of the viewport width otherwise:

    <img sizes="(min-width: 480px) 50vw, 100vw"
         srcset="small.png 400w, medium.png 800w, large.png 1200w">

Given those two attributes, the browser now has enough data to choose the most appropriate image to serve.

## Will this actually work, today, in real browers?

Yeah. As usual, [native browser support for srcset and sizes is poor](http://caniuse.com/#feat=srcset). But an awesome little polyfill library named [Picturefill](http://scottjehl.github.io/picturefill/) has our backs.

## Installation and Usage

1. [Install Picturefill](http://scottjehl.github.io/picturefill/#getting-started) (unless you only care about the newest browsers).
2. Clone the repo: `git clone git@github.com:zacwasielewski/shopify-responsive-images.git`
3. Copy `responsive-images.js` to `assets/` and include it with your other scripts (usually at the bottom of theme.liquid):

       {% raw %}{{ 'responsive-images.js' | asset_url | script_tag }}{% endraw %}

4. Copy `responsive-product-image.liquid` to your theme's `snippets/` folder and include it wherever you would normally include a product image:

       {% raw %}{% include 'responsive-product-image' %}{% endraw %}

5. Optionally, modify the previous step to include a list of `sizes` matching your site's media queries:

       {% raw %}{% include 'responsive-product-image',
          sizes: '(max-width: 480px) 100vw, (min-width: 481px) and (max-width: 768px) 50vw, 25vw' %}{% endraw %}

If you prefer to learn by example, here's a sample template to see it all in action: [github.com/zacwasielewski/shopify-responsive-images/blob/master/examples/collection-with-layout.liquid](https://github.com/zacwasielewski/shopify-responsive-images/blob/master/examples/collection-with-layout.liquid)

## Questions?

I'm [@xac](https://twitter.com/xac) on Twitter.
