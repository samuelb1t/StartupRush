import Bg from "../components/Bg";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  ("");

  async function startTounament() {
    const response = await fetch("http://localhost:8080/tournament/new", {
      method: "POST",
    });
    if (response.ok) {
      navigate("/register");
    }
  }

  return (
    <Bg>
      <div className="h-full text-white grid grid-rows-[auto_1fr] items-center justify-center justify-items-center py-16">
        <h1 className="text-6xl">Startup Rush</h1>
        <div className="grid gap-8">
          <button
            className="text-2xl bg-[#002790] hover:bg-[#001B64] duration-200 px-16 py-6 cursor-pointer rounded-2xl"
            onClick={startTounament}
          >
            Iniciar Torneio
          </button>
          <button
            className="text-2xl bg-[#002790] hover:bg-[#001B64] duration-200 px-16 py-6 cursor-pointer rounded-2xl"
            onClick={()=>{navigate("/history")}}
          >
            Histórico
          </button>
        </div>
      </div>
    </Bg>
  );
}

export default Menu;
