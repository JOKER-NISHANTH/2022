
# if [condition];
# then
#     statement
# fi

NAME="Nisha"

# if [ "$NAME" = "Nisha" ];
# then
#     echo "Welcome $NAME"
# fi


# if [condition];
# then
#     statement
# else
#     statement
# fi

read -p "Please enter your user name : " NAME

if [ "$NAME" = "Nisha" ];

then

    echo "Welcome $NAME"

else

    echo "Unkown name"

fi
