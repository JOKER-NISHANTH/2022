#!/usr/bin/bash

mkdir -p out


# -s silent -k ignore if any error
while read url; do

	filename=$(echo $url | sha256sum | awk '{print $1}')
	filename="out/$filename"
	echo "$filename $url" | tee -a index
	curl -sk "$url" -o $filename &> /dev/null

done

