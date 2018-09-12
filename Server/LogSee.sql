create table `client_auth` (
`Id` int(10) NOT NULL AUTO_INCRAMENT,
`ClientId` varchar(20) NOT NULL,
`Username` varchar(20) NOT NULL,
`Password` varchar(50) NOT NULL,
primary key (`Id`)
);

create table `admin_auth` (
`Id` int(10) NOT NULL AUTO_INCRAMENT,
`Username` varchar(20) NOT NULL,
`Password` varchar(50) NOT NULL,
`Email` varchar(65) NULL,
`Verified` tinyint(1) NOT NULL DEFAULT '0',
`Role` varchar(20) NOT NULL,
`Mod_Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`last_login` datetime NOT NULL,
primary key (`Id`)
);

create table `auth_audit_log` (
`Id` int(1000) NOT NULL AUTO_INCRAMENT,
`Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`Username` varchar(20) NOT NULL,
`User_ip` varchar(20) NOT NULL,
`Status` tinyint(1) NOT NULL
primary key (`Id`)
);

create table `logsee_serverstatus` (
`Component` varchar(20) NOT NULL,
`Status` tinyint(1) NOT NULL
primary key (`Component`)
);


