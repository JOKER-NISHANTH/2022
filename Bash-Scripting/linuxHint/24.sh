#	Create a Symbol Link(Copy) , Write to Linked File , Cat Link file


# ln -s <file-name>  <link-name> ;  -s for saved

touch /home/nisha/learn/bashScript/linuxHint/textFiles/symbolLink-file.txt
echo "Symbol Link" > /home/nisha/learn/bashScript/linuxHint/textFiles/symbolLink-file.txt

ln -s textFiles/symbolLink-file.txt link1

ls textFiles

echo "Coder is Nisha Again , Good to go!" >> /home/nisha/learn/bashScript/linuxHint/textFiles/link1

cat /home/nisha/learn/bashScript/linuxHint/textFiles/link1
