import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AdminDashboard from './components/AdminDashboard';
import CoachDashboard from './components/CoachDashboard';
import PlayerDashboard from './components/PlayerDashboard';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="main-content">
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/coach-dashboard" element={<CoachDashboard />} />
                    <Route path="/player-dashboard" element={<PlayerDashboard />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
