import React,{useState,useEffect} from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData"
import HorizontalScrollbar from "../components/HorizontalScrollbar"
const SearchExercises = () => {
    const [search, setSearch] = useState('');
    const [exercises, setExercises] = useState([])
    const[bodyParts,setBodyParts] = useState([])

    // ! Fetch the category
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        }
        fetchExercisesData();
    }, [])

    const handleSearch = async() => {
        if (search) {
            const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
            // console.log(exercisesData)
            const searchedExercises = exercisesData.filter(
                exercise =>
                    exercise.name.toLowerCase().include(search) ||
                    exercise.target.toLowerCase().include(search) ||
                    exercise.equipment.toLowerCase().include(search) ||
                    exercise.bodyPart.toLowerCase().include(search)
            );

            //! Clear the searched String
            setSearch('');
            //? Set the result
            setExercises(searchedExercises);
        }
    }
    return (
      <Stack
          alignItems="center" mt="37px"
          justifyContent="center"
          p="20px"
      >
          <Typography
              fontWeight={700}
              sx={{
                  fontSize: { lg: '44px', xs: "30px" }
              }}
              mb="50px" textAlign="center"
          >
              Awesome Exercises You <br />Should Know
          </Typography>
          <Box
              position="relative"
              mb="72px"
          >
              <TextField

                  sx={{
                      input: { fontWeight: "700", border: 'none', borderRadius: '4px' },
                      width: { lg: "800px", xs: '350px' },
                      backgroundColor: "#FFF",
                      borderRadius: "40px",

                  }}

                  height="76px"
                  value={search}
                  onChange={(e) => setSearch(e.target.value.toLowerCase()) }
                  placeholder="Search Exercises"
                  type="text"

              />
              <Button
                  className="search-btn"
                  sx={{
                      bgcolor: '#FF2625',
                      color: '#FFF',
                      textTransform: "none",
                      width: { lg: '170px', xs: '80px' },
                      fontSize: { lg: '20px', xs: "14px" },
                      height: "56px",
                      position: "absolute",
                    right:"0",
                    }}
                    onClick={handleSearch}
                >
                  Search
              </Button>
            </Box>
            {/* List */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    p: '20PX'
                }}
            >
                <HorizontalScrollbar data={bodyParts } />
            </Box>
    </Stack
    >
  )
}

export default SearchExercises