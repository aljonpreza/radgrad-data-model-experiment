defineStudentProfile = function() {
  /** Students **/
  let acID = RadGrad.user.findBySlug("anthonychriste")._id;
  let johndoeID = RadGrad.user.findBySlug("johndoe")._id;
  let janedoeID = RadGrad.user.findBySlug("janedoe")._id;

  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  let sampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: acID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: acID}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: acID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID
    }
  ];

  let sampleOpportunityInstanceIDs = _.map(sampleOpportunityInstanceData, RadGrad.opportunityinstance.define);

  let sampleDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs,
    workInstanceIDs: sampleWorkInstanceIDs,
    studentID: acID
  });

  RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);
  RadGrad.user.setDegreeGoalIDs(acID, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID, "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1eb/082/154da42.jpg");
  RadGrad.user.setAboutMe(acID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Fall", 2018));

  /**
   * John Doe's Profile
   **/
  let johndoeWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 20, studentID: johndoeID},
    {semesterID: RadGrad.semester.get("Spring", 2015), hrswk: 25, studentID: johndoeID}
  ];

  let johndoeWorkInstanceIDs = _.map(johndoeWorkInstanceData, RadGrad.workinstance.define);

  let johndoeCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ics141", verified: false, grade: "B", studentID: johndoeID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: johndoeID, note: "ENG 100"},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics212", verified: true, grade: "A", studentID: johndoeID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics314", verified: true, grade: "A", studentID: johndoeID}
  ];

  let johndoeCourseInstanceIDs = _.map(johndoeCourseInstanceData, RadGrad.courseinstance.define);

  let johndoeOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: johndoeID},
    {
      semesterID: RadGrad.semester.get("Spring", 2015),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: johndoeID
    },
    {semesterID: RadGrad.semester.get("Spring", 2014), opportunity: "ieee-student-branch", verified: true, hrswk: 20, studentID: johndoeID},
    {semesterID: RadGrad.semester.get("Fall", 2016), opportunity: "google-code-jam-2016", verified: true, hrswk: 30, studentID: johndoeID}
  ];

  let johndoeOpportunityInstanceIDs = _.map(johndoeOpportunityInstanceData, RadGrad.opportunityinstance.define);

  let johndoeDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: johndoeCourseInstanceIDs,
    opportunityInstanceIDs: johndoeOpportunityInstanceIDs,
    workInstanceIDs: johndoeWorkInstanceIDs,
    studentID: johndoeID
  });

  RadGrad.user.setDegreePlanID(johndoeID, johndoeDegreePlan);
  RadGrad.user.setDegreeGoalIDs(johndoeID, [RadGrad.slug.getEntityID("degree-goal-network-eng", "DegreeGoal")]);
  RadGrad.user.setAboutMe(johndoeID, "Love to learn.");
  let johndoeInterests = [
    RadGrad.slug.getEntityID("professor", "Tag"),
    RadGrad.slug.getEntityID("hawaii", "Tag")
  ];
  RadGrad.user.setInterestTagIDs(johndoeID, johndoeInterests);
  RadGrad.user.setPicture(johndoeID, "https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif");
  RadGrad.user.setSemesterID(johndoeID, RadGrad.semester.get("Fall", 2018));


  /**
   * Jane Doe's Profile
   **/
  let janedoeWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: janedoeID},
    {semesterID: RadGrad.semester.get("Spring", 2015), hrswk: 15, studentID: janedoeID}
  ];

  let janedoeWorkInstanceIDs = _.map(janedoeWorkInstanceData, RadGrad.workinstance.define);

  let janedoeCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: true, grade: "C", studentID: janedoeID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics314", verified: true, grade: "B", studentID: janedoeID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics462", verified: false, grade: "A", studentID: janedoeID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics484", verified: false, grade: "A", studentID: janedoeID}
  ];

  let janedoeCourseInstanceIDs = _.map(janedoeCourseInstanceData, RadGrad.courseinstance.define);

  let janedoeOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: janedoeID},
    {
      semesterID: RadGrad.semester.get("Spring", 2013),
      opportunity: "acm-manoa",
      verified: true,
      hrswk: 20,
      studentID: janedoeID
    },
    {semesterID: RadGrad.semester.get("Spring", 2015), opportunity: "ieee-student-branch", verified: true, hrswk: 20, studentID: janedoeID},
    {semesterID: RadGrad.semester.get("Fall", 2016), opportunity: "google-code-jam-2016", verified: true, hrswk: 30, studentID: janedoeID}
  ];

  let janedoeOpportunityInstanceIDs = _.map(janedoeOpportunityInstanceData, RadGrad.opportunityinstance.define);

  let janedoeDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: janedoeCourseInstanceIDs,
    opportunityInstanceIDs: janedoeOpportunityInstanceIDs,
    workInstanceIDs: janedoeWorkInstanceIDs,
    studentID: janedoeID
  });

  RadGrad.user.setDegreePlanID(janedoeID, janedoeDegreePlan);
  RadGrad.user.setDegreeGoalIDs(janedoeID, [RadGrad.slug.getEntityID("degree-goal-game-designer", "DegreeGoal")]);
  RadGrad.user.setAboutMe(janedoeID, "Learning to love.");
  let janedoeInterests = [
    RadGrad.slug.getEntityID("art", "Tag"),
    RadGrad.slug.getEntityID("visualization", "Tag"),
    RadGrad.slug.getEntityID("hawaii", "Tag")
  ];
  RadGrad.user.setInterestTagIDs(janedoeID, janedoeInterests);
  RadGrad.user.setPicture(janedoeID, "http://today.duke.edu/sites/default/files/stories/Facebook%20Female_web_V.jpg?1353955917");
  RadGrad.user.setSemesterID(janedoeID, RadGrad.semester.get("Fall", 2016));
};

