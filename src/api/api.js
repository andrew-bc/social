import axios from "axios";

let instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": process.env.REACT_APP_API_KEY,
  },
});

export const usersAPI = {
  async getUsers(pageSize, currentPage, term = "", friend = null) {
    const response = await instance.get(`users?count=${pageSize}&page=${currentPage}&term=${term}&friend=${friend}`);
    return response.data;
  },
  async getTotalCount() {
    const response = await instance.get(`users?count=1&page=1`);
    return response.data.totalCount;
  },
  async isFollow(id) {
    const response = await instance.get(`follow/${id}`);
    return response.data;
  },
  async follow(id) {
    const response = await instance.post(`follow/${id}`);
    return response.data;
  },
  async unfollow(id) {
    const response = await instance.delete(`follow/${id}`);
    return response.data;
  },
};

export const profileAPI = {
  async getProfileByUserId(userId) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  async getStatus(userId) {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },
  async setStatus(statusText) {
    const response = await instance.put(`profile/status`, { status: statusText });
    return response.data;
  },
  async setProfileInfo(data) {
    const response = await instance.put(`profile`, data);
    return response.data;
  },
  async setAvatar(photo) {
    const formData = new FormData();
    formData.append("image", photo);
    const response = await instance.put(`profile/photo`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },
};

export const authAPI = {
  async getAutharization() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },
  async login(email, password, rememberMe, captcha) {
    const response = await instance.post(`auth/login`, {
      email: email,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha,
    });
    return response.data;
  },
  async logout() {
    const response = await instance.post(`auth/logout`);
    return response.data;
  },
  async getCaptcha() {
    const response = await instance.post(`security/get-captcha-url`);
    return response.data;
  },
};
