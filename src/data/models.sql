CREATE TABLE `student` (
	`id` varchar(10) NOT NULL,
	`studentName` varchar(50) NOT NULL,
	`bitsId` varchar(15) NOT NULL UNIQUE,
	`hostelPs` BOOLEAN NOT NULL,
	`gender` varchar(1),
	`bDay` DATE,
	`phone` varchar(20),
	`email` varchar(50),
	`address` varchar(50),
	`bloodGroup` varchar(3),
	`cgpa` FLOAT,
	`admit` DATE,
	`parentName` varchar(50),
	`parentPhone` varchar(20),
	`parentEmail` varchar(50),
	PRIMARY KEY (`id`)
);

CREATE TABLE `bonafide` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`studentId` varchar(10) NOT NULL,
	`reqDate` DATE,
	`reason` varchar(100),
	`otherReason` varchar(100),
	`year` INT(4),
	`printed` BOOLEAN NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `csa` (
	`studentId` varchar(10) NOT NULL,
	`title` varchar(20),
	`csaEmail` varchar(30),
	PRIMARY KEY (`studentId`)
);

CREATE TABLE `dayScholar` (
	`studentId` varchar(10) NOT NULL,
	PRIMARY KEY (`studentId`)
);

CREATE TABLE `leave` (
	`id` INT NOT NULL,
	`studentId` varchar(10) NOT NULL,
	`dateStart` DATE,
	`dateEnd` DATE,
	`reason` varchar(100),
	`consentType` varchar(10),
	`approvedBy` varchar(30),
	`approved` BOOLEAN NOT NULL,
	`comment` varchar(100),
	PRIMARY KEY (`id`)
);

CREATE TABLE `disco` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`studentId` varchar(10) NOT NULL,
	`dateOfViolation` DATE,
	`subject` varchar(30),
	`action` varchar(100),
	`date` DATE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `facultyIncharge` (
	`facultyId` varchar(10) NOT NULL,
	`function` varchar(20) NOT NULL,
	PRIMARY KEY (`facultyId`,`function`)
);

CREATE TABLE `holiday` (
	`date` DATE NOT NULL,
	`institute` BOOLEAN NOT NULL,
	`name` varchar NOT NULL,
	PRIMARY KEY (`date`)
);

CREATE TABLE `inOutDetail` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`studentId` varchar(10) NOT NULL,
	`place` varchar(20),
	`outDateTime` DATETIME,
	`inDateTime` DATETIME,
	`onCampus` BOOLEAN,
	`onLeave` BOOLEAN,
	PRIMARY KEY (`id`)
);

