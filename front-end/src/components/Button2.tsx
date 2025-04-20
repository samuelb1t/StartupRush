import { useState } from "react";

function Button2({ onClick,text }: { onClick: () => void,text:string }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="text-[#C9CED6] rounded-2xl text-2xl px-4 py-2 cursor-pointer duration-200" 
      style={{backgroundColor: hover ? "#001B64" : "#002790" }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button2;
