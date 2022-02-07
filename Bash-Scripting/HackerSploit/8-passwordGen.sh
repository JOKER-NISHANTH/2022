# OPENSSL

# Simple password generator
echo "Simple password generator"
read -p "Enter the length of the password : " LEN


# base64 have 48 char
# Generator 1 password
for p in $(seq 1 );
do
    openssl rand -base64 48 | cut -c1-$LEN
done
# Generator 5 passwords
for p in $(seq 1 5);
do
    openssl rand -base64 48 | cut -c1-$LEN
done