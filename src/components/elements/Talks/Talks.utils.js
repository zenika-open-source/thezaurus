export function transformToSelectOptions(a) {
  a.sort();
  return [...new Set(a)].map((v) => {
    return { value: v, label: v };
  });
}

export function cleanSelectedValues(e) {
  return Array.isArray(e) ? e.map((x) => x.value) : [];
}

export function hasValues(values, obj, prop) {
  let found = false;
  if (values.length) {
    let i = 0;
    values.forEach((v) => {
      v = sansDiacritiques(v).toLowerCase();
      if (Array.isArray(obj[prop])) {
        obj[prop].forEach((p) => {
          p = sansDiacritiques(p).toLowerCase();
          if (p.indexOf(v) !== -1) i++;
        });
        if (i === values.length) found = true;
      } else {
        let propVal = sansDiacritiques(obj[prop]).toLowerCase();
        if (propVal.indexOf(v) !== -1) found = true;
      }
    });
  } else found = true;
  return found;
}

export function apiTalksToDTO(fetchedTalks) {
  let events = [];
  let formats = [];
  let authors = [];
  let ressources = [];
  let talks = [];
  fetchedTalks.map((talk) => {
    const [event, date, rawFormat, title, link, rawAuthor, rawRessource] = talk;
    const format = rawFormat?.split(",").map((x) => x.trim());
    const author = rawAuthor?.split(",").map((x) => x.trim());
    const ressource = rawRessource?.split(",").map((x) => x.trim());
    if (title != "" && format) {
      events.push(event);
      format?.map((f) => formats.push(f));
      author?.map((a) => authors.push(a));
      ressource?.map((r) => ressources.push(r));
      talks.push({
        event,
        date,
        format,
        title,
        link,
        author,
        ressource,
      });
    }
  });
  return {
    events: transformToSelectOptions(events),
    formats: transformToSelectOptions(formats),
    authors: transformToSelectOptions(authors),
    ressources: transformToSelectOptions(ressources),
    talks,
  };
}

function sansDiacritiques(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
