import { useQuery } from "@tanstack/react-query";
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

  return { getAllCapsules, getCapsule };
};
