#	Underscore variable,touch file , use underscore variable to append  it

UND_VAR="Hello Nishanth"

touch textFiles/appendVariable.txt
echo "$UND_VAR" >> textFiles/appendVariable.txt
cat textFiles/appendVariable.txt
