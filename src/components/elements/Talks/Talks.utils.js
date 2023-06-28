export function transformToSelectOptions(a) {
  a.sort();
  return [...new Set(a)].map((v) => {
    return { value: v, label: v };
  });
}

export function cleanSelectedValues(e) {
  return Array.isArray(e) ? e.map((x) => x.value) : [];
}

export function hasValue(values, obj, prop) {
  let found = false;
  if (values.length) {
    values.forEach((v) => {
      v = sansDiacritiques(v).toLowerCase();
      if (Array.isArray(obj[prop])) {
        obj[prop].forEach((p) => {
          p = sansDiacritiques(p).toLowerCase();
          if (p.indexOf(v) !== -1) found = true;
        });
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
    const event = talk[0];
    const date = talk[1];
    const format = talk[2]?.split(",").map((x) => x.trim());
    const title = talk[3];
    const link = talk[4];
    const author = talk[5]?.split(",").map((x) => x.trim());
    const ressource = talk[6];
    if (title != "" && format) {
      events.push(event);
      format?.map((f) => formats.push(f));
      author?.map((a) => authors.push(a));
      ressources.push(ressource);
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
