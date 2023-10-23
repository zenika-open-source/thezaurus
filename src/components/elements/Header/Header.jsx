import Image from "next/image";
import Head from "next/head";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });
import { ProfileMenu, ProfileLink } from "@zenika/internal-ui-components-react";

export default function Header({ user }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/zenika.svg" />
        <title>TheZaurus</title>
      </Head>

      <header className="py-1 grid grid-cols-[1fr_repeat(1,auto)_1fr] items-center mx-20">
        <div className="col-start-2">
          <h1 className={`text-4xl ${nunito.className} flex justify-center`}>
            <span>The</span>
            <Image src="/zenika.svg" alt="Z" width={35} height={35} priority />
            <span>aurus</span>
          </h1>
          <p className="text-center py-1 text-sm">
            Librairie des médias disponibles
          </p>
        </div>
        <div
          style={{ maxHeight: "100%" }}
          className="inline-grid justify-items-end z-10"
        >
          <ProfileMenu
            name={`${user.given_name} ${user.family_name}`}
            agency="Zenika"
            lastLoginDate={`${new Date(user.updated_at).toLocaleDateString(
              "en-GB",
            )}`}
            image={user.picture}
          >
            <ProfileLink
              icon="logout"
              text="Logout"
              href="/api/auth/logout"
            ></ProfileLink>
          </ProfileMenu>
        </div>
      </header>
    </>
  );
}
