import Notification from './Notification';

export default function NotificationList() {
  return (
    <div className="card">
      <h1 className="main-line">Notifications</h1>

      <div>
        <Notification />
        <Notification />
      </div>
    </div>
  );
}
