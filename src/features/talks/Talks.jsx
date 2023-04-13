import { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import Talk from "./Talk";

function Talks() {
  const [filterEvent, setFilterEvent] = useState([]);
  const [filterFormat, setFilterFormat] = useState([]);
  const [filterAuthor, setFilterAuthor] = useState([]);
  const [filterRessource, setFilterRessource] = useState([]);
  const [talks, setTalks] = useState([]);
  const [filteredTalks, setFilteredTalks] = useState([]);

  const transformToSelectOptions = (a) =>
    [...new Set(a)].map((v) => {
      return { value: v, label: v };
    });

  const cleanSelectedValues = (e) =>
    Array.isArray(e) ? e.map((x) => x.value) : [];

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

  const hasValue = (values, obj, prop) => {
    let found = false;
    values.forEach((v) => {
      if (obj[prop].toLowerCase().indexOf(v.toLowerCase()) !== -1) found = true;
    });
    return found;
  };

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
      _filtered = _filtered.filter((t) =>
        hasValue(selectedFilterAuthor, t, "author")
      );
    if (selectedFilterEvent.length)
      _filtered = _filtered.filter((t) =>
        hasValue(selectedFilterEvent, t, "event")
      );
    if (selectedFilterFormat.length)
      _filtered = _filtered.filter((t) =>
        hasValue(selectedFilterFormat, t, "format")
      );
    if (selectedFilterRessource.length)
      _filtered = _filtered.filter((t) =>
        hasValue(selectedFilterRessource, t, "ressource")
      );
    setFilteredTalks(_filtered);
  }, [
    selectedFilterTitle,
    selectedFilterAuthor,
    selectedFilterEvent,
    selectedFilterFormat,
    selectedFilterRessource,
  ]);

  const jsonTalksToStates = (json) => {
    let events = [];
    let formats = [];
    let authors = [];
    let ressources = [];
    json.map((talk) => {
      events.push(talk.event);
      talk.format.split(",").map((f) => formats.push(f.trim()));
      talk.author.split(",").map((f) => authors.push(f.trim()));
      ressources.push(talk.ressource);
    });
    setFilterEvent(transformToSelectOptions(events));
    setFilterFormat(transformToSelectOptions(formats));
    setFilterAuthor(transformToSelectOptions(authors));
    setFilterRessource(transformToSelectOptions(ressources));
    setTalks(json);
    setFilteredTalks(json);
  };

  useEffect(() => {
    const gsheet = `https://sheets.googleapis.com/v4/spreadsheets/${
      import.meta.env.VITE_GOOGLE_DOC_ID
    }/values/A:G?key=${import.meta.env.VITE_GOOGLE_API_KEY}`;

    fetch(gsheet)
      .then((response) => response.json())
      .then((response) => {
        // format gdocs to talk JSON
        const headers = response.values[0];
        const _talks = [];
        response.values.map((value, i) => {
          if (i > 0) {
            const talk = {};
            value.map((v, j) => (talk[headers[j]] = v));
            _talks.push(talk);
          }
        });
        jsonTalksToStates(_talks);
      });
  }, []);

  return (
    <>
      <h2 className="text-center">
        Collection des médias disponibles au sein de Zenika, pour utilisation
        interne
      </h2>
      <form className="grid grid-cols-1 gap-3 text-xs my-4 px-2 md:mx-auto w-full md:max-w-7xl md:grid-cols-4">
        <label>
          Event(s) :{" "}
          <Select
            options={filterEvent}
            isMulti
            isSearchable
            onChange={handleFilterEventChange}
          />
        </label>
        <label>
          Format(s) :{" "}
          <Select
            options={filterFormat}
            isMulti
            isSearchable
            onChange={handleFilterFormatChange}
          />
        </label>
        <label>
          Auteur(s) :{" "}
          <Select
            options={filterAuthor}
            isMulti
            isSearchable
            onChange={handleFilterAuthorChange}
          />
        </label>
        <label>
          Ressource(s) :
          <Select
            options={filterRessource}
            isMulti
            isSearchable
            onChange={handleFilterRessourceChange}
          />
        </label>
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
        {filteredTalks.map((talk, i) => {
          return (
            <Talk
              key={`talk_${i}`}
              event={talk.event}
              date={talk.date}
              format={talk.format.split(",").map((v) => v.trim())}
              title={talk.title}
              author={talk.author}
              link={talk.link}
              ressource={talk.ressource}
            />
          );
        })}
      </section>
    </>
  );
}

export default Talks;
