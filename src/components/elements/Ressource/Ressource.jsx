import {Nunito} from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const Ressource = ({ ressource }) => <span className={`py-1 px-2 mr-1 ${nunito.className} inline-block rounded-full bg-violet-300 text-black`}>{ressource}</span>;
export default Ressource;