// import Typography from "@mui/material/Typography";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";
import AuthenticatedView from "@/sections/AuthHomeView";
// import GuestView from "@/sections/NonAuthHomeView";

// Metadata for the page
export const metadata = {
  title: "Zoznam Profilov | ZS",
};

/**
 * ProfileList Component
 * Displays a list of user profiles.
 */
export default async function ProfileListPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return <AuthenticatedView session={session} />;
  // } else {
    // return <GuestView />;
  }
}