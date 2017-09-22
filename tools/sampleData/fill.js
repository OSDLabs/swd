const mysql = require('mysql');
const _ = require('lodash');

const config = {
  host: 'localhost',
  user: 'swd',
  password: 'swd_base',
  db: 'new_db_swd'
}

// Connect to database
const conn = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.db
});

// Define queries
queries = [

  // loginId table
  // TODO: Add password and salts according to the algorithm to be used in hashing
  'INSERT INTO loginId (loginId, type, passHash, passSalt) VALUES (\
    "f20150001",\
    "0",\
    "TODO:HASHED_PASSWORD_HERE",\
    "TODO:PASSWORD_SALT_HERE"\
  );',
  'INSERT INTO loginId (loginId, type, passHash, passSalt) VALUES (\
    "f20150002",\
    "0",\
    "TODO:HASHED_PASSWORD_HERE",\
    "TODO:PASSWORD_SALT_HERE"\
  );',
  'INSERT INTO loginId (loginId, type, passHash, passSalt) VALUES (\
    "f20150003",\
    "0",\
    "TODO:HASHED_PASSWORD_HERE",\
    "TODO:PASSWORD_SALT_HERE"\
  );',

  // loginType table
  'INSERT INTO loginType (id, type) VALUES ("0", "Student");',

  // Student entries
  'INSERT INTO student (\
      id,\
      studentName,\
      bitsId,\
      hostelPs,\
      gender,\
      bDay,\
      phone,\
      email,\
      address,\
      bloodGroup,\
      cgpa,\
      admit,\
      parentName,\
      parentPhone,\
      parentEmail\
    ) VALUES (\
      "f20150001",\
      "SOME GUY",\
      "2015A7PS0001G",\
      "0",\
      "m",\
      "1996-01-01",\
      "1234567890",\
      "sg@example.com",\
      "Addr1, Addr2, City, State, Country",\
      "A+",\
      "1.23",\
      "2015-08-01",\
      "sgParent",\
      "sgParentPhone",\
      "sgParentEamil"\
    );',
  'INSERT INTO student (\
      id,\
      studentName,\
      bitsId,\
      hostelPs,\
      gender,\
      bDay,\
      phone,\
      email,\
      address,\
      bloodGroup,\
      cgpa,\
      admit,\
      parentName,\
      parentPhone,\
      parentEmail\
    ) VALUES (\
      "f20150002",\
      "SOME GUY 2",\
      "2015A7PS0002G",\
      "0",\
      "m",\
      "1996-02-02",\
      "1234567890",\
      "sg2@example.com",\
      "Addr1, Addr2, City, State, Country",\
      "A+",\
      "1.23",\
      "2015-08-01",\
      "sg2Parent",\
      "sg2ParentPhone",\
      "sg2ParentEamil"\
    );',
  'INSERT INTO student (\
      id,\
      studentName,\
      bitsId,\
      hostelPs,\
      gender,\
      bDay,\
      phone,\
      email,\
      address,\
      bloodGroup,\
      cgpa,\
      admit,\
      parentName,\
      parentPhone,\
      parentEmail\
    ) VALUES (\
      "f20150003",\
      "SOME GUY3",\
      "2015A7PS0003G",\
      "0",\
      "m",\
      "1996-03-03",\
      "1234567890",\
      "sg3@example.com",\
      "Addr1, Addr2, City, State, Country",\
      "A+",\
      "1.23",\
      "2015-08-01",\
      "sg3Parent",\
      "sg3ParentPhone",\
      "sg3ParentEamil"\
    );'
];


conn.connect(function(err) {
  if (err) { throw err; }
  else {
    console.log('Cleaning data from ' + config.db);

    // Run the queries
    _.forEach(queries, (query) => {
      conn.query(query, (err) => {
        if (err) { throw err; }
        else { console.log('Done: ' + query); }
      });
    });

  }
});
