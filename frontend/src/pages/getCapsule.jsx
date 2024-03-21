import { Link, useParams } from 'react-router-dom';
import { useCapsules } from '../hooks/useCapsules';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';


export const GetCapsule = () => {
const { id } = useParams();
const { getCapsule } = useCapsules();
const { capsule, isLoading } = getCapsule(id);

isLoading && <p>Loading...</p>
console.log(capsule)
      return (
        <>
        <p>{JSON.stringify(capsule)}</p>
        </>
      )
     
    };
    