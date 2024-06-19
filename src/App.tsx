import { useState } from 'react';
import Posts from './components/Posts';
import Users from './components/Users';
import Header from './components/Header';

function App() {
  const [posts, setPosts] = useState([]);

  

  return (
    <>
    <Header />
    <div className="flex">
      <aside className="basis-1/4 border-r">
        <Users setPosts={setPosts} />
      </aside>
      <section className="basis-3/4 px-4">
        <Posts posts={posts} />
      </section>
    </div>
    </>
  );
}

export default App;
