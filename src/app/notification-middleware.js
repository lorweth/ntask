import { toastify } from "common/toastify";

export default  () => (next) => (action) => {
  if (action.type.endsWith('rejected')) {
    toastify({
      title: action.type,
      description: action.error.message || 'An error occurred',
      status: 'error',
    })
  }
  if (action.type.endsWith('fulfilled')) {
    toastify({
      title: action.type,
      description: action.payload.message || 'Success',
      status: 'success',
    })
  }
  next(action);
}