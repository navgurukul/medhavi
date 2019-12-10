const allStages = {
  // related to the mcq test
  enrolmentKeyGenerated: 'Enrolment Key Generated',
  basicDetailsEntered: 'Basic Details Entered',
  completedTest: 'Test completed',
  completedTestWithDetails: 'Completed Test',
  testPassed: 'Test Passed',
  testFailed: 'Test not Cleared',

  // algebra interviews
  pendingAlgebraInterview: 'Algebra Interview Pending',
  pendingAlgebraReInterview: 'Algebra Interview Re-Interview', // algebra re-interview
  forReviewAlgebraInterviewDone: 'Algebra Interview For Review',
  algebraInterviewFail: 'Algebra Interview not Cleared',
  algebraInterviewWaitlisted: 'Algebra Interview Waitlisted',

  // english interviews
  pendingEnglishInterview: 'English Interview Pending',
  forReviewEnglishInterview: 'English Interview For Review',
  englishInterviewFail: 'English Interview not Cleared',
  englishInterviewWaitlisted: 'English Interview Waitlisted',

  // culture fit interviews
  pendingCultureFitInterview: 'Culture Fit Interview Pending',
  forReviewCultureFitInterviewDone: 'Culture Fit Interview Review',
  cultureFitInterviewWaitlisted: 'Culture Fit Interview Waitlisted',
  pendingCultureFitReinterview: 'Pending Culture Fit Re-Interview',
  cultureFitInterviewFail: 'Culture Interview not Cleared',

  // parent conversations
  pendingParentConversation: 'Pending Parent Conversations',
  parentConversationFail: 'Parent Conversation Fail',

  // travel planning
  pendingTravelPlanning: 'Pending Travel Plans',
  finalisedTravelPlans: 'Selected & Joining Awaited',

  // probation etc. once when the student has joined navgurukul
  probation: 'Probation',
  finallyJoined: 'Joined',
  droppedOut: 'Dropped Out',
  sentBackAfterProbation: 'Probation Not Cleared',

  // is not reachable
  becameDisIntersested: 'Became Disinterested',
  disqualifiedUnreachable: 'Can`t reach Student',

  // diversity based decision
  disqualifiedAfterDiversityFilter: 'Diversity Not Cleared',
  diversityBasedDecisionPending: 'Decision Pending based on Diversity',

  // random stages for internal use
  possibleDuplicate: 'Duplicate',
  needAction: 'Need Action',
  demo: 'Not Clear???',
  caughtCheating: 'Caught Cheating',

  requestCallback: 'Requested Callback',
  pendingCallbackForQuery: 'Pending Callback',
  forReviewCallbackQueryResolved: 'For Review CallbackQuery Resolved',
  queryResolvedAfterCallback: 'Query Resolved After CallBack',
};

const feedbackableStages = [
  'pendingCultureFitInterview',
  'pendingAlgebraInterview',
  'pendingAlgebraReInterview',
  'parentConversation',
  'pendingEnglishInterview',
  'requestCallback',
  'becameDisIntersested',
  'disqualifiedUnreachable',
  'pendingTravelPlanning',
];

const permissions = {
  "updateStage" : ["s", "saakshi19"]
}

module.exports = {
  allStages: allStages,
  studentStages: Object.keys(allStages),
  feedbackableStages: feedbackableStages,
  permissions: permissions,
  feedbackableStagesWithTitles: feedbackableStages.map((x) => ({ x: allStages[x] })),
  status: {
    pass: 'Passed', failed: 'Failed', pending: 'Pending', forReview: 'For Review', done: 'Done',
  },
};