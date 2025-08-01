import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';
const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography variant='h4' mb={5}>Exercises that target same muscle group</Typography>
      <Stack direction='row' sx={{p:'2px',position:'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollBar
        data={targetMuscleExercises}></HorizontalScrollBar>:<Loader/>}
      </Stack>
      <Typography variant='h4' mb={5}>Exercises that use same equipment</Typography>
      <Stack direction='row' sx={{p:'2px',position:'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollBar
        data={equipmentExercises}></HorizontalScrollBar>:<Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises