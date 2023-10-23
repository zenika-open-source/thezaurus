import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import IconLogout from "@/components/icons/Logout";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/zenika.svg" />
        <title>TheZaurus</title>
      </Head>

      <header className="py-1 grid grid-cols-[1fr_repeat(1,auto)_1fr] items-center">
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
        <Link
          className="button connexion rounded-lg ml-auto p-1"
          href="/api/auth/logout"
        >
          <IconLogout width={30} />
        </Link>
      </header>
    </>
  );
}
