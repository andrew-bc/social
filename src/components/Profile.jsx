import avatar from "./../img/avatar.jpg";
import user_wall from "./../img/user_wall.png";

const Profile = () => {
  return (
    <div className="content">
      <div className="content__header"></div>
      <div className="content__user">
        <div className="user__avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="user__info">
          <div className="info__fullName">Andrzej Bierynczyk</div>
          <div className="info__bio">
            <div className="bio__birthday">Date of Birth: 26 february 1992</div>
            <div className="bio__city">City: Warsaw</div>
            <div className="bio__education">Education: BSUIR</div>
            <div className="bio__sitename">
              Web Site:{" "}
              <a href="http://github.com/andrew-bc" target="_blank">
                http://github.com/andrew-bc
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content__posts">
        <div className="posts__title">My posts</div>
        <form action="" className="posts__form">
          <textarea rows="2" placeholder="your news..."></textarea>
          <button>Send</button>
        </form>
      </div>
      <div className="content__wall">
        <div className="wall__item">
          <div className="wall__avatar">
            <img src={user_wall} alt="" />
          </div>
          <div className="wall__message">Hey, why nobody love me?</div>
        </div>
        <div className="wall__item">
          <div className="wall__avatar">
            <img src={user_wall} alt="" />
          </div>
          <div className="wall__message">It's our new program! Hey!</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
