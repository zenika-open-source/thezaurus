import IconFormation from "./icons/Formation";
import IconPublic from "./icons/Public";
import IconTalk from "./icons/Talk";
import IconVideo from "./icons/Video";
import IconView from "./icons/View";

import "./Talk.css";

import { useDispatch } from "react-redux";
import { defineLink } from "../features/cinema/cinemaSlice";

function Talk(props) {
  const { format } = props;
  const dispatch = useDispatch();

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
    <li key={f.toString()}>{emojiFormat[f] || IconTalk}</li>
  ));

  return (
    <article className="talk rounded-lg shadow-lg w-96 h-56 border border-slate-50 text-sm flex flex-col m-3">
      <header className="flex items-center">
        <span className="flex-grow text-sm px-4 py-1 border-b">
          {props.event} | {props.date}
        </span>
        <aside className="text-sm px-2 py-1 rounded-bl-md rounded-tr-lg">
          <ul className="list-format">{listFormat}</ul>
        </aside>
      </header>
      <section className="flex-grow px-4 py-2 relative">
        <button
          className="m-2 flex items-center justify-center rounded-md w-10 h-10 absolute bottom-0 right-0"
          title="Voir le talk"
          onClick={() => {
            props.link.indexOf("youtu") !== -1
              ? dispatch(defineLink(props.link))
              : window.open(props.link, "_blank");
          }}
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
