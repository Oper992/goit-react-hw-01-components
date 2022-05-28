import user from '../user.json';
import data from '../data.json';
import { Profile } from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
const { avatar, tag, username, location, stats } = user;

export const App = () => {
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
    </>
  );
};
