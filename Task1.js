const biodata = {
    name: "Fajry Alvin Hidayat",
    age: 24,
    hobbies: ["Gaming", "Football", "Listening a Music"],
    isMarried: false,
    schoolList: [ {
        name: "Universitas Muhammadiyah Yogyakarta",
        yearIn: 2018,
        yearOut: 2022,
        major: "International Relations"    
    },
    {
        name: "Universitas Gadjah Mada",
        yearIn: 2017,
        yearOut: 2021,
        major: "International Relations"
    }
],
    skills: [ {
        skillName: "JavaScript",
        level: "Beginner"
    },
    {
        skillName: "CSS",
        level: "Beginner",
    },
    {
        skillName: "HTML",
        level: "Beginner",
    },
],
    interestInCoding: true}
    console.log(biodata.schoolList[1].yearIn)