DROP TABLE if exists calendar_events;
CREATE TABLE `calendar_events` (
    `calendar_id` BIGINT NOT NULL,
    `event_id` BIGINT
);

DROP TABLE if exists calendar;
CREATE TABLE `calendar` (
    `id` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` VARCHAR(255),
    `username` VARCHAR(255)
);




