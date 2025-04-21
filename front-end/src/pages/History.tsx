import { useEffect, useState } from "react";
import Bg from "../components/Bg";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { TiArrowLeft } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

function History() {
  const [results, setResults] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(
      "http://localhost:8080/tournament/tournaments"
    );
    const responseJson = await response.json();
    console.log(responseJson);

    const tournamentsDiv = document.getElementById("tournamentsDiv");
    tournamentsDiv!.innerHTML = "";

    for (let i = 0; i < responseJson.length; i++) {
      const div = document.createElement("div");
      div.className =
        "bg-[#1D233C] border-2 border-[#2A3656] hover:border-[#FFFFFF] duration-300 text-white rounded-2xl px-36 py-6 cursor-pointer";

      const span = document.createElement("span");
      span.innerText = `Tournament ${i + 1}`;
      span.className = "text-center text-white text-2xl mb-8";
      div.appendChild(span);

      div.setAttribute("data-id", responseJson[i].id);
      div.addEventListener("click", showData);

      tournamentsDiv?.appendChild(div);
    }
  }

  async function showData(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const id = target.getAttribute("data-id");

    const response = await fetch(`http://localhost:8080/tournament/${id}`);
    const responseJson = await response.json();
    console.log(responseJson);

    // Sort by points descending (optional)
    const sorted = responseJson.sort((a: any, b: any) => b.points - a.points);
    setResults(sorted);
    setShowModal(true);
  }

  return (
    <Bg>
      <div className="flex flex-col h-full w-full px-8 py-8">
        <TiArrowLeft
          size={48}
          color="white"
          cursor={"pointer"}
          onClick={() => {
            navigate("/");
          }}
        />
        <h1 className="text-white text-5xl mb-16">Startup Rush</h1>
        <section className="grid grid-rows-[auto_1fr] justify-center items-center gap-4">
          <span className="text-center text-white text-2xl mb-8">
            Torneios já realizados:
          </span>
          <div id="tournamentsDiv" className="grid gap-4 max-h-96 overflow-y-auto pr-2">
            
          </div>
        </section>

        {showModal && (
          <div className="absolute h-screen w-screen bg-[#00000050] top-0 left-0">
            <section className="absolute w-4/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0E1129] rounded-2xl px-12 py-6 items-center">
              <IoIosClose
                size={64}
                color="white"
                cursor={"pointer"}
                onClick={() => {
                  setShowModal(false);
                }}
              />
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#0B0E21" }}>
                      <TableCell sx={{ color: "#FFFFFF" }} align="center">
                        Posição
                      </TableCell>
                      <TableCell sx={{ color: "#FFFFFF" }} align="center">
                        Startup
                      </TableCell>
                      <TableCell sx={{ color: "#FFFFFF" }} align="center">
                        Pontos
                      </TableCell>
                      <TableCell sx={{ color: "#FFFFFF" }} align="center">
                        Pitch Convincente
                      </TableCell>
                      <TableCell sx={{ color: "#FFFFFF" }} align="center">
                        Bug no produto
                      </TableCell>
                      <TableCell sx={{ color: "#FFFFFF" }} align="center">
                        Tração usuários
                      </TableCell>
                      <TableCell sx={{ color: "#FFFFFF" }} align="center">
                        Investidor irritado
                      </TableCell>
                      <TableCell sx={{ color: "#FFFFFF" }} align="center">
                        Fake news no pitch
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {results.map((row, index) => (
                      <TableRow
                        key={row.id}
                        sx={{ backgroundColor: "#0B0E21" }}
                      >
                        <TableCell sx={{ color: "#FFFFFF" }} align="center">
                          {index + 1}
                        </TableCell>
                        <TableCell sx={{ color: "#FFFFFF" }} align="center">
                          {row.startupName}
                        </TableCell>
                        <TableCell sx={{ color: "#FFFFFF" }} align="center">
                          {row.points}
                        </TableCell>
                        <TableCell sx={{ color: "#FFFFFF" }} align="center">
                          {row.pitchs}
                        </TableCell>
                        <TableCell sx={{ color: "#FFFFFF" }} align="center">
                          {row.bugs}
                        </TableCell>
                        <TableCell sx={{ color: "#FFFFFF" }} align="center">
                          {row.tracoes}
                        </TableCell>
                        <TableCell sx={{ color: "#FFFFFF" }} align="center">
                          {row.investidoresIrritados}
                        </TableCell>
                        <TableCell sx={{ color: "#FFFFFF" }} align="center">
                          {row.fakeNews}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </section>
          </div>
        )}
      </div>
    </Bg>
  );
}

export default History;
