import { Nunito } from "next/font/google";
import Filter from "../Filter/Filter";
import { useEffect, useMemo, useState } from "react";
import { fetchTalks } from "./Talks.api";
import {
  cleanSelectedValues,
  hasValue,
  transformToSelectOptions,
} from "./Talks.utils";
import Talk from "../Talk/Talk";
const nunito = Nunito({ subsets: ["latin"] });

function Talks() {
  const [filterEvent, setFilterEvent] = useState([]);
  const [filterFormat, setFilterFormat] = useState([]);
  const [filterAuthor, setFilterAuthor] = useState([]);
  const [filterRessource, setFilterRessource] = useState([]);
  const [talks, setTalks] = useState([]);
  const [filteredTalks, setFilteredTalks] = useState([]);

  const [selectedFilterEvent, setSelectedFilterEvent] = useState([]);
  const handleFilterEventChange = (e) => {
    setSelectedFilterEvent(cleanSelectedValues(e));
  };
  const [selectedFilterFormat, setSelectedFilterFormat] = useState([]);
  const handleFilterFormatChange = (e) => {
    setSelectedFilterFormat(cleanSelectedValues(e));
  };
  const [selectedFilterAuthor, setSelectedFilterAuthor] = useState([]);
  const handleFilterAuthorChange = (e) => {
    setSelectedFilterAuthor(cleanSelectedValues(e));
  };
  const [selectedFilterRessource, setSelectedFilterRessource] = useState([]);
  const handleFilterRessourceChange = (e) => {
    setSelectedFilterRessource(cleanSelectedValues(e));
  };
  const [selectedFilterTitle, setSelectedFilterTitle] = useState("");
  const handleFilterTitleInput = (e) => {
    setSelectedFilterTitle(e.target.value);
  };

  useEffect(() => {
    fetchTalks().then((talks) => {
      let events = [];
      let formats = [];
      let authors = [];
      let ressources = [];
      talks.map((talk) => {
        events.push(talk.event);
        talk.format.map((f) => formats.push(f));
        talk.author.map((a) => authors.push(a));
        ressources.push(talk.ressource);
      });
      setFilterEvent(transformToSelectOptions(events));
      setFilterFormat(transformToSelectOptions(formats));
      setFilterAuthor(transformToSelectOptions(authors));
      setFilterRessource(transformToSelectOptions(ressources));
      setTalks(talks);
      setFilteredTalks(talks);
    });
  }, []);

  useMemo(() => {
    // filters management
    let _filtered = talks;
    if (selectedFilterTitle.length)
      _filtered = _filtered.filter(
        (t) =>
          t.title.toLowerCase().indexOf(selectedFilterTitle.toLowerCase()) !==
          -1
      );
    if (selectedFilterAuthor.length)
      _filtered = _filtered.filter((talk) =>
        hasValue(selectedFilterAuthor, talk, "author")
      );
    if (selectedFilterEvent.length)
      _filtered = _filtered.filter((talk) =>
        hasValue(selectedFilterEvent, talk, "event")
      );
    if (selectedFilterFormat.length)
      _filtered = _filtered.filter((talk) =>
        hasValue(selectedFilterFormat, talk, "format")
      );
    if (selectedFilterRessource.length)
      _filtered = _filtered.filter((talk) =>
        hasValue(selectedFilterRessource, talk, "ressource")
      );
    setFilteredTalks(_filtered);
  }, [
    selectedFilterTitle,
    selectedFilterAuthor,
    selectedFilterEvent,
    selectedFilterFormat,
    selectedFilterRessource,
    talks,
  ]);

  return (
    <div className="flex-grow">
      <h2 className={`${nunito.className} text-center`}>
        Collection des médias disponibles au sein de Zenika, pour utilisation
        interne
      </h2>
      <form className="grid grid-cols-1 gap-3 text-xs my-4 px-2 md:mx-auto w-full md:max-w-7xl md:grid-cols-4">
        <Filter
          label="Event(s)"
          options={filterEvent}
          onChange={handleFilterEventChange}
        />
        <Filter
          label="Format(s)"
          options={filterFormat}
          onChange={handleFilterFormatChange}
        />
        <Filter
          label="Auteur(s)"
          options={filterAuthor}
          onChange={handleFilterAuthorChange}
        />
        <Filter
          label="Ressource(s)"
          options={filterRessource}
          onChange={handleFilterRessourceChange}
        />
        <label className="md:col-span-4">
          Titre :
          <input
            type="text"
            className="block border h-10 rounded-md px-2 w-full"
            onInput={handleFilterTitleInput}
          />
        </label>
      </form>
      <section className="flex-grow flex items-stretch justify-center pb-4 flex-col md:flex-row">
        {filteredTalks.map((talk, i) => (
          <Talk key={`talk_${i}`} talk={talk} />
        ))}
      </section>
    </div>
  );
}

export default Talks;
