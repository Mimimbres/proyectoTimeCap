import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const CreateCapsule = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/create", data);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error creating capsule:", error.response.data);
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
        <input type="text" {...register("users", { required: false})} />
        {errors.users && <span>This field is required</span>}

        

        <button type="submit">Create Capsule</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateCapsule;
