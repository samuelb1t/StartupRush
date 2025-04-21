import { useEffect, useState } from "react";
import Bg from "../components/Bg";
import Button2 from "../components/Button2";
import Checkbox from "../components/Checkbox";
import { useNavigate } from "react-router-dom";

function Battles() {
  const [battles, setBattles] = useState<any[]>([]);
  const [battle, setBattle] = useState(false);
  const navigate = useNavigate();

  async function getBattles() {
    const res = await fetch("http://localhost:8080/tournament/battles", {
      method: "GET",
    });
    if (res.ok) {
      const battles = await res.json();
      setBattles(battles);
    }
  }

  useEffect(() => {
    getBattles();
  }, []);

  useEffect(() => {
    const battlesDiv = document.getElementById("battlesDiv");
    if (battlesDiv) battlesDiv.innerHTML = "";

    battles.forEach((battle) => {
      const div = document.createElement("div");
      div.className =
        "flex flex-col bg-[#1D233C] w-fit items-center p-12 text-white rounded-2xl cursor-pointer border-2 border-[#2A3656] hover:border-[#7C8BA1] duration-200";
      div.setAttribute("id", `id-${battle.id}`);

      div.addEventListener("click", () => createBattle(battle));
      const nome1 = document.createElement("span");
      nome1.innerText = battle.startup1.name;

      const x = document.createElement("span");
      x.innerText = "X";

      const nome2 = document.createElement("span");
      nome2.innerText = battle.startup2.name;

      div.appendChild(nome1);
      div.appendChild(x);
      div.appendChild(nome2);

      battlesDiv?.appendChild(div);
    });
  }, [battles]);

  function createBattle(battle: any) {
    const n1 = document.getElementById("nameStartup1");
    const n2 = document.getElementById("nameStartup2");
    const s1 = document.getElementById("sloganStartup1");
    const s2 = document.getElementById("sloganStartup2");
    const a1 = document.getElementById("anoStartup1");
    const a2 = document.getElementById("anoStartup2");
    const p1 = document.getElementById("pontosStartup1");
    const p2 = document.getElementById("pontosStartup2");
    if (n1 && n2 && s1 && s2 && a1 && a2 && p1 && p2) {
      n1.innerText = battle.startup1.name;
      s1.innerText = battle.startup1.slogan;
      a1.innerText = battle.startup1.year;
      p1.innerText = battle.startup1.points + " pontos";

      n2.innerText = battle.startup2.name;
      s2.innerText = battle.startup2.slogan;
      a2.innerText = battle.startup2.year;
      p2.innerText = battle.startup2.points + " pontos";
      if(battle.winner == null){setBattle(true);battle.winner = "a"};
    }
  }

  async function handleBattle() {
    const n = document.getElementById("nameStartup1")?.innerText;
    let id;
    const events = { eventsStartup1: {}, eventsStartup2: {} };
    for (let i = 0; i < battles.length; i++) {
      if (n == battles[i].startup1.name) {
        id = battles[i].id;
      }
    }

    const inputs1 = document.querySelectorAll("#s1 input");
    events.eventsStartup1 = {
      PITCH_CONVINCENTE: (inputs1[0] as HTMLInputElement).checked,
      PRODUTO_BUGS: (inputs1[1] as HTMLInputElement).checked,
      TRACAO_USUARIOS: (inputs1[2] as HTMLInputElement).checked,
      INVESTIDOR_IRRITADO: (inputs1[3] as HTMLInputElement).checked,
      FAKE_NEWS: (inputs1[4] as HTMLInputElement).checked,
    };

    const inputs2 = document.querySelectorAll("#s2 input");
    events.eventsStartup2 = {
      PITCH_CONVINCENTE: (inputs2[0] as HTMLInputElement).checked,
      PRODUTO_BUGS: (inputs2[1] as HTMLInputElement).checked,
      TRACAO_USUARIOS: (inputs2[2] as HTMLInputElement).checked,
      INVESTIDOR_IRRITADO: (inputs2[3] as HTMLInputElement).checked,
      FAKE_NEWS: (inputs2[4] as HTMLInputElement).checked,
    };

    const response = await fetch(
      `http://localhost:8080/tournament/round/${id}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(events),
      }
    );
    if (response.ok) {
      const winner = await response.text();
      const div = document.getElementById(`id-${id}`);
      const n1 = (div?.children[0] as HTMLElement).innerText;
      if (div && winner) {
        div.removeChild(div.children[1]);
        if (n1 == winner) {
          div.removeChild(div.children[1]);
        } else {
          div.removeChild(div.children[0]);
        }
      }
      setBattle(false);

      inputs1.forEach((input)=>{
        (input as HTMLInputElement).checked = false;
      })
      inputs2.forEach((input)=>{
        (input as HTMLInputElement).checked = false;
      })

      const battlesDiv = document.getElementById("battlesDiv");
      if(battlesDiv?.children.length == 1){
        navigate("/stats")
      }else{
        await newBattles();
      }
    }
  }

  async function newBattles() {
    const res = await fetch("http://localhost:8080/tournament/start", {
      method: "POST",
    });
    if (res.ok) {
      getBattles();
    }
  }

  return (
    <Bg>
      <div className="h-full flex flex-col">
        <h1 className="text-white text-5xl">Startup Rush</h1>
        <section
          className="h-full w-full grid grid-cols-2 justify-items-center items-center"
          id="battlesDiv"
        ></section>
        <section
          className="absolute h-screen w-screen bg-[#00000050] top-0 left-0"
          style={{ display: battle ? "block" : "none" }}
        >
          <div className="absolute  w-4/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0B0E21] rounded-2xl px-12 py-6 items-center">
            <div className="grid grid-cols-2 text-white mb-8">
              <div className="flex flex-col gap-2 justify-self-start">
                <span id="nameStartup1" className="text-3xl"></span>
                <span id="sloganStartup1" className="text-2xl"></span>
                <span
                  id="anoStartup1"
                  className="text-2xl text-[#7C8BA1]"
                ></span>
                <span id="pontosStartup1" className="text-2xl mb-4"></span>
                <Checkbox id="s1"></Checkbox>
              </div>
              <div className="flex flex-col gap-2 justify-self-start">
                <span id="nameStartup2" className="text-3xl"></span>
                <span id="sloganStartup2" className="text-2xl"></span>
                <span
                  id="anoStartup2"
                  className="text-2xl text-[#7C8BA1]"
                ></span>
                <span id="pontosStartup2" className="text-2xl mb-4"></span>
                <Checkbox id="s2"></Checkbox>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Button2 text="Realizar batalha" onClick={handleBattle}></Button2>
            </div>
          </div>
        </section>
      </div>
    </Bg>
  );
}

export default Battles;
