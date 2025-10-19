export default function Profile({ profile }) {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={profile.image} alt={profile.name} />
      </div>
      <div className="profile-content">
        <h3 className="profile-name">{profile.name}</h3>
        <p className="profile-title">{profile.title}</p>
        
        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">Location:</span>
            <span className="detail-value">{profile.location}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Education:</span>
            <span className="detail-value">{profile.education}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Field:</span>
            <span className="detail-value">{profile.course}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Achievement:</span>
            <span className="detail-value">{profile.aspiration}</span>
          </div>
        </div>
        
        <div className="profile-quote">
          <p>"{profile.quote}"</p>
        </div>
      </div>
    </div>
  );
}