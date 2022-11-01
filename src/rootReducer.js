import appReducer from 'app/appSlice';
import eventMgmtReducer from 'event-mgmt/eventMgmtSlice';
import authReducer from 'auth/authSlice';
import chatReducer from 'chat/chatSlice';

const rootReducer = {
  app: appReducer,
  auth: authReducer,
  eventMgmt: eventMgmtReducer,
  chat: chatReducer,
};

export default rootReducer;
