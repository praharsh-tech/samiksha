/************************************************
 📌 TEMPORARY DATABASE (Frontend Only)
 📌 Will be replaced by Backend later
************************************************/

export const students = [
  {
    id: 1,
    prn: "001",
    password: "stud",

    profile: {
      name: "samiksha Patil",
      branch: "computer scicene",
      year: "final year",
      division: "A",
      email: "samiksha.patil@college.edu",
      phone: "9876543210"
    },

    attendance: {
      DBMS: 82,
      OS: 76,
      CN: 88,
      SE: 90
    },

    marks: {
      DBMS: 24,
      OS: 21,
      CN: 26,
      SE: 28
    },

    examForm: {
      filled: false,        // ❗ future backend use
      semester: "Sem IV",
      lastDate: "2026-02-10"
    }
  },

  {
    id: 2,
    prn: "22IT002",
    password: "student002",

    profile: {
      name: "Rohit Deshmukh",
      branch: "Information Technology",
      year: "Second Year",
      division: "A",
      email: "rohit.d@college.edu",
      phone: "9123456780"
    },

    attendance: {
      DBMS: 74,
      OS: 69,
      CN: 80,
      SE: 85
    },

    marks: {
      DBMS: 20,
      OS: 19,
      CN: 23,
      SE: 25
    },

    examForm: {
      filled: true,
      semester: "Sem IV",
      lastDate: "2026-02-10"
    }
  },

  {
    id: 3,
    prn: "22IT003",
    password: "student003",

    profile: {
      name: "Sneha Kulkarni",
      branch: "Information Technology",
      year: "Second Year",
      division: "B",
      email: "sneha.k@college.edu",
      phone: "9988776655"
    },

    attendance: {
      DBMS: 91,
      OS: 88,
      CN: 92,
      SE: 94
    },

    marks: {
      DBMS: 27,
      OS: 26,
      CN: 28,
      SE: 29
    },

    examForm: {
      filled: false,
      semester: "Sem IV",
      lastDate: "2026-02-10"
    }
  },

  {
    id: 4,
    prn: "22IT004",
    password: "student004",

    profile: {
      name: "Kunal Borse",
      branch: "Information Technology",
      year: "Second Year",
      division: "B",
      email: "kunal.b@college.edu",
      phone: "9090909090"
    },

    attendance: {
      DBMS: 65,
      OS: 60,
      CN: 70,
      SE: 75
    },

    marks: {
      DBMS: 18,
      OS: 16,
      CN: 20,
      SE: 22
    },

    examForm: {
      filled: true,
      semester: "Sem IV",
      lastDate: "2026-02-10"
    }
  },

  {
    id: 5,
    prn: "22IT005",
    password: "student005",

    profile: {
      name: "Neha Chavan",
      branch: "Information Technology",
      year: "Second Year",
      division: "A",
      email: "neha.c@college.edu",
      phone: "9555444333"
    },

    attendance: {
      DBMS: 86,
      OS: 83,
      CN: 85,
      SE: 88
    },

    marks: {
      DBMS: 25,
      OS: 24,
      CN: 26,
      SE: 27
    },

    examForm: {
      filled: false,
      semester: "Sem IV",
      lastDate: "2026-02-10"
    }
  }
];

export const users = [

/************************************************
 👨‍💼 PRINCIPAL
************************************************/
{
id: 1,
name: "Dr. C. F. Pothbare",
username: "principal",
password: "1234",
email: "pothbare@college.edu",
phone: "9999990101",
dept: "Administration",
role: "principal",
pfp: "./assets/principal.jpg"
},

/************************************************
 👨‍🏫 HODs
************************************************/

{
id: 2,
name: "Dr. S. R. Patil",
username: "hod_it",
password: "1234",
email: "hod_it@college.edu",
phone: "9999990201",
dept: "Information Technology",
role: "hod",
pfp: "./assets/hod_it.jpg"
},

{
id: 3,
name: "Dr. A. K. Deshmukh",
username: "hod_mech",
password: "1234",
email: "hod_mech@college.edu",
phone: "9999990202",
dept: "Mechanical",
role: "hod",
pfp: "./assets/hod_mech.jpg"
},

{
id: 4,
name: "Dr. R. P. Sharma",
username: "hod_elec",
password: "1234",
email: "hod_elec@college.edu",
phone: "9999990203",
dept: "Electrical",
role: "hod",
pfp: "./assets/hod_elec.jpg"
},

{
id: 5,
name: "Dr. V. M. Joshi",
username: "hod_civil",
password: "1234",
email: "hod_civil@college.edu",
phone: "9999990204",
dept: "Civil",
role: "hod",
pfp: "./assets/hod_civil.jpg"
},

/************************************************
 👨‍🏫 FACULTY (OPTIONAL - FUTURE USE)
************************************************/

{
id: 6,
name: "Prof. Rohit Bansod",
username: "fac_it_1",
password: "1234",
email: "rohit@college.edu",
phone: "9999990301",
dept: "Information Technology",
role: "faculty",
pfp: "./assets/faculty1.jpg"
},

{
id: 7,
name: "Prof. Satyajeet Patil",
username: "fac_mech_1",
password: "1234",
email: "satyajeet@college.edu",
phone: "9999990302",
dept: "Mechanical",
role: "faculty",
pfp: "./assets/faculty2.jpg"
}

];