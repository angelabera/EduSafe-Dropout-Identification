import { Shield, Activity, TrendingUp, Lock, ArrowLeft, User, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.svg';
import '../App.css';

const About = () => {
  return (
    <div className="app">
      {/* Hero */}
      <header className="app-hero" style={{ minHeight: '60vh' }}>
        <div className="hero-background">
          <img src={heroBg} className="hero-bg-svg layer-1" alt="" />
          <img src={heroBg} className="hero-bg-svg layer-2" alt="" />
          <div className="hero-overlay"></div>
        </div>

        <Link to="/" className="about-btn" style={{ left: '2rem', right: 'auto' }}>
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="hero-content">
          <div className="logo-container">
            <div className="logo-icon-wrapper">
              <Shield size={56} strokeWidth={2} />
            </div>
            <h1 className="hero-title">
              About Edu<span className="text-gradient">Safe</span>
            </h1>
          </div>
          <p className="hero-subtitle">
            A transparent early-risk identification system designed to help
            educators support students before dropout becomes inevitable.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <section className="about-section">
          <div className="about-grid">

            {/* Problem */}
            <div className="about-card">
              <div className="card-icon">
                <Activity size={32} color="var(--color-primary)" />
              </div>
              <h3>The Problem</h3>
              <p>
                In most educational institutions, students at risk of dropping
                out are identified too late — after repeated failures, poor
                attendance, or disengagement. Although data exists, it remains
                fragmented and underutilized.
              </p>
            </div>

            {/* Solution */}
            <div className="about-card">
              <div className="card-icon">
                <TrendingUp size={32} color="var(--color-secondary)" />
              </div>
              <h3>The EduSafe Solution</h3>
              <p>
                EduSafe combines existing academic data such as attendance,
                assessment scores, and exam attempts into a single system to
                identify early warning signs — enabling timely and meaningful
                intervention.
              </p>
            </div>

            {/* How it Works */}
            <div className="about-card">
              <div className="card-icon">
                <Shield size={32} color="var(--color-accent)" />
              </div>
              <h3>How It Works</h3>
              <p>
                Institutions upload three CSV files. EduSafe merges student data
                using Student IDs and calculates a transparent risk score
                (0–100), categorizing students as Safe, Watchlist, or At Risk.
              </p>
            </div>

          </div>

          {/* Transparency & Ethics */}
          <div className="about-grid" style={{ marginTop: '3rem' }}>

            <div className="about-card">
              <div className="card-icon">
                <Lock size={32} color="var(--color-primary)" />
              </div>
              <h3>Transparency & Ethics</h3>
              <p>
                EduSafe uses a rule-based scoring system instead of opaque
                black-box models. Every risk score is explainable, and the system
                does not make automated decisions — it supports educators, not
                replaces them.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <User size={32} color="var(--color-secondary)" />
              </div>
              <h3>Who It’s For</h3>
              <p>
                EduSafe is designed for schools, colleges, academic counselors,
                mentoring programs, and educational NGOs seeking a simple yet
                effective early-warning system.
              </p>
            </div>

          </div>

          {/* Creator Section */}
          
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand-section">
              <div className="footer-logo">
                <Shield size={32} className="logo-icon" />
                <span>Edu<strong>Safe</strong></span>
              </div>
              <p className="footer-tagline">
                Empowering educators with data-driven insights to ensure every student succeeds.
              </p>
              <div className="footer-socials">
                <a href="#" aria-label="Twitter"><Activity size={20} /></a>
                <a href="#" aria-label="LinkedIn"><Zap size={20} /></a>
                <a href="#" aria-label="GitHub"><Lock size={20} /></a>
              </div>
            </div>

            <div className="footer-nav-group">
              <h4>Platform</h4>
              <ul>
                <li><a href="#upload">Data Upload</a></li>
                <li><a href="#">Risk Analysis</a></li>
                <li><a href="#">Student Profiles</a></li>
                <li><a href="#">Reporting</a></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:support@edusafe.com">support@edusafe.com</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">System Status</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2026 EduSafe. Built with 💙 by <strong>Angela Bera</strong>
            </div>
            <div className="footer-legal">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
