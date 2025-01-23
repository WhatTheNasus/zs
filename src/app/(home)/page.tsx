import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
// import AuthenticatedView from "@/sections/AuthHomeView";
import GuestView from "@/sections/NonAuthHomeView";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Domov | ZS"
};

export default async function HomePage() {
  const userSession = await getServerSession(authOptions);

  if (userSession) {
    redirect("/prispevok");
    return null;
  }

  return <GuestView />;
}