---
layout: post
status: publish
published: true
title: Which .conf file(s) is Apache using?
author:
  display_name: Zac Wasielewski
  login: zac@wasielewski.org
  email: zac@wasielewski.org
  url: ''
author_login: zac@wasielewski.org
author_email: zac@wasielewski.org
wordpress_id: 96
wordpress_url: http://wasielewski.org/wp/?p=96
date: '2014-05-14 14:22:40 -0400'
date_gmt: '2014-05-14 19:22:40 -0400'
categories:
- Uncategorized
tags:
- Apache
- sysadmin
comments: []
---
<span class="run-in">I spent the majority of this week debugging some Apache ModRewrite rules.</span> (Yes, today is Wednesday.) It shouldn't have taken so long. The rules themselves weren't complex, but the server environment is.

Our production web site consists of a load balancer, Memcached server, two synchronized app servers, and two synchronized static file servers. There are obsolete, broken, and duplicate Apache config files distributed in various directories across the app and static servers. Many of the config files recursively included directories full of other config files. By trial-and-error, I sifted through them all, adding debug statements and restarting httpd, over and over and over. Nothing worked; Apache ignored every file I touched.

As usual, it turns out there's an easier way to discover <em>exactly</em> which .conf files Apache is using.

First, get some data about your running Apache process:

    $ ps ax | grep httpd
    21765 ?        Ss     0:00 /usr/sbin/httpd -f /var/www/conf/example.com.conf -E /var/www/logs/example.com-20140514-startup.log

This is valuable information, because now that we know the exact binary and config file Apache is running with, we can use the [-S option](http://httpd.apache.org/docs/2.4/programs/httpd.html) to show VirtualHost settings:

    $ /usr/sbin/httpd -f /var/www/conf/example.com.conf -S
    VirtualHost configuration:
    *:80    is a NameVirtualHost
            default server www.example.com (/var/www/conf/virtual/example.com/www.example.com.conf:1)
            port 80 namevhost www.example.com (/var/www/conf/virtual/example.com/www.example.com.conf:1)
            port 80 namevhost www2.example.com (/var/www/conf/virtual/example.com/www2.example.com.conf:1)
            ...

From the output above, we see that `www.example.com`s VirtualHost is defined in `/var/www/conf/virtual/example.com/www.example.com.conf`.

That's all there is to it — no guesswork necessary.
