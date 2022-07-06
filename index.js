const allStages = {
  // related to the mcq test
  enrolmentKeyGenerated: "Enrolment Key Generated",
  basicDetailsEntered: "Basic Details Entered",
  // english interviews
  pendingEnglishInterview: "English Interview Pending (2nd Round)",
  // forReviewEnglishInterview: "English Interview For Review",
  englishInterviewFail: "English Interview Failed",
  // englishInterviewWaitlisted: "English Interview Waitlisted",

  // algebra interviews
  pendingAlgebraInterview: "Algebra Interview Pending (3rd Round)",
  // forReviewAlgebraInterviewDone: "Algebra Interview For Review",
  algebraInterviewFail: "Algebra Interview Failed",
  // algebraInterviewWaitlisted: "Algebra Interview Waitlisted",

  // culture fit interviews
  pendingCultureFitInterview: "Culture Fit Interview Pending (4th Round)",

  // cultureFitInterviewWaitlisted: "Culture Fit Interview Waitlisted",
  pendingCultureFitReinterview: "Pending Culture Fit Re-Interview",
  cultureFitInterviewFail: "Culture Interview Failed",

  // parent conversations
  pendingParentConversation: "Pending Parent Conversations",
  parentConversationFail: "Parent Conversation Failed",

  // selection
  selected: "Selected",
  selectedAndJoiningAwaited: "Selected & Joining Awaited",
  selectedButNotJoined: "Selected But Not Joined",
  offerLetterSent: "Offer Letter Sent",

  // travel planning
  pendingTravelPlanning: "Pending Travel Plans",
  finalisedTravelPlans: "Finalized Travel Plans",

  // probation etc. once when the student has joined navgurukul
  // probation: "Probation",
  deferredJoining: "Deferred Joining",
  finallyJoined: "Joined",
  // droppedOut: "Dropped Out",
  // sentBackAfterProbation: "Probation Failed",

  // is not reachable
  becameDisIntersested: "Became Disinterested",
  // disqualifiedUnreachable: "Can`t reach Student",
  notReachable: "Unreachable",

  // diversity based decision
  disqualifiedAfterDiversityFilter: "Diversity Failed",
  diversityBasedDecisionPending: "Decision Pending based on Diversity",

  // random stages for internal use
  possibleDuplicate: "Duplicate",
  // needAction: "Need Action",
  // demo: "Not Clear???",
  caughtCheating: "Caught Cheating",
  tuitionGroup: "Tution Group",

  requestCallback: "Requested Callback",
  // pendingCallbackForQuery: "Pending Callback",
  // forReviewCallbackQueryResolved: "For Review CallbackQuery Resolved",
  queryResolvedAfterCallback: "Query Resolved After CallBack",
  testFailed: "Test Failed",
  M1: "English & Quarantine",
  M2: "Dry Run",
  M3: "If - Else",
  M4: "Loops",
  M5: "Lists",
  M6: "Functions",
  M7: "Python Complete",
  M8: "Hangman, Requests & more",
  M9: "Web Scraping",
  M10: "Javascript / ES6",
  M11: "NodeJS - Callbacks & Async",
  M12: "React - HTML & CSS",
  M13: "NodeJS - CRUD",
  M14: "React - Bootstrap & Jquery",
  M15: "NodeJS - MySQL/Knex/Joi",
  M16: "React - State, Props & Components",
  M17: "NodeJS: JWT",
  M18: "React - React Lifecycle",
  M19: "Project 1",
  M20: "Project 2",
  M21: "Interview Preparation",
  M22: "Job Search",
  onLeave: "On Leave",
  droppedOut: "Dropped Out",
  inJob: "In Job",
  payingForward: "Paying Forward",
  paidForward: "Paid Forward",
};

const campusStageOfLearning = {
  finallyJoined: "Joined",
  M1: "English & Quarantine",
  M2: "Dry Run",
  M3: "If - Else",
  M4: "Loops",
  M5: "Lists",
  M6: "Functions",
  M7: "Python Complete",
  M8: "Hangman, Requests & more",
  M9: "Web Scraping",
  M10: "Javascript / ES6",
  M11: "NodeJS - Callbacks & Async",
  M12: "React - HTML & CSS",
  M13: "NodeJS - CRUD",
  M14: "React - Bootstrap & Jquery",
  M15: "NodeJS - MySQL/Knex/Joi",
  M16: "React - State, Props & Components",
  M17: "NodeJS: JWT",
  M18: "React - React Lifecycle",
  M19: "Project 1",
  M20: "Project 2",
  M21: "Interview Preparation",
  M22: "Job Search",
  onLeave: "On Leave",
  droppedOut: "Dropped Out",
  inJob: "In Job",
  payingForward: "Paying Forward",
  paidForward: "Paid Forward",
};

