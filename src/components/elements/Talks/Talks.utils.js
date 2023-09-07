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

function splitList(commaSeparatedString) {
  return commaSeparatedString?.split(",").map((x) => x.trim()) || [];
}

function uniqueValuesForProperty(talks, property) {
  return [...new Set(talks.map((t) => t[property]).flat())];
}

const durationFormat = /\d\d:\d\d:\d\d/;
export function apiTalksToDTO(fetchedTalks) {
  const talks = fetchedTalks
    .map((talk) => {
      const [event, date, format, title, link, author, ressource, duration] =
        talk;
      if (title === "" || !format) {
        return null;
      }
      const formats = splitList(format);
      const authors = splitList(author);
      const ressources = splitList(ressource);
      return {
        event,
        date,
        format: formats,
        title,
        link,
        author: authors,
        ressource: ressources,
        duration: durationFormat.test(duration) ? duration : null,
      };
    })
    .filter((talk) => talk);
  return {
    events: transformToSelectOptions(uniqueValuesForProperty(talks, "event")),
    formats: transformToSelectOptions(uniqueValuesForProperty(talks, "format")),
    authors: transformToSelectOptions(uniqueValuesForProperty(talks, "author")),
    ressources: transformToSelectOptions(
      uniqueValuesForProperty(talks, "ressource")
    ),
    talks,
  };
}

function sansDiacritiques(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
