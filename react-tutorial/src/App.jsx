import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'

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
    image: "https://www.feu.edu.ph/wp-content/uploads/2023/10/Jose-P.-Rizal.jpg",
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
    image: "https://scontent.fmnl19-1.fna.fbcdn.net/v/t39.30808-6/499707485_1248929433271215_7787205830820749164_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHcmGCZfXFNaAvGLNOwM7a11ROjo9v-Q0XVE6Oj2_5DRT-qhzvjluxptYz4q2TmL5xs9YptOT_OtWas8ES0OItL&_nc_ohc=-w_xlsAXaJ0Q7kNvwFBhiMM&_nc_oc=AdlQjl2jLVO8BHw29hOQdCHyDkXR911ba7xBlWgYrAFAm_Tuul5rrzyr_y517MOylTw&_nc_zt=23&_nc_ht=scontent.fmnl19-1.fna&_nc_gid=ukUvyL_g_doOQcH1c4fPVw&oh=00_Aff_9IzPnZUdb0zLhPr9orZy-I9oqrjBAhopc48M1cMuPw&oe=68FACFF5",
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
    image: "https://media.cnn.com/api/v1/images/stellar/prod/161207135445-cnn-superheroes-efren-penaflorida.jpg?q=w_2583,h_3445,x_0,y_0,c_fill",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Catriona_Gray_with_iconic_tristar_and_sun_earpiece%2C_in_Mak_Tumang_Swarovski_gem-embellished_%22Mayon%22_evening_number.jpg",
    location: "Quezon City",
    education: "Berwick Grammar School, Australian Catholic University",
    course: "Music",
    aspiration: "Beauty Queen & Advocate",
    quote: "Beauty with a purpose"
  }
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Famous Filipino People Gallery</h1>
        <p>Celebrating remarkable Filipinos who have made their mark</p>
      </header>
      <div className="gallery">
        <div className="profiles-grid">
          {profiles.map((profile) => (
            <Profile key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
