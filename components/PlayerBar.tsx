import { Box, Flex, Text } from "@chakra-ui/react";
import Player from "./Player";

const PlayerBar = () => {
  return (
    <Box className="h-[100px] w-screen bg-gray-900 p-[10px]">
      <Flex align="center">
        <Box className="p-5 text-gray-200 w-[30%]">
          <Text className="text-sm font-poppins">Song Name</Text>
          <Text className="text-xs font-poppins">Artist Name</Text>
        </Box>
        <Box className="w-[40%]">
          <Player />
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
