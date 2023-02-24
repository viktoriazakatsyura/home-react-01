import css from '../FriendList/FriendList.module.css';
import React from 'react';
import { FriendListItem } from './FriendListItem.js';

import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <div className={css.friendList}>
      <ul key={friends.id}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
