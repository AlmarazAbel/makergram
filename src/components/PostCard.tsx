import type { Post } from "../mocks/posts";
import { getTimeAgo } from "../utils/time";
import { HeartIcon } from "./HeartIcon";

const DEFAULT_AVATAR =
  "https://images.pexels.com/photos/7163703/pexels-photo-7163703.jpeg";

export function PostCard({
  post,
  onLike,
}: {
  post: Post;
  onLike: (id: number | string) => void;
}) {
  const username = post.profile?.username || "default_user";
  const avatarUrl = post.profile?.avatar_url || DEFAULT_AVATAR;

  return (
    <article className="bg-card-bg border border-border rounded-xl overflow-hidden shadow-sm">
      {/* Header con usuario y avatar */}
      <div className="flex items-center gap-3 p-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary bg-card-bg">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={username}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-lg text-foreground/40">
              {username.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-foreground">@{username}</span>
          <span className="text-xs text-foreground/50">
            {getTimeAgo(new Date(post.created_at))}
          </span>
        </div>
      </div>

      {/* Imagen del post */}
      <div className="relative w-full aspect-square">
        <img
          src={post.image_url}
          alt={`Post de ${username}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Acciones y caption */}
      <div className="p-4">
        {/* Botones de like y comentario */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onLike(post.id)}
            className="hover:scale-110 transition-transform active:scale-95"
            aria-label={post.isLiked ? "Quitar like" : "Dar like"}
          >
            <HeartIcon filled={post.isLiked || false} />
          </button>
          {/* Contador de likes */}
          <span className="font-semibold text-foreground mt-2 block">
            {post.likes.toLocaleString()} likes
          </span>
        </div>

        {/* Caption */}
        <p className="mt-2 text-foreground">
          <span className="font-semibold">@{username}</span>{" "}
          <span className="text-foreground/80">{post.caption}</span>
        </p>
      </div>
    </article>
  );
}
