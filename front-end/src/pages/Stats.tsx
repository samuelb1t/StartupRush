import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import Bg from "../components/Bg";
import { useEffect, useState } from "react";
import Button2 from "../components/Button2";
import { useNavigate } from "react-router-dom";

type Startup = {
  name: string;
  points: number;
};

type Stat = {
  pitchs: number;
  bugs: number;
  tracoes: number;
  investidoresIrritados: number;
  fakeNews: number;
};

type MergedData = {
  name: string;
  points: number;
  pitchConvincente: number;
  bugProduto: number;
  tracaoUsuarios: number;
  investidorIrritado: number;
  fakeNews: number; 
};

function Stats() {
  const [rows, setRows] = useState<MergedData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getStats() {
      try {
        console.log("aaaaaaaaaaa")
        const responseStats = await fetch("http://localhost:8080/tournament/stats");
        const stats: Record<string, Stat> = await responseStats.json();

        const responseStartups = await fetch("http://localhost:8080/tournament/startups");
        const startups: Startup[] = await responseStartups.json();

        const mergedData: MergedData[] = startups.map((startup) => {
          const stat = stats[startup.name];
          return {
            name: startup.name,
            points: startup.points,
            pitchConvincente: stat?.pitchs || 0,
            bugProduto: stat?.bugs || 0,
            tracaoUsuarios: stat?.tracoes || 0,
            investidorIrritado: stat?.investidoresIrritados || 0,
            fakeNews: stat?.fakeNews || 0,
          };
        });

        mergedData.sort((a, b) => b.points - a.points);

        setRows(mergedData);
      } catch (error) {
        console.error("Failed to fetch stats or startups:", error);
      }
    }

    getStats();
  }, []);

  return (
    <Bg>
      <div className="h-full flex flex-col">
        <h1 className="text-white text-5xl mb-12">Startup Rush</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#0B0E21" }}>
                <TableCell sx={{ color: "#FFFFFF" }} align="center">Posição</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }} align="center">Startup</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }} align="center">Pontos</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }} align="center">Pitch Convincente</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }} align="center">Bug no produto</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }} align="center">Tração usuários</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }} align="center">Investidor irritado</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }} align="center">Fake news no pitch</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.name} sx={{ backgroundColor: "#0B0E21" }}>
                  <TableCell sx={{ color: "#FFFFFF" }} align="center">{index + 1}</TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }} align="center">{row.name}</TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }} align="center">{row.points}</TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }} align="center">{row.pitchConvincente}</TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }} align="center">{row.bugProduto}</TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }} align="center">{row.tracaoUsuarios}</TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }} align="center">{row.investidorIrritado}</TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }} align="center">{row.fakeNews}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="self-center mt-12">
          <Button2 onClick={()=>{navigate("/")}} text="Voltar para o menu"></Button2>
        </div>
      </div>
    </Bg>
  );
}

export default Stats;
