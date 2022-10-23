import appReducer from 'app/appSlice';
import counterReducer from 'counter/counterSlice';
import eventMgmtReducer from 'event-mgmt/eventMgmtSlice';

const rootReducer = {
  app: appReducer,
  counter: counterReducer,
  eventMgmt: eventMgmtReducer,
};

export default rootReducer;
