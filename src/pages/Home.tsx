import { useState} from "react";
import { PostCard } from "../components/PostCard";
import { AppHeader } from "../components/AppHeader";
import { posts as initialPosts, type Post } from "../mocks/posts";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

const handleLike = (postId: number | string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  };

  
  return (
    <div className="min-h-screen bg-background">
      <AppHeader title="Makergram" />

      {/* Feed de posts */}
      <main className="max-w-lg mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={handleLike}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
