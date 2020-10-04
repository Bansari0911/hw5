(function () {
  const studentList = [
    {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98],
    },
    {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100],
    },
    {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100],
    },
    {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85],
    },
    {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98],
    },
    {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90],
    },
  ];

  function minScore(grades) {
    return grades.reduce((a, b) => {
      a = b < a ? b : a;
      return a;
    }, Infinity);
  }

  function maxScore(grades) {
    return grades.reduce((a, b) => {
      a = b > a ? b : a;
      return a;
    }, 0);
  }

  function averageScore(grades) {
    return grades.reduce((a, b) => a + b, 0) / grades.length;
  }

  const result = studentList
    .filter((student) => student.lastName.toLowerCase().indexOf("c") === 0)
    .map((student) => {
      return {
        firstName: student.firstName,
        lastName: student.lastName,
        minScore: minScore(student.scores),
        maxScore: maxScore(student.scores),
        avgScore: averageScore(student.scores),
      };
    });
  console.log(result);
})();
