import PropTypes from 'prop-types';
import style from './friendList.module.css';

export default function FriendListItem({ avatar, isOnline, name }) {
  return (
    <li className={style.list}>
      <span className={isOnline ? style.online : style.offline}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string,
};
