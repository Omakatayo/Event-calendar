DROP TABLE if exists event;


CREATE TABLE if not exists `event` (
    `id` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `event_name` VARCHAR(255),
    `description` VARCHAR(500),
    `start_date` DATE,
    `start_time` VARCHAR(255),
    `end_date` DATE,
    `end_time` VARCHAR(255),
    `street` VARCHAR(255),
    `postal_code` VARCHAR(255),
    `city` VARCHAR(255),
    `country` VARCHAR(255),
    `availability` SMALLINT,
    `registered` SMALLINT,
    `price` DECIMAL,
    `category` VARCHAR(255),
    `organizer` VARCHAR(255),
    `image_URL` VARCHAR(500)
);

