create table `client_auth` (
`id` int(10) NOT NULL AUTO_INCRAMENT,
`clientid` varchar(20) NOT NULL,
`username` varchar(20) NOT NULL,
`password` varchar(50) NOT NULL,
primary key (`id`)
);

create table `admin_auth` (
`id` int(10) NOT NULL AUTO_INCRAMENT,
`username` varchar(20) NOT NULL,
`password` varchar(50) NOT NULL,
`email` varchar(65) NULL,
`verified` tinyint(1) NOT NULL DEFAULT '0',
`role` varchar(20) NOT NULL,
`mod_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`last_login` datetime NOT NULL,
primary key (`id`)
);

create table `auth_audit_log` (
`id` int(1000) NOT NULL AUTO_INCRAMENT,
`time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`username` varchar(20) NOT NULL,
`user_ip` varchar(20) NOT NULL,
`status` tinyint(1) NOT NULL
primary key (`id`)
);

create table `logsee_serverstatus` (
`component` varchar(20) NOT NULL,
`status` tinyint(1) NOT NULL
primary key (`component`)
);


