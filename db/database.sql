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
  category TINYINT UNSIGNED DEFAULT 1,
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
  nickname VARCHAR(32) NOT NULL COMMENT '昵称',
  email CHAR(32) NOT NULL COMMENT '邮箱',
  password CHAR(32) NOT NULL COMMENT '密码',
  salt CHAR(8) NOT NULL COMMENT '盐',
  level TINYINT NOT NULL DEFAULT 0 COMMENT '用户组',
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (uid),
  UNIQUE INDEX idx_email (email)
); 

INSERT INTO tbl_user(nickname, email, password, salt, level) VALUES ('test_user', 'user@qq.com', '123456', '654321', 0)

-- 菜谱列表，用于菜谱列表页
-- CREATE TABLE IF NOT EXISTS tbl_recipe_list(
--   rlid INT NOT NULL AUTO_INCREMENT,
--   rid INT NOT NULL,
--   create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   PRIMARY KEY (rid),
-- )

-- 菜谱详情
CREATE TABLE IF NOT EXISTS tbl_recipe(
  rid INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL COMMENT '菜品名',
  foreign_name VARCHAR(255) COMMENT '英文名',
  intro VARCHAR(255) NOT NULL COMMENT '菜品简介',
  difficulty TINYINT(1) DEFAULT 0 COMMENT '难度',
  tags VARCHAR(255) NOT NULL COMMENT '标签id，最多10个，用下划线分割',
  prepare_takes_time TINYINT(4) NOT NULL DEFAULT 0 COMMENT '准备耗时，单位分钟',
  cook_takes_time  TINYINT(4) NOT NULL DEFAULT 0 COMMENT '烹饪耗时',
  additional_takes_time TINYINT(4) NOT NULL DEFAULT 0 COMMENT '额外耗时',
  total_takes_time TINYINT(4) NOT NULL DEFAULT 0 COMMENT '全部耗时',
  ingredients VARCHAR(255) NOT NULL COMMENT '食材列表，格式 食材id.数量_食材id2.数量2',
  directions TEXT NOT NULL COMMENT '制作步骤，json',
  tips TEXT NOT NULL COMMENT '需要注意的关键点，json',
  extenions TEXT NOT NULL COMMENT '扩展阅读，json',
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (rid),
  UNIQUE INDEX idx_title (title)
);

-- 食材表
CREATE TABLE IF NOT EXISTS tbl_ingredient(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL COMMENT '食材名称',
  unit VARCHAR(20) NOT NULL COMMENT '食材单位',
  foreign_name VARCHAR(50) COMMENT '英文名称',
  calories_per_serving TINYINT(4) COMMENT '每份热量，千卡',
  PRIMARY KEY(id),
  UNIQUE INDEX idx_name (name)
);

-- 标签表
CREATE TABLE IF NOT EXISTS tbl_tag(
  tid INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL COMMENT '标签名',
  PRIMARY KEY(tid),
  UNIQUE INDEX idx_name (name)
);

SHOW TABLES;

SELECT
  *
FROM
  tbl_record;