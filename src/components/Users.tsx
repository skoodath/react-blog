import { useCallback, useRef, useState } from 'react';
import useFetch from '../hooks/useFetch';

export type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

interface UserProps {
  setPosts: React.Dispatch<React.SetStateAction<never[]>>;
}


const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

const Users = ({ setPosts }: UserProps) => {
  const userAll: Users[] = useFetch(userUrl);
  const [top, setTop] = useState<number | undefined>(0);
  const [height, setHeight] = useState<number | undefined>(0);
  const listRef = useRef<HTMLLIElement[] | []>([]);
  const bgRef = useRef(null);


  const handlePosts = useCallback((id: number, index: number) => {
    setTop(listRef.current[index]?.getBoundingClientRect().top);
    setHeight(listRef.current[index]?.getBoundingClientRect().height);
    fetch(postUrl + id)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <ul className="m-4 flex flex-col relative">
        {userAll.length > 0 && <li
          className="absolute border-2 border-green-200 w-full -z-10"
          style={{
            top: top,
            height: `${height}px`,
            translate: '0 -40%',
            transition: 'top 200ms ease-in',
          }}
          ref={bgRef}
        ></li>}
        {userAll &&
          userAll.map((user, index) => (
            <li
              key={user.id.toString()}
              onClick={() => handlePosts(user.id, index)}
              className={`cursor-pointer p-2 mb-2`}
              ref={(el: HTMLLIElement) => (listRef.current[index] = el)}
            >
              {user.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Users;
