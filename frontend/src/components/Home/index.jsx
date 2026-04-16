import { Link } from 'react-router-dom';
import './index.css';
import LogoPL from '../../assets/images/IPL-logo.png';

const Home = () => {
  return (
    <div className="home-container">

      {/* Left Content */}
      <div className="hero-text">

        <span className="badge">SEASON 2024/25 MANAGEMENT</span>

        <h1>
          Welcome to <span>IPL</span>
        </h1>

        <p>
          The elite digital command center for managing the world’s most 
          competitive Cricket league assets. Precision data, professional 
          scouting, and strategic oversight.
        </p>

        <Link to="/teams" className="cta-button">
          Get Started →
        </Link>

      </div>

      {/* Right Image */}
      <div className="hero-image">
        <img 
          src={LogoPL} 
          alt="player" 
        />
      </div>

    </div>
  );
};

export default Home;