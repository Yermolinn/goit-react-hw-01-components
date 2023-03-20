import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friend/FriendList';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';

import user from '../src/data/user.json';
import data from '../src/data/data.json';
import friends from '../src/data/friends.json';
import transactions from '../src/data/transactions.json';

export const App = () => {
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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
