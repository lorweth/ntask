import appReducer from 'app/appSlice';
import counterReducer from 'counter/counterSlice';

const rootReducer = {
  app: appReducer,
  counter: counterReducer,
};

export default rootReducer;