const campus = [
  { id: 1, name: "Pune" },
  { id: 2, name: "Dharamshala" },
  { id: 3, name: "Bangalore" },
  { id: 4, name: "Sarjapura" },
  { id: 5, name: "Tripura" },
  { id: 6, name: "Delhi" },
  // { id: 7, name: "Punjab" },
];
const donor = [
  { id: 1, name: "Accenture C1" },
  { id: 2, name: "Accenture C2" },
  { id: 3, name: "Accenture C3" },
  { id: 4, name: "Microsoft C1" },
  { id: 5, name: "KPMG C1" },
];

const subStage = ["understood", "confused", "need revision"];

const endStages = [
  "deferredJoining",
  "notReachable",
  "testFailed",
  "possibleDuplicate",
  "parentConversationFail",
  "finalisedTravelPlans",
  "queryResolvedAfterCallback",
  "cultureFitInterviewFail",
  "englishInterviewFail",
];

const feedbackableStagesData = {
  pendingEnglishInterview: {
    deadline: 48,
    status: [
      "passed",
      "failed",
      "review",
      "edgeCase",
      "unreachable(1st call done)",
      "unreachable(2nd call done)",
      "unreachable(3rd call done)",
      "disinterested",
      "notResponding(1st call done)",
      "notResponding(2nd call done)",
      "notResponding(3rd call done)",
    ],
  },
  pendingAlgebraInterview: {
    deadline: 60,
    status: [
      "passed",
      "failed",
      "review",
      "unreachable(1st call done)",
      "unreachable(2nd call done)",
      "unreachable(3rd call done)",
      "disinterested",
      "notResponding(1st call done)",
      "notResponding(2nd call done)",
      "notResponding(3rd call done)",
      "Tution Group",
    ],
  },
  pendingCultureFitInterview: {
    deadline: 48,
    status: [
      "perfectFit",
      "failed",
      "edgeCase",
      "needBased",
      "review",
      "unreachable(1st call done)",
      "unreachable(2nd call done)",
      "unreachable(3rd call done)",
      "disinterested",
      "notResponding(1st call done)",
      "notResponding(2nd call done)",
      "notResponding(3rd call done)",
    ],
  },
  pendingTravelPlanning: {
    deadline: 24,
    status: [
      "finalised",
      "reimbursement",
      "failed",
      "joinedMeraki",
      "unreachable(1st call done)",
      "unreachable(2nd call done)",
      "unreachable(3rd call done)",
      "notResponding(1st call done)",
      "notResponding(2nd call done)",
      "notResponding(3rd call done)",
      "disinterested",
      "ticketBooked",
      "needFinancialSupport",
      "talkToParents",
    ],
  },
  finalisedTravelPlans: {
    status: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Uninterested",
    ],
  },
  deferredJoining: {
    status: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  pendingParentConversation: {
    deadline: 24,
    status: [
      "passed",
      "failed",
      "review",
      "unreachable(1st call done)",
      "unreachable(2nd call done)",
      "unreachable(3rd call done)",
      "disinterested",
    ],
  },
  algebraInterviewFail: {
    status: [
      "joinedMeraki",
      "unreachable(1st call done)",
      "unreachable(2nd call done)",
      "unreachable(3rd call done)",
      "notResponding(1st call done)",
      "notResponding(2nd call done)",
      "notResponding(3rd call done)",
    ],
  },
  englishInterviewFail: {
    status: [
      "joinedMeraki",
      "unreachable(1st call done)",
      "unreachable(2nd call done)",
      "unreachable(3rd call done)",
      "notResponding(1st call done)",
      "notResponding(2nd call done)",
      "notResponding(3rd call done)",
    ],
  },
  cultureFitInterviewFail: {
    status: [
      "joinedMeraki",
      "unreachable(1st call done)",
      "unreachable(2nd call done)",
      "unreachable(3rd call done)",
      "notResponding(1st call done)",
      "notResponding(2nd call done)",
      "notResponding(3rd call done)",
    ],
  },
  becameDisIntersested: {
    deadline: 60,
    status: [
      "reason",
      "noReason",
      "unreachable(1st call done)",
      "unreachable(2nd call done)",
      "unreachable(3rd call done)",
    ],
  },
  tuitionGroup: {
    deadline: 24,
    status: [
      "passed",
      "failed",
      "review",
      "unreachable(1st call done)",
      "unreachable(2nd call done)",
      "unreachable(3rd call done)",
      "disinterested",
      "notResponding(1st call done)",
      "notResponding(2nd call done)",
      "notResponding(3rd call done)",
    ],
  },
  requestCallback: {
    deadline: 60,
    status: [
      "resolved",
      "informedTeam",
      "unreachable(1st call done)",
      "unreachable(2nd call done)",
      "unreachable(3rd call done)",
    ],
  },
  M1: {
    status: subStage,
  },

  M2: {
    status: subStage,
  },
  M3: {
    status: subStage,
  },
  M4: {
    status: subStage,
  },
  M5: {
    status: subStage,
  },
  M6: {
    status: subStage,
  },
  M7: {
    status: subStage,
  },
  M8: {
    status: subStage,
  },
  M9: {
    status: subStage,
  },
  M10: {
    status: subStage,
  },
  M11: {
    status: subStage,
  },
  M12: {
    status: subStage,
  },
  M13: {
    status: subStage,
  },
  M14: {
    status: subStage,
  },
  M15: {
    status: subStage,
  },
  M16: {
    status: subStage,
  },
  M17: {
    status: subStage,
  },
  M18: {
    status: subStage,
  },
  M19: {
    status: subStage,
  },
  M20: {
    status: subStage,
  },
  M21: {
    status: subStage,
  },
  M22: {
    status: subStage,
  },
  onLeave: {
    status: ["Medical", "Exams", "Others"],
  },
  selectedButNotJoined: null,
};

