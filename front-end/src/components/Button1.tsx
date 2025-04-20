import { useState } from "react";

function Button1({ onClick }: { onClick: () => void }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="text-[#C9CED6] border-1 border-[#C9CED6] rounded-2xl text-2xl px-4 py-2 cursor-pointer duration-200"
      style={{backgroundColor: hover ? "#1B2047" : "transparent" }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={onClick}
    >
      Cadastrar
    </button>
  );
}


export default Button1;
