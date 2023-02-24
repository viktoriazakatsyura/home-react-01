import React from 'react';
import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.isOnline : css.isOffline}></span>
      <img className={css.avatar} scr={avatar} alt="avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
