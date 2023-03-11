import s from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {
  let firendsElements = props.sidebar.friends.map((f) => <FriendItem id={f.id} key={f.id} name={f.name} src={f.src} />);
  return <div className={s.friends}>{firendsElements}</div>;
};

export default Friends;
