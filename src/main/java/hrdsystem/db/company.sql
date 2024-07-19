drop database if exists HRDsystem;
create database HRDsystem;
use HRDsystem;

drop table if exists dept;
create table dept(
                     dno int auto_increment,
                     dname varchar(10) unique,
                     dphone varchar(15) unique,
                     primary key(dno)
);

drop table if exists person;
create table person(
                       pno int auto_increment,
                       name varchar(10),
                       phone varchar(15) unique,
                       position varchar(10),
                       dno int,
                       foreign key(dno) references dept(dno),
                       primary key(pno)
);

-- dept 테이블 샘플 데이터
insert into dept(dname, dphone) values("인사부", "010-1234-1234");
insert into dept(dname, dphone) values("기획부", "010-2345-2345");
insert into dept(dname, dphone) values("개발부", "010-3456-3456");
insert into dept(dname, dphone) values("영업부", "010-4567-4567");

-- person 테이블 샘플 데이터
insert into person(name, phone, position, dno) values("홍길동", "010-1111-1111", "사원", 1);
insert into person(name, phone, position, dno) values("김철수", "010-2222-2222", "대리", 1);
insert into person(name, phone, position, dno) values("이영희", "010-3333-3333", "과장", 1);

insert into person(name, phone, position, dno) values("박영수", "010-4444-4444", "사원", 2);
insert into person(name, phone, position, dno) values("최미나", "010-5555-5555", "대리", 2);
insert into person(name, phone, position, dno) values("강호준", "010-6666-6666", "과장", 2);

insert into person(name, phone, position, dno) values("정지훈", "010-7777-7777", "사원", 3);
insert into person(name, phone, position, dno) values("김유나", "010-8888-8888", "대리", 3);
insert into person(name, phone, position, dno) values("이서준", "010-9999-9999", "과장", 3);

insert into person(name, phone, position, dno) values("박정우", "010-0000-0000", "사원", 4);
insert into person(name, phone, position, dno) values("윤서연", "010-1212-1212", "대리", 4);
insert into person(name, phone, position, dno) values("최지훈", "010-2323-2323", "과장", 4);

-- 데이터 확인
select * from dept;
select * from person;
