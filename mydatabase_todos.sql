-- mydatabase.todos definition

CREATE TABLE `todos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `todo` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;