import { Profile } from './Profile/Profile.js';
import { Statistics } from './Statistics/Statistics.js';
import { FriendList } from './FriendList/FriendList.js';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.js';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transaction from './TransactionHistory/transaction.json';

export function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transaction} />
    </div>
  );
}