const feedbackableStages = Object.keys(feedbackableStagesData);
const permissions = {
  permissionsView: ["kirithiv@navgurukul.org", "vaibhavmagar@navgurukul.org"],
  updateStage: [
    "admission@navgurukul.org",
    "anushkag20@navgurukul.org",
    "nidhi@navgurukul.org",
    "manisha@navgurukul.org",
    "saquib@navgurukul.org",
    "swanand@navgurukul.org",
    "kirithiv@navgurukul.org",
    "saquib18@navgurukul.org",
    "kirithivr19@navgurukul.org",
    "anand@navgurukul.org",
    "komala@navgurukul.org",
    "poonam@navgurukul.org",
    "r@navgurukul.org",
    "s@navgurukul.org",
    "nilam@navgurukul.org",
    "a@navgurukul.org",
    "nitesh@navgurukul.org",
    "kumar19@navgurukul.org",
    "lalita17@navgurukul.org",
    "ranis19@navgurukul.org",
    "Peter19@navgurukul.org",
    "rahit@navgurukul.org",
    "aman18@navgurukul.org",
    "aman@navgurukul.org",
    "shivanimalviya20@navgurukul.org",
    "rubina20@navgurukul.org",
    "kittiy@navgurukul.org",
    "rose@navgurukul.org",
    "komal@navgurukul.org",
    "komal18@navgurukul.org",
    "pooja@navgurukul.org",
    "vimla20@navgurukul.org",
    "sanjana20@navgurukul.org",
    "anamika20@navgurukul.org",
    "shahnaaz@navgurukul.org",
    "bhartikumari20@navgurukul.org",
    "shweta@navgurukul.org",
    "subhash20@navgurukul.org",
    "ranjan20@navgurukul.org",
    "kumar@navgurukul.org",
    "pranjali20@navgurukul.org",
    "kalpana20@navgurukul.org",
    "shahina@navgurukul.org",
    "ranjana20@navgurukul.org",
    "shreshta20@navgurukul.org",
    "usha20@navgurukul.org",
    "ishitav20@navgurukul.org",
    "somisingh20@navgurukul.org",
    "meghakashyap20@navgurukul.org",
    "shanti@navgurukul.org",
    "swati@navgurukul.org",
    "himani21@navgurukul.org",
    "reena20@navgurukul.org",
    "mohammedsana20@navgurukul.org",
    "anshika21@navgurukul.org",
    "ruchi20@navgurukul.org",
    "jayshrirathod20@navgurukul.org",
    "ayushi21@navgurukul.org",
    "shubhangimhetre20@navgurukul.org",
    "priyankadangwal20@navgurukul.org",
    "riyasingh21@navgurukul.org",
    "nasringulnaaz21@navgurukul.org",
    "sindhu@navgurukul.org",
    "Himalik@navgurukul.org",
    "sweetyparveen21@navgurukul.org",
    "shikha21@navgurukul.org",
    "vaibhavmagar@navgurukul.org",
    "sweetyparveen21@navgurukul.org",
    "riyasingh21@navgurukul.org",
    "sushreesupriti21@navgurukul.org",
    "astha@navgurukul.org",
    "Pihu20@navgurukul.org",
    "Dorababu@navgurukul.org",
    "Pranav@navgurukul.org",
    "vikash21@navgurukul.org",
    "kajalk20@navgurukul.org",
    "anoj@navgurukul.org",
    "kartik@navgurukul.org",
    "satish21@navgurukul.org"
  ],

  updateStudentName: [
    "komal@navgurukul.org",
    "shreshta20@navgurukul.org",
    "kumar@navgurukul.org",
    "rahit@navgurukul.org",
    "shweta@navgurukul.org",
    "shahnaaz@navgurukul.org",
    "saquib@navgurukul.org",
    "saquib18@navgurukul.org",
    "rose@navgurukul.org",
    "nilam@navgurukul.org",
    "kittiy@navgurukul.org",
    "samyukta@navgurukul.org",
    "pooja@navgurukul.org",
    "shahina@navgurukul.org",
    "ranjana20@navgurukul.org",
    "pranjali20@navgurukul.org",
    "anshika21@navgurukul.org",
    "riyasingh21@navgurukul.org",
    "nasringulnaaz21@navgurukul.org",
    "sindhu@navgurukul.org",
    "Himalik@navgurukul.org",
    "kirithiv@navgurukul.org",
    "sweetyparveen21@navgurukul.org",
    "shikha21@navgurukul.org",
    "vaibhavmagar@navgurukul.org",
    "sweetyparveen21@navgurukul.org",
    "nitesh@navgurukul.org",
  ],
  addOrUpdateContact: [
    "rahit@navgurukul.org",
    "nilam@navgurukul.org",
    "nitesh@navgurukul.org",
    "kumar@navgurukul.org",
  ],
};

