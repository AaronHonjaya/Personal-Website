import './home.css';
export default function Home() {
  return (
    <div className="home">
        <img src="/imgs/profilePic.jpg" alt="Profile" className="profile-pic" />
        <div className="description">
          <h1 className='name'>Aaron Honjaya</h1>
          <p>
            Welcome to my personal website! 
            Explore my projects, learn about my journey, 
            and feel free to reach out at <a href="mailto:ahonjaya@cs.washington.edu">ahonjaya@cs.washington.edu</a>!
          </p>
        </div>
        
    </div>
  );
}
