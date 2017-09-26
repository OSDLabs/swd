# Portal
*Port your MySQL data from old schema to the new schema with just a
configuration file.*


## How to
- Create a `config.js` file which exports an object with rules and database
config.
- `npm install`
- `node index.js`



## Configuration
`config.js` must export an object with `host`, `user`, `password`, `db` and
`rules`. See below for details.

### host [String]
- Host for database

### user [String]
- User for database

### password [String]
- Password for the database

### db [Object]
- Must contain `source` and `destination` pairs with database names


---
### rules [Array]
- Contains the rules for porting
- One rule for each target table
- Example:
    ```javascript
    rules: [ {}, {}, ... , {} ]
    ```

#### rules[i].table [Object]
- Object with info about target and source tables
- Must contain: `old` and `new` objects
    - `new`: String
    - `old`: String or Object with `union` and `on` pairs
- See [old](#rulesitablesold-string-or-object) below for details
- Example:
    ```javascript
    table: {
        new: 'NEW_TABLE', 
        old: 'OLD_TABLE'
    }
    ```

#### rules[i].fields [Object]
- Object with `target_attribute`s as keys and `source_attribute`s or other rules
as values
- See [fields](#rulesifields-object) below for details
- Example:
    ```javascript
    fields: {
        user: 'login', 
        password: 'pass'
    }
    ```
    This SELECTs `login` and `pass` fields from old table and puts in `user` and
    `pass` of the new table, respectively

#### rules[i].query [String]
- A MySQL query to run instead of target and source pairs
- If found, `table` and `fields` objects are ignored
- Example:
    ```javascript
    query: 'INSERT INTO table (user, password) VALUES ("bits", "goa_ftw!");'
    ```
    Runs the query as it is

#### rules[i].skip [Boolean]
- If `true`, the rule is skipped
- Example:
    ```javascript
    rules: [ { skip: true, ... }, {}, {} ]
    ```
    This rule is skipped regardless of anything else



---
### rules[i].tables.old [String] or [Object]
- Must be either a string with table name
- Or an object with `union` and `on`
    - `union` must be an array with table names
    - `on` must be a MySQL condition
- Example:
    ```javascript
    old: {
        union: ['t1', 't2', 't3'],
        on: 't1.id = t2.id AND t2.id = t3.id'
    }
    ```
    Inner joins the tables with common `id`



---
### rules[i].fields [Object]

#### fields[0].if [Object]
- Evaluates an if condition and enters data accordingly
- Must contain `condition`, `pass` and `fail`
- See [condition](#ifcondition) below for details
- Example:
    ```javascript
    if: {
        condition: {
            eval: {}
        },
        pass: 'login',
        fail: {
            value: 'some other'
        }
    }
    ```
    Checks if `login` attribute of old table is equal to "bits". If yes, puts
    `login` of old table in the new table else puts a string "some other"

#### fields[0].switch [Object]
- Evaluates switch condition and enters data accordingly
- Must contain `condition`, `cases`
- `cases` must be an object of key-value pairs
- Example:
    ```javascript
    switch: {
        condition: 'login_type',
        cases: [
            { type1: { value: '1' } },
            { type2: { value: '2' } },
            { other: 'login_type' }
        ]
    }
    ```
    If `login_type` equals "type1" put a string "1" or if "type2" put a string
    "2" or if "other" put the value of `login_type` attribute of old table

#### fields[0].value [String]
- Any field with `value` will be put as value itself rather than getting it
from the source table
- Example:
    ```javascript
    user: { value: 'some value' }
    ```
    Puts the string "some value" in `user` attribute of the new table



---
### if.condition
#### rules[i].fields[j].if.condition [Object]
- Must contain `eval` or `or` or `and`
- `or` or `and` must be an array of objects which must contain `eval`
- See [eval](#ifconditioneval) below for details
- Example:
    ```javascript
    condition: {
        or: [
            { eval: {C1} },
            { eval: {C2} },
            {
                and: [
                    { eval: {C3} },
                    { eval: {C4} }
                ]
            }
        ]
    }
    ```
    Is equivalent to `C1 || C2 || (C3 && C4)`



---
### if.condition.eval
#### rules[i].fields[j].switch.condition.eval [Object]
- Must contain `operator` and (`first_attribute` or `first_value`) and
(`second_attribute` or `second_value`)
    - `operator` must be a constant string
    - `X_attribute` must be an attribute of the table
    - `X_value` must be a constant string
- Example:
    ```javascript
    condition: {
        eval:
            operator: '===',
            first_attribute: 'login',
            second_value: 'bits'
        }
        pass: { value: '1' },
        fail: { value: '0' }
    },
    ```
    Put "1" or "0" if `login` of old table is `===` to `bits` of new table
