DROP TABLE if exists register;


CREATE TABLE `register` (
    `id` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `event_id` BIGINT,
    `username` VARCHAR(255)
);

