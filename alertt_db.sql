-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Feb 25, 2016 at 03:54 PM
-- Server version: 5.6.29-log
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `beshadgh_alertt_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `hazards_tb`
--

CREATE TABLE IF NOT EXISTS `hazards_tb` (
  `hazard_id` int(11) NOT NULL AUTO_INCREMENT,
  `hazard` varchar(50) NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  `comment` varchar(50) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`hazard_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `hazards_tb`
--

INSERT INTO `hazards_tb` (`hazard_id`, `hazard`, `lat`, `lng`, `comment`, `user_id`) VALUES
(17, 'police', -43.5287, 172.61, 'police catching speeders', NULL),
(18, 'roadwork', -43.5283, 172.606, 'road is blocked', NULL),
(19, 'traffic', -43.5344, 172.607, 'heavy traffic', NULL),
(20, 'accident', -43.5305, 172.602, 'two cars pile up', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_tb`
--

CREATE TABLE IF NOT EXISTS `users_tb` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `auth` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
