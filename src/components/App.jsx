import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import { Profile } from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  const { avatar, tag, username, location, stats } = user;

  return (
    <>
      <Profile
        username={username}
        avatar={avatar}
        tag={tag}
        location={location}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
