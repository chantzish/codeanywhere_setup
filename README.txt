# codeanywhere_setup

# ssh keys setup
sudo apt-get update
sudo apt-get install putty-tools
puttygen ../.ssh/id_rsa -o id_rsa.ppk
# refresh the file explorer and download the keys

# heroku setup
sudo apt-get install software-properties-common
sudo add-apt-repository "deb https://cli-assets.heroku.com/branches/stable/apt ./"
curl -L https://cli-assets.heroku.com/apt/release.key | sudo apt-key add -
sudo apt-get update
sudo apt-get install heroku

# MongoDB setup
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt-get update
sudo apt-get install mongodb-org
sudo service mongod start
# verify line: [initandlisten] waiting for connections on port 27017
cat /var/log/mongodb/mongod.log

# Node.js install
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install nodejs

# clean cache
sudo apt-get clean
