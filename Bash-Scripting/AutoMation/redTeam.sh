
$domain = $1

amass intel -whois -d $domain

subfinder -d $domain

dirsearch http://$domain

# gitHub recon using githound

subfinder -d $domain | httpx -silent | githound

# givesecrets.sh

subfinder -d $domain -silent | httpx -silent | xargs -I %% bash -c 'python3 /root/Tools/SecretFinder/SecretFinder.py -i %% -e -o cli'

# osmedeus OUTPUT file LOCATION
python3 osmedeus.py -m "subdomain , vuln , git , ip , portscan" -T inti
# OUTPUT file LOCATION .osmedeus/workspaces/$domain/subdomain

# WORDPRESS wp-json/wp/v2/users/


# NUCLEI
# nuclear.sh
# Usage ./nuclear.sh domain outputFolder
#! /bin/bash
subfinder -d $1 -silent | httpx -silent | nuclei -t /root/Tools/nuclei-templates -o $2




# ALIAS

export GOPATH=$HOME/go
PATH=$GOPATH/bin:$PATH
export GOROOT=/home/nisha/.go
export GOPATH=/home/nisha/go
export PATH=$PATH:$GOROOT/bin/:$GOPATH/bin
alias osmedeus='/root/Tools/Osmedeus/osmedeus.py -m "subdomain,portscan,vuln,git,burp,ip" -t'
alias dirsearch='/root/Tools/dirsearch/dirsearch.py -e php,asp,js,aspx,jsp,py,txt,conf,config,bak,backup,swp,old,db,sql -t 300 -u'
alias ffuf=/root/go/bin/ffuf
alias antiburl=/root/go/bin/anti-burl
alias kxss=/root/Tools/hacks/kxss/kxss
alias gittrees=/root/Tools/hacks/gittrees/gittrees
alias hakrawler=/root/go/bin/hakrawler
alias hakrevdns=/root/go/bin/hakrevdns
alias hakcheckurl=/root/go/bin/hakcheckurl
alias githound=/root/Tools/git-hound/git-hound
alias httpx=/root/go/bin/httpx
export GOPATH=$HOME/go
PATH=$GOPATH/bin:$PATH
alias resolver=/root/ownTools/200_resolve.sh
alias subunique=/root/ownTools/unique_lister.sh
export PATH=$PATH:[/usr/bin/geckodriver]
source $GOPATH/src/github.com/tomnomnom/gf/gf-completion.bash
alias gau=/root/go/bin/gau
alias secretfinder=' python3 /root/Tools/SecretFinder/SecretFinder.py'
alias qsreplace=/root/go/bin/qsreplace
alias nuclei=/root/go/bin/nuclei
alias nuclear=/root/ownTools/nuclear.sh
alias givesecrets=/root/ownTools/givesecrets.sh

# 200_resolver.sh
cat $1 | httpx -follow-redirects -status-code -vhost -threads 100 | sort -u | grep "[200]" | cut -d [ -f1 | uniq | tee $2

# Chcek new Subdomains added 24hrs once

while :
do
domain=$1
url="https://chaos-data.projectdiscovery.io/"$domain
wget $url
# $1 chaos url

domains(){
    mkdir subdomains
    unzip -o $1 -d /root/$domain/subdomains
    rm -r $domain
}
domains

cat /root/subdomains/*.mil > subdomain_list.txt
cat subdomain_list.txt | anew baseline_subdomains.txt > added-subdomains.txt
sleep 1m

cat added-subdomains.txt | notify --silent

sleep 24h
done


# XSS automation
cat subdomain.txt | Gxss -p surya | dalfox pipe --mining-dict /root/Desktop/Arjun/arjun/db/params.txt --skip-bav

# RAUTON TOOL

rauton -wild $1
# Staring scan on $1 in wildcard Mode
# Subdomain Recon

# R3CONizer Tools

ffuf -c -w /home/nisha/Desktop/critical_files.txt -u https://api.lyst.com/FUZZ

# SUBDOMAIN Take over
# Using subzy

subzy -target <subdomain>

# BHEEM Tools
