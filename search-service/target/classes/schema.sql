DROP TABLE if exists event_register;


CREATE TABLE `event_register` (
    `id` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `event_id` BIGINT,
    `username` VARCHAR(255)
);

