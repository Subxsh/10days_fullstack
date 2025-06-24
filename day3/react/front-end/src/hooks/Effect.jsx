 import { useState, useEffect } from "react";

 const Effect = () => {   const [count, setCount] = useState(0);
   const [users, setUsers] = useState([]);

   useEffect(() => {
     fetch('http://localhost:3000/get')
       .then((res) => res.json())
       .then((data) => setUsers(data))
       .catch((error) => {
         console.error("Error fetching users:", error);
       });
   }, []);
   console.log(users);
  
   return (
     <div className="p-4 border border-gray-200 rounded">
       <h1 className="text-2xl font-bold mb-2">Count: {count}</h1>
       <button
         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
         onClick={() => setCount(count + 1)}
       >
         Increment
       </button>
       <h2 className="text-xl font-semibold mb-2">User List:</h2>
       <ul className="list-disc list-inside">
         {users.map((user) => (
           <li key={user._id}>{user.name} : {user.age}</li>
         ))}
       </ul>
     </div>
   );
 };

export default Effect;


