let rerenderAllTree = (state) => {};

export let subscribe = (observer) => {
  rerenderAllTree = observer;
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "How are you?", src: "img/avatar.jpg", likesCount: 5 },
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
};

export let addPost = (message) => {
  let newPost = {
    id: 1,
    message: message,
    src: "img/avatar.jpg",
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  updateNewTextPost("");
  rerenderAllTree(state);
};

export let updateNewTextPost = (newText) => {
  state.profilePage.newText = newText;
  rerenderAllTree(state);
};

export default state;
