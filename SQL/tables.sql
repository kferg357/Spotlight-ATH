drop table if exists b_user;
CREATE TABLE IF NOT EXISTS b_user
(
    userID INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    userName VARCHAR( 20 ) NOT NULL ,
    userPass VARCHAR( 255 ) NOT NULL default '*NOPASSSWORD*' ,
    userGuid varchar(300) NOT NULL default '*NOGUID*',
    isGuestAccount varchar(1) default 'N',
    email VARCHAR( 255 ) NOT NULL default 'no-email',
    authToken varchar(300) NOT NULL default '',
    securityLevel varchar(50) NOT NULL default 'user',
    currentUniverseID int,
    lastLogin DATETIME DEFAULT now(),
    lastActivityDate DATETIME DEFAULT now(),
    UNIQUE (userGuid)
);
insert into b_user (userName, userGuid, userPass, email, isGuestAccount, securityLevel) values ('Admin','XXXXXXXGM','NOPASSWORD','noone@nothing.com','N','user');