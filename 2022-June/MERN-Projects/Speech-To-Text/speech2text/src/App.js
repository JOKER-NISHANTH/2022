import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';

import {Recorder} from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";
import axios from "axios";

const assemblyApi = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: ProcessingInstruction.env.REACT_APP_ASSEMBLY_API_KEY,
    'content-type': 'application/json',
  },
});


function App() {
const initialState= { url: null, blob: null, chunks: null, duration: { h: 0, m: 0, s: 0,}, }
  const [audioDetails, setAudioDetails] = useState(initialState);

  //! data from assembly AI
  const [transcript, setTranscript] = useState({ id: '' });

  const [isLoading, setIsLoading] = useState(false);

  const handleAudioStop = (data) => {
    setAudioDetails(data);
  }

  const handleReset = () => {
    setAudioDetails({ ...initialState });
    setTranscript({ id: '' });
  }

  const handleAudioUpload = async (audioFile) => {
    setIsLoading(true);
    const { data: uploadResponse } = await assemblyApi.post("/upload", audioFile);

    const { data } = await assemblyApi.post("/transcript", {
      audio_url: uploadResponse.upload_url,
      sentiment_analysis: true,
      entity_detection: true,
      iab_categories: true,
    });

    // check the process is done or not
    setTranscript({ id: data.id });

  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>

          <VStack spacing={8}>
            <Box width={1000}>
            <Recorder
              record={true}
            audioURL={audioDetails.url}
            handleAudioStop={handleAudioStop}
              handleAudioUpload={handleAudioUpload}
              handleReset={handleReset}
            />
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
