import { jwtDecode } from 'jwt-decode';

export const checkToken = () => {
  const token = localStorage.getItem('token');
  try {
    const decoded = jwtDecode(token);
    const timeInS = Date.now() / 1000;
    // console.log(timeInS);
    return decoded && decoded.exp > timeInS;
  } catch (e) {
    return false;
  }
  //   console.log(decoded);
};

export const getRole = () => {
  const token = localStorage.getItem('token');
  try {
    const decoded = jwtDecode(token);
    const timeInS = Date.now() / 1000;
    // console.log(timeInS);
    return decoded.role;
  } catch (e) {
    return null;
  }
};
