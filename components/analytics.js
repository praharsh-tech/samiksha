/************************************************
 📊 ANALYTICS UTILS (GLOBAL)
************************************************/

/***********************
 TOTAL STUDENTS
***********************/
export function getTotalStudents(students) {
  return students.length;
}

/***********************
 TOTAL DEPARTMENTS
***********************/
export function getDepartments(students) {
  return [...new Set(students.map(s => s.profile.branch))];
}

/***********************
 AVG ATTENDANCE
***********************/
export function getAverageAttendance(students) {
  if (students.length === 0) return 0;

  const total = students.reduce((sum, s) => sum + s.attendance, 0);
  return (total / students.length).toFixed(1);
}

/***********************
 AVG MARKS
***********************/
export function getAverageMarks(students) {
  if (students.length === 0) return 0;

  const total = students.reduce((sum, s) => sum + s.marks, 0);
  return (total / students.length).toFixed(1);
}

/***********************
 DEPARTMENT STATS
***********************/
export function getDeptStats(students) {
  const deptStats = {};

  students.forEach(s => {
    const dept = s.profile.branch;

    if (!deptStats[dept]) {
      deptStats[dept] = {
        count: 0,
        attendance: 0,
        marks: 0
      };
    }

    deptStats[dept].count++;
    deptStats[dept].attendance += s.attendance;
    deptStats[dept].marks += s.marks;
  });

  // convert to usable array
  return Object.keys(deptStats).map(dept => {
    const d = deptStats[dept];

    return {
      name: dept,
      count: d.count,
      avgAttendance: (d.attendance / d.count).toFixed(1),
      avgMarks: (d.marks / d.count).toFixed(1)
    };
  });
}

/***********************
 TOP STUDENTS
***********************/
export function getTopStudents(students, limit = 5) {
  return [...students]
    .sort((a, b) => b.marks - a.marks)
    .slice(0, limit);
}

/***********************
 LOW ATTENDANCE
***********************/
export function getLowAttendanceStudents(students, threshold = 75) {
  return students.filter(s => s.attendance < threshold);
}

/***********************
 SEARCH STUDENT
***********************/
export function findStudent(students, query) {
  const q = query.toLowerCase();

  return students.find(s =>
    s.prn === query ||
    s.profile.name.toLowerCase().includes(q)
  );
}