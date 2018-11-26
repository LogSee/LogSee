#bin/bash
# This script installs the client software with default settings
# Please update your config.json with your values before you start the software.

echo "##########################################################"
echo "##########################################################"
echo "##                                                      ##"
echo "##             Welcome to LogSee Client                 ##"
echo "##   Client will be installed in /opt/LogSee/Client     ##"
echo "##    Please update your config.json after install      ##"
echo "## To start, run systemctl start LogseeClient.service   ##"
echo "##                                                      ##"
echo "##########################################################"
echo "##########################################################"

InstallLog=Install.log
touch $InstallLog 
echo "Installation Started" >> $InstallLog 

#User creation
mkdir -p /opt/LogSee/Client
useradd LogSeeClient -d "/opt/LogSee/Client" -p '$6$brOJVvkwJPWUl$ln8RH9ofa4N6DkrtFr/2rAMgkY53v.nSLm6v.v/P6uJ4qV./agdOp24MipqWpsSrABtlGdmSnsTXRVOYWWLLe1'
adduser LogSeeClient sudo
echo "Added LogSee Client User" >> $InstallLog

#SystemD script install
cp SystemD-Scripts/LogSeeClient.service /lib/systemd/system/LogSeeClient.service
echo "Copied SystemD script over" >> $InstallLog
