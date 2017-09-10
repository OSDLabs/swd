# SWD-BITS Goa

[![Build Status](https://travis-ci.org/OSDLabs/swd.svg?branch=master)](https://travis-ci.org/OSDLabs/swd) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/325e841aac3d435aa637538f975af7d1)](https://www.codacy.com/app/SebastinSanty/swd?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=OSDLabs/swd&amp;utm_campaign=Badge_Grade) [![Code Climate](https://codeclimate.com/github/OSDLabs/swd/badges/gpa.svg)](https://codeclimate.com/github/OSDLabs/swd) [![Coverage Status](https://coveralls.io/repos/github/OSDLabs/swd/badge.svg?branch=master)](https://coveralls.io/github/OSDLabs/swd?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/osdlabs/swd/badge.svg)](https://snyk.io/test/github/osdlabs/swd)

The main repository for the development of SWD website of BITS Goa.

## Setting up

- Fork and Clone the repo.
- Make sure you have [Vagrant](https://www.vagrantup.com/) installed.
- Move into the cloned repo and `vagrant up` to start the VM.
- `vagrant ssh` to ssh into the VM.
- `yarn start` once the VM is up and running, to start the server. (make sure you are in `/home/vagrant/swd/` folder)
- If you encounter this error: `throw new Error('Please install sqlite3 package manually');`, install it using `npm install sqlite3`. This is an unwanted dependency, and will be weeded out in future.

---
Made with ♥ by [OSDLabs](https://github.com/OSDLabs)
