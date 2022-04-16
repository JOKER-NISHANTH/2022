### Database:
---
-   Its a collection of Data and Information

### DBMS:
---

#### Database Management System

-   Management - Its a process of Storing and retrieving the data
-   System - Software
-   DBMS is a s/w or collection of programs to store/retrieve/modify/delete
the data

---
### Types of DBMS:

There are 4 types of DBMS
1. RDBMS
2. HDBMS
3. NDBMS
4. ODBMS
---

## 1. RDBMS:

-   Relational Database Management System
-   RDBMS is a software which organizes the data using Relational
Database Management System
-   According to RDBMS the data would be stored in the form Tables

---
Tables:
---

-   Tables are logical organization of structure and data, which
consists of rows and columns

D-1

---
Column:
---
-   Coloumns are logical representation of structure
-   Its also known as representing the attributes

---
Row:
----
-   Rows are logical representation of data
-   Its also known as representing the properties of an attributes
-   Its also known as records

---
Cell:
---

-   Its a smallest unit of table in which we can store the data

---



### Creating a DATABASE:
---
-   Command to create a Database:
```
 CREATE DATABASE <database name>;
 create database <database name>;
 create DATABASE <database name>;
 CREATE database <database name>;
```
### Command to see all the databases:
---
```
 SHOW DATABASES;
```
### Command to see a particular database:
---

-   Command used to select the database:

```
 USE <database name>;
```

-   Command to create a Table:

```
 CREATE TABLE [tablename] (column_name datatype, ......);
```
-   Command to see all the TABLES:
```
 SHOW TABLES;
 ```
-   Command to see data of the TABLES:
```
DESC Student;
```
-   Command to insert the data to a Table:

 ```
 INSERT INTO Student(column_name,....) VALUES(data,.....);
 ```
-   Command to see all the data present within a Table:
```
 SELECT * FROM [tablename];
```

---
## Datatypes:
---
 There are 3 catagories
1. Numeric Type
2. String Type
3. Date Type

INT:
---
-   It Comes under Numeric Type datatype
-   we can consider a whole number as INT
-   Range -- 429467295

ex:

    0, 9, -89, 6767
---

VARCHAR:
---
-   Variable length string - variable character
-   1-255 characters

ex:

    'nisha','africa','eynaoc1H1s'

---

### 1. Create a database as StudentDatabase which consists of a Table called
as Student with 4 columns[id,name,age,address] and insert some random
data and display it on the console
```
 CREATE DATABASE StudentDatabase;

 USE StudentDatabase;

 CREATE TABLE Student (id INT,name VARCHAR(20),age INT,address
VARCHAR(50));

 INSERT INTO Student (id,name,age,address)
VALUES(10,'Suhas',23,'Mysore');

 INSERT INTO Student (id,name,age,address)
VALUES(14,'akash',24,'Mandya');


mysql> DESC Student;
+---------+-------------+------+-----+---------+-------+
| Field     | Type | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| id        | int(11) | YES | | NULL | |
| name      | varchar(20) | YES | | NULL | |
| age       | int(11) | YES | | NULL | |
| address   | varchar(50) | YES | | NULL | |
+---------+-------------+------+-----+---------+-------+
```

```
mysql> SELECT * FROM Student;
+------+-------+------+---------+
| id | name | age | address |
+------+-------+------+---------+
| 10 | Suhas | 23 | Mysore |
| 14 | akash | 24 | Mandya |
+------+-------+------+---------+
```
---
####    HomeWork
1. Create a database as EmployeeDatabase which consists of a Table called
as Employee with 5 columns[id,name,age,address,salary] and insert some
random data and display it on the console
---

2. Create a database as CricketerDatabase which consists of a Table
called as Cricketer with 6
columns[id,name,age,address,player_type,country] and insert some random
data and display it on the console