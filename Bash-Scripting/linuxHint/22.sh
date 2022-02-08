#	Writing to file in Home directory using $HOME Environment Variable


cd $HOME

pwd

# Override the $HOME Variable

HOME="/home/nisha"
echo "I Like Home Directory" > "$HOME/learn/bashScript/linuxHint/textFiles/create-file-using-HOME.txt"

echo "$HOME/learn/bashScript/linuxHint/textFiles/create-file-using-HOME.txt"
