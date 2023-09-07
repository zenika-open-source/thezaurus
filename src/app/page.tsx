import Image from "next/image";
import {Open_Sans, Nunito} from "next/font/google";
import IconLogout from "@/components/icons/Logout";

import "@/styles/globals.css";
import UserLoggedBoundary from "@/components/elements/User/UserLoggedBoundary";
import TalksProvider from "@/components/elements/Talks/TalksProvider";

const opensans = Open_Sans({subsets: ["latin"]});
const nunito = Nunito({subsets: ["latin"]});

export const revalidate = 10;
export default function Index() {
    return (
        <UserLoggedBoundary>
            <main className={`${opensans.className} flex flex-col h-full px-2`}>
                <header className="py-1 grid grid-cols-[1fr_repeat(1,auto)_1fr] items-center">
                    <div className="col-start-2">
                        <h1 className={`text-4xl ${nunito.className} flex justify-center`}>
                            <span>The</span>
                            <Image src="/zenika.svg" alt="Z" width={35} height={35} priority/>
                            <span>aurus</span>
                        </h1>
                        <p className="text-center py-1 text-sm">
                            Librairie de formation interne Zenika
                        </p>
                    </div>
                    <a
                        className="button connexion rounded-lg ml-auto p-1"
                        href="/api/auth/logout"
                    >
                        <IconLogout width={30} height={30}/>
                    </a>
                </header>

                <TalksProvider />

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
        </UserLoggedBoundary>
    );
}
