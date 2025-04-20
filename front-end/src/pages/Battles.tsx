import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bg from "../components/bg";

function Battles() {
  const location = useLocation();
  const battles = location.state?.battles;

  useEffect(() => {
    if (!battles) return;
    const battlesDiv = document.getElementById("battlesDiv");

    if (battlesDiv) battlesDiv.innerHTML = "";

    for (let i = 0; i < battles.length; i++) {
      const div = document.createElement("div");
      div.className =
        "flex flex-col bg-[#1D233C] w-fit items-center p-12 text-white rounded-2xl cursor-pointer border-2 border-[#2A3656] hover:border-[#7C8BA1] duration-200";
      div.dataset.battleId = battles[i].id;  
      const nome1 = document.createElement("span");
      nome1.innerText = battles[i].startup1.name;

      const x = document.createElement("span");
      x.innerText = "X";

      const nome2 = document.createElement("span");
      nome2.innerText = battles[i].startup2.name;

      div.appendChild(nome1);
      div.appendChild(x);
      div.appendChild(nome2);

      battlesDiv?.appendChild(div);
    }
  }, [battles]);

  return (
    <Bg>
      <div className="h-full flex flex-col">
        <h1 className="text-white text-5xl">Startup Rush</h1>
        <section
          className="h-full w-full grid grid-cols-2 justify-items-center items-center"
          id="battlesDiv"
        ></section>
      </div>
    </Bg>
  );
}

export default Battles;
