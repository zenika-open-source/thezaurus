import Image from "next/image";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

function Talk(props) {
  const emojiFormat = ["formation", "public", "video"];
  const talk = props.talk;

  const listFormat = talk.format.map((f) => (
    <li key={f.toString()} className="mx-1">
      {emojiFormat.indexOf(f) !== -1 ? (
        <Image src={`/${f}.svg`} alt={f} width={20} height={20} />
      ) : (
        <Image src={`/talk.svg`} alt="talk" width={20} height={20} />
      )}
    </li>
  ));

  return (
    <article className="talk rounded-lg shadow-lg md:w-96 md:h-56 border border-slate-50 text-sm flex flex-col m-3">
      <header className="flex items-stretch">
        <span className="flex-grow text-sm px-4 py-1 border-b">
          <span className="event px-2 py-1 text-xs text-white rounded-full font-bold mr-1">
            {talk.event}
          </span>
          <span className="date px-2 py-1 text-xs text-white rounded-full font-bold mr-1">
            {talk.date}
          </span>
        </span>
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
          <Image
            src="/view.svg"
            alt="visualiser le talk"
            width={30}
            height={30}
          />
        </button>
        <h3 className={`${nunito.className} text-xl leading-6 mb-2`}>
          {talk.title}
        </h3>
        <p className="text-sm">{talk.author.join(", ")}</p>
      </section>
      <footer className="text-xs px-4 py-1 border-t">{talk.ressource}</footer>
    </article>
  );
}

export default Talk;