const superAdmin = ["a@navgurukul.org", "s@navgurukul.org", "r@navgurukul.org"];
const allTagsForOnlineClass = [
  "interviewPreparationClasses",
  "programmingClasses",
  "duplicate",
];
const contact_type = ["whatsapp", "primary", "other"];

module.exports = {
  campusStageOfLearning: campusStageOfLearning,
  allStages: allStages,
  studentStages: Object.keys(allStages),
  studentSubStage: subStage,
  campus,
  donor,
  feedbackableStages: feedbackableStages,
  feedbackableStagesData: feedbackableStagesData,
  permissions: permissions,
  feedbackableStagesWithTitles: feedbackableStages.map((x) => ({
    x: allStages[x],
  })),
  status: {
    pass: "Passed",
    failed: "Failed",
    pending: "Pending",
    forReview: "For Review",
    done: "Done",
  },
  caste: {
    obc: 1,
    scSt: 2,
    general: 3,
    others: 4,
  },
  religon: {
    hindu: 1,
    islam: 2,
    sikh: 3,
    jain: 4,
    christian: 5,
    others: 6,
    buddhism:7,
  },
  qualification: {
    lessThan10th: 1,
    class10th: 2,
    class12th: 3,
    graduate: 4,
    ba: 5,
    bcom: 6,
    mcom: 7,
    msc: 8,
    bca: 9,
    bsc: 10,
    bba: 11,
  },
  qualificationKeys: {
    1: "Less than 10th",
    2: "Class 10th",
    3: "Class 12th",
    4: "Graduate",
    5: "B.A.",
    6: "B.Com.",
    7: "M.Sc.",
    8: "BCA",
    9: "B.Sc.",
    10: "BBA",
  },
  currentStatus: {
    nothing: 1,
    job: 2,
    study: 3,
    other: 4,
  },
  endStages: endStages,
  superAdmin,
  allTagsForOnlineClass: allTagsForOnlineClass,
  contact_type,
  partner_refer: {
    1: "Shikhar School",
    2: "Lend a Hand India (LAHI)",
    3: "Charter for Compassionate",
    4: "Naz Foundation",
    5: "Youth for Seva",
    6: "CSEI",
    7: "Bharti Foundation",
    8: "Etasha",
    9: "Teach for India",
    10: "Sahyogini",
    11: "Social Media",
    12: "Website",
    13: "Friend/Family",
    14: "Others (Keep a manual entry option if the candidate chooses Others)",
  },
};
