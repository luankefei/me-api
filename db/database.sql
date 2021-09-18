CREATE DATABASE me;

SHOW DATABASES;

USE me;

-- 跑步日历表，课表、完成情况（含饮食睡眠精神状况）、课表日期，备注（装备）、是否显示
CREATE TABLE IF NOT EXISTS tbl_running_schedule(
  rid INT NOT NULL AUTO_INCREMENT,
  schedule VARCHAR(255) NOT NULL,
  feedback TEXT NOT NULL,
  remark VARCHAR(255) NOT NULL,
  schedule_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  display TINYINT(1) DEFAULT 1,
  PRIMARY KEY (rid)
);

-- 跑步个人最好成绩表，目标成绩
CREATE TABLE IF NOT EXISTS tbl_record(
  rid INT NOT NULL AUTO_INCREMENT,
  one_kilometer INT,
  five_kilometer INT,
  ten_kilometer INT,
  half_marathon INT,
  marathon INT,
  equivalent_one_kilometer INT,
  equivalent_five_kilometer INT,
  equivalent_ten_kilometer INT,
  equivalent_half_marathon INT,
  equivalent_marathon INT,
  PRIMARY KEY (rid)
);

-- 用户表，主要用于管理员后台权限
CREATE TABLE IF NOT EXISTS tbl_user(
  uid INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  level TINYINT NOT NULL,
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (uid)
); 

SHOW TABLES;

SELECT
  *
FROM
  tbl_record;