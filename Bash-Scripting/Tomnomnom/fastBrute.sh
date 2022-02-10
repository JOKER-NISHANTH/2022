#!/usr/bin/bash

domain=$1


while read subdomain ; do

	echo "$subdomain.$domain"
	
done |  xargs -n1 -P10 ./sub.sh

