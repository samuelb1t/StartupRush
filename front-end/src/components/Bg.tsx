import { ReactElement } from "react";

function Bg({children}:{children:ReactElement}) {
  return <div className="h-screen w-screen bg-gradient-to-br from-[#0E1129] from-30% to-[#1D2140]">
    {children}
  </div>;
}

export default Bg;
