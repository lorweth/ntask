import appReducer from 'app/appSlice';
import eventMgmtReducer from 'event-mgmt/eventMgmtSlice';
import authReducer from 'auth/authSlice';

const rootReducer = {
  app: appReducer,
  auth: authReducer,
  eventMgmt: eventMgmtReducer,
};

export default rootReducer;
