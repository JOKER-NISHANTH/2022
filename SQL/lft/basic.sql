-- single line comment
/*
Multi Line commant

	Data Type
		- Character -> CHAR(10) , VARCHAR(100)
					CHAR is fixed length and VARCHAR is variable length
			ex:
				CHAR(10) "npm  " npm is 3 letter balance 2 letter filled with empty space
                VARCHAR(100) "npm"
*/

-- show character set;
-- SHOW SCHEMAS;
-- drop schema if exists web;

use logic_first;
create table student(
	id int primary key auto_increment ,
    name varchar(30),
    gpa decimal(3,2)
);

describe student;
desc student;

show tables ;
-- delete table
drop table if exists student;

-- add extra col
alter table student add column department varchar(20);
-- delete particular col in table
alter table student drop column department;


insert into student(name,gpa) values("Nishanth",8.0);

insert into student(name,gpa) values("Vaseekaran",9.5), ("Vijay Surya",9.2);

select * from student;

select name from student;

create table emp(
	empid int auto_increment primary key ,
    ename varchar(30),
    job_desc varchar(30),
    salary int
);

insert into emp(ename,job_desc,salary) values("Nishanth","Admin",1000000);
insert into emp(ename,job_desc,salary) values("Kumar","Admin",2500000);


INSERT INTO emp VALUES(1,"Nishanth","Admin",1000000);
INSERT INTO emp VALUES(2,"Kumar","Admin",2500000);
INSERT INTO emp VALUES(3,'George','SALES',2000000);
INSERT INTO emp VALUES(4,'Ramya','SALES',1300000);
INSERT INTO emp VALUES(5,'Meena','HR',2000000);
INSERT INTO emp VALUES(6,'Ashok','MANAGER',3000000);
INSERT INTO emp VALUES(7,'Abdul','HR',2000000);
INSERT INTO emp VALUES(8,'Ramya','ENGINEER',1000000);
INSERT INTO emp VALUES(9,'Raghu','CEO',8000000);
INSERT INTO emp VALUES(10,'Arvind','MANAGER',2800000);
INSERT INTO emp VALUES(11,'Akshay','ENGINEER',1000000);
INSERT INTO emp VALUES(12,'John','ADMIN',2200000);
INSERT INTO emp VALUES(13,'Abinaya','ENGINEER',2100000);

show tables;

select * from emp;

-- where 

select * from emp where ename = "Ramya";
select * from emp where ename != "Ramya";

select * from emp where salary > 2000000;

select * from emp where salary > 2600000 and job_desc="MANAGER";

select * from emp where job_desc="MANAGER" or job_desc="HR"; 

-- appropraite approach using in operator
select * from emp where job_desc in ("MANAGER","HR");
select * from emp where job_desc not in ("MANAGER","HR");

-- Between
select * from emp where salary between 1000000 and 2000000;

-- Limit
select * from emp limit 5;

-- Like (pattern or regex)
-- Wildcards ===> % 0ormore , _ one character

select * from emp where ename like 'A%';
select * from emp where ename like '%A';

select * from emp where ename not like 'A%'; 


select * from emp where ename like 'A%A'; -- start and end with A

select * from emp where ename like '%i%'; 

select * from emp where ename like '_i%'; -- 2nd letter startwith i

use logic_first;
select * from emp;

update logic_first.emp set job_desc="Analyst" WHERE job_desc="CEO";

update emp set job_desc="CEO" WHERE job_desc="Analyst";

delete from emp where empid=12;

