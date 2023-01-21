import React from "react";
import "./../pages/Home.css";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to my website</h1>
      </header>
      <div>
        <img
          src="https://images.unsplash.com/photo-1550596333-7bb40a71b6bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Background"
        />
        <p>This is where some text in the middle would go</p>
      </div>
      <footer>
        <p>Placeholder text for the footer</p>
      </footer>
    </div>
  );
};

export default Home;
