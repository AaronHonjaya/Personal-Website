import './home.css';

export default function Home() {
  return (
    <section className="home">
        <img src="/imgs/profilePic.jpg" alt="Profile" className="profile-pic" />
        <div className="description">
          <h1 className='name'>Aaron Honjaya</h1>
          <p>
            Welcome to my personal website! 
            I'm a Computer Science student at the University of Washington, 
            passionate about technology and innovation. 
            Explore my projects, learn about my journey, 
            and feel free to reach out at <a href="mailto:ahonjaya@cs.washington.edu">ahonjaya@cs.washington.edu</a>!
          </p>
        </div>
    </section>
  );
}
