import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600">Sharing my thoughts and experiences</p>
      </header>
      <main className="w-full max-w-4xl space-y-6">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mt-2">{post.content}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-600">No posts yet. Be the first to add one!</p>
        )}
        <Link to="/add-post">
          <Button>Add New Post</Button>
        </Link>
      </main>
    </div>
  );
};

export default Index;