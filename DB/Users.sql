CREATE TABLE `users` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`nickname` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
	`password` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
	`rating` INT(11) NULL DEFAULT NULL,
	`osebe` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`country` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`count` INT(11) NULL DEFAULT NULL,
	`wons` INT(11) NULL DEFAULT NULL,
	`avatar` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`last_online` TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=110
;
