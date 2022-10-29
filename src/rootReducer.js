import appReducer from 'app/appSlice';
import counterReducer from 'counter/counterSlice';
import eventMgmtReducer from 'event-mgmt/eventMgmtSlice';
import authReducer from 'auth/authSlice';

const rootReducer = {
  app: appReducer,
  counter: counterReducer,
  auth: authReducer,
  eventMgmt: eventMgmtReducer,
};

export default rootReducer;
