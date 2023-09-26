import { Nunito } from "next/font/google";
import Filter from "../Filter/Filter";
import { useEffect, useReducer, useState } from "react";
import { fetchTalks } from "./Talks.api";
import { cleanSelectedValues } from "./Talks.utils";
import Talk from "../Talk/Talk";
import reducer from "./Talks.reducer";
import Spinner from "../Spinner/Spinner";
import IconContribute from "@/components/icons/Contribute";

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

  const dispatchEvent = (type, e) => {
    setLoading(true);
    setTimeout(() => {
      dispatch({ type, payload: e });
      setLoading(false);
    }, 100);
  };

  return (
    <div className="flex-grow">
      <form className="grid grid-cols-1 gap-y-3 gap-x-8 text-xs my-4 px-2 lg:mx-auto w-full md:max-w-7xl lg:grid-cols-4">
        <Filter
          label="Event(s)"
          options={filterEvent}
          onChange={(e) => dispatchEvent("event", cleanSelectedValues(e))}
        />
        <Filter
          label="Format(s)"
          options={filterFormat}
          onChange={(e) => dispatchEvent("format", cleanSelectedValues(e))}
        />
        <Filter
          label="Auteur(s)"
          options={filterAuthor}
          onChange={(e) => dispatchEvent("author", cleanSelectedValues(e))}
        />
        <Filter
          label="Ressource(s)"
          options={filterRessource}
          onChange={(e) => dispatchEvent("ressource", cleanSelectedValues(e))}
        />
        <label className="lg:col-span-3">
          Titre :
          <input
            type="text"
            className="block border h-10 rounded-md px-2 w-full"
            onInput={(e) => dispatchEvent("title", [e.target.value])}
          />
        </label>
      </form>
      <div
        className="mx-auto w-11/12 "
        style={{
          gridTemplateAreas: ". results contribute",
          gridTemplateRows: "auto",
          gridTemplateColumns: "repeat(3, 1fr)",
          display: "grid",
        }}
      >
        <p
          className="flex justify-center items-center font-bold"
          style={{ gridColumn: "2" }}
        >
          {state.talks.length} résultat(s)
        </p>
        <div
          style={{
            gridColumn: "3",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <a
            className="button-primary"
            title="ajouter un talk"
            href={`${process.env.NEXT_PUBLIC_CONTRIBUTE_URL}`}
            target="_blank"
            rel="noopener"
          >
            <IconContribute width={24} />
            <span>Contribuer</span>
          </a>
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </div>
  );
}

export default Talks;
