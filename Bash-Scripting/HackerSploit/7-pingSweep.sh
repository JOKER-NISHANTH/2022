# Simple ping sweep script

echo "Please enter the subnet : "
read SUBNET

for ip  in $(seq 1 254);
do
    ping -c 2 $SUBNET.$ip
done