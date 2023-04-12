import zenikaLogo from "/zenika.svg";
import "./App.css";

import Talk from "./assets/Talk";
import IconPublic from "./assets/icons/Public";
import { Cinema } from "./features/cinema/Cinema";

function App() {
  const talks = [
    {
      event: "TZ Lyon",
      date: "04/2022",
      format: "video".split(","),
      title: "Kanye West, Maths and Signals ! How to clone Shazam",
      link: "https://youtube.com/embed/lzKtUqVxIbc",
      author: "Moustapha Agack",
      ressource: "alien",
    },
    {
      event: "TZ Paris",
      date: "12/2022",
      format: "video".split(","),
      title:
        "15 minutes pour connaitre 15+ caractères chinois + 15 minutes pour apprendre la base de la langue chinoise",
      link: "https://drive.google.com/file/d/1UkQlYAWjxOaMJ85WKuLRh_CwKzr4E-A2/view",
      author: "Yue Gao",
      ressource: "alien",
    },
  ].map((t, i) => (
    <Talk
      key={`talk_${i}`}
      event={t.event}
      date={t.date}
      format={t.format}
      title={t.title}
      author={t.author}
      link={t.link}
      ressource={t.ressource}
    />
  ));

  return (
    <main className="flex flex-col h-full">
      <header className="border-b">
        <h1 className="flex flex-row items-center text-4xl justify-center">
          <span className="-mr-4">The</span>
          <img src={zenikaLogo} alt="Z" className="h-20" />
          <span className="-ml-4">aurus</span>
        </h1>
      </header>
      <p className="jumbo text-center py-2 border-b">
        Librairie de formation interne Zenika
      </p>
      <section className="description text-center text-sm py-3">
        <p>
          Listing de support d'upskilling pour les consultants Zenika. Ces
          médias sont des productions internes, et ne doivent pas être diffusées
          hors de Zenika sauf mention contraire explicite <IconPublic />. Chaque
          média est daté et le contexte de présentation est précisé ici.
        </p>
        <p>
          Sont éligibles ici les vidéos avec contenu de formation, avancé ou
          non, permettant aux consultant internes de découvrir ou d'approfondir
          un sujet. Les contenus commerciaux ne sont pas la cible de cette
          librairie.
        </p>
        <p>
          Pourquoi un Site ? Parce qu'on est trop mignon, et que git n'est pas
          adapté à toutes les populations 🤔🧌 Si vous avez mieux comme outils,
          n'hésitez pas 😄
        </p>
      </section>
      <h2 className="text-center">
        Collection des médias disponibles au sein de Zenika, pour utilisation
        interne
      </h2>
      <section className="flex m-5 flex-grow items-stretch justify-center">
        {talks}
      </section>

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
      <Cinema />
    </main>
  );
}

export default App;
