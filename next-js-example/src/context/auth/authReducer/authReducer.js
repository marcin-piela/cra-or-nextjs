export const SET_AUTHORIZED = 'auth/set-authorized';
export const SET_UNAUTHORIZED = 'auth/set-unauthorized';
export const SET_TOKEN = 'auth/set-tokens';
export const CLEAR_TOKENS = 'auth/clear-tokens';

export const authReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTHORIZED:
      if (!action.decodedToken) {
        throw new Error('Missing decodedToken object in authReducer');
      }

      return {
        ...state,
        isAuthorizing: false,
        isAuthorized: true,
      };
    case SET_UNAUTHORIZED:
      return {
        ...state,
        token: '',
        isAuthorizing: false,
        isAuthorized: false,
      };
    case CLEAR_TOKENS:
      return {
        ...state,
        token: '',
      };
    case SET_TOKEN:
      if (!action.token) {
        throw new Error('Missing token in authReducer');
      }

      return {
        ...state,
        token: action.token,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
