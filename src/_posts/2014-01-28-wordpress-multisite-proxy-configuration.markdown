---
layout: post
status: publish
published: true
title: WordPress multisite proxy configuration
author: Zac Wasielewski
author_email: zac@wasielewski.org
date: '2014-01-28 15:04:47 -0500'
date_gmt: '2014-01-28 20:04:47 -0500'
categories:
- Uncategorized
tags: []
comments: []
---
I've been using [WordPress multisite](http://codex.wordpress.org/Create_A_Network) for a few projects at work lately, and it's been great — mostly. Unfortunately, because of its reliance on ModRewrite, anything beyond the most basic configuration can be complicated.

In this case, I needed to install a multisite network in a subfolder, served from behind a load-balancing proxy. WordPress multisite is very particular about hostnames, so it detects that the proxy server hostnames (`proxy1.mysite.com` and `proxy2.mysite.com`) don't match the site hostname (`www.mysite.com`), and degrades to an infinite redirect loop.

The solution below comes after days of research, testing, and tearing out my hair. Of course, all environments are different, so your mileage will probably vary.

## The solution (well, maybe)

After enabling your multisite network, WordPress provides the following code snippets (which we'll modify in just a moment):

<pre><code>define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
define('DOMAIN_CURRENT_SITE', 'www.mysite.com');
define('PATH_CURRENT_SITE', '/subfolder/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
</code></pre>

<pre><code>RewriteEngine On
RewriteBase /subfolder/
RewriteRule ^index.php$ - [L]

# uploaded files
RewriteRule ^([_0-9a-zA-Z-]+/)?files/(.+) wp-includes/ms-files.php?file=$2 [L]

# add a trailing slash to /wp-admin
RewriteRule ^([_0-9a-zA-Z-]+/)?wp-admin$ $1wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^([_0-9a-zA-Z-]+/)?(wp-(content|admin|includes).*) $2 [L]
RewriteRule ^([_0-9a-zA-Z-]+/)?(.*.php)$ $2 [L]
RewriteRule . index.php [L]
</code></pre>

Now let's make some additions. New lines are bold:

<pre><code>define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
<strong>$base = '/subfolder/';</strong>
define('DOMAIN_CURRENT_SITE', 'www.mysite.com');
define('PATH_CURRENT_SITE', '/subfolder/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);

<strong>if ( isset( $_SERVER['HTTP_X_FORWARDED_HOST'] ) ) {
  $_SERVER['HTTP_HOST'] = $_SERVER['HTTP_X_FORWARDED_HOST'];
}</strong>
</code></pre>

<pre><code>RewriteEngine On
RewriteBase /subfolder/
RewriteRule ^index.php$ - [L]

# uploaded files
RewriteRule ^([_0-9a-zA-Z-]+/)?files/(.+) wp-includes/ms-files.php?file=$2 [L]

# add a trailing slash to /wp-admin
RewriteRule ^([_0-9a-zA-Z-]+/)?wp-admin$ $1wp-admin/ [R=301,L]

<strong>RewriteCond %{HTTP:X-Forwarded-Host} !^$
RewriteCond %{HTTP:X-Forwarded-Host} !^www. [NC]
RewriteCond %{HTTPS}s ^on(s)|
RewriteRule ^ http%1://www.mysite.com%{REQUEST_URI} [R=301,L]</strong>

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^([_0-9a-zA-Z-]+/)?(wp-(content|admin|includes).*) $2 [L]
RewriteRule ^([_0-9a-zA-Z-]+/)?(.*.php)$ $2 [L]
RewriteRule . index.php [L]
</code></pre>

And that's it. This combination of rules delicately nudges your URLs into a format that WordPress and Apache won't choke on.
