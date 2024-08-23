// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { UpdateFollower } from "react-mouse-follower";
import Category from "./components/Category";
import Category2 from "./components/Category2";
const App = () => {
  return (
    <>
      <div>
        <main className="overflow-x-hidden">
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 999,
              followSpeed: 1.5,
            }}
          >
            <Navbar />
            <Hero />
          </UpdateFollower>
        </main>
        <Category />
        <Category2 />
      </div>
    </>
  );
};

export default App;
