import PropTypes from 'prop-types';
import style from './friendList.module.css';

export default function FriendListItem({ avatar, isOnline, name }) {
  return (
    <li className={style.list}>
      <span className={style.IsOnline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string,
};
