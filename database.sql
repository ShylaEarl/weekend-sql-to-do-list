CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80) NOT NULL,
	"task" varchar(120) NOT NULL,
	"date" date,
	"completed" boolean default false
);

INSERT INTO "tasks" ("name", "task", "date")
VALUES ('Shyla', 'Dishes', '4/22/2021'),
('Shyla', 'Clean Bathroom', '4/22/2021'),
('Shyla', 'Sweep', '4/22/2021'),
('Shyla', 'Make Lunch', '4/22/2021'),
('Shyla', 'Complete Homework Assigment', '4/22/2021');

SELECT * FROM "tasks";