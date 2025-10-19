const profiles = [
  {
    id: 1,
    name: "Renz Paolo Ayuban",
    title: "Computer Science Student",
    image: "https://scontent.fmnl19-1.fna.fbcdn.net/v/t39.30808-6/539477919_761719943487492_3868959500140997071_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFBwxe9eNcISULbzPm_sduJfwqb2dMjDml_CpvZ0yMOaQESUSMFMmTQcd67c-9OW9jz7ef2t4X5igaGXNhBHR0T&_nc_ohc=CWpIMfElJMwQ7kNvwFuTFTZ&_nc_oc=AdlMPRGbSd1IdCQVzfGZ1GVUyeDMadyqteq_CMdfyk1LsfAfX64941a9q0FpUkWbc2A&_nc_zt=23&_nc_ht=scontent.fmnl19-1.fna&_nc_gid=lp7al6uayGBwPguu5ECWZw&oh=00_Afc75b5lIY5FsoSTHip8fCKAgO-HuViqQ-mXuKtwj0uQMA&oe=68FACE52",
    location: "Dasma Cavite",
    education: "Cavite State University - Main",
    course: "Bachelor of Science in Computer Science",
    aspiration: "Game Developer",
    quote: "Building the future, one game at a time"
  },
  {
    id: 2,
    name: "Jose Rizal",
    title: "National Hero",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJos%25C3%25A9_Rizal&psig=AOvVaw0eJDA4q_1J6AUK1tIzRTVc&ust=1760966494177000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjq1MStsJADFQAAAAAdAAAAABAE",
    location: "Calamba, Laguna",
    education: "University of Santo Tomas, Universidad Central de Madrid",
    course: "Medicine and Philosophy",
    aspiration: "National Hero and Reformer",
    quote: "The youth is the hope of our future"
  },
  {
    id: 3,
    name: "Manny Pacquiao",
    title: "Boxing Champion & Politician",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.co.uk%2Fnews%2Fworld-asia-34451387&psig=AOvVaw2Lh8HtChJLPhoLz7zW2T0f&ust=1760966513748000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLj1382tsJADFQAAAAAdAAAAABAE",
    location: "General Santos City",
    education: "Self-taught",
    course: "Professional Boxing",
    aspiration: "World Champion & Public Servant",
    quote: "I fight for my country and my people"
  },
  {
    id: 4,
    name: "Lea Salonga",
    title: "Broadway Star & Singer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7nR5L51qT3ym2b5ik_xNyWNImGoxjVA_c1qkC42s_Fr31SZXX31pGpVs1-89TZh1YGwPBJY6uxM6H_8owLC5MsazHNSTrb1gyEZXErL0",
    location: "Manila, Philippines",
    education: "University of the Philippines",
    course: "Theater Arts",
    aspiration: "International Performer",
    quote: "Music is the universal language"
  },
  {
    id: 5,
    name: "Efren Peñaflorida",
    title: "CNN Hero of the Year",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnn.com%2F2016%2F12%2F08%2Fliving%2Fcnn-heroes-2016-superhero-above-and-beyond&psig=AOvVaw2FCkRtlH6MbgWOJXFAxvV3&ust=1760966554145000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjU4OCtsJADFQAAAAAdAAAAABAE",
    location: "Cavite City",
    education: "Cavite State University",
    course: "Education",
    aspiration: "Educational Reformer",
    quote: "Education is the great equalizer"
  },
  {
    id: 6,
    name: "Catriona Gray",
    title: "Miss Universe 2018",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMayon_gown&psig=AOvVaw2ZvZNgBpGrUHYdazN4eaYV&ust=1760966571627000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDUiemtsJADFQAAAAAdAAAAABAW",
    location: "Quezon City",
    education: "Berwick Grammar School, Australian Catholic University",
    course: "Music",
    aspiration: "Beauty Queen & Advocate",
    quote: "Beauty with a purpose"
  }
];

export default function Profile() {
  return (
    <div className="profiles-grid">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
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
      ))}
    </div>
  );
}