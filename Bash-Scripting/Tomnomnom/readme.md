
#	Some Core Utils

-	grep	(Search for patterns in files or stdin)
-	sed	(edit the input stream)
-	awk	(general purpose text-processing language
-	cat	(concatenates files)
-	find	(list files recursively and apply filters)
-	sort	(sort the lines from stdin)
-	uniq	(remove duplicate lines from stdin
-	xargs	(run a command using each line from stdin as an argument)
-	tee	(copy stdin to a file and to the screen)

#	IO Streams

-	 A linux process has three standard streams:

	-	stdin	(file descriptor 0)
	-	stdout	(file descriptor 1)
	-	stderr	(file descriptor 2)
	
-	stdin defaults to your keyboard
-	stdout and stderr defualts to your screen

-	You can redirect the standard streams

	-	'< file-name'		connects a file to stdin
	-	'> file-name'		redirect stdout to file
	-	'2> file-name'		redirect stderr to a file
	-	'&> file-name'		redirect stdout and stderr to  a file
	-	'2>&1 file-name'	redirect stderr to stdout
	
	
#	Subshell Tricks

-	<(cmd)	returns the output of 'cmd' as a file descriptor

	-	Handy if you want to diff the output of two commands
	-	diff <(cmd-one)<(cmd-two)
	
-	$(cmd)	returns the output text of cmd

	-	Handy if you want to store the command output in a variable
	-	myvar=$(cmd)
	

---

#	Exists Code	
If the command is successfully execute return 0 else another numberic number
	
```bash

└─# host example.com                                                                                                                                     1 ⚙
example.com has address 93.184.216.34
example.com has IPv6 address 2606:2800:220:1:248:1893:25c8:1946
example.com mail is handled by 0 .
                                                                                                                                                             

└─# echo $?                                                                                                                                              1 ⚙
0
                                                                                                                                                                                                                                                                                                                         

└─# if host example.com ; then echo "It's Resolves"; fi                                                                                            130 ⨯ 1 ⚙
example.com has address 93.184.216.34
example.com has IPv6 address 2606:2800:220:1:248:1893:25c8:1946
example.com mail is handled by 0 .
It's Resolves


└─# if host example.com ; then echo "It's Resolves"; else 'Not Resolves'; fi                                                                             1 ⚙
example.com has address 93.184.216.34
example.com has IPv6 address 2606:2800:220:1:248:1893:25c8:1946
example.com mail is handled by 0 .
It's Resolves
                                                                                                                                                             

└─# if host hackerexample.com ; then echo "It's Resolves"; else 'Not Resolves'; fi                                                                       1 ⚙
Host hackerexample.com not found: 3(NXDOMAIN)
Not Resolves: 

                    

```
---
##	Redirect the Stdout and Stderr using &>

```

└─# if host example.com &> /dev/null; then echo "It's Resolves"; else echo 'Not Resolves'; fi                                                            

It's Resolves
                                                                                                                                                             

└─# if host hackerexample.com &> /dev/null; then echo "It's Resolves"; else echo 'Not Resolves'; fi                                                      

Not Resolves
                 

```
---
## 	connects a file to stdin using <
```
└─# while read sub; do echo "$sub.example.com"; done < subdomains.txt                                                                                

admin.example.com
test.example.com
qa.example.com
dev.example.com
www.example.com
n.example.com
forums.example.com
invalid.example.com
blog.example.com
shop.example.com
sports.example.com
news.example.com
mail.example.com
ftp.example.com


```

```
 host -t CNAME invalid.sbtuk.net | grep "an alias" | awk '{print $NF}' 
 
 $NF	-> no of fileds separate by space (last filed)
 
 ─# host -t CNAME invalid.sbtuk.net | grep "an alias" | awk '{print $NF}'                                                                                1 ⚙
lolifyouregisteredthisyouwastedyourmoney.com.
                                                                                                                                                             

└─# host -t CNAME invalid.sbtuk.net | grep "an alias"                                                                                                    1 ⚙
invalid.sbtuk.net is an alias for lolifyouregisteredthisyouwastedyourmoney.com.
                                                                                                                                                             

└─# host -t CNAME invalid.sbtuk.net | grep "an alias" | awk '{print $NF}'                                                                                     1 ⚙
lolifyouregisteredthisyouwastedyourmoney.com.
                                                                                                                                                             

└─# host -t CNAME invalid.sbtuk.net | grep "an alias" | awk '{print $6}'                                                                                      1 ⚙
lolifyouregisteredthisyouwastedyourmoney.com.



# subshell trick commands store in variable

└─# cname=$(host -t CNAME invalid.sbtuk.net | grep "an alias" | awk '{print $6}')                                                                             1 ⚙
                                                                                                                                                             

└─# echo $cname                                                                                                                                          1 ⚙
lolifyouregisteredthisyouwastedyourmoney.com.


```

```

─# cat subdomains.txt| ./brute.sh yahoo.com                                                                                                             1 ⨯
test.yahoo.com
qa.yahoo.com
dev.yahoo.com
www.yahoo.com
forums.yahoo.com
blog.yahoo.com
shop.yahoo.com
sports.yahoo.com
news.yahoo.com
mail.yahoo.com
                                                                                                                                                             

└─# cat subdomains.txt| ./brute.sh yahoo.com | awk '{ print "https://" $1 }' | tee -a urls.txt
https://test.yahoo.com
https://qa.yahoo.com
https://dev.yahoo.com
https://www.yahoo.com
https://forums.yahoo.com
https://blog.yahoo.com
https://shop.yahoo.com
https://sports.yahoo.com
https://news.yahoo.com
https://mail.yahoo.com



```
---

```
└─# echo "https://example.com"                                                                                                                           1 ⚙
https://example.com
                                                                                                                                                             

└─# echo "https://example.com" | sha256sum                                                                                                               1 ⚙
65cdccbca9388a68023519f997367783be69ed42864398cac568e56f65ce0e75  -
                                                                                                                                                             

└─# echo "https://example.com" | sha256sum | awk '{print $2}'                                                                                            1 ⚙
-
                                                                                                                                                             

└─# echo "https://example.com" | sha256sum | awk '{print $1}'                                                                                            1 ⚙
65cdccbca9388a68023519f997367783be69ed42864398cac568e56f65ce0e75


```

---

Get title only
```

└─# grep -oiE '<title>(.*)</title>' *
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:<title>Yahoo News - Latest News &amp; Headlines</title>
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:<title>Yahoo Mail</title>
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:<title>Yahoo</title>
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:<title>Yahoo</title>
443ef5ea1c3e54d8810b6a8a244051638678be96278e10b697c492df3e0ccf08:<title>403 Forbidden</title>
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:<title>Yahoo</title>
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:<title>Yahoo | Mail, Weather, Search, Politics, News, Finance, Sports & Videos</title>
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:<title>Yahoo</title>
                                                                                                   
                                                                                                
                                                                                      
```
Get Server Header

			
```

└─# cat urls.txt| bash fetchServerHeader.sh                             
serverHeaderOut/443ef5ea1c3e54d8810b6a8a244051638678be96278e10b697c492df3e0ccf08 https://test.yahoo.com
serverHeaderOut/b21d1bbffd5b51c36aabe14d777fe376ddf38165b41e4648175e0edf852b7d0c https://qa.yahoo.com
serverHeaderOut/fe683aa17fa50d3fd284e8990867a1e2001c210efe21a679d0125271a1434932 https://dev.yahoo.com
serverHeaderOut/dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0 https://www.yahoo.com
serverHeaderOut/cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc https://forums.yahoo.com
serverHeaderOut/f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324 https://blog.yahoo.com
serverHeaderOut/28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c https://shop.yahoo.com
serverHeaderOut/7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2 https://sports.yahoo.com
serverHeaderOut/1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e https://news.yahoo.com
serverHeaderOut/5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba https://mail.yahoo.com
                                                                                                                                                             

└─# cd serverHeaderOut                     
                                                                                                                                                             


└─# ls     
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e  b21d1bbffd5b51c36aabe14d777fe376ddf38165b41e4648175e0edf852b7d0c
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c  cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc
443ef5ea1c3e54d8810b6a8a244051638678be96278e10b697c492df3e0ccf08  dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba  f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2  fe683aa17fa50d3fd284e8990867a1e2001c210efe21a679d0125271a1434932
                                                                                                                                                             

└─# grep -iE '^< ' *                 
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< HTTP/2 200 
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< referrer-policy: no-referrer-when-downgrade
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< strict-transport-security: max-age=31536000
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< x-content-type-options: nosniff
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< x-frame-options: SAMEORIGIN
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< x-xss-protection: 1; mode=block
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< content-type: text/html; charset=utf-8
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< date: Thu, 10 Feb 2022 12:00:34 GMT
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< x-envoy-upstream-service-time: 112
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< server: ATS
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< content-security-policy: frame-ancestors 'self' https://*.builtbygirls.com https://*.rivals.com https://*.engadget.com https://*.intheknow.com https://*.autoblog.com https://*.techcrunch.com https://*.yahoo.com https://*.aol.com https://*.huffingtonpost.com https://*.oath.com https://*.search.yahoo.com https://*.search.aol.com https://*.search.huffpost.com https://*.onesearch.com https://*.verizonmedia.com https://*.publishing.oath.com https://*.autoblog.com; sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation; report-uri https://csp.yahoo.com/beacon/csp?src=ats&site=news&region=US&lang=en-US&device=desktop&yrid=c9f02mhh09vv9&partner=;
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< cache-control: max-age=0, private
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< expires: -1
1cb9d20cfeb4acb7dec568764e411a94ef462f8bc7d87c7820d3d4fd39b5a57e:< 
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< HTTP/2 200 
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< referrer-policy: origin-when-cross-origin
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< strict-transport-security: max-age=15552000
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< x-frame-options: DENY
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< x-omg-env: norrin-green--istio-production-sg3-86d664b5b7-jgs8w
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< content-type: text/html; charset=utf-8
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< content-length: 12579
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< etag: W/"3123-BGXVEb+h+dAZLjz0XxOdsRCGD48"
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< content-security-policy: child-src blob:;connect-src 'self' https://*.yimg.com https://*.yahoo.com https://s.yimg.com/nq/ads/mb/native/* https://service.cmp.oath.com https://www.yahoo.com/p.gif https://smetrics.att.com/id https://dpm.demdex.net/id https://video-api.yql.yahoo.com/ https://edgecast-vod.yahoo.net/ https://*.vpg.cdn.yimg.com/ https://media.zenfs.com/ https://assets.video.yahoo.net/ https://ads.adaptv.advertising.com/ https://video.adaptv.advertising.com/ https://edgecast-cf-prod.yahoo.net/;default-src 'self';font-src https: data:;frame-src https://*.yahoo.com https://*.yimg.com https://*.ymail.com https://delivery.vidible.tv/ https://secure.bannerfarm.ace.advertising.com https://cmp.advertising.com https://assets.video.yahoo.net/ https://cdn-ssl.vidible.tv/prod/ https://jac.yahoosandbox.com/ https://*.jac.yahoosandbox.com/ https://safeframes-mbst-pub-uw1.s3-us-west-1.amazonaws.com/darla/;img-src data: blob: http: https:;media-src blob: https://*.yahoo.com https://*.yimg.com;report-uri https://csp.yahoo.com/beacon/csp?src=mail-norrin;script-src 'self' https://s.yimg.com/nq/nr/ https://s.yimg.com/os/yaft/ https://s.yimg.com/ss/ https://s.yimg.com/aaq/yc/ https://s.yimg.com/rq/darla/ https://fc.yahoo.com/sdarla/ https://e2e.fc.yahoo.com/sdarla/ https://safeframes-mbst-pub-uw1.s3-us-west-1.amazonaws.com/darla/ https://s.yimg.com/ds/scripts/ https://www.yahoo.com/polyfill.min.js https://yep.video.yahoo.com/js/ https://www.gstatic.com/cv/js/sender/v1/cast_sender.js https://s.yimg.com/aaq/vzm/ https://s.yimg.com/cx/pv/ https://cdn-ssl.vidible.tv/prod/player/js/ https://yep.video.yahoo.com/ https://s.yimg.com/rx/ https://assets.video.yahoo.net/ https://jsapi.login.yahoo.com/w/ https://s.aolcdn.com/membership/omp-static/omp-widgets/ https://qa.checkout.yahoo.com/widget/ https://checkout.yahoo.com/widget/ https://s.yimg.com/cv/apiv2/partner-portals/att/adobe_analytics/ https://consent.cmp.oath.com/ https://s.yimg.com/oa/ https://s.yimg.com/uc/sf/ https://s.yimg.com/cx/acookie/ https://jill.fc.yahoo.com/ https://jac.yahoosandbox.com/ 'sha256-lRMQ2lQozgbWLOqNJOrnclJXX6G77pQVIlF8SAI3++I=' 'unsafe-inline' 'unsafe-eval' 'report-sample' 'nonce-E2Eo04IwcQWQhoYDdlPl3TTlvkNI6qqn1snJMH/fexMfJbRl' ;style-src 'self' https://s.yimg.com/nq/nr/ https://s.yimg.com/rx/ https://assets.video.yahoo.net/ 'unsafe-inline';worker-src 'self' blob:;manifest-src https://s.yimg.com/nq/nr/json/
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< vary: Accept-Encoding
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< date: Thu, 10 Feb 2022 12:07:07 GMT
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< x-envoy-upstream-service-time: 4
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< server: ATS
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< age: 0
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< x-xss-protection: 1; mode=block
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< x-content-type-options: nosniff
5aa47c148595fa0d1ae641d7ae90a4af9a30dba1e2076af4b5effbd7807920ba:< 
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< HTTP/2 200 
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< referrer-policy: no-referrer-when-downgrade
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< strict-transport-security: max-age=15552000
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< x-frame-options: SAMEORIGIN
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< cache-control: private, no-store, no-cache, max-age=0
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< content-type: text/html; charset=utf-8
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< vary: Accept-Encoding
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< set-cookie: B=8fobpc1h09vv6&b=3&s=s1; expires=Thu, 10-Feb-2023 12:07:02 GMT; path=/; domain=.yahoo.com
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< date: Thu, 10 Feb 2022 12:07:03 GMT
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< x-envoy-upstream-service-time: 969
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< server: ATS
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< age: 2
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< content-security-policy: frame-ancestors 'self' https://*.builtbygirls.com https://*.rivals.com https://*.engadget.com https://*.intheknow.com https://*.autoblog.com https://*.techcrunch.com https://*.yahoo.com https://*.aol.com https://*.huffingtonpost.com https://*.oath.com https://*.search.yahoo.com https://*.search.aol.com https://*.search.huffpost.com https://*.onesearch.com https://*.verizonmedia.com https://*.publishing.oath.com https://*.autoblog.com; sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation allow-downloads; report-uri https://csp.yahoo.com/beacon/csp?src=ats&site=sports&region=US&lang=en-US&device=desktop&yrid=e6bi46th09vv6&partner=;
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< x-xss-protection: 1; mode=block
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< x-content-type-options: nosniff
7d9216c923d58853540dcf4ecb5004e1b19a3cc98e3525f2f36634ffcc7177e2:< 
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< HTTP/2 301 
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< date: Thu, 10 Feb 2022 12:07:01 GMT
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< strict-transport-security: max-age=31536000
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< server: ATS
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< cache-control: no-store
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< content-type: text/html
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< content-language: en
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< x-frame-options: DENY
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< x-content-type-options: nosniff
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< referrer-policy: strict-origin-when-cross-origin
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< content-security-policy: sandbox allow-scripts; default-src 'self'; img-src https:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; report-uri http://csp.yahoo.com/beacon/csp?src=redirect
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< location: https://shopping.yahoo.com/
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< content-length: 4374
28c6ed28968d6e2fc5e0304f7e1f558b56764f313b31a2bac6d5f867d82da68c:< 
443ef5ea1c3e54d8810b6a8a244051638678be96278e10b697c492df3e0ccf08:< HTTP/2 403 
443ef5ea1c3e54d8810b6a8a244051638678be96278e10b697c492df3e0ccf08:< server: cloudflare
443ef5ea1c3e54d8810b6a8a244051638678be96278e10b697c492df3e0ccf08:< date: Thu, 10 Feb 2022 12:06:57 GMT
443ef5ea1c3e54d8810b6a8a244051638678be96278e10b697c492df3e0ccf08:< content-type: text/html
443ef5ea1c3e54d8810b6a8a244051638678be96278e10b697c492df3e0ccf08:< content-length: 151
443ef5ea1c3e54d8810b6a8a244051638678be96278e10b697c492df3e0ccf08:< cf-ray: 6db536e298833187-BOM
443ef5ea1c3e54d8810b6a8a244051638678be96278e10b697c492df3e0ccf08:< 
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< HTTP/2 301 
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< date: Thu, 10 Feb 2022 12:07:01 GMT
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< strict-transport-security: max-age=31536000
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< server: ATS
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< cache-control: no-store
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< content-type: text/html
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< content-language: en
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< x-frame-options: DENY
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< x-content-type-options: nosniff
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< referrer-policy: strict-origin-when-cross-origin
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< content-security-policy: sandbox allow-scripts; default-src 'self'; img-src https:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; report-uri http://csp.yahoo.com/beacon/csp?src=redirect
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< location: https://www.yahoo.com/
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< content-length: 4376
cea9bb18196f6e089d8471524684c8b92d4ad87fd40e567c77ca90d9f86e00dc:< 
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< HTTP/2 200 
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< date: Thu, 10 Feb 2022 12:06:58 GMT
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< p3p: policyref="https://policies.yahoo.com/w3c/p3p.xml", CP="CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV"
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< cache-control: no-store, no-cache, max-age=0, private
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< strict-transport-security: max-age=31536000
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< accept-ch: device-memory, dpr, width, viewport-width, rtt, downlink, ect
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< accept-ch-lifetime: 604800
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< x-frame-options: SAMEORIGIN
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< set-cookie: autorf=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/; domain=www.yahoo.com
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< x-xss-protection: 1; mode=block
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< content-security-policy: sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation; report-uri https://csp.yahoo.com/beacon/csp?src=frontpage&site=fp&region=US&lang=en-US&device=desktop&partner=default;
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< x-content-type-options: nosniff
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< content-type: text/html; charset=UTF-8
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< x-envoy-upstream-service-time: 11
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< server: ATS
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< age: 2
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< expires: -1
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< referrer-policy: no-referrer-when-downgrade
dcebc122cd08ca34ea3ab0455de7d8b1ff8bf308faa33b9a9ff3b5fec4cdc2d0:< 
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< HTTP/2 301 
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< date: Thu, 10 Feb 2022 12:07:01 GMT
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< strict-transport-security: max-age=31536000
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< server: ATS
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< cache-control: no-store
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< content-type: text/html
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< content-language: en
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< x-frame-options: DENY
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< x-content-type-options: nosniff
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< referrer-policy: strict-origin-when-cross-origin
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< content-security-policy: sandbox allow-scripts; default-src 'self'; img-src https:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; report-uri http://csp.yahoo.com/beacon/csp?src=redirect
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< location: https://yahoo.tumblr.com/
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< content-length: 4374
f176a9aeb0bf7ff5e1b9387300d5c2a9c11d2f14dc0fe34b37a90495f39d1324:< 
                                                                                                                                                             

# h for ignore filename


└─# grep -ihE '^< ' *
< HTTP/2 200 
< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
< referrer-policy: no-referrer-when-downgrade
< strict-transport-security: max-age=31536000
< x-content-type-options: nosniff
< x-frame-options: SAMEORIGIN
< x-xss-protection: 1; mode=block
< content-type: text/html; charset=utf-8
< date: Thu, 10 Feb 2022 12:00:34 GMT
< x-envoy-upstream-service-time: 112
< server: ATS
< content-security-policy: frame-ancestors 'self' https://*.builtbygirls.com https://*.rivals.com https://*.engadget.com https://*.intheknow.com https://*.autoblog.com https://*.techcrunch.com https://*.yahoo.com https://*.aol.com https://*.huffingtonpost.com https://*.oath.com https://*.search.yahoo.com https://*.search.aol.com https://*.search.huffpost.com https://*.onesearch.com https://*.verizonmedia.com https://*.publishing.oath.com https://*.autoblog.com; sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation; report-uri https://csp.yahoo.com/beacon/csp?src=ats&site=news&region=US&lang=en-US&device=desktop&yrid=c9f02mhh09vv9&partner=;
< cache-control: max-age=0, private
< expires: -1
< 
< HTTP/2 200 
< referrer-policy: origin-when-cross-origin
< strict-transport-security: max-age=15552000
< x-frame-options: DENY
< x-omg-env: norrin-green--istio-production-sg3-86d664b5b7-jgs8w
< content-type: text/html; charset=utf-8
< content-length: 12579
< etag: W/"3123-BGXVEb+h+dAZLjz0XxOdsRCGD48"
< content-security-policy: child-src blob:;connect-src 'self' https://*.yimg.com https://*.yahoo.com https://s.yimg.com/nq/ads/mb/native/* https://service.cmp.oath.com https://www.yahoo.com/p.gif https://smetrics.att.com/id https://dpm.demdex.net/id https://video-api.yql.yahoo.com/ https://edgecast-vod.yahoo.net/ https://*.vpg.cdn.yimg.com/ https://media.zenfs.com/ https://assets.video.yahoo.net/ https://ads.adaptv.advertising.com/ https://video.adaptv.advertising.com/ https://edgecast-cf-prod.yahoo.net/;default-src 'self';font-src https: data:;frame-src https://*.yahoo.com https://*.yimg.com https://*.ymail.com https://delivery.vidible.tv/ https://secure.bannerfarm.ace.advertising.com https://cmp.advertising.com https://assets.video.yahoo.net/ https://cdn-ssl.vidible.tv/prod/ https://jac.yahoosandbox.com/ https://*.jac.yahoosandbox.com/ https://safeframes-mbst-pub-uw1.s3-us-west-1.amazonaws.com/darla/;img-src data: blob: http: https:;media-src blob: https://*.yahoo.com https://*.yimg.com;report-uri https://csp.yahoo.com/beacon/csp?src=mail-norrin;script-src 'self' https://s.yimg.com/nq/nr/ https://s.yimg.com/os/yaft/ https://s.yimg.com/ss/ https://s.yimg.com/aaq/yc/ https://s.yimg.com/rq/darla/ https://fc.yahoo.com/sdarla/ https://e2e.fc.yahoo.com/sdarla/ https://safeframes-mbst-pub-uw1.s3-us-west-1.amazonaws.com/darla/ https://s.yimg.com/ds/scripts/ https://www.yahoo.com/polyfill.min.js https://yep.video.yahoo.com/js/ https://www.gstatic.com/cv/js/sender/v1/cast_sender.js https://s.yimg.com/aaq/vzm/ https://s.yimg.com/cx/pv/ https://cdn-ssl.vidible.tv/prod/player/js/ https://yep.video.yahoo.com/ https://s.yimg.com/rx/ https://assets.video.yahoo.net/ https://jsapi.login.yahoo.com/w/ https://s.aolcdn.com/membership/omp-static/omp-widgets/ https://qa.checkout.yahoo.com/widget/ https://checkout.yahoo.com/widget/ https://s.yimg.com/cv/apiv2/partner-portals/att/adobe_analytics/ https://consent.cmp.oath.com/ https://s.yimg.com/oa/ https://s.yimg.com/uc/sf/ https://s.yimg.com/cx/acookie/ https://jill.fc.yahoo.com/ https://jac.yahoosandbox.com/ 'sha256-lRMQ2lQozgbWLOqNJOrnclJXX6G77pQVIlF8SAI3++I=' 'unsafe-inline' 'unsafe-eval' 'report-sample' 'nonce-E2Eo04IwcQWQhoYDdlPl3TTlvkNI6qqn1snJMH/fexMfJbRl' ;style-src 'self' https://s.yimg.com/nq/nr/ https://s.yimg.com/rx/ https://assets.video.yahoo.net/ 'unsafe-inline';worker-src 'self' blob:;manifest-src https://s.yimg.com/nq/nr/json/
< vary: Accept-Encoding
< date: Thu, 10 Feb 2022 12:07:07 GMT
< x-envoy-upstream-service-time: 4
< server: ATS
< age: 0
< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
< x-xss-protection: 1; mode=block
< x-content-type-options: nosniff
< 
< HTTP/2 200 
< referrer-policy: no-referrer-when-downgrade
< strict-transport-security: max-age=15552000
< x-frame-options: SAMEORIGIN
< cache-control: private, no-store, no-cache, max-age=0
< content-type: text/html; charset=utf-8
< vary: Accept-Encoding
< set-cookie: B=8fobpc1h09vv6&b=3&s=s1; expires=Thu, 10-Feb-2023 12:07:02 GMT; path=/; domain=.yahoo.com
< date: Thu, 10 Feb 2022 12:07:03 GMT
< x-envoy-upstream-service-time: 969
< server: ATS
< age: 2
< content-security-policy: frame-ancestors 'self' https://*.builtbygirls.com https://*.rivals.com https://*.engadget.com https://*.intheknow.com https://*.autoblog.com https://*.techcrunch.com https://*.yahoo.com https://*.aol.com https://*.huffingtonpost.com https://*.oath.com https://*.search.yahoo.com https://*.search.aol.com https://*.search.huffpost.com https://*.onesearch.com https://*.verizonmedia.com https://*.publishing.oath.com https://*.autoblog.com; sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation allow-downloads; report-uri https://csp.yahoo.com/beacon/csp?src=ats&site=sports&region=US&lang=en-US&device=desktop&yrid=e6bi46th09vv6&partner=;
< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
< x-xss-protection: 1; mode=block
< x-content-type-options: nosniff
< 
< HTTP/2 301 
< date: Thu, 10 Feb 2022 12:07:01 GMT
< strict-transport-security: max-age=31536000
< server: ATS
< cache-control: no-store
< content-type: text/html
< content-language: en
< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
< x-frame-options: DENY
< x-content-type-options: nosniff
< referrer-policy: strict-origin-when-cross-origin
< content-security-policy: sandbox allow-scripts; default-src 'self'; img-src https:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; report-uri http://csp.yahoo.com/beacon/csp?src=redirect
< location: https://shopping.yahoo.com/
< content-length: 4374
< 
< HTTP/2 403 
< server: cloudflare
< date: Thu, 10 Feb 2022 12:06:57 GMT
< content-type: text/html
< content-length: 151
< cf-ray: 6db536e298833187-BOM
< 
< HTTP/2 301 
< date: Thu, 10 Feb 2022 12:07:01 GMT
< strict-transport-security: max-age=31536000
< server: ATS
< cache-control: no-store
< content-type: text/html
< content-language: en
< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
< x-frame-options: DENY
< x-content-type-options: nosniff
< referrer-policy: strict-origin-when-cross-origin
< content-security-policy: sandbox allow-scripts; default-src 'self'; img-src https:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; report-uri http://csp.yahoo.com/beacon/csp?src=redirect
< location: https://www.yahoo.com/
< content-length: 4376
< 
< HTTP/2 200 
< date: Thu, 10 Feb 2022 12:06:58 GMT
< p3p: policyref="https://policies.yahoo.com/w3c/p3p.xml", CP="CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV"
< cache-control: no-store, no-cache, max-age=0, private
< strict-transport-security: max-age=31536000
< accept-ch: device-memory, dpr, width, viewport-width, rtt, downlink, ect
< accept-ch-lifetime: 604800
< x-frame-options: SAMEORIGIN
< set-cookie: autorf=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/; domain=www.yahoo.com
< x-xss-protection: 1; mode=block
< content-security-policy: sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation; report-uri https://csp.yahoo.com/beacon/csp?src=frontpage&site=fp&region=US&lang=en-US&device=desktop&partner=default;
< x-content-type-options: nosniff
< content-type: text/html; charset=UTF-8
< x-envoy-upstream-service-time: 11
< server: ATS
< age: 2
< expires: -1
< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
< referrer-policy: no-referrer-when-downgrade
< 
< HTTP/2 301 
< date: Thu, 10 Feb 2022 12:07:01 GMT
< strict-transport-security: max-age=31536000
< server: ATS
< cache-control: no-store
< content-type: text/html
< content-language: en
< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
< x-frame-options: DENY
< x-content-type-options: nosniff
< referrer-policy: strict-origin-when-cross-origin
< content-security-policy: sandbox allow-scripts; default-src 'self'; img-src https:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; report-uri http://csp.yahoo.com/beacon/csp?src=redirect
< location: https://yahoo.tumblr.com/
< content-length: 4374
< 
                                                                                                                                                             
#	Remove Duplicates


└─# grep -ihE '^< ' * | sort -u
< 
< accept-ch: device-memory, dpr, width, viewport-width, rtt, downlink, ect
< accept-ch-lifetime: 604800
< age: 0
< age: 2
< cache-control: max-age=0, private
< cache-control: no-store
< cache-control: no-store, no-cache, max-age=0, private
< cache-control: private, no-store, no-cache, max-age=0
< cf-ray: 6db536e298833187-BOM
< content-language: en
< content-length: 12579
< content-length: 151
< content-length: 4374
< content-length: 4376
< content-security-policy: child-src blob:;connect-src 'self' https://*.yimg.com https://*.yahoo.com https://s.yimg.com/nq/ads/mb/native/* https://service.cmp.oath.com https://www.yahoo.com/p.gif https://smetrics.att.com/id https://dpm.demdex.net/id https://video-api.yql.yahoo.com/ https://edgecast-vod.yahoo.net/ https://*.vpg.cdn.yimg.com/ https://media.zenfs.com/ https://assets.video.yahoo.net/ https://ads.adaptv.advertising.com/ https://video.adaptv.advertising.com/ https://edgecast-cf-prod.yahoo.net/;default-src 'self';font-src https: data:;frame-src https://*.yahoo.com https://*.yimg.com https://*.ymail.com https://delivery.vidible.tv/ https://secure.bannerfarm.ace.advertising.com https://cmp.advertising.com https://assets.video.yahoo.net/ https://cdn-ssl.vidible.tv/prod/ https://jac.yahoosandbox.com/ https://*.jac.yahoosandbox.com/ https://safeframes-mbst-pub-uw1.s3-us-west-1.amazonaws.com/darla/;img-src data: blob: http: https:;media-src blob: https://*.yahoo.com https://*.yimg.com;report-uri https://csp.yahoo.com/beacon/csp?src=mail-norrin;script-src 'self' https://s.yimg.com/nq/nr/ https://s.yimg.com/os/yaft/ https://s.yimg.com/ss/ https://s.yimg.com/aaq/yc/ https://s.yimg.com/rq/darla/ https://fc.yahoo.com/sdarla/ https://e2e.fc.yahoo.com/sdarla/ https://safeframes-mbst-pub-uw1.s3-us-west-1.amazonaws.com/darla/ https://s.yimg.com/ds/scripts/ https://www.yahoo.com/polyfill.min.js https://yep.video.yahoo.com/js/ https://www.gstatic.com/cv/js/sender/v1/cast_sender.js https://s.yimg.com/aaq/vzm/ https://s.yimg.com/cx/pv/ https://cdn-ssl.vidible.tv/prod/player/js/ https://yep.video.yahoo.com/ https://s.yimg.com/rx/ https://assets.video.yahoo.net/ https://jsapi.login.yahoo.com/w/ https://s.aolcdn.com/membership/omp-static/omp-widgets/ https://qa.checkout.yahoo.com/widget/ https://checkout.yahoo.com/widget/ https://s.yimg.com/cv/apiv2/partner-portals/att/adobe_analytics/ https://consent.cmp.oath.com/ https://s.yimg.com/oa/ https://s.yimg.com/uc/sf/ https://s.yimg.com/cx/acookie/ https://jill.fc.yahoo.com/ https://jac.yahoosandbox.com/ 'sha256-lRMQ2lQozgbWLOqNJOrnclJXX6G77pQVIlF8SAI3++I=' 'unsafe-inline' 'unsafe-eval' 'report-sample' 'nonce-E2Eo04IwcQWQhoYDdlPl3TTlvkNI6qqn1snJMH/fexMfJbRl' ;style-src 'self' https://s.yimg.com/nq/nr/ https://s.yimg.com/rx/ https://assets.video.yahoo.net/ 'unsafe-inline';worker-src 'self' blob:;manifest-src https://s.yimg.com/nq/nr/json/
< content-security-policy: frame-ancestors 'self' https://*.builtbygirls.com https://*.rivals.com https://*.engadget.com https://*.intheknow.com https://*.autoblog.com https://*.techcrunch.com https://*.yahoo.com https://*.aol.com https://*.huffingtonpost.com https://*.oath.com https://*.search.yahoo.com https://*.search.aol.com https://*.search.huffpost.com https://*.onesearch.com https://*.verizonmedia.com https://*.publishing.oath.com https://*.autoblog.com; sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation allow-downloads; report-uri https://csp.yahoo.com/beacon/csp?src=ats&site=sports&region=US&lang=en-US&device=desktop&yrid=e6bi46th09vv6&partner=;
< content-security-policy: frame-ancestors 'self' https://*.builtbygirls.com https://*.rivals.com https://*.engadget.com https://*.intheknow.com https://*.autoblog.com https://*.techcrunch.com https://*.yahoo.com https://*.aol.com https://*.huffingtonpost.com https://*.oath.com https://*.search.yahoo.com https://*.search.aol.com https://*.search.huffpost.com https://*.onesearch.com https://*.verizonmedia.com https://*.publishing.oath.com https://*.autoblog.com; sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation; report-uri https://csp.yahoo.com/beacon/csp?src=ats&site=news&region=US&lang=en-US&device=desktop&yrid=c9f02mhh09vv9&partner=;
< content-security-policy: sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation; report-uri https://csp.yahoo.com/beacon/csp?src=frontpage&site=fp&region=US&lang=en-US&device=desktop&partner=default;
< content-security-policy: sandbox allow-scripts; default-src 'self'; img-src https:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; report-uri http://csp.yahoo.com/beacon/csp?src=redirect
< content-type: text/html
< content-type: text/html; charset=utf-8
< content-type: text/html; charset=UTF-8
< date: Thu, 10 Feb 2022 12:00:34 GMT
< date: Thu, 10 Feb 2022 12:06:57 GMT
< date: Thu, 10 Feb 2022 12:06:58 GMT
< date: Thu, 10 Feb 2022 12:07:01 GMT
< date: Thu, 10 Feb 2022 12:07:03 GMT
< date: Thu, 10 Feb 2022 12:07:07 GMT
< etag: W/"3123-BGXVEb+h+dAZLjz0XxOdsRCGD48"
< expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only"
< expires: -1
< HTTP/2 200 
< HTTP/2 301 
< HTTP/2 403 
< location: https://shopping.yahoo.com/
< location: https://www.yahoo.com/
< location: https://yahoo.tumblr.com/
< p3p: policyref="https://policies.yahoo.com/w3c/p3p.xml", CP="CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV"
< referrer-policy: no-referrer-when-downgrade
< referrer-policy: origin-when-cross-origin
< referrer-policy: strict-origin-when-cross-origin
< server: ATS
< server: cloudflare
< set-cookie: autorf=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/; domain=www.yahoo.com
< set-cookie: B=8fobpc1h09vv6&b=3&s=s1; expires=Thu, 10-Feb-2023 12:07:02 GMT; path=/; domain=.yahoo.com
< strict-transport-security: max-age=15552000
< strict-transport-security: max-age=31536000
< vary: Accept-Encoding
< x-content-type-options: nosniff
< x-envoy-upstream-service-time: 11
< x-envoy-upstream-service-time: 112
< x-envoy-upstream-service-time: 4
< x-envoy-upstream-service-time: 969
< x-frame-options: DENY
< x-frame-options: SAMEORIGIN
< x-omg-env: norrin-green--istio-production-sg3-86d664b5b7-jgs8w
< x-xss-protection: 1; mode=block
                                     
```

# Speeding Things Up

-	Pipe give you some parallelisation for free

	-	 It's not enough though , is it ?
	
-	xargs can run things in parallel.


-	Let's speed up our subdomin  brute-forcer

```
 cat subdomains.txt| awk '{print $1 ".sbtuk.net"}' | xargs -n1 -P10 ./fastBrute.sh
 
 -n1 is denoted take 1 by 1 files at a time and -P10 run 10 parallel processor
```


			


















