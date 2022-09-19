// для подписания на часть store
export const getAuthError = ({ auth }) => auth.error || [];
export const isAuth = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
