# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"

  config.vm.provision 'main', type: 'ansible_local' do |ansible|
    ansible.playbook = '/home/vagrant/swd/playbook.yml'
  end

  config.vm.network :forwarded_port, guest: 22, host: 12123, id: 'ssh'

  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "forwarded_port", guest: 3001, host: 3001
  config.vm.network "forwarded_port", guest: 3002, host: 3002

  config.vm.synced_folder ".", "/home/vagrant/swd" , type: "rsync"

  config.vm.provider :virtualbox do |v|
  	v.customize ["modifyvm", :id, "--memory", 1028]
  	v.customize ["modifyvm", :id, "--cpus", 1]
    v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    v.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
  end
  
end
