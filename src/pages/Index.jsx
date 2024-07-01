import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600">Sharing my thoughts and experiences</p>
      </header>
      <main className="w-full max-w-4xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Latest Post</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-semibold">My First Blog Post</h2>
            <p className="text-gray-700 mt-2">
              This is the content of my first blog post. I'm excited to share my journey with you all!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" />
              </div>
              <Button type="submit">Send</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;