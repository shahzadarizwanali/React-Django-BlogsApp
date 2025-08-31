import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get dynamic URL parameter
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; // Import Footer component

// Base API URL, using environment variable if defined
const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000/api";

// PostDetail component
export default function PostDetail() {
  const { id } = useParams(); // Extract 'id' parameter from URL
  const [post, setPost] = useState(null); // Store post data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  // Fetch post data when component mounts or 'id' changes
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/posts/${id}/`);
        if (!res.ok) throw new Error("Not found"); // Handle HTTP errors
        const data = await res.json();
        setPost(data); // Set fetched post data
      } catch (e) {
        setError(e.message); // Set error message
      }
      setLoading(false); // Stop loading
    })();
  }, [id]);

  // Display loading message while fetching
  if (loading) return <div className="container py-4">Loading...</div>;

  // Display error message if fetch fails
  if (error) return <div className="container py-4 text-danger">{error}</div>;

  // If no post found, return nothing
  if (!post) return null;

  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      <div className="container py-4">
        <div className="card shadow-sm">
          {/* Display post image if available */}
          {post.image_url && (
            <img
              src={post.image_url}
              alt={post.title}
              className="card-img-top"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          )}

          {/* Post content */}
          <div className="card-body">
            <h2>{post.title}</h2>

            {/* Author and publish date */}
            <p className="text-muted small">
              By {post.author || "Unknown"}{" "}
              {post.publish_date
                ? `· ${new Date(post.publish_date).toLocaleString()}`
                : ""}
            </p>

            {/* Post main content */}
            <p>{post.content}</p>
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
}
