const allStages = {
  // related to the mcq test
  enrolmentKeyGenerated: "Enrolment Key Generated",
  basicDetailsEntered: "Basic Details Entered",
  // english interviews
  pendingEnglishInterview: "English Interview Pending",
  // forReviewEnglishInterview: 'English Interview For Review',
  englishInterviewFail: "English Interview Failed",
  // englishInterviewWaitlisted: 'English Interview Waitlisted',

  // algebra interviews
  pendingAlgebraInterview: "Algebra Interview Pending",
  pendingAlgebraReInterview: "Algebra Interview Re-Interview", // algebra re-interview
  // forReviewAlgebraInterviewDone: 'Algebra Interview For Review',
  algebraInterviewFail: "Algebra Interview Failed",
  // algebraInterviewWaitlisted: 'Algebra Interview Waitlisted',

  // culture fit interviews
  pendingCultureFitInterview: "Culture Fit Interview Pending",
  // forReviewCultureFitInterviewDone: 'Culture Fit Interview Review',
  // cultureFitInterviewWaitlisted: 'Culture Fit Interview Waitlisted',
  pendingCultureFitReinterview: "Pending Culture Fit Re-Interview",
  cultureFitInterviewFail: "Culture Interview Failed",

  // parent conversations
  pendingParentConversation: "Pending Parent Conversations",
  parentConversationFail: "Parent Conversation Failed",

  // travel planning
  pendingTravelPlanning: "Pending Travel Plans",
  finalisedTravelPlans: "Selected & Joining Awaited",

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
