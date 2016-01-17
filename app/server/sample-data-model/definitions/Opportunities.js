defineOpportunities = function() {
  let sampleOpportunities = [
    {
      name: "ATT Hackathon 2015",
      slug: "hack15",
      description: "Da best",
      opportunityType: "event",
      sponsor: "philipjohnson",
      tags: ["software-engineering"],
      startActive: moment("2015-01-12").toDate(),
      endActive: moment("2015-02-12").toDate()
    },
    {
      name: "ACM Manoa Membership",
      slug: "acm-manoa",
      description: "ACM Student Chapter",
      opportunityType: "club",
      sponsor: "henricasanova",
      tags: ["software-engineering", "silicon-valley"],
      startActive: moment("2015-01-12").toDate(),
      endActive: moment("2016-02-12").toDate()
    },
      /* Define two new opportunities: IEEE Student Branch and one of your choice. */
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
  ];

  _.each(sampleOpportunities, RadGrad.opportunity.define);
};