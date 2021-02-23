-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 23, 2021 at 11:54 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jvrestapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id_country` int(255) NOT NULL,
  `code` varchar(40) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `delete_flag` tinyint(1) NOT NULL,
  `inactive_flag` tinyint(1) NOT NULL,
  `created_by` text NOT NULL,
  `date_created` datetime NOT NULL,
  `updated_by` text NOT NULL,
  `last_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id_country`, `code`, `name`, `description`, `delete_flag`, `inactive_flag`, `created_by`, `date_created`, `updated_by`, `last_updated`) VALUES
(1, 'ID', 'indonesia', 'indonesia', 0, 0, 'system1', '2021-02-24 00:52:28', '', '2021-02-25 00:52:28'),
(2, 'SG', 'singapore', 'singapore', 1, 1, 'system2', '2021-02-24 00:52:28', '', '2021-02-25 00:52:28'),
(5, 'US', 'new york', 'new york', 0, 0, 'system2', '2021-02-24 01:05:36', '', '2021-02-25 01:05:37'),
(6, 'SA', 'saudi arabia', 'saudi arabia', 1, 1, 'system3', '2021-02-24 05:11:48', 'system1', '2021-02-25 05:11:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id_country`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id_country` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
