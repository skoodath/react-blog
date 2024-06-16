const Posts = ({ posts }: { posts: never[] }) => {
  console.log(posts[0]);
  return (
    <div className="flex flex-wrap">
      {posts && (
        <article className="basis-full w-full">
          <h2>{posts[0].title}</h2>
          <p>{posts[0].body}</p>
        </article>
      )}
      {posts &&
        posts.slice(1).map((post) => (
          <div key={post.id} className="m-4 basis-1/4">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Posts;
