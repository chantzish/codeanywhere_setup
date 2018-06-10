# codeanywhere_setup
# username cabox

# ssh keys setup
sudo apt-get update
sudo apt-get install putty-tools
puttygen ../.ssh/id_rsa -o id_rsa.ppk
cp ../.ssh/id_rsa .
# refresh the file explorer and download the keys
# for putty use ppk for "auth -private key file for authentication"
# and save signature in "host keys"
# for linux ssh use: ssh -p 15941 cabox@host13.codeanyhost.com -i id_rsa -X

# heroku setup
sudo apt-get install apt-transport-https
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

# open shift install
wget https://mirror.openshift.com/pub/openshift-v3/clients/3.9.14/linux/oc.tar.gz
tar -xzvf oc.tar.gz
rm tar.gz
sudo mv oc /usr/bin/

# enable x11
sudo vim /etc/ssh/sshd_config
# add line X11UseLocalhost no
sudo apt-get install xauth
# restart
sudo apt-get install x11-apps
# install xming with fonts
# check
xeyes

# MongoDb Compass install
wget https://downloads.mongodb.com/compass/mongodb-compass_1.13.1_amd64.deb
sudo apt-get install libsecret-1-0 libgconf-2-4 libgtk2.0-0 libxtst6 libx11-xcb1 libxss1 libnss3 libasound2
sudo dpkg -i mongodb-compass_1.13.1_amd64.deb
# run
DEBUG=* mongodb-compass;
