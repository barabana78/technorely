-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: dz14
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(10) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `kurs` int DEFAULT NULL,
  `grupId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `grupId` (`grupId`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`grupId`) REFERENCES `grup` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Alex','Smith','2001-04-04',3,1),(2,'Bob','Braun','2000-11-25',3,1),(3,'Eva','Kirtoka','2002-05-19',4,2),(4,'Djon','Biden','1998-01-09',3,2),(5,'Donald','Tramp','2001-07-15',4,3),(6,'Ketrin','Jons','1999-08-04',4,3),(7,'Abby','Smith','2001-04-04',4,4),(8,'Djon','Khaligan','1998-10-23',4,4),(9,'Dan','Abramov','1998-09-18',4,5),(10,'Kitty','Green','1997-07-12',5,5),(11,'Kristin','Froset','1997-10-14',5,6),(12,'Marie','Kon','1996-04-04',5,6),(13,'Uri','Klauncer','2002-03-17',1,1),(14,'Elvis','Smith','2003-11-04',1,1),(15,'Rik','Haak','2002-01-03',1,2),(16,'Rich','Richardson','2002-04-04',1,2),(17,'Leon','Mayfild','2001-04-04',1,3),(18,'Djina','Tullio','2000-05-12',2,3),(19,'Evan','Pavletik','2001-06-01',2,4),(20,'Djerard','Bush','2000-09-09',2,4),(21,'Djek','Mone','2001-04-04',2,5);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-08 15:58:23
