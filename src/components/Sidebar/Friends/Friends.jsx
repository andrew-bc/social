import s from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem";

let Friends = (props) => {
  let firendsElements = props.state.friends.map((f) => (
    <FriendItem id={f.id} key={f} name={f.name} src={f.src} />
  ));

  return <div className={s.friends}>{firendsElements}</div>;
};

export default Friends;
