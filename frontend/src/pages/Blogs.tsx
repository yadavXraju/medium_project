import { AppBar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSelecton } from "../components/BlogSeleckton";
import { useBlogs } from "../hooks/index";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div>
            <BlogSelecton />
            <BlogSelecton />
            <BlogSelecton />
            <BlogSelecton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <AppBar />
      </div>
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd Feb 2024"}
            />
          ))}
        </div>
      </div>
    </>
  );
};
