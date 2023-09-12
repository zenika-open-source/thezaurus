import { Nunito } from "next/font/google";
import Filter from "../Filter/Filter";
import { useEffect, useReducer, useState } from "react";
import { fetchTalks } from "./Talks.api";
import { cleanSelectedValues } from "./Talks.utils";
import Talk from "../Talk/Talk";
import reducer from "./Talks.reducer";
import Spinner from "../Spinner/Spinner";
import IconContribute from "@/components/icons/Contribute";
const nunito = Nunito({ subsets: ["latin"] });

function Talks() {
  const [filterEvent, setFilterEvent] = useState([]);
  const [filterFormat, setFilterFormat] = useState([]);
  const [filterAuthor, setFilterAuthor] = useState([]);
  const [filterRessource, setFilterRessource] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    fetchTalks().then((api) => {
      setFilterEvent(api.events);
      setFilterFormat(api.formats);
      setFilterAuthor(api.authors);
      setFilterRessource(api.ressources);
      dispatch({ type: "init", payload: api.talks });
      setLoading(false);
    });
  }, []);

  const talks = state.talks?.map((talk, i) => {
    return <Talk key={`talk_${i}`} talk={talk} />;
  });

  return (
    <div className="flex-grow">
      <h2 className={`${nunito.className} text-center`}>
        Collection des médias disponibles au sein de Zenika
      </h2>
      <form className="grid grid-cols-1 gap-y-3 gap-x-8 text-xs my-4 px-2 lg:mx-auto w-full md:max-w-7xl lg:grid-cols-4">
        <Filter
          label="Event(s)"
          options={filterEvent}
          onChange={(e) =>
            dispatch({ type: "event", payload: cleanSelectedValues(e) })
          }
        />
        <Filter
          label="Format(s)"
          options={filterFormat}
          onChange={(e) =>
            dispatch({ type: "format", payload: cleanSelectedValues(e) })
          }
        />
        <Filter
          label="Auteur(s)"
          options={filterAuthor}
          onChange={(e) =>
            dispatch({ type: "author", payload: cleanSelectedValues(e) })
          }
        />
        <Filter
          label="Ressource(s)"
          options={filterRessource}
          onChange={(e) =>
            dispatch({ type: "ressource", payload: cleanSelectedValues(e) })
          }
        />
        <label className="lg:col-span-3">
          Titre :
          <input
            type="text"
            className="block border h-10 rounded-md px-2 w-full"
            onInput={(e) =>
              dispatch({ type: "title", payload: [e.target.value] })
            }
          />
        </label>
        <div className="flex items-end">
          <a
            className="button-primary items-center gap-2"
            title="ajouter un talk"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfF99AC8fEKcXXF6z-gZMeCCtSGyUvQYxjO03Z1SkP2k3yNrg/viewform"
            target="_blank"
            rel="noopener"
          >
            <IconContribute width={24} />
            <span>Contribuer</span>
          </a>
        </div>
      </form>
      {isLoading && <Spinner />}
      <section
        className={[
          "w-11/12 mx-auto my-8",
          "grid gap-8",
          "md:grid-cols-2 md:gap-10",
          "2xl:grid-cols-3 2xl:gap-12",
          "4xl:gap-16",
        ].join(" ")}
      >
        {talks}
      </section>
    </div>
  );
}

export default Talks;
