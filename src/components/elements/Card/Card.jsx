import { Nunito, Open_Sans } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

export default function Card(props) {
  return (
    <div className={`card flex flex-col w-full ${nunito.className}`}>
      {props.children}
    </div>
  );
}
