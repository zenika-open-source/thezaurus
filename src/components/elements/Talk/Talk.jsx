import Card from "../Card/Card";
import TalkHeader from "../TalkHeader/TalkHeader";
import TalkFooter from "../TalkFooter/TalkFooter";

function Talk(props) {
  const talk = props.talk;

  const authors = talk.author.join(", ");
  return (
    <article>
      <Card>
        <TalkHeader talk={talk}></TalkHeader>
        <section className="card__body">
          <h2 className="h-20 line-clamp-4 leading-6 max-h[4.2rem]">
            {talk.title}
          </h2>
          <div className="flex pt-3">
            <p className="w-4/5" style={{ fontSize: "15px" }}>
              {authors}
            </p>
          </div>
        </section>
        <TalkFooter talk={talk} />
      </Card>
    </article>
  );
}

export default Talk;
