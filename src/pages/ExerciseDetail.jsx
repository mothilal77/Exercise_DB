import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
        const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

        // Fetch Exercise Details
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );

        if (exerciseDetailData) {
          setExerciseDetail(exerciseDetailData);

          // Fetch YouTube videos based on bodyPart or fallback to name
          const query = exerciseDetailData.name || exerciseDetailData.bodyPart;
          if (query) {
            const exerciseVideosData = await fetchData(
              `${youtubeSearchUrl}/search?query=${encodeURIComponent(query)}&hl=en&gl=US`,
              youtubeOptions
            );
            setExerciseVideos(exerciseVideosData?.contents || []);
          } else {
            console.warn("No query available for YouTube search.");
          }
        }
        const targetMuscleExercisesData=await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
        setTargetMuscleExercises(targetMuscleExercisesData);
        const equipmentExercisesData=await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
        setEquipmentExercises(equipmentExercisesData);
      } catch (error) {
        console.error("Error fetching exercise details:", error);
      }
    };

    fetchExercisesData();
  }, [id]);

  // ✅ Log videos only when state updates
  useEffect(() => {
    console.log("Fetched Videos:", exerciseVideos);
  }, [exerciseVideos]);

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}></ExerciseVideos>
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
