import axios from "axios";

let instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": process.env.REACT_APP_API_KEY,
  },
});

console.log(process.env.REACT_APP_API_KEY);

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`).then((response) => response.data);
  },
  getTotalCount() {
    return instance.get(`users?count=1&page=1`).then((response) => response.data.totalCount);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfileByUserId(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => response.data);
  },
  setStatus(statusText) {
    return instance.put(`profile/status`, { status: statusText }).then((response) => response.data);
  },
};

export const authAPI = {
  getAutharization() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe) {
    return instance
      .post(`auth/login`, { email: email, password: password, rememberMe: rememberMe })
      .then((response) => response.data);
  },
  logout() {
    return instance.post(`auth/logout`).then((response) => response.data);
  },
};
