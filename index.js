const allStages = {
  // related to the mcq test
  enrolmentKeyGenerated: 'Enrolment Key Generated',
  basicDetailsEntered: 'Basic Details Entered',
  completedTest: 'Completed Test',
  completedTestWithDetails: 'Completed Test',
  testPassed: 'Test Passed', // REMOVE_ME
  testFailed: 'Test Failed',

  // algebra interviews
  pendingAlgebraInterview: 'Algebra Interview Pending',
  pendingAlgebraReInterview: 'Algebra Interview Re-Interview', // algebra re-interview
  // forReviewAlgebraInterviewDone: 'Algebra Interview For Review',
  algebraInterviewFail: 'Algebra Interview Failed',
  // algebraInterviewWaitlisted: 'Algebra Interview Waitlisted',

  // english interviews
  pendingEnglishInterview: 'English Interview Pending',
  // forReviewEnglishInterview: 'English Interview For Review',
  englishInterviewFail: 'English Interview Failed',
  // englishInterviewWaitlisted: 'English Interview Waitlisted',

  // culture fit interviews
  pendingCultureFitInterview: 'Culture Fit Interview Pending',
  // forReviewCultureFitInterviewDone: 'Culture Fit Interview Review',
  // cultureFitInterviewWaitlisted: 'Culture Fit Interview Waitlisted',
  pendingCultureFitReinterview: 'Pending Culture Fit Re-Interview',
  cultureFitInterviewFail: 'Culture Interview Failed',

  // parent conversations
  pendingParentConversation: 'Pending Parent Conversations',
  parentConversationFail: 'Parent Conversation Failed',

  // travel planning
  pendingTravelPlanning: 'Pending Travel Plans',
  finalisedTravelPlans: 'Selected & Joining Awaited',

  // probation etc. once when the student has joined navgurukul
  // probation: 'Probation',
  deferredJoining: 'Deferred Joining',
  finallyJoined: 'Joined',
  // droppedOut: 'Dropped Out',
  // sentBackAfterProbation: 'Probation Failed',

  // is not reachable
  becameDisIntersested: 'Became Disinterested',
  // disqualifiedUnreachable: 'Can`t reach Student',
  notReachable: 'Unreachable',

  // diversity based decision
  disqualifiedAfterDiversityFilter: 'Diversity Failed',
  diversityBasedDecisionPending: 'Decision Pending based on Diversity',

  // random stages for internal use
  possibleDuplicate: 'Duplicate',
  // needAction: 'Need Action',
  // demo: 'Not Clear???',
  caughtCheating: 'Caught Cheating',
  tuitionGroup: 'Tution Group',

  requestCallback: 'Requested Callback',
  // pendingCallbackForQuery: 'Pending Callback',
  // forReviewCallbackQueryResolved: 'For Review CallbackQuery Resolved',
  queryResolvedAfterCallback: 'Query Resolved After CallBack',
};

const endStages = [
  'deferredJoining',
  'notReachable',
  'testFailed',
  'possibleDuplicate',
  'parentConversationFail',
  'finalisedTravelPlans',
  'queryResolvedAfterCallback',
  'cultureFitInterviewFail',
  'englishInterviewFail'
]

const feedbackableStagesData = {
  pendingEnglishInterview: {
    deadline: 48,
    status: ['passed', 'failed', 'review', 'edgeCase', 'unreachable', 'uninterested']
  },
  pendingAlgebraInterview: {
    deadline: 60,
    status: ['passed', 'failed', 'review', 'unreachable', 'uninterested']
  },
  pendingAlgebraReInterview: {
    deadline: 60,
    status: ['passed', 'failed', 'review', 'unreachable', 'uninterested']
  },
  pendingCultureFitInterview: {
    deadline: 48,
    status: ['perfectFit', 'failed', 'edgeCase', 'needBased', 'review', 'unreachable', 'uninterested']
  },
  pendingTravelPlanning: {
    deadline: 24,
    status: ['finalised', 'reimbursement', 'failed', 'unreachable', 'uninterested']
  },
  pendingParentConversation: {
    deadline: 24,
    status: ['passed', 'failed', 'review', 'unreachable', 'uninterested']
  },
  becameDisIntersested: {
    deadline: 60,
    status: ['reason', 'noReason', 'unreachable']
  },
  tuitionGroup: {
    deadline: 24,
    status: ['added', 'uninteresetd', 'unreachable']
  },
  requestCallback: {
    deadline: 60,
    status: ['resolved', 'informedTeam', 'unreachable']
  },
}

const feedbackableStages = Object.keys(feedbackableStagesData)  

const permissions = {
  updateStage: ['s', 'saakshi19', 'gnaneshwari19', 'pralhad18', 'a']
};

module.exports = {
  allStages: allStages,
  studentStages: Object.keys(allStages),
  feedbackableStages: feedbackableStages,
  feedbackableStagesData: feedbackableStagesData,
  permissions: permissions,
  feedbackableStagesWithTitles: feedbackableStages.map((x) => ({ x: allStages[x] })),
  status: {
    pass: 'Passed', failed: 'Failed', pending: 'Pending', forReview: 'For Review', done: 'Done',
  },
};
