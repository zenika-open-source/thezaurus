import HeaderIcon from "../HeaderIcon/HeaderIcon";
import Resource from "../Ressource/Ressource";
import IconView from "../../icons/View";

function Talk(props) {
  const talk = props.talk;

  const authors = talk.author.join(", ");
  const yPadding = "py-2";
  const xPadding = "px-10";
  return (
    <article className="card rounded-lg shadow-lg w-full flex flex-col">
      <header className={`card__header ${xPadding} ${yPadding}`}>
        <ul className="flex w-3/5 gap-8">
          {talk.format.map((fmt, i) => {
            const format = fmt === "video" ? "talk" : fmt;
            return (
              <li key={i}>
                <HeaderIcon
                  className="text-black"
                  icon={format}
                  text={format}
                />
              </li>
            );
          })}
          {talk.duration && (
            <li>
              <HeaderIcon
                className="text-black"
                icon="stopwatch"
                text={talk.duration}
              />
            </li>
          )}
        </ul>
        <ul className="flex flex-row-reverse w-2/5 gap-1">
          {talk.ressource.map((resource, i) => (
            <li key={i}>
              <Resource ressource={resource}></Resource>
            </li>
          ))}
        </ul>
      </header>
      <section className={`${xPadding} ${yPadding}`}>
        <h2
          className="h-20"
          style={{
            maxHeight: "5rem",
          }}
        >
          {talk.title}
        </h2>
        <div className="flex pt-3">
          <p className="w-4/5">{authors}</p>
          <a
            target="__blank"
            rel="noopener"
            href={talk.link}
            className="button-primary"
          >
            <IconView width={24}></IconView>
            <span>Play</span>
          </a>
        </div>
      </section>
      <footer className={`${xPadding} ${yPadding} flex gap-8`}>
        <HeaderIcon icon="calendar" text={talk.date} />
        <HeaderIcon icon="mapPin" text={talk.event} />
      </footer>
    </article>
  );
}

export default Talk;
