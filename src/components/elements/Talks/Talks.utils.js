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
  values.forEach((v) => {
    if (Array.isArray(obj[prop])) {
      obj[prop].forEach((p) => {
        if (p.toLowerCase().indexOf(v.toLowerCase()) !== -1) found = true;
      });
    } else if (obj[prop].toLowerCase().indexOf(v.toLowerCase()) !== -1)
      found = true;
  });
  return found;
}

export function apiTalksToDTO(talks) {
  return talks.map((t) => ({
    event: t[0],
    date: t[1],
    format: t[2].split(",").map((x) => x.trim()),
    title: t[3],
    link: t[4],
    author: t[5].split(",").map((x) => x.trim()),
    ressource: t[6],
  }));
}
