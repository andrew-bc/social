import user_wall from "./../img/user_wall.png";

let initialState = {
  friends: [
    { id: 1, name: "Władek", src: user_wall },
    { id: 2, name: "Jacek", src: user_wall },
    { id: 3, name: "Kuba", src: user_wall },
  ],
};

let sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
