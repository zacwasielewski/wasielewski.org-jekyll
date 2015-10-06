---
layout: post
title: Forcing WordPress to send email on (some) shared web hosts
published: true
date: '2015-10-06 12:15:00 -0500'
categories:
tags:
---
A common problem with WordPress on shared hosts is PHP’s built-in `mail()` not working. There are a few possible reasons for this, and a popular workaround is to [enable SMTP mail instead](https://wordpress.org/plugins/wp-mail-smtp/). That method requires an account with a valid SMTP host, which isn’t always an option (especially for clients).

But depending on your host, `mail()` may actually be enabled, and simply require a bit of extra love. Rackspace Cloud Sites, for example, will let you use `mail()` as long as you [include a valid `Sender (Return-Path)` header](http://www.rackspace.com/knowledge_center/article/test-php-mail-functionality).

To test your web host's support, upload this code snippet to your site and access it in a browser:

    <?php
    $to = 'nobody@example.com'; // <- Change this to your email address
    $subject = 'Test email using PHP';
    $message = 'This is a test email message';
    $headers = 'From: webmaster@example.com' . "\r\n"
        . 'Reply-To: webmaster@example.com' . "\r\n"
        . 'X-Mailer: PHP/' . phpversion();
    $sent = mail($to, $subject, $message, $headers, '-fwebmaster@example.com');
    if ($sent) {
      echo 'SUCCESS: Mail was sent!';
    } else {
      echo 'FAILURE: Mail was not sent.'
    }

If you received an email, then you're in good shape. To enable the same in WordPress, it's simple:

1. Install the [WP Mail Options](https://wordpress.org/plugins/wp-mail-options/) plugin.
2. Navigate to Admin → Settings → WP Mail Options
3. Fill in the **From**, **From Name**, and **Sender (Return-Path)** fields (*From and Sender should usually be the same email address.*).

Enjoy your new mail-mailing capabilities!
