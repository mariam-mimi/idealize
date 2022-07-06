import PostCardListComponent from '../../components/PostCardList';

export default {
  title: 'Posts/PostCardList',
  component: PostCardListComponent,
};

const posts = [
  {
    id: 1,
    title: 'Title of post',
    user: {
      username: 'Username123',
    },
    text: 'This is the content of the post. Bla bla. Ninja Rockets. Once apon a time, a man named Jack ran up a hill. He ran so fast people thought he was a goat. Jack would like to play the violin outside while it was raining. That is very sacreligous. But what was also lamentable was the fact that I can not spell. Yep. So just excuse me pls.',
    heartCount: 5,
    isBookmarked: false,
    isHearted: false,
  },
  {
    id: 2,
    title: 'Title of post',
    user: {
      username: 'Username123',
    },
    text: 'This is the content of the post. Bla bla. Ninja Rockets. Once apon a time, a man named Jack ran up a hill. He ran so fast people thought he was a goat. Jack would like to play the violin outside while it was raining. That is very sacreligous. But what was also lamentable was the fact that I can not spell. Yep. So just excuse me pls.',
    heartCount: 5,
    isBookmarked: false,
    isHearted: false,
  },
  {
    id: 3,
    title: 'Title of post',
    user: {
      username: 'Username123',
    },
    text: 'This is the content of the post. Bla bla. Ninja Rockets. Once apon a time, a man named Jack ran up a hill. He ran so fast people thought he was a goat. Jack would like to play the violin outside while it was raining. That is very sacreligous. But what was also lamentable was the fact that I can not spell. Yep. So just excuse me pls.',
    heartCount: 5,
    isBookmarked: false,
    isHearted: false,
  },
];

const Template = (args) => <PostCardListComponent {...args} />;

export const PostCardList = Template.bind({});
PostCardList.args = {
  posts,
};
