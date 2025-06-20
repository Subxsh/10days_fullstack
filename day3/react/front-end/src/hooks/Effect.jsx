// import { useState, useEffect } from "react";

// const Effect = () => {
//   const [count, setCount] = useState(0);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//       });
//   }, []);
//   console.log(users);
  
//   return (
//     <div className="p-4 border border-gray-200 rounded">
//       <h1 className="text-2xl font-bold mb-2">Count: {count}</h1>
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
//         onClick={() => setCount(count + 1)}
//       >
//         Increment
//       </button>

//       <h2 className="text-xl font-semibold mb-2">User List:</h2>
//       <ul className="list-disc list-inside">
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Effect;


import { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]); 

  // Fetching the posts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())      // Parse the response as JSON
      .then((data) => setPosts(data)); // Save the posts in state
  }, []);

  // Log the posts array every time it updates
  useEffect(() => {
    console.log(posts);              // Check your browser's console
  }, [posts]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Effect;
