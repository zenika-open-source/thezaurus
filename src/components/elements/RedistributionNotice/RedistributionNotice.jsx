import IconPublic from "@/components/icons/Public";
import styles from "./RedistributionNotice.module.css";
import useLocalStorageOnce from "@/hooks/useLocalStorageOnce";

export default function RedistributionNotice({ dialogRef }) {
  const [usageWarningRead, setUsageWarningRead] = useLocalStorageOnce(
    false,
    "usageWarningRead",
  );

  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "row-reverse",
          zIndex: 1,
        }}
      >
        <dialog
          className={`card ${styles.info}`}
          open={!usageWarningRead}
          onClick={() => {
            if (!usageWarningRead) {
              setUsageWarningRead();
            }
            dialogRef.current.close();
          }}
          ref={dialogRef}
        >
          <h2>Rappel: diffusion interne uniquement</h2>
          <div className="p-2">
            <p>
              Listing de support d&apos;upskilling pour les consultants Zenika.
              Ces médias sont des productions internes, et ne doivent pas être
              diffusées hors de Zenika sauf mention contraire explicite&nbsp;
              <IconPublic />. Chaque média est daté et le contexte de
              présentation est précisé ici.
            </p>
            <p>
              Sont éligibles ici les vidéos avec contenu de formation, avancé ou
              non, permettant aux consultants internes de découvrir ou
              d&apos;approfondir un sujet. Les contenus commerciaux ne sont pas
              la cible de cette librairie.
            </p>
            <p>
              Pourquoi un Site ? Parce qu&apos;on est trop mignon, et que git
              n&apos;est pas adapté à toutes les populations 🤔🧌 Si vous avez
              mieux comme outils, n&apos;hésitez pas 😄
            </p>
            <p>
              La documentation technique et la documentation sur l&apos;ajout
              d&apos;un talk est disponible&nbsp;
              <a
                href={process.env.NEXT_PUBLIC_DOCUMENTATION_URL}
                target="_blank"
                title="Lien vers la documentation de TheZaurus"
                rel="noopener"
              >
                ici
              </a>
              . Vous pouvez également accéder directement au formulaire
              d&apos;ajout en cliquant sur&nbsp;
              <a
                href={process.env.NEXT_PUBLIC_CONTRIBUTE_URL}
                target="_blank"
                title="Lien vers le formulaire d'ajout"
                rel="noopener"
              >
                ce lien
              </a>
              .
            </p>
          </div>
        </dialog>
        <button
          onClick={() => {
            dialogRef.current.showModal();
          }}
          style={{
            fontFamily: "serif",
            backgroundColor: "#EE2238",
            color: "white",
            display: "block",
            width: "2em",
            height: "2em",
            borderRadius: "50%",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          i
        </button>
      </div>
    </div>
  );
}
