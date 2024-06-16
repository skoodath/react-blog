import { useState } from 'react';
import Posts from './components/Posts';
import Users from './components/Users';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="flex">
      <aside className="basis-1/4">
        <Users setPosts={setPosts} />
      </aside>
      <section className="basis-3/4">
        <Posts posts={posts} />
      </section>
    </div>
  );
}

export default App;
