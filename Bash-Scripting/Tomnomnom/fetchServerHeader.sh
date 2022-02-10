#!/usr/bin/bash

mkdir -p serverHeaderOut


# -s silent -k ignore if any error
while read url; do

	filename=$(echo $url | sha256sum | awk '{print $1}')
	filename="serverHeaderOut/$filename"
	echo "$filename $url" | tee -a index
	
		# output the stdin and stderr to file for get server header
	curl -sk -v "$url" &> $filename 

done

