# RadGrad Data Model Experiment

![](https://raw.githubusercontent.com/aljonpreza/radgrad-data-model-experiment/master/doc/images/radgradex.png)

This application demonstrates my understanding of the [RadGrad data model](https://github.com/radgrad/data-model-example) by defining an arrangement of entities.


### Define four additional courses of your choice from the ICS curriculum.

```
    {
      name: "Discrete Math for CS I",
      slug: "ics141",
      number: "ICS 141",
      description: "Includes logic, sets, functions, matrices, algorithmic concepts, mathematical reasoning, recursion, counting techniques, and probability theory.",
      tags: ["software-engineering", "silicon-valley"]
    },
    {
      name: "Data Visualization",
      slug: "ics484",
      number: "ICS 484",
      description: "Introduction to data visualization through practical techniques for turning data into images to produce insight.",
      tags: ["visualization","art"]
    },
    {
      name: "Software Engineering I",
      slug: "ics314",
      number: "ICS 314",
      description: "Problem analysis and design, team-oriented development, quality assurance, configuration management, project planning.",
      tags: ["software-engineering", "silicon-valley"]
    },
    {
      name: "AI for Games",
      slug: "ics462",
      number: "ICS 462",
      description: "Techniques to stimulate intelligence in video games: movement, pathfinding with A* search, decision/behavior trees, state machines, machine learning, tactics.",
      tags: ["art","software-engineering"]
    }
```
### Define one new degree goal, “Network Engineer”, and another one of your own choosing.
```
    {name: "Network Engineer", slug: "degree-goal-network-eng", description:"Establishes and maintains network performance by building net configurations and connections."},
    {name: "Game Designer", slug: "degree-goal-game-designer", description:"Designs and develop video and computer games."}
```
### Define one new opportunity, “IEEE Student Branch”, and another one of your own choosing.
```
    {
      name: "IEEE Student Branch",
      slug: "ieee-student-branch",
      description: "A leading authority in technical areas ranging from computer engineering, biomedical technology, electric power, telecommunications, aerospace and consumer electronics.",
      opportunityType: "club",
      sponsor: "henricasanova",
      tags: ["software-engineering", "silicon-valley"],
      startActive: moment("2015-01-12").toDate(),
      endActive: moment("2016-02-12").toDate()
    },
    {
      name: "Google Code Jam 2016",
      slug: "google-code-jam-2016",
      description: "Consists of intense algorithmic puzzles held over multiple online rounds and culminates in an Onsite Final round.",
      opportunityType: "event",
      sponsor: "philipjohnson",
      tags: ["software-engineering"],
      startActive: moment("2016-03-26").toDate(),
      endActive: moment("2016-03-26").toDate()
    }
```
### Define four new Tags of your own choosing. They should be useful and relevant to computer science students.
```
    {
      name: "Visualization",
      slug: "visualization",
      description: "Process of representing abstract business or scientific data as images that can aid in understanding the meaning of the data.",
      tagType: "cs-disciplines"
    },
    {
      name: "Professor",
      slug: "professor",
      description: "A teacher especially of the highest rank at a college or university.",
      tagType: "professional-goals"
    },
    {
      name: "Art",
      slug: "art",
      description: "The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Hawaii",
      slug: "hawaii",
      description: "U.S. state that is an isolated volcanic archipelago in the Central Pacific.",
      tagType: "locations"
    }
```
### Define two new students. Each student should have at least four course instances, and four opportunity instances. Make sure all of your new additions are incorporated into the student profile definitions.

```
    {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      slug: "johndoe",
      password: "foo",
      uhEmail: "johndoe@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Jane",
      middleName: "",
      lastName: "Doe",
      slug: "janedoe",
      password: "foo",
      uhEmail: "janedoe@hawaii.edu",
      role: RadGrad.role.student
    }
```
Please refer to the [StudentProfile.js](https://github.com/aljonpreza/radgrad-data-model-experiment/blob/master/app/server/sample-data-model/definitions/StudentProfile.js) file to see John and Jane's profile definitions.

