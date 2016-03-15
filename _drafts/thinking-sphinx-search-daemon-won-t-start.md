---
layout: post
status: draft
title: Thinking Sphinx search daemon won't start
author:
  display_name: Zac Wasielewski
  login: zac@wasielewski.org
  email: zac@wasielewski.org
  url: ''
author_login: zac@wasielewski.org
author_email: zac@wasielewski.org
wordpress_id: 135
wordpress_url: http://wasielewski.org/wp/?p=135
date: '2014-08-13 12:07:53 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>I&nbsp;use&nbsp;<a href="http:&#47;&#47;pat.github.io&#47;thinking-sphinx&#47;">Thinking Sphinx<&#47;a>&nbsp;for search on one of my Ruby on Rails web apps. Every now and then,&nbsp;for reasons I haven't yet determined, the search daemon dies. &nbsp;When I try to restart it manually, this sort&nbsp;of error is thrown:</p>
<pre>$:&#47;var&#47;www&#47;mysite&#47;$ rake thinking_sphinx:start<br />
Failed to start searchd daemon. Check &#47;var&#47;www&#47;mysite.com&#47;log&#47;searchd.log.<&#47;pre><br />
But checking <code>&#47;var&#47;www&#47;mysite.com&#47;log&#47;searchd.log<&#47;code> shows nothing. Here are the two possible problems, and how I fix them:</p>
<p>1. The process id&nbsp;file (&#47;var&#47;run&#47;sphinx&#47;search.pid) is missing or&nbsp;un-writeable. This usually happens after a server restart; I haven't set up the permissions</p>
