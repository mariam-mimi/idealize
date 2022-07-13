import PostFooter from './PostFooter';

interface PropTypes {
  text: string;
}

export default function PostDescription({ text }: PropTypes) {
  return (
    <div>
      <p className="post-p">
      {text}
      </p>
    </div>
  );
}
