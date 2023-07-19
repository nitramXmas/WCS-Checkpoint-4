INSERT INTO `countries` (`id`, `name`) VALUES (NULL, 'France'),(NULL, 'Espagne');

INSERT INTO `teams` (`id`, `color`, `country_id`) VALUES (NULL, 'blue', '1'), (NULL, 'red', '2');

INSERT INTO `players` (`id`, `firstname`, `lastname`, `age`, `position`, `country_id`, `team_id`) 
VALUES (NULL, 'Martin', 'NOEL', '34', 'front', '1', '1'), (NULL, 'Eric', 'PARIES', '40', 'back', '1', '1');