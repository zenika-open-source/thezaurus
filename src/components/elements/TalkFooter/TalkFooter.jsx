import HeaderIcon from "../HeaderIcon/HeaderIcon";
import IconView from "../../icons/View";
import { Nunito, Open_Sans } from "next/font/google";
import styles from "./TalkFooter.module.css";

const nunito = Nunito({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function TalkFooter({ talk }) {
  return (
    <footer
      className={`${styles.card__footer} justify-between flex gap-8 ${openSans.className}`}
    >
      <div className="flex gap-8" style={{ fontSize: "13px" }}>
        <HeaderIcon icon="calendar" text={talk.date} />
        <HeaderIcon icon="mapPin" text={talk.event} />
      </div>
      <div>
        <a
          target="__blank"
          rel="noopener"
          href={talk.link}
          className={`button-primary ${nunito.className}`}
        >
          <IconView width={24}></IconView>
          <span>Play</span>
        </a>
      </div>
    </footer>
  );
}
