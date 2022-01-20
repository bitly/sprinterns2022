CREATE TABLE comments_table (comment_id integer PRIMARY KEY AUTOINCREMENT, first_name text NOT NULL, last_name text NOT NULL, email text NOT NULL, created_date timestamp default (DATETIME('now')), subject text NOT NULL, comment text NOT NULL) ;

insert into comments_table (first_name, last_name, email, subject, comment) VALUES ('John', 'Doe', 'johndoe@bitly.com', 'NY', 'hello'); 

insert into comments_table (first_name, last_name, email, subject, comment) VALUES ('Jane', 'Doe', 'janedoe@bitly.com', 'AK', 'hi'); 