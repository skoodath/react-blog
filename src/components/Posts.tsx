export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = ({ posts }: { posts: Posts[] }) => {

  return (
    <div className="flex flex-wrap py-4">
      {posts && posts.slice(0,1).map(post => (
        <article className="basis-full w-full p-4 border-2">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
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
