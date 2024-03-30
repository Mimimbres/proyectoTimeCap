import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgress, TextField, Button, Typography, Container } from '@mui/material';
import { useCapsules } from '../hooks/useCapsules';

const UpdateCapsule = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCapsule, updateCapsule } = useCapsules();
  const [capsuleData, setCapsuleData] = useState({ songs: '', image: '', letter: '' });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { capsule, isLoading } = await getCapsule(id);
    if (!isLoading) {
      setCapsuleData({
        songs: capsule.songs.join('\n'),
        image: capsule.image,
        letter: capsule.letter
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, getCapsule]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCapsuleData({ ...capsuleData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateCapsule(id).mutate(capsuleData);
    navigate('/capsules');
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Update Capsule</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="songs"
          label="Songs (separated by newline)"
          multiline
          rows={4}
          defaultValue={capsuleData.songs}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="image"
          label="Image URL"
          defaultValue={capsuleData.image}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="letter"
          label="Letter"
          multiline
          rows={4}
          defaultValue={capsuleData.letter}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" color="primary">Update</Button>
      </form>
    </Container>
  );
};

export default UpdateCapsule;
