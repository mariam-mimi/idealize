import PostCardList from '../components/PostCardList';
import UserInfo from '../components/UserInfo';
import PostVisibilityToggle from '../components/PostVisibilityToggle';

export default function ProfilePage() {
  return (
    <>
      <PostVisibilityToggle />
      <PostCardList />
      <UserInfo />
    </>
  );
}
