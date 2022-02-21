#!/bin/bash
domain=$1

subfinder -d $domain -o subfinder.txt

assetfinder -subs-only $domain | tee assetfinder.txt

amass enum -passive -d $domain -o amassPassive.txt -config /path/config.ini
