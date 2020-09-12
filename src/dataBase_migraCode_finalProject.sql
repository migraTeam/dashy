select title, tdate, tstart, tend from classes where class_id = '4' order by tdate asc;
--OCT2019-1--
insert into users  (name, class_id, user_password, user_role) values ('Abdo', 1, 'Abdo', 'Student');
insert into users  (name, class_id, user_password, user_role) values ('Said ', 1, 'Said ', 'Student');
insert into users  (name, class_id, user_password, user_role) values ('Kristiina ', 1, 'Kristiina', 'Student');
insert into users  (name, class_id, user_password, user_role) values ('Mouaz', 1, 'Mouaz', 'Student');
insert into users  ( name, class_id, user_password, user_role) values ('Oleksandr', 1,'Oleksandr', 'Student');
insert into users  (name, class_id, user_password, user_role) values ('Rahaf', 1, 'Rahaf', 'Student');
insert into users  ( name, class_id, user_password, user_role) values ('Housni', 1, 'Housni', 'Student');
insert into users  ( name, class_id, user_password, user_role) values ('Rakibul', 1, 'Rakibul', 'Student');
insert into users  ( name, class_id, user_password, user_role) values ('Ward', 1, 'Ward', 'Student');
--MAR2020-1--
insert into users  ( name, class_id, user_password, user_role) values ('Roshan', 3,'Roshan', 'Student');
insert into users  ( name, class_id, user_password, user_role) values ( 'Ümit', 3, 'Ümit', 'Student');
insert into users  ( name, class_id, user_password, user_role) values ( 'Thony', 3, 'Thony', 'Student');
insert into users  ( name, class_id, user_password, user_role) values ('Joaquin', 3, 'Joaquin', 'Student');
insert into users  ( name, class_id, user_password, user_role) values ( 'Rubén', 3, 'Rubén', 'Student');
insert into users  ( name, class_id, user_password, user_role) values ( 'Lavinia', 3,'Lavinia', 'Student');
insert into users  ( name, class_id, user_password, user_role) values ( 'Alejandro', 3, 'Alejandro', 'Student');
insert into users   (name, class_id, user_password, user_role) values ( 'Viktoryia', 3, 'Viktoryia', 'Student');
insert into users  (name, class_id, user_password, user_role) values ( 'Gustavo', 3, 'Gustavo', 'Student');
insert into users  (name, class_id, user_password, user_role) values ( 'Anandamaya', 3, 'Anandamaya', 'Student');
insert into users  ( name, class_id, user_password, user_role) values ( 'Shaheen', 3, 'Shaheen', 'Student');
--MAR2020-2--
insert into users  (name, class_id, user_password, user_role) values ('AlexeiG', 4, 'Alexei', 'Student');
insert into users  (name, class_id, user_password, user_role) values ( 'Ehsan', 4, 'Ehsan', 'Student');
insert into users  (name, class_id, user_password, user_role) values ( 'Esteban', 4, 'Esteban', 'Student');
insert into users  (name, class_id, user_password, user_role) values ( 'Jorge', 4, 'Jorge', 'Student');
insert into users  (name, class_id, user_password, user_role) values ( 'Josel', 4, 'Josel', 'Student');
insert into users  (name, class_id, user_password, user_role) values ( 'Ricardo', 4, 'Ricardo', 'Student');
insert into users  (name, class_id, user_password, user_role) values ( 'AlexeiR', 4, 'Alexei', 'Student');

insert into perslinks (user_id, description) values (4, 'https://marksheet.io/html-forms.html');
insert into links (class_id, description) values (4, 'https://marksheet.io/html-forms.html');
DELETE FROM links WHERE id > 6;
select description, name from perslinks p inner join users u on u.id = p.user_id where name='Ion' ORDER BY p.id desc;



select h2.id, hf.finished, name, h2.class_id, u.user_role, link, linkhwfinished from "class" c
INNER JOIN users u ON c.id=u.class_id
inner JOIN homeworks h2 ON c.id = h2.class_id 
inner JOIN homework_finished hf on hf.homeworks_id = h2.id 
WHERE h2.class_id = 4 AND u.user_role = 'Student' order by h2.id asc;
-- query every homework with user
select h.id, h.link, u2."name" , u2.user_role from  "class" c2
inner join homeworks h on c2.id = h.class_id
inner join users u2 on c2.id = u2.class_id 
where c2.id = 4 and u2.user_role = 'Student';

select hf.homeworks_id, u.name, hf.finished , hf.linkhwfinished from   homework_finished hf
inner join homeworks h2 on hf.homeworks_id = h2.id 
inner join users u on u.id = hf.user_id 
where hf.finished = 'yes' and h2.id = 4; 

select h.id, h.link, u2."name" , u2.user_role, (select hf.finished from   homework_finished hf
inner join homeworks h2 on hf.homeworks_id = h2.id 
inner join users u on u.id = hf.user_id 
where u.id = u2.id and h2.id = h.id ), (select hf.linkhwfinished from   homework_finished hf
inner join homeworks h2 on hf.homeworks_id = h2.id 
inner join users u on u.id = hf.user_id 
where u.id = u2.id and h2.id = h.id ) from   homeworks h
inner join "class" c2 on c2.id = h.class_id
inner join users u2 on c2.id = u2.class_id 
where c2.id = 4 and u2.user_role = 'Student';

select name, h2.link, (select hf.finished from   homework_finished hf
inner join homeworks h on hf.homeworks_id = h2.id 
inner join users u2 on u.id = hf.user_id 
where finished = 'yes' and u.id = u2.id and h2.id = h.id)  from homeworks h2
inner join "class" c2 on c2.id = h2.class_id
inner join users u on c2.id = u.class_id where u.name='Ion';

select * from (select name, h2.link, (select hf.finished from   homework_finished hf
inner join homeworks h on hf.homeworks_id = h2.id 
inner join users u2 on u.id = hf.user_id 
where finished = 'yes' and u.id = u2.id and h2.id = h.id)  from homeworks h2
inner join "class" c2 on c2.id = h2.class_id
inner join users u on c2.id = u.class_id where u.name='Thiago'
) foo where foo.finished IS DISTINCT from 'yes';