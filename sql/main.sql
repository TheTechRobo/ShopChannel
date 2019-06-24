-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `featured`;
CREATE TABLE `featured` (
  `time` int(11) NOT NULL DEFAULT '0',
  `title` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `titles`;
CREATE TABLE `titles` (
  `titleid` int(11) NOT NULL AUTO_INCREMENT,
  `categoryid` smallint(6) DEFAULT NULL,
  `name` varchar(100) NOT NULL DEFAULT 'Untitled Title',
  `description` text NOT NULL,
  `author` varchar(200) NOT NULL DEFAULT 'John Doe',
  `genre` varchar(200) NOT NULL DEFAULT 'Unknown',
  `date` bigint(20) NOT NULL DEFAULT '1',
  `players` tinyint(4) NOT NULL DEFAULT '1',
  `size` bigint(20) NOT NULL DEFAULT '1337',
  PRIMARY KEY (`titleid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- 2019-06-24 11:15:37
