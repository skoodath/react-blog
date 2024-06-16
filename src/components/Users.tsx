import { useCallback } from 'react';
import useFetch from '../hooks/useFetch';

interface UserProps {
  setPosts: React.Dispatch<React.SetStateAction<never[]>>;
}

const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

const Users = ({ setPosts }: UserProps) => {
  const users = useFetch(userUrl);

  const handlePosts = useCallback((id: string) => {
    fetch(postUrl + id)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      {users &&
        users.map((user, index) => (
          <ul key={user.id} className={`m-4 flex flex-col`}>
            <li
              onClick={() => handlePosts(user.id)}
              className={`cursor-pointer`}
            >
              {user.name}
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Users;
