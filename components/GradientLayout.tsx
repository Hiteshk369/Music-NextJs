import { Box, Flex, Text, Image } from "@chakra-ui/react";

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}: any) => {
  return (
    <Box
      className="h-full overflow-y-auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} className="p-10 items-center">
        <Box className="p-5">
          <Image
            src={image}
            alt="image"
            boxSize="160px"
            borderRadius={roundImage ? "100%" : "3px"}
            className=" shadow-2xl"
          />
        </Box>
        <Box className="p-5 leading-10">
          <Text className="text-[10px] font-semibold uppercase text-gray-100 font-poppins">
            {subtitle}
          </Text>
          <Text className="text-6xl font-medium text-gray-100 capitalize font-poppins">
            {title}
          </Text>
          <Text className="text-xs font-light text-gray-100 font-poppins">
            {description}
          </Text>
        </Box>
      </Flex>
      <Box className="py-12">{children}</Box>
    </Box>
  );
};

export default GradientLayout;
