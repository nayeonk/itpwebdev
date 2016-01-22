Logins and Password Encryption
==============================

### Logins

See class demo

### Encryption

When storing user accounts in a database, it is crucial that you encrypt user passwords instead of storing them as plain text. MySQL offers a one-way encryption function called __SHA1()__.

To insert a user into a users table (id, username, pw) with an encrypted password:

```sql
INSERT INTO users (username, pw)
VALUES ('dtang', SHA1('secretpassword'))
```

This will produce a record in the users table with the following values:

username = dtang
pw = edbd1887e772e13c251f688a5f10c1ffbb67960d