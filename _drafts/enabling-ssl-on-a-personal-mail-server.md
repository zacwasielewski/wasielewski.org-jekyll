---
layout: post
status: draft
title: Enabling SSL on a personal mail server
author:
  display_name: Zac Wasielewski
  login: zac@wasielewski.org
  email: zac@wasielewski.org
  url: ''
author_login: zac@wasielewski.org
author_email: zac@wasielewski.org
wordpress_id: 165
wordpress_url: http://wasielewski.org/wp/?p=165
date: '2015-03-21 16:17:28 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>1. Purchase SSL certificate</p>
<p>2. Generate a CSR</p>
<div class="response-body content-body " style="color: #333333;">
<pre><code style="color: #111111;">openssl req -new -newkey rsa:2048 -nodes -keyout yourdomain.key -out yourdomain.csr<&#47;code><&#47;pre><br />
<&#47;div><br />
3. Activate SSL certificate using&nbsp;registrar control panel</p>
<p>4.</p>
