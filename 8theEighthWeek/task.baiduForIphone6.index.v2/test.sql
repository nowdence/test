-- MySQL dump 10.13  Distrib 5.5.20, for Win32 (x86)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	5.5.20-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(255) DEFAULT NULL,
  `newscontent` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(2,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(3,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(4,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(5,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(6,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(7,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(8,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(9,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(10,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(11,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(12,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(13,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(14,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(15,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...'),(16,'武汉成为美国人心目中最适合湖泊休闲的中国城市','由武汉市政府主办、武汉市旅游局承办的“2015第十四届武汉国际旅游节之中美国际旅游合作交流对话...');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-27 23:50:47
