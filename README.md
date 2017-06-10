# SWD-BITS Goa

The main repo for the development of the SWD website of BITS Goa.

## Setting up

- Fork and Clone the repo.
- Make sure you have [Vagrant](https://www.vagrantup.com/) installed.
- Move into the cloned repo and `vagrant up` to start the VM.
- `vagrant ssh` to ssh into the VM.
- `yarn start` once the VM is up and running, to start the server. (make sure you are in `/home/vagrant/swd/` folder)

The repo is synced in guest VM (using `rsync`). Use `vagrant reload` or `vagrant rsync-auto` to be in sync between host and guest.

---
Made with ♥ by [OSDLabs](https://github.com/OSDLabs)
