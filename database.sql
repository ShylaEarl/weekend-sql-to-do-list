CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80) NOT NULL,
	"task" varchar(120) NOT NULL,
	"date" date,
	"completed" boolean default false
);

INSERT INTO "tasks" ("name", "task", "date")
VALUES ('Shyla', 'Dishes', '10/17/2020'),
('Shyla', 'Clean Bathroom', '10/17/2020'),
('Shyla', 'Sweep', '10/17/2020'),
('Shyla', 'Make Lunch', '10/17/2020'),
('Shyla', 'Complete Homework Assigment', '10/17/2020');

SELECT * FROM "tasks";

DELETE FROM "tasks" WHERE "id" = 4;

UPDATE "tasks" SET "completed" = 'true' WHERE "id" = 4;