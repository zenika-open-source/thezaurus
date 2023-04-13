import IconFormation from "../icons/Formation";
import IconPublic from "../icons/Public";
import IconTalk from "../icons/Talk";
import IconVideo from "../icons/Video";
import IconView from "../icons/View";

import "./Talk.css";

function Talk(props) {
  const { format } = props;

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
  const listFormat = format.map((f) => (
    <li key={f.toString()} className="mx-1">
      {emojiFormat[f] || IconTalk}
    </li>
  ));

  return (
    <article className="talk rounded-lg shadow-lg md:w-96 md:h-56 border border-slate-50 text-sm flex flex-col m-3">
      <header className="flex items-stretch">
        <span className="flex-grow text-sm px-4 py-1 border-b">
          {props.event} | {props.date}
        </span>
        <aside className="text-sm px-2 py-1 rounded-bl-md rounded-tr-lg">
          <ul className="list-format flex flex-row">{listFormat}</ul>
        </aside>
      </header>
      <section className="flex-grow px-4 py-2 relative">
        <button
          className="m-2 flex items-center justify-center rounded-md w-10 h-10 absolute bottom-0 right-0"
          title="Voir le talk"
          onClick={() => window.open(props.link, "_blank")}
        >
          <IconView />
        </button>
        <h3 className="text-xl leading-6 mb-2">{props.title}</h3>
        <p className="text-sm">{props.author}</p>
      </section>
      <footer className="text-xs px-4 py-1 border-t">{props.ressource}</footer>
    </article>
  );
}

export default Talk;
