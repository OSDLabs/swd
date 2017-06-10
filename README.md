# SWD-BITS Goa

The main repo for the development of the SWD website of BITS Goa.

## Setting up

- Fork and Clone the repo.
- Make sure you have [Vagrant](https://www.vagrantup.com/) installed.
- Move into the cloned repo and `vagrant up` to start the VM.
- `vagrant ssh` to ssh into the VM.
- `yarn start` once the VM is up and running, to start the server. (make sure you are in `/home/vagrant/swd/` folder)
- If you encounter this error: `throw new Error('Please install sqlite3 package manually');`, install it using `npm install sqlite3`. This is an unwanted dependency, and will be weeded out in future.

---
Made with ♥ by [OSDLabs](https://github.com/OSDLabs)
