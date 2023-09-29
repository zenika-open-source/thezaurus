import { Open_Sans } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import Talks from "@/components/elements/Talks/Talks";
import Link from "next/link";
import RedistributionNotice from "@/components/elements/RedistributionNotice/RedistributionNotice";
import Header from "@/components/elements/Header/Header";
import Footer from "@/components/elements/Footer/Footer";
import { useRef } from "react";
import { defineCustomElements } from "@zenika/internal-ui-components-react";
import "@zenika/internal-ui-components/dist/zenika-internal-ui/zenika-internal-ui.css";

const opensans = Open_Sans({ subsets: ["latin"] });

defineCustomElements();
export default function Index() {
  const { user, error, isLoading } = useUser();
  const dialog = useRef();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    console.log(user);
    return (
      <>
        <main
          className={`${opensans.className} flex flex-col h-full px-2 h-auto`}
        >
          <RedistributionNotice dialogRef={dialog} />
          <Header user={user} />

          <Talks />
          <Footer />
        </main>
      </>
    );
  }

  return (
    <div className="h-full flex items-center justify-center">
      <Link
        href="/api/auth/login"
        className="button connexion h-10 w-40 rounded-lg px-4 py-2 inline-bloc text-center"
      >
        Login
      </Link>
    </div>
  );
}
