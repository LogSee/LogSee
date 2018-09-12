/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for LogSee
DROP DATABASE IF EXISTS `LogSee`;
CREATE DATABASE IF NOT EXISTS `LogSee` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `LogSee`;

-- Dumping structure for table LogSee.Clients
DROP TABLE IF EXISTS `Clients`;
CREATE TABLE IF NOT EXISTS `Clients` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) DEFAULT NULL,
  `Authorized` enum('Y','N') DEFAULT NULL,
  `IP` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `UserID_FK` (`UserID`),
  CONSTRAINT `UserID_FK` FOREIGN KEY (`UserID`) REFERENCES `Users` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table LogSee.LogFiles
DROP TABLE IF EXISTS `LogFiles`;
CREATE TABLE IF NOT EXISTS `LogFiles` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClientID` int(11) DEFAULT NULL,
  `Filename` varchar(255) DEFAULT NULL,
  `Filepath` varchar(255) DEFAULT NULL,
  `Retention` int(11) DEFAULT NULL,
  `DateAdded` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `ClientID_FK` (`ClientID`),
  CONSTRAINT `ClientID_FK` FOREIGN KEY (`ClientID`) REFERENCES `Clients` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores all the files coming from each Client and how long they should be retained for';

-- Data exporting was unselected.
-- Dumping structure for table LogSee.LogSeries
DROP TABLE IF EXISTS `LogSeries`;
CREATE TABLE IF NOT EXISTS `LogSeries` (
  `ID` int(11) NOT NULL,
  `LogFileID` int(11) DEFAULT NULL,
  `Data` longtext,
  `DateAdded` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `LogFileID_FK` (`LogFileID`),
  CONSTRAINT `LogFileID_FK` FOREIGN KEY (`LogFileID`) REFERENCES `LogFiles` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores data for each LogFile';

-- Data exporting was unselected.
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
  `Live` enum('Y','N') DEFAULT 'Y',
  `Authority` int(11) DEFAULT '1' COMMENT '1-5? 5 being super admin',
  `Username` varchar(255) DEFAULT NULL,
  `Hash` varchar(255) DEFAULT NULL,
  `Salt` varchar(255) DEFAULT NULL,
  `DateCreated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
