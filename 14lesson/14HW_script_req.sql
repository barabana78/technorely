select timetable.time_begin as 'Начало лекции', teacher.last_name as 'ФИО преподавателя', grup.title as 'группа',
 student.last_name as 'ФИО студентов' from teacher
inner join timetable on teacher.id = 1 and  teacher.id = timetable.teacherId and (time_begin = '12:00:00' or time_begin = '10:00:00')
inner join grup on grup.id = timetable.grupId
inner join student on grup.id = student.grupId
order by title;
