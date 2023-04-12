import Talk from "../../assets/Talk";

function Talks() {
  const talks = [
    {
      event: "TZ Lyon",
      date: "04/2022",
      format: "video".split(","),
      title: "Kanye West, Maths and Signals ! How to clone Shazam",
      link: "https://youtube.com/embed/lzKtUqVxIbc",
      author: "Moustapha Agack",
      ressource: "alien",
    },
    {
      event: "TZ Paris",
      date: "12/2022",
      format: "video".split(","),
      title:
        "15 minutes pour connaitre 15+ caractères chinois + 15 minutes pour apprendre la base de la langue chinoise",
      link: "https://drive.google.com/file/d/1UkQlYAWjxOaMJ85WKuLRh_CwKzr4E-A2/view",
      author: "Yue Gao",
      ressource: "alien",
    },
  ].map((t, i) => (
    <Talk
      key={`talk_${i}`}
      event={t.event}
      date={t.date}
      format={t.format}
      title={t.title}
      author={t.author}
      link={t.link}
      ressource={t.ressource}
    />
  ));

  return (
    <>
      <h2 className="text-center">
        Collection des médias disponibles au sein de Zenika, pour utilisation
        interne
      </h2>
      <section className="flex m-5 flex-grow items-stretch justify-center">
        {talks}
      </section>
    </>
  );
}

export default Talks;
