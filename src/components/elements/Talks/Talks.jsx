import { Nunito } from "next/font/google";
import Filter from "../Filter/Filter";
import { useEffect, useReducer, useState } from "react";
import { fetchTalks } from "./Talks.api";
import { cleanSelectedValues, hasValue } from "./Talks.utils";
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

  const talks = state.talks?.map((talk, i) => (
    <Talk key={`talk_${i}`} talk={talk} />
  ));

  return (
    <div className="flex-grow">
      <h2 className={`${nunito.className} text-center`}>
        Collection des médias disponibles au sein de Zenika
      </h2>
      <form className="grid grid-cols-1 gap-3 text-xs my-4 px-2 md:mx-auto w-full md:max-w-7xl md:grid-cols-4">
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
            <a
                className="contribute button text-black py-2 px-8 mt-3 lg:mt0 self-end justify-self-center relative flex items-center justify-center"
                title="ajouter un talk"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfF99AC8fEKcXXF6z-gZMeCCtSGyUvQYxjO03Z1SkP2k3yNrg/viewform"
                target="_blank"
                rel="noopener"
            >
                <IconContribute width={22} />
                <p className="ml-2 font-semibold">Contribuer</p>
            </a>
      </form>
      {isLoading ? <Spinner /> : ""}
      <section className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mx-auto w-11/12 mb-4">
        {talks}
      </section>
    </div>
  );
}

export default Talks;
