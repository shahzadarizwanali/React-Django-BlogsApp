import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PostList from "./components/PostList";

// Home page component
export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <PostList />

      {/* Footer */}
      <Footer />
    </>
  );
}
