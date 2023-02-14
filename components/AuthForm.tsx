import { Box, Button, color, Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "@/lib/mutation";
import Logo from "../public/Logo.png";
import Image from "next/image";

const AuthForm: FC<{ mode: "signup" | "signin" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box className="h-screen w-screen bg-black">
      <Flex className="pt-12 justify-center items-center h-[100px] flex-col gap-3">
        <Image className="w-40" src={Logo} alt="logo" />
        <p className="font-poppins text-white font-semibold text-3xl">
          Sign up for free to start listening
        </p>
      </Flex>
      <Flex className="justify-center items-center h-[calc(100vh-100px)]">
        <form onSubmit={handleSubmit} className="w-[30%]">
          <Input
            className="mb-4"
            placeholder="email"
            _placeholder={{ color: "gray.300" }}
            focusBorderColor="gray.500"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="mb-4"
            placeholder="password"
            _placeholder={{ color: "gray.300" }}
            focusBorderColor="gray.500"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" isLoading={isLoading} loadingText="Submitting">
            {mode}
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default AuthForm;
