import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './image/backgroundImage.png';

const HomePage = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <h1>Welcome to FERWABA Web App</h1>
            <p>We're thrilled to have you join our basketball community. Whether you're a player, coach, fan, or<br></br> 
            simply passionate about the game, FERWABA Web App is your hub for all things basketball in Rwanda.<br></br><br></br>

            Explore the latest news, upcoming events, player spotlights, and engage with fellow basketball <br></br>
            enthusiasts. From live match updates to exclusive content, we're here to elevate your basketball experience.</p>
            
            <div className="action-buttons">
                <Link to="/login">
                    <button>Login</button>
                </Link>&nbsp;
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
            
            <section>
                <h2>Featured Teams</h2>
                {/* Add content here */}
            </section>
            
            <section>
                <h2>Upcoming Matches</h2>
                {<p>
                    Date: June 1, 2024<br></br>
                    Match 1: Team A vs. Team B<br></br>
                    Time: 4:00 PM<br></br>
                    Venue: Kigali Arena, Rwanda<br></br>
                    Details: The opening match of the tournament featuring two strong contenders.
                    
                </p>}
            </section>
            
            <section>
                <h2>Player Spotlights</h2>
                {/* Add content here */}
            </section>
        </div>
    );
};

export default HomePage;
