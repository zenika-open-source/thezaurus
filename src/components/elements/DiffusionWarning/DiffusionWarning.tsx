"use client";
import IconPublic from "@/components/icons/Public";
import useLocalStorageOnce from "@/hooks/useLocalStorageOnce";

export default function DiffusionWarning() {
    const [diffusionMessageRead, setDiffusionMessageAsRead] = useLocalStorageOnce(false, "diffusionMessageRead");

    return <section className="description text-center text-sm mx-auto my-2 p-2 rounded-md">
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
}