import HeaderIcon from "../HeaderIcon/HeaderIcon";
import Resource from "../Ressource/Ressource";
import { Open_Sans } from "next/font/google";
import styles from "./TalkHeader.module.css";

const videoIcon = "talk";
const videoFormat = "video";
const openSans = Open_Sans({ subsets: ["latin"] });

export default function TalkHeader({ talk }) {
  const isPrivate = !talk.format.includes("public");
  return (
    <header className={`${styles.card__header} ${openSans.className}`}>
      <ul className="flex w-3/5 gap-8">
        {talk.format.map((fmt, i) => {
          const format = fmt === videoFormat ? videoIcon : fmt;
          return (
            <li key={i}>
              <HeaderIcon icon={format} text={format} />
            </li>
          );
        })}
        {isPrivate && (
          <li>
            <HeaderIcon icon="padlock" text="privé" />
          </li>
        )}
        {talk.duration && (
          <li>
            <HeaderIcon icon="stopwatch" text={talk.duration} />
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
  );
}
