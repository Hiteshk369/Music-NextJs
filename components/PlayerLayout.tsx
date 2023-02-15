import { Box } from "@chakra-ui/react";
import SideBar from "./SideBar";
import dynamic from "next/dynamic";

const PlayerLayout = ({ children }: any) => {
  return (
    <Box className="w-screen h-screen">
      <Box className="absolute top-0 w-60 left-0">
        <SideBar />
      </Box>
      <Box className="ml-60 mb-24">
        <Box className="h-[calc(100vh-100px)]">{children}</Box>
      </Box>
      <Box className="absolute left-0 bottom-0">player</Box>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(PlayerLayout), { ssr: false });
