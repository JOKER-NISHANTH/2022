#!/bin/bash

domain=$1;
domain_enum(){
    mkdir -p $domain $domain/subdomains $domain/intel $domain/intel/nuclei
    sublist3r -d $domain -o $domain/subdomains/sublist3r.txt
    subfinder -d $domain -v -o $domain/subdomains/subfinder.txt
    assentfinder -subs-only $domain -v | tee $domain/subdomains/assentfinder.txt

    cat $domain/subdomains/*.txt > $domain/subdomains/all.txt
    mv $domain/subdomains/all.txt /home/nisha/Desktop/

    sort /home/nisha/Desktop/all.txt | uniq -u /home/nisha/Desktop/all.txt > output.txt
    cat /home/nisha/Desktop/output.txt | sed "s/www.//" > removeWWW.txt
    sort /home/nisha/Desktop/removeWWW.txt | uniq > domains.txt

    mv /home/nisha/Desktop/domains.txt $domain/subdomains
    rm /home/nisha/Desktop/all.txt output.txt removeWWW.txt
}
domain_enum

httpscan(){
    httpx -l /home/nisha/Desktop/$domain/subdomains/domains.txt -o httpx.txt
    mv /home/nisha/Desktop/httpx.txt $domain/intel
}
httpscan

scanner(){
    cat $domain/intel/httpx.txt | nuclei -t /home/nisha/nuclei-templates/ -o $domain/intel/nuclei/httpxintel.txt
}
scanner

fuzz(){
    ffuf -u https://$domain/FUZZ -recursion -s -w /home/nisha/Desktop/wordlist/ -o $domain/intel/fuzzed.json
}
fuzz

# https://www.daehee.com/oneforall/
oneforalltakeover(){
    cp $domain/intel/httpx.txt /home/nisha/Desktop/OneForAll/
    python3 /home/nisha/Desktop/OneForAll/oneforall.py --targets /home/nisha/Desktop/OneForAll/httpx.txt --takeover True run
    mv /home/nisha/Desktop/OneForAll/results/*.csv $domain/intel/
}
oneforalltakeover

.takeover(){
    ./takeover.sh
}
takeover