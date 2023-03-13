import axios from "axios";

let instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "d731da89-30f8-4e71-8105-cdac28e2787e",
  },
});

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`).then((response) => response.data);
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
};

export const authAPI = {
  getAutharization() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
