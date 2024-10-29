import React from 'react';
import './about.css';
import { useAuth } from '../store/auth';


const Button = ({ children, variant = "primary" }) => (
  <button className={`button ${variant}`}>
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

export const About  = () => { // userName prop with default value
  const { user } = useAuth();
  const username = user?.username || "Guest"



  return (
    <div className="app">
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content centered">
              <div className="welcome-text">
                <h1>Welcome, {username}</h1>
                <p className="subtitle">We're thrilled to have you here. Let us share our story with you.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="story">
          <div className="container">
            <div className="story-grid">
              <img
                alt="Our Story"
                className="story-image"
                src="https://images.pexels.com/photos/3007370/pexels-photo-3007370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="story-content">
                <h2>Our Story</h2>
                <p>Founded with a vision to revolutionize digital experiences, we've grown from a small team of dreamers to a community of innovators. Every day, we work towards creating solutions that make a difference in people's lives.</p>
                <p>Our journey began with a simple idea: technology should bring people together, not keep them apart. Today, we continue to build on that foundation, creating tools and platforms that foster meaningful connections.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="values">
          <div className="container">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <Card>
                <div className="value-content">
                  <h3>Innovation First</h3>
                  <p>We constantly push the boundaries of what's possible, embracing new technologies and ideas to create better solutions.</p>
                </div>
              </Card>
              <Card>
                <div className="value-content">
                  <h3>Customer Focus</h3>
                  <p>Your success is our success. We're committed to delivering experiences that exceed your expectations.</p>
                </div>
              </Card>
              <Card>
                <div className="value-content">
                  <h3>Continuous Growth</h3>
                  <p>We believe in constant improvement, learning from our experiences and evolving with the changing times.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Join Us on This Journey</h2>
              <p>Be part of something bigger. Together, we can create amazing experiences and push the boundaries of what's possible.</p>
              <div className="button-group">
                <Button>Connect Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

