export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-image">
            <img
              src="https://scontent.fmnl19-1.fna.fbcdn.net/v/t39.30808-6/539477919_761719943487492_3868959500140997071_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFBwxe9eNcISULbzPm_sduJfwqb2dMjDml_CpvZ0yMOaQESUSMFMmTQcd67c-9OW9jz7ef2t4X5igaGXNhBHR0T&_nc_ohc=CWpIMfElJMwQ7kNvwFuTFTZ&_nc_oc=AdlMPRGbSd1IdCQVzfGZ1GVUyeDMadyqteq_CMdfyk1LsfAfX64941a9q0FpUkWbc2A&_nc_zt=23&_nc_ht=scontent.fmnl19-1.fna&_nc_gid=lp7al6uayGBwPguu5ECWZw&oh=00_Afc75b5lIY5FsoSTHip8fCKAgO-HuViqQ-mXuKtwj0uQMA&oe=68FACE52"
              alt="Renz Paolo Ayuban"
            />
          </div>
          <h2>Renz Paolo Ayuban</h2>
          <p className="section">BSCS 3-5</p>
        </div>
        
        <div className="profile-info">
          <div className="info-item">
            <h3>📍 Location</h3>
            <p>Dasma Cavite</p>
          </div>
          
          <div className="info-item">
            <h3>🎓 Education</h3>
            <p>Cavite State University - Main</p>
            <p className="course">Bachelor of Science in Computer Science</p>
          </div>
          
          <div className="info-item">
            <h3>🎮 Aspiration</h3>
            <p className="aspiration">Game Developer</p>
          </div>
        </div>
        
        <div className="profile-footer">
          <p className="quote">"Building the future, one game at a time"</p>
        </div>
      </div>
    </div>
  );
}