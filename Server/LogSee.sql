create table `ClientAuth` (
`ID` int(10) NOT NULL AUTO_INCRAMENT,
`ClientID` varchar(20) NOT NULL,
`Username` varchar(20) NOT NULL,
`Password` varchar(50) NOT NULL,
primary key (`ID`)
);

create table `AdminAuth` (
`ID` int(10) NOT NULL AUTO_INCRAMENT,
`Username` varchar(20) NOT NULL,
`Password` varchar(50) NOT NULL,
`Email` varchar(65) NULL,
`Verified` tinyint(1) NOT NULL DEFAULT '0',
`Role` varchar(20) NOT NULL,
`ModTimestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`LastLogin` datetime NOT NULL,
primary key (`ID`)
);

create table `AuthAuditLog` (
`ID` int(1000) NOT NULL AUTO_INCRAMENT,
`Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`Username` varchar(20) NOT NULL,
`UserIP` varchar(20) NOT NULL,
`Status` tinyint(1) NOT NULL
primary key (`ID`)
);

create table `LogseeServerStatus` (
`Component` varchar(20) NOT NULL,
`Status` tinyint(1) NOT NULL
primary key (`Component`)
);


