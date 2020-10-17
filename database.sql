CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80) NOT NULL,
	"task" varchar(120) NOT NULL,
	"date" date
);