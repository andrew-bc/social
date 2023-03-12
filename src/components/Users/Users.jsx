import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";

const Users = (props) => {
  let usersElements = props.users.users.map((user) => (
    <UserItem userInfo={user} follow={props.follow} unfollow={props.unfollow}></UserItem>
  ));
  return <div className={s.content}>{usersElements}</div>;
};

export default Users;
