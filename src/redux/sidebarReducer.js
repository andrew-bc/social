let initialState = {
  friends: [
    { id: 1, name: "Władek", src: "img/user_wall.png" },
    { id: 2, name: "Jacek", src: "img/user_wall.png" },
    { id: 3, name: "Kuba", src: "img/user_wall.png" },
  ],
};

let sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
