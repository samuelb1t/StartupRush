import Bg from "../components/Bg";
import Input from "../components/Input";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterStartups() {
  const [notification, setNotification] = useState(false);
  const [error, setError] = useState(false);
  const [cont,setCont] = useState(0);
  const navigate = useNavigate();

  function handleNotification(){
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  }

  function handleError(){
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  async function handleRegister() {
    console.log(cont)
    const name = (document.getElementById("nome") as HTMLInputElement)?.value;
    const slogan = (document.getElementById("slogan") as HTMLInputElement)
      ?.value;
    const ano = +(document.getElementById("ano") as HTMLInputElement)?.value;

    if (!(name && slogan && ano)) {
      const mensagem = document.getElementById("mensagem");
      if (mensagem) {mensagem.innerText = "Preencha todos os campos!";}
      handleNotification();
      handleError()
      return;
    }
    if (ano < 1500 || ano > 2025) {
      const mensagem = document.getElementById("mensagem");
      if(mensagem){mensagem.innerText = "Ano inválido!"}
      handleNotification();
      handleError()
      return;
    }

    if(cont == 8){
      console.log("zz")
      const mensagem = document.getElementById("mensagem");
      if(mensagem){mensagem.innerText = "Número máximo de startups atingido!"}
      handleNotification();
      handleError()
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
        const mensagem = document.getElementById("mensagem");
        if(mensagem){mensagem.innerText = "Startup cadastrada com sucesso!"}
        setCont(x => x+1);
        handleNotification()
      } else {
        const mensagem = document.getElementById("mensagem");
        if(mensagem){mensagem.innerText = "Já existe uma startup com esse nome!"}
        handleNotification()
        handleError()
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
            <Button2 text="Iniciar Startup Rush" onClick={handleMatches}></Button2>
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
            backgroundColor: error ? "#A40003" : "#016630",
          }}
          id="mensagem"
        >
          {/* {message
            ? "Erro no cadastro da startup"
            : "Startup cadastrada com sucesso!"} */}
            
        </div>
      </div>
    </Bg>
  );
}

export default RegisterStartups;
