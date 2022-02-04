import axios from "axios";

const apiUrl = process.env.REACT_APP_API_BASE_URL || '';
const registerUri = process.env.REACT_APP_API_REGISTER_URI || '';
const loginUri = process.env.REACT_APP_API_LOGIN_URI || '';

const register = async (username: string, email: string, password: string) => {
  const response = await axios.post(apiUrl + registerUri, {username, email, password});

  return response.data;
};

const login = async (username: string, password: string) => {
  const response = await axios.post(apiUrl + loginUri, {username,password})

  if (response.status === 200) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;