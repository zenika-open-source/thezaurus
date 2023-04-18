import { apiTalksToDTO } from "./Talks.utils";

export function fetchTalks() {
  return fetch("/api/talks")
    .then((response) => response.json())
    .then((response) => apiTalksToDTO(response.talks));
}
