import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { authControllerSignIn } from "@/shared/api/generated";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    authControllerSignIn({
      email: "example@gmail.com",
      password: "12345678",
    }).then((res) => console.log(res));
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    ></main>
  );
}
