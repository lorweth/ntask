import { toastify } from 'common/toastify';

export default () => (next) => (action) => {
  // Notify the error when the action is rejected
  if (action.type.endsWith('rejected')) {
    toastify({
      title: action.type,
      description: action.error.message || 'An error occurred',
      status: 'error',
    });
  }

  // Notify when the action is fulfilled
  if (action.type.endsWith('fulfilled')) {
    if (action.payload?.message?.startsWith('error')) {
      toastify({
        title: action.payload?.title || 'Server Error',
        description: action.payload?.detail || 'An error occurred',
        status: 'error',
      });
    } else {
      toastify({
        title: action.type,
        description: action.payload.message || 'Success',
        status: 'success',
      });
    }
  }
  next(action);
};
