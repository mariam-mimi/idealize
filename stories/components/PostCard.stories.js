import PostCardComponent from '../../components/PostCard';

export default {
  title: 'Posts/PostCard',
  component: PostCardComponent,
};

const postData = {
  id: 1,
  title: 'Title of post',
  user: {
    username: 'Username123',
  },
  text: 'This is the content of the post. Bla bla. Ninja Rockets. Once apon a time, a man named Jack ran up a hill. He ran so fast people thought he was a goat. Jack would like to play the violin outside while it was raining. That is very sacreligous. But what was also lamentable was the fact that I can not spell. Yep. So just excuse me pls.',
  heartCount: 5,
  isBookmarked: false,
  isHearted: false,
};

const Template = (args) => <PostCardComponent {...args} />;

export const PostCard = Template.bind({});

PostCard.args = {
  post: postData,
};
