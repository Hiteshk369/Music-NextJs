import GradientLayout from "@/components/GradientLayout";
import SongsTable from "@/components/SongsTable";
import { validateToken } from "@/lib/auth";
import prisma from "@/lib/prisma";

const generateBGcolor = () => {
  const colors = ["red", "green", "orange", "purple", "gray", "teal", "blue"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }: any) => {
  const color = generateBGcolor();
  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={playlist?.name}
      subtitle="playlist"
      description={`${playlist?.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <SongsTable songs={playlist.songs} />
    </GradientLayout>
  );
};
export const getServerSideProps = async ({ query, req }: any) => {
  let user;
  try {
    user = validateToken(req.cookies.HK_ACCESS_TOKEN);
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }

  const [data] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: user.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });
  const playlist = JSON.parse(JSON.stringify(data));
  return {
    props: { playlist },
  };
};

export default Playlist;
