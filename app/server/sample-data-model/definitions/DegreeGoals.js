defineDegreeGoals = function() {
  let sampleDegreeGoals = [
    {name: "Silicon Valley Tech", slug: "degree-goal-sv-tech", description: "TBD"},
    {name: "Ph.D. Prep", slug: "degree-goal-phd-prep", description: "TBD"},
    {name: "security", slug: "degree-goal-security", description: "TBD"},
      /* Define two new degree goals: Networking Engineer and one of your choice */
    {name: "Network Engineer", slug: "degree-goal-network-eng", description:"Establishes and maintains network performance by building net configurations and connections."},
    {name: "Game Designer", slug: "degree-goal-game-designer", description:"Designs and develop video and computer games."}
  ];

  _.each(sampleDegreeGoals, RadGrad.degreegoal.define);
};