import Image from "next/image";
import { Open_Sans, Nunito } from "next/font/google";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0/client";
import Talks from "@/components/elements/Talks/Talks";
import Link from "next/link";
import IconLogout from "@/components/icons/Logout";
import IconPublic from "@/components/icons/Public";
import useLocalStorageOnce from "@/hooks/useLocalStorageOnce";

const opensans = Open_Sans({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function Index() {
  const { user, error, isLoading } = useUser();

  const [diffusionMessageRead, setDiffusionMessageAsRead] = useLocalStorageOnce(false, "diffusionMessageRead");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <main className={`${opensans.className} flex flex-col h-full px-2`}>
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
              Librairie de formation interne Zenika
            </p>
          </div>
          <Link
              className="button connexion rounded-lg ml-auto p-1"
              href="/api/auth/logout"
          >
            <IconLogout width={30} />
          </Link>
        </header>

        <section className="description text-center text-sm mx-auto my-2 p-2 rounded-md">
          <details open={!diffusionMessageRead}>
            <summary
                className="text-lg mb"
                onClick={setDiffusionMessageAsRead}>👩‍⚖️ -- {diffusionMessageRead ? 'Rappel: diffusion interne uniquement' : 'À lire attentivement avant utilisation' } -- 👨‍⚖️</summary>
            <div className="p-2">
              <p>
                Listing de support d&apos;upskilling pour les consultants Zenika.
                Ces médias sont des productions internes, et ne doivent pas être
                diffusées hors de Zenika sauf mention contraire explicite&nbsp;
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
              <p>
                La documentation technique et la documentation sur l&apos;ajout d&apos;un talk est
                disponible&nbsp;
                <a
                  href="https://docs.google.com/document/d/1FMLZWCNmCYxix0cRr0Ars0UnaZvoQQpRdRNnXGIzKOo/edit?usp=sharing"
                  target="_blank"
                  title="Lien vers la documentation de TheZaurus"
                  rel="noopener"
                >
                  ici
                </a>
                . Vous pouvez également accéder directement au formulaire d&apos;ajout en cliquant sur&nbsp;
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfF99AC8fEKcXXF6z-gZMeCCtSGyUvQYxjO03Z1SkP2k3yNrg/viewform"
                  target="_blank"
                  title="Lien vers le formulaire d'ajout"
                  rel="noopener"
                >
                  ce lien
                </a>.
              </p>
            </div>
          </details>
        </section>

        <Talks />

        <footer className="text-xs text-center py-2 border-t">
          <p>
            Note : la liste des catégories est tirée de la liste officielle des&nbsp;
            <a
              href="https://app.mural.co/t/zenika3879/m/zenika3879/1657267681306/ae51f73d99476bbeab5efd791148293b243636df?sender=u4f4c156db63ae4f1b2b35952"
              target="_blank"
              title="Lien vers la liste officielle des dominantes et sensibilités de Zenika"
              rel="noopener"
            >
              dominantes / sensibilités Zenika
            </a>
            . Parcourir et intégrer le contenu du drive&nbsp;
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
