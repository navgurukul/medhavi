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
  selectedPune: "Selected(Pune)",
  selectedBangalore: "Selected(Bangalore)",
  selectedSarjapura: "Selected(Sarjapura)",
  selectedDharamshala: "Selected(Dharamshala)",
  selected: "Selected",
  selectedAndJoiningAwaited: "Selected & Joining Awaited",
  offerLetterSent: "Offer Letter Sent",

  // travel planning
  pendingTravelPlanning: "Pending Travel Plans",
  finalisedTravelPlans: "Finalised Travel Plans",

  // probation etc. once when the student has joined navgurukul
  // probation: "Probation",
  deferredJoining: "Deferred Joining",
  finallyJoined: "Joined",
  finallyJoinedDharamshala: "Joined(Dharamshala)",
  finallyJoinedPune: "Joined(Pune)",
  finallyJoinedBangalore: "Joined(Bangalore)",
  finallyJoinedSarjapura: "Joined(Sarjapura)",
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
  leaveMedical: "On Leave (Medical)",
  leaveExams: "On Leave (Exams)",
  leaveOthers: "On Leave (Other)",
  droppedOutDharamshala: "Dropped Out (Dharamshala)",
  droppedOutBangalore: "Dropped Out (Bangalore)",
  droppedOutSarjapura: "Dropped Out (Sarjapura)",
  droppedOutPune: "Dropped Out (Pune)",
  droppedOut: "Dropped Out",
  inJob: "In Job",
  payingForward: "Paying Forward",
  paidForward: "Paid Forward",
};

const campus = ["Pune", "Banglore", "Sarjapura", "Dharmashala"];

const donor = ["Microsoft & Accenture", "KPMG", "Accenture"];

const subStage = ["understood", "confused", "need revision"];

const allSubStages = {
  // related to the mcq test
  enrolmentKeyGenerated: [],
  basicDetailsEntered: [],
  pendingEnglishInterview: [],
  englishInterviewFail: [],

  // algebra interviews
  pendingAlgebraInterview: [],
  algebraInterviewFail: [],

  // culture fit interviews
  pendingCultureFitInterview: [],

  pendingCultureFitReinterview: [],
  cultureFitInterviewFail: [],

  // parent conversations
  pendingParentConversation: [],
  parentConversationFail: [],

  // selection
  selectedPune: [],
  selectedBangalore: [],
  selectedSarjapura: [],
  selectedDharamshala: [],
  selected: [],
  selectedAndJoiningAwaited: [],
  offerLetterSent: [],

  // travel planning
  pendingTravelPlanning: [],
  finalisedTravelPlans: [],

  // probation etc. once when the student has joined navgurukul
  // probation: "Probation",
  deferredJoining: [],
  finallyJoined: [],
  finallyJoinedDharamshala: [],
  finallyJoinedPune: [],
  finallyJoinedBangalore: [],
  finallyJoinedSarjapura: [],

  // is not reachable
  becameDisIntersested: [],
  notReachable: [],

  // diversity based decision
  disqualifiedAfterDiversityFilter: [],
  diversityBasedDecisionPending: [],

  // random stages for internal use
  possibleDuplicate: [],
  caughtCheating: [],
  tuitionGroup: [],

  requestCallback: [],
  queryResolvedAfterCallback: [],
  testFailed: [],
  M1: subStage,
  M2: subStage,
  M3: subStage,
  M4: subStage,
  M5: subStage,
  M6: subStage,
  M7: subStage,
  M8: subStage,
  M9: subStage,
  M10: subStage,
  M11: subStage,
  M12: subStage,
  M13: subStage,
  M14: subStage,
  M15: subStage,
  M16: subStage,
  M17: subStage,
  M18: subStage,
  M19: subStage,
  M20: subStage,
  M21: subStage,
  M22: subStage,
  leaveMedical: [],
  leaveExams: [],
  leaveOthers: [],
  droppedOutDharamshala: [],
  droppedOutBangalore: [],
  droppedOutSarjapura: [],
  droppedOutPune: [],
  droppedOut: [],
  inJob: [],
  payingForward: [],
  paidForward: [],
};

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
      "unreachable",
      "disinterested",
      "notResponding",
    ],
  },
  pendingAlgebraInterview: {
    deadline: 60,
    status: [
      "passed",
      "failed",
      "review",
      "unreachable",
      "disinterested",
      "notResponding",
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
      "unreachable",
      "disinterested",
      "notResponding",
    ],
  },
  pendingTravelPlanning: {
    deadline: 24,
    status: [
      "finalised",
      "reimbursement",
      "failed",
      "joinedMeraki",
      "unreachable",
      "notResponding",
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
    status: ["passed", "failed", "review", "unreachable", "disinterested"],
  },
  algebraInterviewFail: {
    status: ["joinedMeraki", "unreachable", "notResponding"],
  },
  englishInterviewFail: {
    status: ["joinedMeraki", "unreachable", "notResponding"],
  },
  cultureFitInterviewFail: {
    status: ["joinedMeraki", "unreachable", "notResponding"],
  },
  becameDisIntersested: {
    deadline: 60,
    status: ["reason", "noReason", "unreachable"],
  },
  tuitionGroup: {
    deadline: 24,
    status: ["added", "uninterested", "unreachable"],
  },
  requestCallback: {
    deadline: 60,
    status: ["resolved", "informedTeam", "unreachable"],
  },
};

const feedbackableStages = Object.keys(feedbackableStagesData);

const permissions = {
  updateStage: [
    "saquib",
    "saquib18",
    "anand",
    "komala",
    "poonam",
    "r",
    "s",
    "nilam",
    "a",
    "nitesh",
    "kumar19",
    "lalita17",
    "ranis19",
    "Peter19",
    "rahit",
    "aman18",
    "aman",
    "shivanimalviya20",
    "rubina20",
    "kittiy",
    "rose",
    "komal",
    "komal18",
    "pooja",
  ],
  addOrUpdateContact: ["rahit", "nilam", "nitesh", "kumar19"],
};

const superAdmin = ["a@navgurukul.org", "s@navgurukul.org", "r@navgurukul.org"];
const allTagsForOnlineClass = [
  "interviewPreparationClasses",
  "programmingClasses",
  "duplicate",
];
const contact_type = ["whatsapp", "primary", "other"];

module.exports = {
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
};
