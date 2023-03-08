import s from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem";
import StoreContext from "./../../../StoreContext";

let Friends = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let firendsElements = store
          .getState()
          .sidebar.friends.map((f) => <FriendItem id={f.id} key={f} name={f.name} src={f.src} />);
        debugger;
        return <div className={s.friends}>{firendsElements}</div>;
      }}
    </StoreContext.Consumer>
  );
};

export default Friends;
