import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, isOnline, key, name }) {

  return (
    <li key={key} className="item" >
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  key: PropTypes.number.isRequired,
  name: PropTypes.string,
};
