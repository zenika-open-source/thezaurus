import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const Ressource = ({ ressource }) => (
  <span
    style={{ backgroundColor: "#4F8DF5" }}
    className={`px-2 ${nunito.className} whitespace-nowrap inline-block rounded-full bg-violet-300 text-black`}
  >
    {ressource}
  </span>
);
export default Ressource;
