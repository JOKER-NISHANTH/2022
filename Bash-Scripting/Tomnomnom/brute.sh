#!/usr/bin/bash


<<Here
domain=$1
while read sub; do 


	if host $sub.$domain &>/dev/null ; then	
		echo "$sub.$domain"; 
	else
		echo "Not resolved"
	fi
	
	
done < subdomains.txt 
Here


#--------------------------------------------------------

# cat sub-wordlist | ./brute.sh <domain>
# ./brute.sh <domain> sub-wordlist

domain=$1
#wordlist=$2
while read sub; do 


	if host $sub.$domain &>/dev/null ; then	
		echo "$sub.$domain"; 
	fi
	
done	
#done < $wordlist


