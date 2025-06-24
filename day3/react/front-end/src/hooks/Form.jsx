import { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        department: ''
    });
    const [users, setUsers] = useState([]); // Added users state

    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:3000/getform');
        setUsers(res.data); // Store fetched users
        console.log(res);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/postform', formData);
        console.log(formData);
        fetchUsers(); // Refresh user list after submit
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <br />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <br />
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <br />
                <label>Department:</label>
                <select name="department" value={formData.department} onChange={handleChange}>
                    <option value="">Select Department</option>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                </select>
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>User Data</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        Name: {user.name}, Email: {user.email}, Department: {user.department}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Form;