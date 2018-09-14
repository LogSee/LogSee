/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for LogSee
DROP DATABASE IF EXISTS `LogSee`;
CREATE DATABASE IF NOT EXISTS `LogSee` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `LogSee`;

-- Dumping structure for table LogSee.Alerts
DROP TABLE IF EXISTS `Alerts`;
CREATE TABLE IF NOT EXISTS `Alerts` (
  `AlertID` int(11) NOT NULL AUTO_INCREMENT,
  `ClientID` int(11) NOT NULL,
  `TimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Severity` varchar(20) NOT NULL,
  `LogMessage` int(11) DEFAULT NULL COMMENT 'What is this?',
  `NotificationIssued` enum('Y','N') NOT NULL,
  `NotificationMethod` varchar(50) NOT NULL,
  PRIMARY KEY (`AlertID`),
  KEY `FK_Alerts_Users` (`ClientID`),
  KEY `FK_Alerts_LogSeries` (`LogMessage`),
  CONSTRAINT `FK_Alerts_LogSeries` FOREIGN KEY (`LogMessage`) REFERENCES `LogSeries` (`LogFileID`),
  CONSTRAINT `FK_Alerts_Users` FOREIGN KEY (`ClientID`) REFERENCES `Users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table LogSee.Clients
DROP TABLE IF EXISTS `Clients`;
CREATE TABLE IF NOT EXISTS `Clients` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL,
  `IP` varchar(50) DEFAULT NULL,
  `InitialAuth` enum('Awaiting Approval','Approved','Denied') NOT NULL DEFAULT 'Awaiting Approval',
  `Live` enum('Y','N') NOT NULL DEFAULT 'N',
  `UniqueKey` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UniqueKey` (`UniqueKey`),
  KEY `UserID_FK` (`UserID`),
  CONSTRAINT `UserID_FK` FOREIGN KEY (`UserID`) REFERENCES `Users` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table LogSee.InitialAuthKeys
DROP TABLE IF EXISTS `InitialAuthKeys`;
CREATE TABLE IF NOT EXISTS `InitialAuthKeys` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL,
  `Active` enum('Y','N') NOT NULL,
  `OneTimeUse` enum('Y','N') NOT NULL,
  `Key` varchar(255) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DateExpires` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Key` (`Key`),
  KEY `FK_InitialAuthKeys_Users` (`UserID`),
  CONSTRAINT `FK_InitialAuthKeys_Users` FOREIGN KEY (`UserID`) REFERENCES `Users` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table LogSee.LogFiles
DROP TABLE IF EXISTS `LogFiles`;
CREATE TABLE IF NOT EXISTS `LogFiles` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClientID` int(11) NOT NULL,
  `Filename` varchar(255) NOT NULL,
  `Filepath` varchar(255) NOT NULL,
  `RetentionDays` int(11) NOT NULL,
  `DateAdded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `ClientID_FK` (`ClientID`),
  CONSTRAINT `ClientID_FK` FOREIGN KEY (`ClientID`) REFERENCES `Clients` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Stores all the files coming from each Client and how long they should be retained for';

-- Data exporting was unselected.
-- Dumping structure for table LogSee.LogSeries
DROP TABLE IF EXISTS `LogSeries`;
CREATE TABLE IF NOT EXISTS `LogSeries` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `LogFileID` int(11) NOT NULL,
  `Data` longtext NOT NULL,
  `DateAdded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `LogFileID_FK` (`LogFileID`),
  CONSTRAINT `LogFileID_FK` FOREIGN KEY (`LogFileID`) REFERENCES `LogFiles` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='Stores data for each LogFile';

-- Data exporting was unselected.
-- Dumping structure for event LogSee.RetentionKeeper
DROP EVENT IF EXISTS `RetentionKeeper`;
DELIMITER //
CREATE DEFINER=`logsee`@`%` EVENT `RetentionKeeper` ON SCHEDULE EVERY 1 HOUR STARTS '2018-09-13 19:49:58' ON COMPLETION NOT PRESERVE ENABLE DO BEGIN

-- Deletes LogSeries records older than the specified RetentionDays duration in LogFiles.
-- Added as a code comment because the comment was too long to be a comment comment which is an uncommon comment for an error, but because we're commonly commenting comments I've come up with the idea to comment it here instead.
DELETE `LogSeries` FROM `LogSeries` JOIN `LogFiles` `LogFilesTable` ON `LogFilesTable`.`ID` = `LogSeries`.`LogFileID`
WHERE `LogSeries`.`DateAdded` < (NOW() - INTERVAL `LogFilesTable`.`RetentionDays` DAY) AND `LogFilesTable`.`RetentionDays` != 0;

END//
DELIMITER ;

-- Dumping structure for table LogSee.ServerStatus
DROP TABLE IF EXISTS `ServerStatus`;
CREATE TABLE IF NOT EXISTS `ServerStatus` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table LogSee.Users
DROP TABLE IF EXISTS `Users`;
CREATE TABLE IF NOT EXISTS `Users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Live` enum('Y','N') NOT NULL DEFAULT 'Y',
  `Authority` int(11) NOT NULL DEFAULT '1' COMMENT '1-5? 5 being super admin',
  `Username` varchar(255) NOT NULL,
  `Hash` varchar(255) NOT NULL,
  `Salt` varchar(255) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Forename` varchar(255) DEFAULT NULL,
  `Surname` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `LastLogin` timestamp NULL DEFAULT NULL,
  `LastIP` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for view LogSee.ViewLogs
DROP VIEW IF EXISTS `ViewLogs`;
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `ViewLogs` (
	`LSID` INT(11) NOT NULL,
	`LSData` LONGTEXT NOT NULL COLLATE 'utf8_general_ci',
	`LSDateAdded` TIMESTAMP NOT NULL,
	`ID` INT(11) NOT NULL,
	`Filename` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
	`Filepath` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
	`RetentionDays` INT(11) NOT NULL,
	`DateAdded` TIMESTAMP NOT NULL,
	`ClientID` INT(11) NOT NULL,
	`UserID` INT(11) NOT NULL,
	`Username` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
	`Forename` VARCHAR(255) NULL COLLATE 'utf8_general_ci',
	`Surname` VARCHAR(255) NULL COLLATE 'utf8_general_ci'
) ENGINE=MyISAM;

-- Dumping structure for view LogSee.ViewLogs
DROP VIEW IF EXISTS `ViewLogs`;
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `ViewLogs`;
CREATE ALGORITHM=UNDEFINED DEFINER=`logsee`@`%` SQL SECURITY DEFINER VIEW `ViewLogs` AS select `LogSeries`.`ID` AS `LSID`,`LogSeries`.`Data` AS `LSData`,`LogSeries`.`DateAdded` AS `LSDateAdded`,`LogFilesTable`.`ID` AS `ID`,`LogFilesTable`.`Filename` AS `Filename`,`LogFilesTable`.`Filepath` AS `Filepath`,`LogFilesTable`.`RetentionDays` AS `RetentionDays`,`LogFilesTable`.`DateAdded` AS `DateAdded`,`ClientsTable`.`ID` AS `ClientID`,`UsersTable`.`ID` AS `UserID`,`UsersTable`.`Username` AS `Username`,`UsersTable`.`Forename` AS `Forename`,`UsersTable`.`Surname` AS `Surname` from (((`LogSeries` join `LogFiles` `LogFilesTable` on((`LogFilesTable`.`ID` = `LogSeries`.`LogFileID`))) join `Clients` `ClientsTable` on((`ClientsTable`.`ID` = `LogFilesTable`.`ClientID`))) join `Users` `UsersTable` on((`UsersTable`.`ID` = `ClientsTable`.`UserID`)));

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
