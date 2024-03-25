import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useCapsules = () => {
  const getAllCapsules = (userId) => {
    const [capsules, setCapsules] = useState([]);
    const getData = async () => {
      const response = await fetch("http://localhost:3000/capsule/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data?.userCapsules;
    };
  

    const setData = async () => {
      const data = await getData();
      const userCapsules = []; 
      data?.map((capsule)=>{
        capsule.users.map((user) => {
          if(user.id === userId) {
            userCapsules.push(capsule) 
          }
        })
      });
      setCapsules(userCapsules);
    }

    const { isLoading } = useQuery({
      queryKey: ["userCapsules"],
      queryFn: async () => await setData(),
    });

    return { capsules , isLoading };
  };
  const getCapsule = (id) => {
  const [capsule, setCapsule] = useState({});

    const getData = async () => {
      const response = await fetch(`http://localhost:3000/capsule/${id}`);
      const data = await response.json();
      return data?.capsule;
    };
    const { isLoading } = useQuery({
      queryKey: ["singleCapsule"],
      queryFn: async () => setCapsule(await getData()),
    });

    return { capsule, isLoading };
  };

  const createCapsule =  () => {
    const submitData = async (capsuleData) =>{
      await fetch('http://localhost:3000/capsule/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(capsuleData),
      })
    } 

  const { mutate } = useMutation({
    mutationFn: async (body) =>await submitData(body),
  })

  return { mutate }
  }

  const updateCapsule = (id) => {
    const submitData = async (capsuleData) =>{
      await fetch('http://localhost:3000/capsule/${id}', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(capsuleData),
      })
    }

    const { mutate } = useMutation({
     mutationFn: async (body) =>await submitData(body),
    })

  return { mutate } 
}

const deleteCapsule = (id) => {
  const deleteData = async () =>{
    await fetch('http://localhost:3000/capsule/${id}', {
      method: 'DELETE',
    })
  }

  const { mutate } = useMutation({
   mutationFn: async () =>await deleteData(),
  })

return { mutate }
}
  


  return { getAllCapsules, getCapsule , createCapsule , updateCapsule , deleteCapsule};
};
