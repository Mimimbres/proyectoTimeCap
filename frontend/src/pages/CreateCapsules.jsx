// CreateCapsule.js
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const CreateCapsule = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/create", data);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error creating capsule:", error);
      setMessage("Error creating capsule");
    }
  };

  return (
    <div>
      <h1>Create Capsule</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="capsuleName">Capsule Name:</label>
        <input type="text" {...register("capsuleName", { required: true })} />
        {errors.capsuleName && <span>This field is required</span>}

        <label htmlFor="password">Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}

        <label htmlFor="closeTime">Close Time:</label>
        <input type="datetime-local" {...register("closeTime", { required: true })} />
        {errors.closeTime && <span>This field is required</span>}

        <label htmlFor="users">Users:</label>
        <select {...register("users")}>
          <option value="">Select a user</option>
          
          {users.map((user) => (
            <option key={user.id} value={user.username}>
              {user.username}
            </option>
          ))}
        </select>

        {/* Add more input fields for other capsule properties like songs, image, letter, etc. */}

        <button type="submit">Create Capsule</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateCapsule;
