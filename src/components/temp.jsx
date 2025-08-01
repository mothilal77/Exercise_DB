import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Detail from "../components/Detail";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
        const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

        // Fetch exercise details
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );

        if (exerciseDetailData) {
          setExerciseDetail(exerciseDetailData);

          // Only fetch YouTube videos if the exercise detail is available
          if (exerciseDetailData.bodyPart) {
            const exerciseVideosData = await fetchData(
              `${youtubeSearchUrl}/search?query=${encodeURIComponent(exerciseDetailData.bodyPart)}`,
              youtubeOptions
            );

            if (exerciseVideosData?.contents) {
              setExerciseVideos(exerciseVideosData.contents);
            } else {
              setExerciseVideos([]);
              console.warn("No videos found for this exercise.");
            }
          }
        }
      } catch (error) {
        console.error("Error fetching exercise details:", error);
      }
    };

    fetchExercisesData();
  }, [id]);

  // Log videos when they update (not immediately after setState)
  useEffect(() => {
    console.log("Fetched Videos:", exerciseVideos);
  }, [exerciseVideos]);

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      {/* Render ExerciseVideos only if there are videos */}
      {exerciseVideos.length > 0 && <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />}
    </Box>
  );
};

export default ExerciseDetail;