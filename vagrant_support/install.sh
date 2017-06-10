#!/bin/sh

echo "PS1='\[\e[0;31m\]\u\[\e[m\] \[\e[1;34m\]\w\[\e[m\] \$ '" >> /home/vagrant/.bashrc

echo "cd /home/vagrant/swd" >>  /home/vagrant/.bashrc
source /home/vagrant/.bashrc

cd /home/vagrant/swd
