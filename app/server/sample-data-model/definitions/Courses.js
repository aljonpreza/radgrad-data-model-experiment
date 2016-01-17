defineCourses = function() {
  let sampleCourses = [
    {
      name: "Program Structure",
      slug: "ics212",
      number: "ICS 212",
      description: "Program organization paradigms, programming environments, implementation of a module from specifications, the C and C++ programming languages.",
      tags: ["software-engineering"]
    },
    {
      name: "nonICS 100-level course",
      slug: "nonICS-1xx",
      number: "nonICS 1xx",
      description: "Any non ICS course at the 100 level.",
      tags: []
    },
    {
      name: "Algorithms",
      slug: "ics311",
      number: "ICS 311",
      description: "Design and correctness of algorithms, including divide-and-conquer, greedy and dynamic programming methods.",
      tags: ["software-engineering", "silicon-valley"]
    },
      /* Define 4 additional courses */
    {
      name: "Discrete Math for CS I",
      slug: "ics141",
      number: "ICS 141",
      description: "Includes logic, sets, functions, matrices, algorithmic concepts, mathematical reasoning, recursion, counting techniques, and probability theory.",
      tags: []
    },
    {
      name: "Data Visualization",
      slug: "ics484",
      number: "ICS 484",
      description: "Introduction to data visualization through practical techniques for turning data into images to produce insight.",
      tags: []
    },
    {
      name: "Software Engineering I",
      slug: "ics314",
      number: "ICS 314",
      description: "Problem analysis and design, team-oriented development, quality assurance, configuration management, project planning.",
      tags: []
    },
    {
      name: "AI for Games",
      slug: "ics462",
      number: "ICS 462",
      description: "Techniques to stimulate intelligence in video games: movement, pathfinding with A* search, decision/behavior trees, state machines, machine learning, tactics.",
      tags: []
    }
  ];

  _.each(sampleCourses, RadGrad.course.define);
};
