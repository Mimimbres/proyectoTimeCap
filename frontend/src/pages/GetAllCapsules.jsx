import { Link } from 'react-router-dom';
import { useCapsules } from '../hooks/useCapsules';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';


export const GetAllCapsules = () => {
const auth = useAuth();
const { getAllCapsules } = useCapsules();
const { capsules, isLoading } = getAllCapsules(auth.currentUser.id);

isLoading && <div>Loading...</div>;

console.log(capsules)
  return (
   <> 
    {capsules.map((capsule) => {
      return (
        <div key={capsule.id}>
          <Link to={`/capsule/${capsule.id}`}>{capsule.capsuleName}</Link>
        </div>
      ); 
    })}
  </>   

  );
};