CREATE TABLE `lateComer` (
	`id` BINARY NOT NULL AUTO_INCREMENT,
	`studentId` varchar(10) NOT NULL,
	`dateTime` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `loginId` (
	`loginId` varchar(10) NOT NULL,
	`type` INT(2) NOT NULL UNIQUE,
	`passHash` varchar(100) NOT NULL,
	`passSalt` varchar(100) NOT NULL,
	PRIMARY KEY (`loginId`)
);

CREATE TABLE `messOptionMonthYear` (
	`monthYear` varchar(10) NOT NULL,
	`dateOpen` DATE,
	`dateClose` DATE,
	PRIMARY KEY (`monthYear`)
);

CREATE TABLE `notice` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` varchar NOT NULL,
	`url` varchar NOT NULL,
	`categoryId` INT NOT NULL,
	`published` DATETIME NOT NULL,
	`updated` DATETIME NOT NULL,
	`archived` BOOLEAN NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `noticeCategories` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `faculty` (
	`loginId` varchar(10) NOT NULL,
	`name` varchar(50) NOT NULL,
	`chamber` varchar(10),
	`office` varchar(10),
	`phone` varchar(15),
	`email` varchar(50) NOT NULL,
	PRIMARY KEY (`loginId`)
);

CREATE TABLE `merchandise` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(30) NOT NULL,
	`type` varchar(30),
	`cost` INT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `transaction` (
	`timestamp` DATETIME NOT NULL,
	`id` INT NOT NULL AUTO_INCREMENT,
	`studentId` varchar(10) NOT NULL,
	`merchId` INT NOT NULL,
	`optionId` INT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `messBill` (
	`studentId` varchar(10) NOT NULL,
	`month` varchar(10) NOT NULL,
	`amount` INT NOT NULL,
	PRIMARY KEY (`studentId`,`month`)
);

CREATE TABLE `warden` (
	`facultyId` varchar(10) NOT NULL,
	`hostel` varchar(10) NOT NULL,
	`residence` varchar(10),
	PRIMARY KEY (`facultyId`,`hostel`)
);

CREATE TABLE `superintendent` (
	`facultyId` varchar(10) NOT NULL,
	`function` varchar(20) NOT NULL,
	`residence` varchar(30),
	PRIMARY KEY (`facultyId`,`function`)
);

CREATE TABLE `miscBill` (
	`id` INT NOT NULL,
	`studentId` varchar(10) NOT NULL,
	`name` varchar(50) NOT NULL,
	`amount` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `dayPass` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`studentId` varchar(10) NOT NULL,
	`date` DATE NOT NULL,
	`reason` varchar(30),
	`consentType` varchar(20),
	`approvedBy` varchar(30),
	`comment` varchar(40),
	PRIMARY KEY (`id`)
);

CREATE TABLE `loginType` (
	`id` INT(2) NOT NULL AUTO_INCREMENT,
	`type` varchar(30) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ps` (
	`id` varchar(10) NOT NULL,
	`psStation` varchar(30),
	`thesis` BOOLEAN NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `merchandiseOption` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`size` varchar(20) NOT NULL,
	`nick` varchar(20),
	PRIMARY KEY (`id`)
);

CREATE TABLE `nucleus` (
	`facultyId` INT(10) NOT NULL,
	PRIMARY KEY (`facultyId`)
);

CREATE TABLE `staff` (
	`loginId` varchar(10) NOT NULL,
	`name` varchar(50) NOT NULL,
	`type` varchar(20) NOT NULL,
	`phone` varchar(15) NOT NULL,
	PRIMARY KEY (`loginId`)
);

CREATE TABLE `messOption` (
	`studentId` varchar(10) NOT NULL,
	`monthYear` varchar(10) NOT NULL,
	`mess` varchar(1),
	PRIMARY KEY (`studentId`,`monthYear`)
);

CREATE TABLE `hostel` (
	`id` varchar(10) NOT NULL,
	`hostel` varchar(10) NOT NULL,
	`room` varchar(10) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `student` ADD CONSTRAINT `student_fk0` FOREIGN KEY (`id`) REFERENCES `loginId`(`loginId`);

ALTER TABLE `bonafide` ADD CONSTRAINT `bonafide_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `csa` ADD CONSTRAINT `csa_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `dayScholar` ADD CONSTRAINT `dayScholar_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `leave` ADD CONSTRAINT `leave_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `disco` ADD CONSTRAINT `disco_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `facultyIncharge` ADD CONSTRAINT `facultyIncharge_fk0` FOREIGN KEY (`facultyId`) REFERENCES `faculty`(`loginId`);

ALTER TABLE `inOutDetail` ADD CONSTRAINT `inOutDetail_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `lateComer` ADD CONSTRAINT `lateComer_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `loginId` ADD CONSTRAINT `loginId_fk0` FOREIGN KEY (`type`) REFERENCES `loginType`(`id`);

ALTER TABLE `notice` ADD CONSTRAINT `notice_fk0` FOREIGN KEY (`categoryId`) REFERENCES `noticeCategories`(`id`);

ALTER TABLE `faculty` ADD CONSTRAINT `faculty_fk0` FOREIGN KEY (`loginId`) REFERENCES `loginId`(`loginId`);

ALTER TABLE `transaction` ADD CONSTRAINT `transaction_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `transaction` ADD CONSTRAINT `transaction_fk1` FOREIGN KEY (`merchId`) REFERENCES `merchandise`(`id`);

ALTER TABLE `transaction` ADD CONSTRAINT `transaction_fk2` FOREIGN KEY (`optionId`) REFERENCES `merchandiseOption`(`id`);

ALTER TABLE `messBill` ADD CONSTRAINT `messBill_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `messBill` ADD CONSTRAINT `messBill_fk1` FOREIGN KEY (`month`) REFERENCES ``(``);

ALTER TABLE `warden` ADD CONSTRAINT `warden_fk0` FOREIGN KEY (`facultyId`) REFERENCES `faculty`(`loginId`);

ALTER TABLE `superintendent` ADD CONSTRAINT `superintendent_fk0` FOREIGN KEY (`facultyId`) REFERENCES `faculty`(`loginId`);

ALTER TABLE `miscBill` ADD CONSTRAINT `miscBill_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `dayPass` ADD CONSTRAINT `dayPass_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `ps` ADD CONSTRAINT `ps_fk0` FOREIGN KEY (`id`) REFERENCES `student`(`id`);

ALTER TABLE `nucleus` ADD CONSTRAINT `nucleus_fk0` FOREIGN KEY (`facultyId`) REFERENCES `faculty`(`loginId`);

ALTER TABLE `staff` ADD CONSTRAINT `staff_fk0` FOREIGN KEY (`loginId`) REFERENCES `loginId`(`loginId`);

ALTER TABLE `messOption` ADD CONSTRAINT `messOption_fk0` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`);

ALTER TABLE `messOption` ADD CONSTRAINT `messOption_fk1` FOREIGN KEY (`monthYear`) REFERENCES `messOptionMonthYear`(`monthYear`);

ALTER TABLE `messOption` ADD CONSTRAINT `messOption_fk2` FOREIGN KEY (`mess`) REFERENCES ``(``);

ALTER TABLE `hostel` ADD CONSTRAINT `hostel_fk0` FOREIGN KEY (`id`) REFERENCES `student`(`id`);

