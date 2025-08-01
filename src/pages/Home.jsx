import { Box } from '@mui/material';
import React, { useState } from 'react';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';
const Home = () => {
  const [exercise, setExercise] = useState([]);
  const [bodyPart,setBodyPart]=useState('all');
  // console.log(bodyPart);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise 
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        />
      <Exercises
      exercise={exercise}  
      setExercise={setExercise}
      bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home