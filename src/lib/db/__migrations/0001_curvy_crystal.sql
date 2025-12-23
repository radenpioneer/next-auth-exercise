CREATE TABLE `sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`secretHash` blob NOT NULL,
	`createdAt` integer NOT NULL
);
