import Image from "next/image";
import { Nunito } from "next/font/google";
import IconFormation from "@/components/icons/Formation";
import IconPublic from "@/components/icons/Public";
import IconVideo from "@/components/icons/Video";
import IconTalk from "@/components/icons/Talk";
import IconView from "@/components/icons/View";
import Ressource from "@/components/elements/Ressource/Ressource";
import IconMapPin from "@/components/icons/MapPin";
const nunito = Nunito({ subsets: ["latin"] });

function Talk(props) {
  const talk = props.talk;

  const emojiFormat = {
    formation: (
      <span title="formation">
        <IconFormation />
      </span>
    ),
    public: (
      <span title="public">
        <IconPublic />
      </span>
    ),
    video: (
      <span title="video">
        <IconVideo />
      </span>
    ),
  };
  const listFormat = talk.format.map((f) => (
    <li key={f.toString()} className="mx-1">
      {emojiFormat[f] || IconTalk}
    </li>
  ));

  return (
    <article className="talk rounded-lg shadow-lg w-full border border-slate-50 text-sm flex flex-col h-56">
      <header className="flex items-center">
        <div className="flex-grow text-sm font-bold px-2 py-1 border-b ">
          {talk.ressource.map((ressource, i) => <Ressource ressource={ressource} key={i} />)}
        </div>
        <aside className="text-sm px-2 py-1 rounded-bl-md rounded-tr-lg">
          <ul className="list-format flex flex-row text-white">{listFormat}</ul>
        </aside>
      </header>
      <section className="flex-grow px-4 py-2 relative">
        <button
          className="m-2 flex items-center justify-center rounded-md w-10 h-10 absolute bottom-0 right-0"
          title="Voir le talk"
          onClick={() => window.open(talk.link, "_blank")}
        >
          <IconView />
        </button>
        <h3 className={`${nunito.className} text-xl leading-6 mb-2`}>
          {talk.title}
        </h3>
        <p className="text-sm">{talk.author.join(", ")}</p>
      </section>
      <footer className="text-xs font-bold px-2 py-1 border-t flex justify-between items-center">
        <div className="flex event">
          <IconMapPin width={16} />
          <span className="ml-1">{talk.event}</span>
        </div>
        <span className="date">{talk.date}</span>
      </footer>
    </article>
  );
}

export default Talk;
