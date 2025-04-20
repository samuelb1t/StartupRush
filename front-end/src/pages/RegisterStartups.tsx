import Bg from "../components/bg";
import Input from "../components/Input";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterStartups() {
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  async function handleRegister() {
    const name = (document.getElementById("nome") as HTMLInputElement)?.value;
    const slogan = (document.getElementById("slogan") as HTMLInputElement)
      ?.value;
    const ano = +(document.getElementById("ano") as HTMLInputElement)?.value;

    if (!(name && slogan && ano)) {
      return;
    }
    if (ano < 1500 && ano > 2025) {
      return;
    }

    const startup = {
      name: name,
      slogan: slogan,
      year: ano,
      points: 70,
    };

    try {
      const response = await fetch("http://localhost:8080/tournament", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(startup),
      });
      if (response.ok) {
        console.log(response);
        setNotification(true);
        setTimeout(() => {
          setNotification(false);
        }, 4000);
      } else {
        setMessage(true);
        setNotification(true);
        setTimeout(() => {
          setNotification(false);
        }, 4000);
        throw new Error("Erro ao cadastrar startup");
      }
    } catch (error) {
      console.error("Erro: " + error);
    }
  }

  async function handleMatches() {
    const response = await fetch("http://localhost:8080/tournament/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const res = await fetch("http://localhost:8080/tournament/battles", {
        method: "GET",
      });
      if (res.ok) {
        const battles = await res.json()
        console.log(battles);
        navigate("/battles",{ state: { battles } });
      }
    }
  }

  return (
    <Bg>
      <div className="h-full w-full grid grid-cols-2 pr-24">
        <div className="flex flex-col h-full">
          <h1 className="text-white text-5xl">Startup Rush</h1>
          <section className="flex-1 flex flex-col gap-3 mt-48">
            <h2 className="text-white text-3xl">
              Cadastre as startups participantes!
            </h2>
            <Input
              id="nome"
              type="text"
              placeholder="Digite o nome da startup"
            ></Input>
            <Input
              id="slogan"
              type="text"
              placeholder="Digite o slogan da Startup"
            ></Input>
            <Input
              id="ano"
              type="number"
              placeholder="Digite o ano de fundação da Startup"
            ></Input>
            <Button1 onClick={handleRegister}></Button1>
            <Button2 onClick={handleMatches}></Button2>
          </section>
        </div>
        {/* 
        <div id="regiteredDiv" className="pl-24 mt-16">
          <h3 className="text-white text-2xl mb-4">Startups cadastradas:</h3>
          <Registered></Registered>
        </div> */}
        <div
          className="absolute bottom-15 left-24 bg-green-800 text-white text-xl px-4 py-2 rounded-2xl"
          style={{
            display: notification ? "block" : "none",
            backgroundColor: message ? "#A40003" : "#016630",
          }}
        >
          {message
            ? "Erro no cadastro da startup"
            : "Startup cadastrada com sucesso!"}
        </div>
      </div>
    </Bg>
  );
}

export default RegisterStartups;
