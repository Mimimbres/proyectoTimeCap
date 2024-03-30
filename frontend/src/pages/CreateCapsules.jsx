import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCapsules } from "../hooks/useCapsules";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";



const CreateCapsule = () => {
  const { register, handleSubmit, formState: { errors } , getValues , setValue} = useForm();
  const [message, setMessage] = useState("");
  const { createCapsule } = useCapsules();
  const { mutate: create } = createCapsule();
  const {currentUser} = useAuth();



  const handleForm = (data) => {
    const currentUsers= getValues('users');
    setValue('users', [...currentUsers, currentUser.username]);
    create(data)
  }
  

  return (
    <div style={{ margin: '20px', maxWidth: '400px' }}> 
      <h1>Create Capsule</h1>
      <br />
      <form onSubmit={handleSubmit(data => handleForm(data))}>
        <div style={{ marginBottom: '10px' }}> 
          <label htmlFor="capsuleName">Capsule Name:</label>
          <input type="text" {...register("capsuleName", { required: true })} />
         
        </div>

        <div style={{ marginBottom: '10px' }}> 
          <label htmlFor="password">Password:</label>
          <input type="password" {...register("password", { required: true })} />
         
        </div>

        <div style={{ marginBottom: '10px' }}> 
          <label htmlFor="closeTime">Close Time:</label>
          <input type="text" placeholder="DD/MM/AAAA" {...register("closeTime", { required: true })} />
        
        </div>

        <div style={{ marginBottom: '10px' }}> 
          <label htmlFor="users">Users:</label>
          <input type="text" placeholder= "usuario"{...register("users.0", { required: false})} />
        
        </div>
        {/* <button type="button" onClick={()=>handlecForm()}>Ver usuarios </button> */}
        <br />
        <br />

        <div style={{ marginBottom: '10px' }}> 
          <label htmlFor="songs">Canciones:</label>
          <input type="text" placeholder= "artiasta y canción"{...register("songs.0", { required: false})} />
        
        </div>
        <div style={{ marginBottom: '10px' }}> 
          <label htmlFor="songs">Canciones:</label>
          <input type="text" placeholder= "artiasta y canción"{...register("songs.1", { required: false})} />
        
        </div>
        <div style={{ marginBottom: '10px' }}> 
          <label htmlFor="songs">Canciones:</label>
          <input type="text" placeholder= "artiasta y canción"{...register("songs.2", { required: false})} />
        
        </div>

        <div style={{ marginBottom: '10px' }}> 
          <label htmlFor="letter">Escribe a tu tú:</label>
          <input type="text" placeholder= "Querido yo..."{...register("letter.0", { required: false})} />
        
        </div>
        <div style={{ marginBottom: '10px' }}> 
          <label htmlFor="images">Imágenes</label>
          <input type="text" placeholder= "Upload image"{...register("images.0", { required: false})} />
        
        </div>

        <div style={{ marginTop: '20px' }}> 
          <button type="submit" onClick={(data)=>handleForm(data)}>Create Capsule</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateCapsule;