import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';
const SearchExercise = ({setExercise,bodyPart,setBodyPart}) => {
    const targetArray = ["abductors", "abs", "adductors", "biceps", "calves", 
        "cardiovascular system", "delts", "forearms", "glutes", "hamstrings", 
        "lats", "levator scapulae", "pectorals", "quads", "serratus anterior", 
        "spine", "traps", "triceps", "upper back"];
        const equipmentArray = ["assisted", "band", "barbell", "body weight", "bosu ball", 
            "cable", "dumbbell", "elliptical machine", "ez barbell", "hammer", "kettlebell", 
            "leverage machine", "medicine ball", "olympic barbell", "resistance band", "roller", 
            "rope", "skierg machine", "sled machine", "smith machine", "stability ball", 
            "stationary bike", "stepmill machine", "tire", "trap bar", "upper body ergometer", 
            "weighted", "wheel roller"];
            const bodyPartArray = ["back", "cardio", "chest", "lower arms", "lower legs", 
            "neck", "shoulders", "upper arms", "upper legs", "waist"];
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] =useState([]);
    useEffect(()=>{
        const fetchExercisesData=async()=>{
            try{
                const bodyPartData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
                //console.log('Fetched exercises:',bodyPartData);
                setBodyParts(['all',...bodyPartData]);
            }
            catch(err){
                console.error('Error fetching data:',err);
            }
            // try{
            //     const exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`,exerciseOptions);
            //     // console.log('Fetched exercises:',exercisesData);
            //     const searchedExercises=exercisesData.filter(
            //         (exercise)=>exercise.name.toLowerCase().includes(search)
            //         ||exercise.target.toLowerCase().includes(search)
            //         ||exercise.equipment.toLowerCase().includes(search)
            //         ||exercise.bodyPart.toLowerCase().includes(search)
            //     );
            //     //console.log('Searched exercises:',searchedExercises);
            //     setSearch('');
            //     setExercise(searchedExercises);
            // }
            // catch(err){
            //     console.error('Error fetching data:',err);
            // }
        }
        fetchExercisesData();
    },[]);
    // const handleSearch = async() => {
    //     if(search){
    //         try{
    //             const exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`,exerciseOptions);
    //             // console.log('Fetched exercises:',exercisesData);
    //             const searchedExercises=exercisesData.filter(
    //                 (exercise)=>exercise.name.toLowerCase().includes(search)
    //                 ||exercise.target.toLowerCase().includes(search)
    //                 ||exercise.equipment.toLowerCase().includes(search)
    //                 ||exercise.bodyPart.toLowerCase().includes(search)
    //             );
    //             //console.log('Searched exercises:',searchedExercises);
    //             setSearch('');
    //             setExercise(searchedExercises);
    //         }
    //         catch(err){
    //             console.error('Error fetching data:',err);
    //         }
    //     }
    // }
    const handleSearch = async () => {
        if (search) {
            let searchType = "bodyPart"; 
            if (bodyPartArray.includes(search.toLowerCase())) searchType = "bodyPart";
            else if (targetArray.includes(search.toLowerCase())) searchType = "target";
            else if (equipmentArray.includes(search.toLowerCase())) searchType = "equipment";
    
            try {
                const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/${searchType}/${search}`, exerciseOptions);
                setSearch('');
                setExercise(exercisesData);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        }
    };
    return (
    <Stack alignItems="center" mt="37px" 
    justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{
            fontSize:{lg:'44px',xs:'30px'}}}
            mb="50px" textAlign="center">
            Awesome Exercises You <br />
            Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
            sx={{
                input:{
                    fontWeight:"700",
                    border:'none',
                    borderRadius:'4px',
                },
                width:{lg:'800px',xs:'350px'},
                backgroundColor:'#fff',
                borderRadius:'40px'
            }}
            height="76px"
            value={search}
            onChange={(e)=>setSearch(e.target.value.toLowerCase())}
            placeholder='Search Exercises'
            type='text'/>
            <Button className="search-btn"
            sx={{
                bgcolor:"#FF2625",
                color:'#fff',
                textTransform:'none',
                fontSize:{lg:'20px',xs:'14px'},
                width:{lg:'175px',xs:'80px'},
                height:"56px",
                position:'absolute',
                right:'0',
            }}
            onClick={handleSearch}>
                Search
            </Button>
        </Box>
        <Box sx={{position:'relative',width:'100%',p:'20px'}}>
            <HorizontalScrollBar data={bodyParts}
            bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
        </Box>
    </Stack>
  )
}

export default SearchExercise