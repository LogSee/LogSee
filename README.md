# LogSee

## What is LogSee?

LogSee is an application for centralised log management, designed to be lightweight; as all other alternatives are either over complicated or very resource heavy.

## How does it work?

You have two options with LogSee, you can install our client, written in node.js, that you can configure to scan log files or directories you specify, which'll stream data accross to the central LogSee server, or you can configure a syslog compatible device to point at the server and send its data via rsyslog.

Any data sent via the client is authenticated and secured, it also has two methods of configuration. You can configure it at cli by editing the config.json, or you can configure it via the inbuilt web interface. You can disable the web interface should you wish in the config.json file. 

The central log server requires a MySQL backend, it currently works on Mysql 5.7 and has yet to be tested with alternatives (MariaDB and the alike), which are planned to be supported. 

The central server web interface also features a user management system, granting users certain privliedges such as read only, access to certain group objects, administration etc. 

LogSee willeventually be available in a dockerized form, once we near completion with an initial LogSee release. We may also package it in .deb or .exe form, dependant on how we end up structuring it.

For now, you can follow the guides on the wiki to install LogSee, this is mainly done via running a bash script, but will become more clear over time as the platform is developed.

## What features does it have?

LogSee will have many cool features as we develop it, hopefully we will add influxdb / grafana support for log file stats, email alerting, push notifications / potentially an android application, trend analysis, HA deployment options and much more.

For now we are focusing on getting the platform up and running and stable with our currently planned features, once this is complete we will start to add the cool bits.

## Get in touch

Join #logsee on irc.freenode.net for support / to get in touch with the devs (Ainsey11 / Popzi)
