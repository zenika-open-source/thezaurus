import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const Ressource = ({ ressource }) => (
  <span
    style={{ backgroundColor: "#4F8DF5" }}
    className={`${nunito.className} pill`}
  >
    {ressource}
  </span>
);
export default Ressource;
