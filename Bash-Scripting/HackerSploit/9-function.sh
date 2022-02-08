#!/bin/bash

# Way 1

#function functionName(){
#	code

#}



# Way 2 without function keyword

#function1(){
#code
#}



test_shadow(){
	
	if [ -e /etc/shadow ];
	then
		echo "Yes shadow file exists"
	else
		echo "The file does not exists"
	fi
}

test_shadow


test_passwd(){
	
	if [ -e /etc/passwd ];
	then
		echo "Yes passwd file exists"
	else
		echo "The file does not exists"
	fi
}

test_passwd




# Function called inside the function



test_shadow(){
	
	if [ -e /etc/shadow ];
	then
		echo "Yes shadow file exists"
	else
		echo "The file does not exists"
	fi

}




test_passwd(){
	
	if [ -e /etc/passwd ];
	then
		echo "Yes passwd file exists"
	else
		echo "The file does not exists"
	fi

	# Another function call
	test_shadow
}


test_passwd







