const actionTypes = {
  // socket related
  CONNECT: 'CONNECT',
  DISCONNECT: 'DISCONNECT',

  // chat related
  SELECT_CHAT: 'SELECT_CHAT',
  SET_CHATS: 'SET_CHATS',
  SET_MESSAGES: ' SET_MESSAGES',
  NEW_MESSAGE: 'NEW_MESSAGE',

  // auth related
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  STORE_USER: 'STORE_USER',

  // loading related
  LOADING: 'LOADING',
  REFETCH: 'REFETCH',
  RELOAD_SELECTEDCHAT: 'RELOAD_SELECTEDCHAT',
};

export default actionTypes;
