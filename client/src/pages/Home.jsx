import React from 'react';
import './home.css';



const Button = ({ children, variant = "primary", size = "lg" }) => (
  <button className={`button ${variant} ${size}`}>
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="card-content">
    {children}
  </div>
);

export const Home =() => {
  return (
    <div className="app">
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <img
                alt="Hero"
                className="hero-image"
                src="https://cdn.pixabay.com/photo/2022/06/20/14/20/space-7273891_960_720.jpg"
              />
              <div className="hero-content">
                <div className="hero-text">
                  <h1>Welcome to Our Platform</h1>
                  <p>Discover a new way to connect, learn, and grow with our innovative platform.</p>
                </div>
                <div className="button-group">
                  <Button>Connect Now</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2>Our Features</h2>
            <div className="features-grid">
              <Card>
                <CardContent>
                  <img
                    alt="Feature 1"
                    className="feature-image"
                    src="https://cdn.pixabay.com/photo/2021/05/30/21/47/dots-6297146_1280.jpg"
                  />
                  <h3>Easy Connectivity</h3>
                  <p>Connect with others seamlessly through our intuitive interface.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="Feature 2"
                    className="feature-image"
                    src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751_1280.jpg"
                  />
                  <h3>Personalized Learning</h3>
                  <p>Tailored learning experiences to help you grow at your own pace.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="Feature 3"
                    className="feature-image"
                    src="https://cdn.pixabay.com/photo/2023/05/01/17/34/data-7963502_960_720.png"
                  />
                  <h3>Advanced Analytics</h3>
                  <p>Gain insights into your progress with our powerful analytics tools.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Join thousands of satisfied users who have transformed their lives with our platform.</p>
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
}

