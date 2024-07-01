import React, { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeContext.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center py-10 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="text-lg">Sharing my thoughts and experiences</p>
        <Button onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </Button>
      </header>
      <main className="w-full max-w-4xl space-y-6">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mt-2">{post.content}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No posts yet. Be the first to add one!</p>
        )}
        <Link to="/add-post">
          <Button>Add New Post</Button>
        </Link>
      </main>
    </div>
  );
};

export default Index;