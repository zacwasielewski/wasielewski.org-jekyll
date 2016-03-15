---
layout: post
status: publish
published: true
title: On Contributing
author: Zac Wasielewski
author_login: zac@wasielewski.org
author_email: zac@wasielewski.org
wordpress_id: 8
wordpress_url: http://wasielewski.org/?p=7
date: '2013-08-14 23:04:21 -0400'
date_gmt: '2013-08-14 23:04:21 -0400'
categories:
- Uncategorized
tags:
- code
- github
- stackoverflow
comments: []
---
The other day, my friend [Brad](http://bkmorse.com/) asked a [question on Stack Overflow](http://stackoverflow.com/questions/18089442/twitter-bootstrap-hidden-lg-less-not-working/18106165) regarding LESS and Bootstrap 3. Sensing an opportunity for some easy reputation points, I hopped on and posted a quick solution.

Except, it didn't work. Neither did my next solution, or the next, or the next. I'm familiar enough with Bootstrap, and with LESS, to <em>know</em> my solutions should have worked. But they didn't. So I dug in, forked the repo, and built a test case.

It turned out that Bootstrap didn't support the functionality that Brad was trying to use. The docs weren't even totally clear on whether it <em>should</em>. So after explaining the problem, and workaround, on Stack Overflow, I thought: why not submit the "fix" back as a pull request? [So I did](https://github.com/twbs/bootstrap/pull/9211), and to my surprise, it was accepted and rolled into [Bootstrap 3 RC2](http://blog.getbootstrap.com/2013/08/13/bootstrap-3-rc2/).

For you veteran Githubbers, my experience is nothing special. In fact, I've submitted plenty of pull requests myself. But this was my first to a major open-source project, so it still feels shiny and cool to me.

More importantly, though, it's a valuable reminder: just because a project is large and popular, it not necessarily free of issues. Don't assume that other developers are smarter than you, or that you have nothing valuable to contribute. You probably do! But you'll never know unless you get your hands dirty.
