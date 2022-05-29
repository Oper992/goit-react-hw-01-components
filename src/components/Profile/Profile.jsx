import PropTypes from 'prop-types';
import style from './profile.module.css';

const Profile = ({
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  tag,
  username,
  location,
  stats,
}) => {
  const { followers, views, likes } = stats;

  return (
    <div className={style.profile}>
      <div>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span>Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string,
  username: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export { Profile };
