DROP TABLE if exists event;


CREATE TABLE `event` (
    `id` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `event_name` VARCHAR(255),
    `description` VARCHAR(255),
    `start_date` DATETIME,
    `end_date` DATETIME,
    `street` VARCHAR(255),
    `postal_code` VARCHAR(255),
    `city` VARCHAR(255),
    `country` VARCHAR(255),
    `availability` SMALLINT,
    `price` DECIMAL,
    `category` VARCHAR(255),
    `organizer` VARCHAR(255)
);

