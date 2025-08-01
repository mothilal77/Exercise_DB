import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
const Exercises = ({exercise,setExercise,bodyPart}) => {
  // console.log(exercise);
const [currentPage,setCurrentPage]=useState(1);
const exercisesPerPage= 6;
const indexOfLastExercise = currentPage * exercisesPerPage;
const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
const currentExercises = exercise.slice(indexOfFirstExercise, indexOfLastExercise);
const paginate =(e,value) =>{
  setCurrentPage(value);
  
  window.scrollTo({top:1800,behavior: 'smooth'})
}

useEffect(() =>{
    const fetchExercisesData = async()=>{
      let exercisesData=[];
      if(bodyPart === 'all'){
        exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      }
      else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercise(exercisesData);
    }
    fetchExercisesData();
},[bodyPart]);
  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p="20px">
      <Typography variant='h3'mb="46px">
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap="wrap" justifyContent="center">
          {currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />  // replace with actual API call in real-world scenario  // exercise={exercise}  // replace with actual API call in real-world scenario  // exercise={exercise}  // replace with actual API call in real-world scenario  // exercise={exercise}  // replace with actual API call in real-world scenario  // exercise={exercise}  // replace with actual API call in real-world scenario  // exercise={exercise}  // replace with actual API call in real-world scenario  // exercise={exercise}  // replace with actual API call in real-world scenario  // exercise={exercise}  // replace with actual API call in real-world scenario  // exercise={exercise}  // replace with actual API call in real-world scenario  // exercise={exercise}  // replace with actual API call in real-world scenario  // exercise={exercise}  // replace with actual API call
          ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercise.length>6 && (
          <Pagination
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercise.length/exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'>
          </Pagination>
        )} 
      </Stack>
    </Box>
  )
}

export default Exercises