# Check if the files/directory is exists or not

#! Directory
if [ -d  /d/videoTutorialFiles/2022/Bash-Scripting/HackerSploit/directory ];
then
    echo "Folder is found"
else
    echo "Folder is not found"
fi

#! Files
if [ -f  /d/videoTutorialFiles/2022/Bash-Scripting/HackerSploit/wordlist.txt ];
then
    echo "File is found"
else
    echo "File is not found"
fi


#! Files inside the directory
if [ -e  /d/videoTutorialFiles/2022/Bash-Scripting/HackerSploit/directory/test-1.txt ];
then
    echo "File is found"
else
    echo "File is not found"
fi

#! Create folder
if [ -e  /d/videoTutorialFiles/2022/Bash-Scripting/HackerSploit/directory/test-2.txt ];
then
    echo "File is found"
else
    touch /d/videoTutorialFiles/2022/Bash-Scripting/HackerSploit/directory/test-2.txt
    echo "File Created"
fi