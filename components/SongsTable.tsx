import {
  Box,
  Table,
  Thead,
  Td,
  Tr,
  Tbody,
  Th,
  IconButton,
} from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { formatDate, formatTime } from "@/lib/formatter";

const SongsTable = ({ songs }: any) => {
  return (
    <Box className="bg-transparent text-gray-300">
      <Box className="p-[10px] mb-5">
        <Box className="mb-6">
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            colorScheme="green"
            size="lg"
            isRound
            aria-label="play"
          />
        </Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle size="15px" />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song: any, i: number) => (
              <Tr
                sx={{
                  transition: "all .3s",
                  "&:hover": {
                    bg: "rgba(255,255,255,0.1)",
                  },
                }}
                key={song.id}
                cursor="cursor"
              >
                <Td>{i + 1}</Td>
                <Td>{song.name}</Td>
                <Td>{song.createdAt}</Td>
                <Td>{formatTime(song.duration)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default SongsTable;
