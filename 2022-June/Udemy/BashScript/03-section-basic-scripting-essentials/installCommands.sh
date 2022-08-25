#!/bin/bash

<<start
command=/usr/bin/htop

if [ -f $command ]
	then
		echo "htop is avaiable , let's run it...."
	else
		echo "htop is not avaiable, let's install htop"
		sudo apt update && sudo apt install -y htop
fi

$command

start

command=htop

#Test command does not contain [ ] in if statement
# man test
if command -v $command
	then
		echo "htop is avaiable , let's run it...."
		sleep 1
		$command
	else
		echo "htop is not avaiable, let's install htop"
		sudo apt update && sudo apt install -y $command
fi
