// Import necessary modules
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
// import AuthenticatedView from "@/sections/AuthHomeView";
import GuestView from "@/sections/NonAuthHomeView";
import { redirect } from "next/navigation";

// Page metadata
export const metadata = {
  title: "Domov | ZS"
};

/**
 * HomePage Component
 * This component dynamically renders content based on the user's authentication status.
 */
export default async function HomePage() {
  try {
    // Attempt to retrieve the user session from the server
    const userSession = await getServerSession(authOptions);

    // Return the appropriate view based on session presence
    if (userSession) {
      redirect("/prispevok");
      // return <AuthenticatedView session={userSession} />;
    } else {
      return <GuestView />;
    }
  } catch (error) {
    console.error("Error fetching session:", error);
    // Optionally, handle error state
    return <GuestView />;
  }
}