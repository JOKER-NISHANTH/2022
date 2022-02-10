#!/usr/bin/bash



domain=$1
#wordlist=$2
while read sub; do 

	cname=$(host -t CNAME $sub.$domain | grep "an alias" | awk '{print $NF}')          
	

	# -z is denote the o length with means commands is successfully ran
	if [ -z "$cname" ]; then
		continue
	fi


	# length is not zero
	
	if ! host $cname &> /dev/null ; then	
		echo "$cname dit not resolved ($sub.$domain) "; 
	fi
	
done	
#done < $wordlist


