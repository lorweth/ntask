import StorageAPI from 'common/storageAPI';
import { AUTH_TOKEN_KEY } from './constants';

export default function useAuth() {
  const getAuthToken = () =>
    StorageAPI.local.get(AUTH_TOKEN_KEY) || StorageAPI.session.get(AUTH_TOKEN_KEY);

  const removeAuthToken = () => {
    StorageAPI.local.remove(AUTH_TOKEN_KEY);
    StorageAPI.session.remove(AUTH_TOKEN_KEY);
  };

  const haveAuthToken = () => !!getAuthToken();

  return {
    haveToken: haveAuthToken(),
    getAuthToken,
    removeAuthToken,
  };
}
