import React, { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000/api";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(""); // Search query state

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/posts/`);
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    })();
  }, []);

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4 mt-3">
      <h2 className="text-center mb-4 fw-bold">Blog Posts</h2>

      {/* Search input */}
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search posts by title..."
          className="form-control w-50 mx-auto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && filteredPosts.length === 0 && (
        <p>No posts found</p>
      )}

      <div className="row">
        {filteredPosts.map((post) => (
          <div key={post.id} className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card shadow-sm flex-fill h-100">
              {post.image_url && (
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="text-muted small mb-2">
                  By {post.author || "Unknown"}{" "}
                  {post.publish_date
                    ? `· ${new Date(post.publish_date).toLocaleString()}`
                    : ""}
                </p>
                <p className="card-text">{post.content.substring(0, 120)}...</p>
                <a
                  href={`/posts/${post.id}`}
                  className="btn btn-primary mt-auto align-self-start"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
