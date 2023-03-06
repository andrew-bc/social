let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "How are you?",
          src: "img/avatar.jpg",
          likesCount: 5,
        },
        { id: 2, message: "Hello", src: "img/avatar.jpg", likesCount: 2 },
      ],
      newText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Władek", src: "img/user_wall.png" },
        { id: 2, name: "Jacek", src: "img/user_wall.png" },
        { id: 3, name: "Kuba", src: "img/user_wall.png" },
      ],
      messages: [
        { id: 1, name: "Me", message: "Fine! And you?", src: "img/avatar.jpg" },
        {
          id: 2,
          name: "Władek",
          message: "Hello! How are you?",
          src: "img/avatar.jpg",
        },
      ],
    },
    sidebar: {
      friends: [
        { id: 1, name: "Władek", src: "img/user_wall.png" },
        { id: 2, name: "Jacek", src: "img/user_wall.png" },
        { id: 3, name: "Kuba", src: "img/user_wall.png" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderAllTree = observer;
  },
  _rerenderAllTree(state) {},
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 1,
        message: action.message,
        src: "img/avatar.jpg",
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newText = "";
      this._rerenderAllTree(this._state);
    } else if (action.type === "UPDATE-NEW-TEXT-POST") {
      this._state.profilePage.newText = action.newText;
      this._rerenderAllTree(this._state);
    }
  },
};

export default store;
