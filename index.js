const allStages = {
  // related to the mcq test
  enrolmentKeyGenerated: "Enrolment Key Generated",
  basicDetailsEntered: "Basic Details Entered",
  // english interviews
  pendingEnglishInterview: "English Interview Pending (2nd Round)",
  pendingEnglishInterview_Unreachable:
    "English Interview Pending (Unreachable)",
  pendingEnglishInterview_NotResponding:
    "English Interview Pending (Not Responding)",
  pendingEnglishInterview_BecameDisinterested:
    "English Interview Pending (Became Disinterested)",
  // forReviewEnglishInterview: 'English Interview For Review',
  englishInterviewFail: "English Interview Failed",
  // englishInterviewWaitlisted: 'English Interview Waitlisted',

  // algebra interviews
  pendingAlgebraInterview: "Algebra Interview Pending (3rd Round)",
  pendingAlgebraInterview_Unreachable:
    "Algebra Interview Pending (Unreachable)",
  pendingAlgebraInterview_NotResponding:
    "Algebra Interview Pending (Not Responding)",
  pendingAlgebraInterview_BecameDisinterested:
    "Algebra Interview Pending (Became Disinterested)",
  pendingAlgebraReInterview: "Algebra Interview Re-Interview", // algebra re-interview
  // forReviewAlgebraInterviewDone: 'Algebra Interview For Review',
  algebraInterviewFail: "Algebra Interview Failed",
  // algebraInterviewWaitlisted: 'Algebra Interview Waitlisted',

  // culture fit interviews
  pendingCultureFitInterview: "Culture Fit Interview Pending (4th Round)",
  pendingCultureFitInterview_Unreachable:
    "Culture Fit Interview Pending (Unreachable)",
  pendingCultureFitInterview_NotResponding:
    "Culture Fit Interview Pending (Not Responding)",
  pendingCultureFitInterview_BecameDisinterested:
    "Culture Fit Interview Pending (Became Disinterested)",

  // forReviewCultureFitInterviewDone: 'Culture Fit Interview Review',
  // cultureFitInterviewWaitlisted: 'Culture Fit Interview Waitlisted',
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
  selectedAndJoiningAwaited: "Selected & Joining Awaited",
  offerLetterSent: "Offer Letter Sent",

  // travel planning
  pendingTravelPlanning: "Pending Travel Plans",
  pendingTravelPlanning_Unreachable: "Pending Travel Plans (Unreachable)",
  pendingTravelPlanning_NotResponding: "Pending Travel Plans (Not Responding)",
  pendingTravelPlanning_BecameDisinterested:
    "Pending Travel Plans (Become Disinterested)",
  pendingTravelPlanning_WillJoinIn: "Pending Travel Plans (Will Join In)",
  pendingTravelPlanning_TicketBooked: "Pending Travel Plans (Ticket Booked)",
  pendingTravelPlanning_NeedFinancialSupport:
    "Pending Travel Plans (Need Financial support)",
  pendingTravelPlanning_TalkToParents: "Pending Travel Plans (Talk to parents)",
  finalisedTravelPlans: "Finalised Travel Plans",

  // probation etc. once when the student has joined navgurukul
  // probation: 'Probation',
  deferredJoining: "Deferred Joining",
  finallyJoined: "Joined",
  // droppedOut: 'Dropped Out',
  // sentBackAfterProbation: 'Probation Failed',

  // is not reachable
  becameDisIntersested: "Became Disinterested",
  // disqualifiedUnreachable: 'Can`t reach Student',
  notReachable: "Unreachable",

  // diversity based decision
  disqualifiedAfterDiversityFilter: "Diversity Failed",
  diversityBasedDecisionPending: "Decision Pending based on Diversity",

  // random stages for internal use
  possibleDuplicate: "Duplicate",
  // needAction: 'Need Action',
  // demo: 'Not Clear???',
  caughtCheating: "Caught Cheating",
  tuitionGroup: "Tution Group",

  requestCallback: "Requested Callback",
  // pendingCallbackForQuery: 'Pending Callback',
  // forReviewCallbackQueryResolved: 'For Review CallbackQuery Resolved',
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
  droppedOut: "Dropped Out",
  inJob: "In Job",
  payingForward: "Paying Forward",
  paidForward: "Paid Forward",
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
      "uninterested",
    ],
  },
  pendingAlgebraInterview: {
    deadline: 60,
    status: ["passed", "failed", "review", "unreachable", "uninterested"],
  },
  pendingAlgebraReInterview: {
    deadline: 60,
    status: ["passed", "failed", "review", "unreachable", "uninterested"],
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
      "uninterested",
    ],
  },
  pendingTravelPlanning: {
    deadline: 24,
    status: [
      "finalised",
      "reimbursement",
      "failed",
      "unreachable",
      "uninterested",
    ],
  },
  pendingTravelPlanning_WillJoinIn: {
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
    status: ["passed", "failed", "review", "unreachable", "uninterested"],
  },
  becameDisIntersested: {
    deadline: 60,
    status: ["reason", "noReason", "unreachable"],
  },
  tuitionGroup: {
    deadline: 24,
    status: ["added", "uninteresetd", "unreachable"],
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
    "r",
    "s",
    "saakshi19",
    "gnaneshwari19",
    "alisha",
    "nilam",
    "a",
    "nitesh",
    "aman19",
    "rahit19",
    "pralhad",
    "komal",
    "kumar19",
    "lalita17",
    "ranis19",
    "Peter19",
    "salomi19",
    "santosh19",
    "roshan19",
    "Poonam19",
    "kartik19",
    "sonu19",
    "dipesh19",
    "santosh19",
    "peter19",
    "sunkara19",
    "roshan19",
    "rahit",
    "aman18",
    "paritosh20",
    "baljeet20",
    "aman",
    "shivanimalviya20",
    "rubina20",
  ],
  addOrUpdateContact: ["rahit", "nilam", "nitesh", "kumar19", "pralhad"],
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
