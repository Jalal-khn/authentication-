import Image from "next/image";
import SignUp from "./signup/page";
import LoginPage from "./login/page";

export default function Home() {
  return (
   <main>
    <SignUp />
    <LoginPage />
   </main>
  );
}
