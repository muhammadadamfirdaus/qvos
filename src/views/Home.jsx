import { Link } from "react-router-dom";

import Adam from "../components/team/Adam";
import Arvin from "../components/team/Arvin";
import Bayu from "../components/team/Bayu";
import Prana from "../components/team/Prana";

export default function Home() {
  return (
    <>
      <div className="px-48">
        <div className="flex flex-wrap">
          <div className="basis-2/4 p-16">
            <Link to={"/adam"}>
              <Adam />
            </Link>
          </div>
          <div className="basis-2/4 p-16">
            <Link to={"/arvin"}>
              <Arvin />
            </Link>
          </div>
          <div className="basis-2/4 p-16">
            <Link to={"/bayu"}>
              <Bayu />
            </Link>
          </div>
          <div className="basis-2/4 p-16">
            <Link to={"/prana"}>
              <Prana />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
