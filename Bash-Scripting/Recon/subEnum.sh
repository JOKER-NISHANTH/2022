#!/bin/bash

domain=$1
worldlist="/root/wordlist/SecList/Discovery/DNS"
resolvers="/root/resolvers.txt"


domain_enum() {

    mkdir -p $domain $domain/sources $domain/Recon

    # Passive Enum Step 1

    subfinder -d $domain -o $domain/sources/subfinder.txt

    assetfinder -subs-only $domain | tee $domain/sources/assetfinder.txt

    amass enum -passive -d $domain -o $domain/sources/amassPassive.txt -config /path/config.ini

    # Active Enum Step 2

    shuffledns -d $domain -w $worldlist -r $resolvers -o $domain/sources/shuffledns.txt


    cat $domain/sources/*.txt > $domain/sources/all.txt


}
domain_enum
# ---------------------------------------------------------------------------------------------------------------------------------------
resolving_domains() {

    #  Resolve Domains Step 3

    shuffledns -d $domain -w $worldlist -list $domain/sources/all.txt  -r $resolvers -o $domain/domains.txt

}
resolving_domains

# ---------------------------------------------------------------------------------------------------------------------------------------
http_prob(){
    # Step 4
    cat $domain/domains.txt | httpx -threads 20 -o $domain/Recon/httpx.txt

}

http_prob

# ---------------------------------------------------------------------------------------------------------------------------------------




# ---------------------------------------------------------------------------------------------------------------------------------------




# ---------------------------------------------------------------------------------------------------------------------------------------