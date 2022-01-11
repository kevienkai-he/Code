-- 通过*查询所有的列
-- select * from user
-- 指定列名选择数据
-- select username, password from user

-- insert into  向表中插入数据
-- insert into user(username, password) values("kevienkai", "hkq327926")

-- select * from user
-- 更新数据
-- update user set password="888888" where id = 3

-- select * from user
-- update user set password = "admin", status = 1 where id = 2
-- select * from user
-- insert into user(username, password) values ("kcp", "327926")

-- delete from user where id = 3
-- select * from user order by status  desc, username asc
-- select count(*) from user where status = 0
select count(*)  as total from user where status = 0