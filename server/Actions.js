
// All the events for CodeCast

const ACTIONS = {
  JOIN: "join",               // when a user joins a room
  JOINED: "joined",           // when server notifies users that someone joined
  DISCONNECTED: "disconnected", // when a user leaves or disconnects
  CODE_CHANGE: "code-change", // typo fixed: was "conde-change"
  SYNC_CODE: "sync-code",     // send current code to new user
  LEAVE: "leave",             // optional: user leaves manually
  RUN_CODE: "run-code",       // new event for running code
  CODE_OUTPUT: "code-output", // event to send output to all users
};

module.exports = ACTIONS;