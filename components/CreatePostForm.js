import formStyles from '../styles/Forms.module.css';

export default function CreatePostForm() {
  return (
    <div className="create-card">
      <h1>Create Post</h1>
      <div>
        <label className={formStyles.formLabel}>Title:</label>
        <input type="text" className={formStyles.formControl} />

        <label className={formStyles.formLabel}>Text:</label>
        <textarea className={formStyles.formControl}></textarea>

        <button className="create-post-btn">Create Post</button>
      </div>
    </div>
  );
}
