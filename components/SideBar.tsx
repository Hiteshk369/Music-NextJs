import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Logo.png";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import {
  MdMusicNote,
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Liked Songs",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const SideBar = () => {
  return (
    <Box className="w-full h-[calc(100vh-100px)] bg-black px-1 text-[#b2b2b2]">
      <Box className="py-5 h-full">
        <Box className="flex justify-center items-center">
          <MdMusicNote size={40} />
          <Image height={40} width={140} src={Logo} alt="logo" />
        </Box>
        <Box className="mb-4">
          <List spacing={2} className="px-5 text-sm font-medium mt-4">
            {navMenu.map((menuItem) => (
              <ListItem
                key={menuItem.name}
                className="font-poppins hover:text-white"
              >
                <LinkBox>
                  <Link href={menuItem.route} passHref>
                    <LinkOverlay className="flex items-center gap-3">
                      <ListIcon className="text-xl" as={menuItem.icon} />
                      {menuItem.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <List spacing={2} className="p-5 text-sm font-medium mt-1 mb-1">
            {musicMenu.map((menuItem) => (
              <ListItem
                key={menuItem.name}
                className="font-poppins hover:text-white"
              >
                <LinkBox>
                  <Link href={menuItem.route} passHref>
                    <LinkOverlay className="flex items-center gap-3">
                      <ListIcon className="text-xl" as={menuItem.icon} />
                      {menuItem.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider className=" ml-5" width="80%" opacity="0.4" />

        <Box className="h-[45%] md:h-[55%] overflow-y-scroll my-5 mx-5 scrollbar-hide">
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem
                key={playlist}
                className="text-sm font-normal font-poppins hover:text-white"
              >
                <LinkBox>
                  <Link href="/" passHref>
                    <LinkOverlay className="flex items-center">
                      {playlist}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
