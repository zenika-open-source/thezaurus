import { test } from "node:test";
import assert from "node:assert";
import { apiTalksToDTO } from "../components/elements/Talks/Talks.utils.js";

function validTalk(opts = {}) {
  const { event, date, format, link, title, author, ressource } = opts;
  return [
    event || "TZ Lyon",
    date || "28/04/2023",
    format || "video",
    title || "Comment gérer des journées de 35h ?",
    link || "https://www.youtube.com/watch?v=GTFFqzAvZlg",
    author || "Sylvain Gougouzian",
    ressource || "Alien",
    "",
    opts.hasOwnProperty("duration") ? opts.duration : "00:32:51",
  ];
}

test("talks are mapped to expected objects", () => {
  const talks = [
    validTalk(),
    [
      "TZ Paris",
      "28/04/2023",
      "video",
      "STOP à l’espionnage ! Comment disparaître d’internet ? 🕵🏼‍♂️",
      "https://youtu.be/Tj1yPUsA720",
      "Etienne Idoux, Mickaël Alves",
      "Alien",
      "",
      "",
    ],
  ];
  const mappedTalks = apiTalksToDTO(talks);
  assert.deepEqual(mappedTalks.talks, [
    {
      event: "TZ Lyon",
      date: "28/04/2023",
      format: ["video"],
      title: "Comment gérer des journées de 35h ?",
      link: "https://www.youtube.com/watch?v=GTFFqzAvZlg",
      author: ["Sylvain Gougouzian"],
      ressource: ["Alien"],
      duration: "00:32:51",
    },
    {
      event: "TZ Paris",
      date: "28/04/2023",
      format: ["video"],
      title: "STOP à l’espionnage ! Comment disparaître d’internet ? 🕵🏼‍♂️",
      link: "https://youtu.be/Tj1yPUsA720",
      author: ["Etienne Idoux", "Mickaël Alves"],
      ressource: ["Alien"],
      duration: null,
    },
  ]);
  assert.equal(mappedTalks.events.length, 2);
});

["", null, undefined, "invalid"].forEach((testCase) => {
  test(`Invalid duration (${testCase}) is mapped as null`, () => {
    let talk = validTalk({ duration: testCase });
    const talks = [talk];
    const mappedTalks = apiTalksToDTO(talks);
    assert.deepEqual(mappedTalks.talks, [
      {
        event: "TZ Lyon",
        date: "28/04/2023",
        format: ["video"],
        title: "Comment gérer des journées de 35h ?",
        link: "https://www.youtube.com/watch?v=GTFFqzAvZlg",
        author: ["Sylvain Gougouzian"],
        ressource: ["Alien"],
        duration: null,
      },
    ]);
    assert.equal(mappedTalks.events.length, 1);
  });
});

test("events are aggregated and sorted alphabetically", () => {
  const talks = [validTalk({ event: "foo" }), validTalk({ event: "bar" })];

  const mappedTalks = apiTalksToDTO(talks);

  assert.deepEqual(mappedTalks.events, [
    { value: "bar", label: "bar" },
    { value: "foo", label: "foo" },
  ]);
});

test("events are deduplicated", () => {
  const talks = [validTalk({ event: "foo" }), validTalk({ event: "foo" })];

  const mappedTalks = apiTalksToDTO(talks);

  assert.deepEqual(mappedTalks.events, [{ value: "foo", label: "foo" }]);
});
