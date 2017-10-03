# Web Application for SWD BITS Goa

[![Build Status](https://travis-ci.org/OSDLabs/swd.svg?branch=master)](https://travis-ci.org/OSDLabs/swd) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/325e841aac3d435aa637538f975af7d1)](https://www.codacy.com/app/SebastinSanty/swd?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=OSDLabs/swd&amp;utm_campaign=Badge_Grade) [![Code Climate](https://codeclimate.com/github/OSDLabs/swd/badges/gpa.svg)](https://codeclimate.com/github/OSDLabs/swd) [![Coverage Status](https://coveralls.io/repos/github/OSDLabs/swd/badge.svg?branch=master)](https://coveralls.io/github/OSDLabs/swd?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/osdlabs/swd/badge.svg)](https://snyk.io/test/github/osdlabs/swd)

The main repository for the development of SWD web application of BITS Goa.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites
- [Vagrant](https://www.vagrantup.com/)


### Installing

- Fork the repository.
- Clone the repository.
```
git clone https://github.com/username/swd.git 
```
- Move into the cloned repo and start the VM.
```
cd swd
vagrant up
```
- Ssh into the VM.
```
vagrant ssh
```
- Start the server. (make sure you are in `/home/vagrant/swd/` folder)
```
yarn start
```



NOTE: If you encounter this error: `throw new Error('Please install sqlite3 package manually');`, install it using `npm install sqlite3`. This is an unwanted dependency, and will be weeded out in future.



## Running the tests

```
yarn test
```
Runs the test script defined by the package.
### And coding style tests

```
yarn lint
```
**What is "linting"?**
Linting is the process of checking the source code for Programmatic as well as Stylistic errors. This is most helpful in identifying some common and uncommon mistakes that are made during coding.

- [stylelint](https://stylelint.io/) - Linting CSS.
- [ESLint](http://eslint.org/) - Linting JavaScript.


## Built With

* [Node.js](https://nodejs.org/en/docs/) - Node.js is a JavaScript server framework.
* [Express](https://expressjs.com/en/guide/routing.html) - Node.js web application framework.
* [React](https://reactjs.org/docs/hello-world.html) - A JavaScript library for building user interfaces
* [GraphQL](http://graphql.org/graphql-js/) - A query language for your API.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.


## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details


---

Made with ♥ by [OSDLabs](https://github.com/OSDLabs)