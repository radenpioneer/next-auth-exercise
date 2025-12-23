ALTER TABLE `sessions` RENAME COLUMN "secretHash" TO "secret_hash";--> statement-breakpoint
ALTER TABLE `sessions` RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE `sessions` ADD `user_id` text NOT NULL REFERENCES users(id);