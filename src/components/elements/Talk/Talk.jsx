import { Nunito } from "next/font/google";
import IconFormation from "@/components/icons/Formation";
import IconPublic from "@/components/icons/Public";
import IconVideo from "@/components/icons/Video";
import IconTalk from "@/components/icons/Talk";
import IconView from "@/components/icons/View";
import Ressource from "@/components/elements/Ressource/Ressource";
import FooterIcon from "@/components/elements/FooterIcon/FooterIcon";
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
  const authors = talk.author.join(", ");

  return (
    <article className="talk rounded-lg shadow-lg w-full border border-slate-50 text-sm flex flex-col h-56">
      <header className="flex items-stretch border-b">
        <div className="pl-3 py-1 mr-[-5px] flex-grow text-sm font-medium ">
          {talk.ressource.map((ressource, i) => (
            <Ressource ressource={ressource} key={i} className="mr-5" />
          ))}
        </div>
        <aside className="px-2 py-1 flex items-center rounded-bl-md rounded-tr-lg">
          <ul className="list-format flex flex-row justify-between text-white">
            {listFormat}
          </ul>
        </aside>
      </header>
      <section className="px-3 py-2 relative flex-grow flex flex-col justify-between">
        <button
          className="absolute w-10 h-10 bottom-2 right-2 flex items-center justify-center"
          title="Voir le talk"
          onClick={() => window.open(talk.link, "_blank")}
        >
          <IconView width={33} />
        </button>
        <h3
          className={`${nunito.className} text-xl leading-6 line-clamp-4`}
          title={talk.title}
        >
          {talk.title}
        </h3>
        <p
          className="max-w-[90%] pl-1 text-sm font-medium line-clamp-2"
          title={authors}
        >
          {authors}
        </p>
      </section>
      <footer className="pl-3 pr-2 py-1 text-xs font-medium border-t flex justify-between items-center">
        <FooterIcon icon="mapPin" text={talk.date} />
        {talk.duration && <FooterIcon icon="clock" text={talk.duration} />}
        <span className="date">{talk.date}</span>
      </footer>
    </article>
  );
}

export default Talk;
