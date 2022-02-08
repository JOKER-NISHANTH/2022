#! /bin/bash

echo " This is simple file encrypter and decrpyter "
echo "Please choose what you went to do "

choice="Encrpyt Decrypt"

select option in $choice;
do
	if [ $REPLY = 1 ];
	then
		echo "You have selected Encrpytion"
		echo "Please enter the file name : "
		read efile;
		gpg -c $efile
		#rm -f $efile
		echo "The file has been encrypted"

	else
		echo "You have selected Encrpytion"
		echo "Please enter the file name "
		read dfile
		gpg -d $dfile
		echo "The file has been decrypted"
	fi
	
done


