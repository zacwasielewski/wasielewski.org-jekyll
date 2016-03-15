---
layout: post
status: draft
title: Hosting my own mail server
author:
  display_name: Zac Wasielewski
  login: zac@wasielewski.org
  email: zac@wasielewski.org
  url: ''
author_login: zac@wasielewski.org
author_email: zac@wasielewski.org
wordpress_id: 124
wordpress_url: http://wasielewski.org/wp/?p=124
date: '2014-05-28 09:24:12 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>    1  sudo apt-get install postfix postfix-mysql dovecot-core dovecot-imapd dovecot-pop3d dovecot-lmtpd dovecot-mysql mysql-server<br />
    2  sudo apt-get update<br />
    3  sudo apt-get install postfix postfix-mysql dovecot-core dovecot-imapd dovecot-pop3d dovecot-lmtpd dovecot-mysql mysql-server<br />
    4  mysqladmin -p create mailserver<br />
    5  sudo mysqladmin -p create mailserver<br />
    6  mysql -p mailserver<br />
    7  sudo mysql -p mailserver<br />
    8  hostname --fqd<br />
    9  sudo apt-get install postfix<br />
   10  sudo dpkg-reconfigure postfix<br />
   11  hostname -f<br />
   12  hostname<br />
   13  mysql -p<br />
   14  mysql<br />
   15  mysql -p mailserver<br />
   16  sudo mysql -p mailserver<br />
   17  cp &#47;etc&#47;postfix&#47;main.cf &#47;etc&#47;postfix&#47;main.cf.orig<br />
   18  sudo cp &#47;etc&#47;postfix&#47;main.cf &#47;etc&#47;postfix&#47;main.cf.orig<br />
   19  sudo vi &#47;etc&#47;postfix&#47;main.cf<br />
   20  sudo vi &#47;etc&#47;postfix&#47;mysql-virtual-mailbox-domains.cf<br />
   21  sudo service postfix restart<br />
   22  postmap -q zac@wasielewski.org mysql:&#47;etc&#47;postfix&#47;mysql-virtual-mailbox-domains.cf<br />
   23  postmap -q ac@wasielewski.org mysql:&#47;etc&#47;postfix&#47;mysql-virtual-mailbox-domains.cf<br />
   24  sudo postmap -q zac@wasielewski.org mysql:&#47;etc&#47;postfix&#47;mysql-virtual-mailbox-domains.cf<br />
   25  postmap -q wasielewski.org mysql:&#47;etc&#47;postfix&#47;mysql-virtual-mailbox-domains.cf<br />
   26  sudo vi &#47;etc&#47;postfix&#47;mysql-virtual-mailbox-maps.cf<br />
   27  sudo service postfix restart<br />
   28  sudo postmap -q zac@wasielewski.org mysql:&#47;etc&#47;postfix&#47;mysql-virtual-mailbox-maps.cf<br />
   29  sudo vi &#47;etc&#47;postfix&#47;mysql-virtual-alias-maps.cf<br />
   30  sudo service postfix restart<br />
   31  sudo postmap -q zachary@wasielewski.org mysql:&#47;etc&#47;postfix&#47;mysql-virtual-alias-maps.cf<br />
   32  sudo ci &#47;etc&#47;postfix&#47;master.cf &#47;etc&#47;postfix&#47;master.cf.orig<br />
   33  sudo cp &#47;etc&#47;postfix&#47;master.cf &#47;etc&#47;postfix&#47;master.cf.orig<br />
   34  sudo vi &#47;etc&#47;postfix&#47;master.cf<br />
   35  sudo service postfix restart<br />
   36  sudo cp &#47;etc&#47;dovecot&#47;dovecot.conf &#47;etc&#47;dovecot&#47;dovecot.conf.orig<br />
   37  sudo cp &#47;etc&#47;dovecot&#47;conf.d&#47;10-mail.conf &#47;etc&#47;dovecot&#47;conf.d&#47;10-mail.conf.orig<br />
   38  sudo cp &#47;etc&#47;dovecot&#47;conf.d&#47;10-auth.conf &#47;etc&#47;dovecot&#47;conf.d&#47;10-auth.conf.orig<br />
   39  sudo cp &#47;etc&#47;dovecot&#47;dovecot-sql.conf.ext &#47;etc&#47;dovecot&#47;dovecot-sql.conf.ext.orig<br />
   40  sudo cp &#47;etc&#47;dovecot&#47;conf.d&#47;10-master.conf &#47;etc&#47;dovecot&#47;conf.d&#47;10-master.conf.orig<br />
   41  sudo cp &#47;etc&#47;dovecot&#47;conf.d&#47;10-ssl.conf &#47;etc&#47;dovecot&#47;conf.d&#47;10-ssl.conf.orig<br />
   42  sudo vi &#47;etc&#47;dovecot&#47;dovecot.conf<br />
   43  sudp vi &#47;etc&#47;dovecot&#47;conf.d&#47;10-mail.conf<br />
   44  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;10-mail.conf<br />
   45  ls -ld &#47;var&#47;mail<br />
   46  sudo mkdir -p &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org<br />
   47  groupadd -g 5000 vmail<br />
   48  sudo groupadd -g 5000 vmail<br />
   49  sudo useradd -g vmail -u 5000 vmail -d &#47;var&#47;mail<br />
   50  sudo chown -R vmail:vmail &#47;var&#47;mail<br />
   51  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;10-auth.conf<br />
   52  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;auth-sql.conf.ext<br />
   53  sudo vi &#47;etc&#47;dovecot&#47;dovecot-sql.conf.ext<br />
   54  sudo chown -R vmail:dovecot &#47;etc&#47;dovecot&#47;<br />
   55  sudo chmod -R o-rwx &#47;etc&#47;dovecot&#47;<br />
   56  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;10-master.conf<br />
   57  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;master.conf<br />
   58  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;10-master.conf<br />
   59  ls &#47;etc&#47;ssl&#47;certs&#47;dovecot.pem<br />
   60  ls &#47;etc&#47;ssl&#47;private&#47;dovecot.pem<br />
   61  sudo ls &#47;etc&#47;ssl&#47;private&#47;dovecot.pem<br />
   62  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;10-ssl.conf<br />
   63  service dovecot restart<br />
   64  sudo service dovecot restart<br />
   65  ping wasielewski.org<br />
   66  tail -f &#47;var&#47;log&#47;mail.log<br />
   67  sudo tail -f &#47;var&#47;log&#47;mail.log<br />
   68  sudo service postfix restart<br />
   69  sudo service dovecot restart<br />
   70  history | grep mysql<br />
   71  sudo mysql -p mailserver<br />
   72  sudo tail -f &#47;var&#47;log&#47;mail.log<br />
   73  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;10-mail.conf<br />
   74  sudo service dovecot restart<br />
   75  ls -l &#47;var&#47;mail&#47;vhosts&#47;<br />
   76  ls -l &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;<br />
   77  ls -l &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;zac&#47;<br />
   78  sudo ls -l &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;zac&#47;<br />
   79  ls -l &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;<br />
   80  sudo tail -f &#47;var&#47;log&#47;mail.log<br />
   81  ls -l &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;<br />
   82  history | grep mkdir<br />
   83  ls -l &#47;var&#47;mail&#47;vhosts&#47;<br />
   84  ls -l &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;<br />
   85  mkdir &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;jacob<br />
   86  sudo mkdir &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;jacob<br />
   87  sudo mkdir &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;deborah<br />
   88  sudo mkdir &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;douglas<br />
   89  sudo mkdir &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;heather<br />
   90  cd &#47;var&#47;mail&#47;vhosts&#47;wasielewski.org&#47;<br />
   91  ls -l<br />
   92  sudo chown vmail deborah&#47; douglas&#47; heather&#47; jacob&#47;<br />
   93  ls -l<br />
   94  ls -l zac&#47;<br />
   95  sudo ls -l zac&#47;<br />
   96  sudo ls -l zac&#47;new<br />
   97  sudo ls -l zac&#47;tmp<br />
   98  sudo cat zac&#47;dovecot.index.log<br />
   99  pwd<br />
  100  sudo tail -f &#47;var&#47;log&#47;mail.log<br />
  101  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;01-mail-stack-delivery.conf<br />
  102  sudo  ls -l &#47;etc&#47;dovecot<br />
  103  sudo  ls -l &#47;etc&#47;dovecot&#47;conf.d<br />
  104  sudo vi &#47;etc&#47;dovecot&#47;dovecot.conf<br />
  105  sudo tail -f &#47;var&#47;log&#47;mail.log<br />
  106  sudo service postfix restart<br />
  107  sudo service dovecot restart<br />
  108  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;10-master.conf<br />
  109  sudo service postfix restart<br />
  110  sudo service dovecot restart<br />
  111  sudo tail -f &#47;var&#47;log&#47;mail.log<br />
  112  sudo vi &#47;etc&#47;dovecot&#47;dovecot.conf<br />
  113  sudo ls -l &#47;etc&#47;dovecot&#47;conf.d<br />
  114  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;10-mail.conf<br />
  115  pwd<br />
  116  sudo grep protocols &#47;etc&#47;dovecot&#47;conf.d&#47;*<br />
  117  sudo grep protocols &#47;etc&#47;dovecot&#47;conf.d&#47;<br />
  118  sudo grep -r "protocols" &#47;etc&#47;dovecot&#47;conf.d&#47;<br />
  119  grep -l 'protocols' &#47;etc&#47;dovecot&#47;conf.d&#47;<br />
  120  sudo grep -l 'protocols' &#47;etc&#47;dovecot&#47;conf.d&#47;<br />
  121  sudo grep -l 'protocol' &#47;etc&#47;dovecot&#47;conf.d&#47;<br />
  122  sudo grep -l 'protocol' &#47;etc&#47;dovecot&#47;<br />
  123  sudo grep -lr 'protocol' &#47;etc&#47;dovecot&#47;<br />
  124  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;20-lmtp.conf<br />
  125  ls -l &#47;var&#47;spool&#47;postfix&#47;private&#47;<br />
  126  sudo ls -l &#47;var&#47;spool&#47;postfix&#47;private&#47;<br />
  127  sudo chmod g+rw &#47;var&#47;spool&#47;postfix&#47;private&#47;dovecot-lmtp<br />
  128  sudo ls -l &#47;var&#47;spool&#47;postfix&#47;private&#47;<br />
  129  sudo chmod o+rw &#47;var&#47;spool&#47;postfix&#47;private&#47;dovecot-lmtp<br />
  130  ls -la<br />
  131  sudo service postfix restart<br />
  132  sudo service dovecot restart<br />
  133  sudo tail -f &#47;var&#47;log&#47;mail.log<br />
  134  sudo ls -l &#47;etc&#47;dovecot&#47;conf.d&#47;<br />
  135  sudo vi &#47;etc&#47;dovecot&#47;conf.d&#47;15-lda.conf<br />
  136  sudo service dovecot restart<br />
  137  sudo tail -f &#47;var&#47;log&#47;mail.log<br />
  138  doveconf -n<br />
  139  sudo doveconf -n<br />
  140  postconf -n<br />
  141  &#47;sbin&#47;iptables -nvL<br />
  142  sudo &#47;sbin&#47;iptables -nvL<br />
  143  sudo tail -f &#47;var&#47;log&#47;mail.log<br />
  144  sudo cat  &#47;var&#47;log&#47;mail.log | grep deborah@was<br />
  145  sudo tail -f &#47;var&#47;log&#47;mail.log<br />
  146  history | grep mysql<br />
  147  sudo mysql -p mailserver<br />
  148  sudo tail -f &#47;var&#47;log&#47;mail.log<br />
  149  whois uticatower.com<br />
  150  history | grep mysql<br />
  151  mysql -u root -p<br />
  152  history<br />
  153  postconf | grep message_size<br />
  154  ls -l ~&#47;.ssh<br />
  155  ls -la ~<br />
  156  mkdir ~&#47;.ssh<br />
  157  exit<br />
  158  pwd<br />
  159  ls -la<br />
  160  history</p>
