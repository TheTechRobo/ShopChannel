-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `osc`;
CREATE DATABASE `osc` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `osc`;

DROP TABLE IF EXISTS `featured`;
CREATE TABLE `featured` (
  `time` int(11) NOT NULL DEFAULT '0',
  `title` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `featured` (`time`, `title`) VALUES
(1561000000,	1),
(1561310355,	2);

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

INSERT INTO `titles` (`titleid`, `categoryid`, `name`, `description`, `author`, `genre`, `date`, `players`, `size`) VALUES
(1,	1,	'Rock Paper Scissors',	'Rock Paper Scissors for the Wii!',	'John Doe',	'*Insert genre here*',	1500000000,	2,	200736),
(2,	1,	'Another Game',	'Blah',	'John Doe',	'Guh!',	1,	1,	1337),
(3,	2,	'cmoc patcher',	'cmoc patcher',	'John Doe',	'Patcher',	1800000000,	1,	888888),
(4,	2,	'example title 2',	'example',	'John Doe',	'Geh!',	1,	0,	888888);

-- 2019-06-23 17:51:16
