import Image from "next/image";
import { Open_Sans, Nunito } from "next/font/google";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0/client";
import Talks from "@/components/elements/Talks/Talks";
import Link from "next/link";
import IconPublic from "@/components/icons/Public";

const opensans = Open_Sans({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <main className={`${opensans.className} flex flex-col h-full`}>
        <Head>
          <link rel="icon" type="image/svg+xml" href="/zenika.svg" />
          <title>TheZaurus</title>
        </Head>

        <header className="border-b">
          <h1
            className={`${nunito.className} flex flex-row items-center text-4xl justify-center`}
          >
            <span className="-mr-3">The</span>
            <Image src="/zenika.svg" alt="Z" width={60} height={60} priority />
            <span className="-ml-3">aurus</span>
          </h1>
        </header>

        <p className="jumbo text-center py-2 border-b">
          Librairie de formation interne Zenika
        </p>
        <section className="description text-center text-sm py-3 px-2">
          <p>
            Listing de support d&apos;upskilling pour les consultants Zenika.
            Ces médias sont des productions internes, et ne doivent pas être
            diffusées hors de Zenika sauf mention contraire explicite{" "}
            <IconPublic />. Chaque média est daté et le contexte de présentation
            est précisé ici.
          </p>
          <p>
            Sont éligibles ici les vidéos avec contenu de formation, avancé ou
            non, permettant aux consultants internes de découvrir ou
            d&apos;approfondir un sujet. Les contenus commerciaux ne sont pas la
            cible de cette librairie.
          </p>
          <p>
            Pourquoi un Site ? Parce qu&apos;on est trop mignon, et que git
            n&apos;est pas adapté à toutes les populations 🤔🧌 Si vous avez
            mieux comme outils, n&apos;hésitez pas 😄
          </p>
          <Link
            className="button connexion h-10 w-40 rounded-lg px-4 m-4 py-2 inline-block"
            href="/api/auth/logout"
          >
            Se déconnecter
          </Link>
        </section>
        <Talks />
        <footer className="text-xs text-center py-2 border-t">
          <p>
            Note : la liste des catégories est tirée de la liste officielle des{" "}
            <a
              href="https://app.mural.co/t/zenika3879/m/zenika3879/1657267681306/ae51f73d99476bbeab5efd791148293b243636df?sender=u4f4c156db63ae4f1b2b35952"
              target="_blank"
              title="Lien vers la liste officielle des dominantes et sensibilités de Zenika"
              rel="noopener"
            >
              dominantes / sensibilités Zenika
            </a>
            . Parcourir et intégrer le contenu du drive{" "}
            <a
              href="https://drive.google.com/drive/folders/0AGdSbEOfEoGwUk9PVA"
              target="_blank"
              title="Lien vers les Talks et Vidéos sur Google Drive"
              rel="noopener"
            >
              Talks & Video
            </a>
          </p>
        </footer>
      </main>
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
