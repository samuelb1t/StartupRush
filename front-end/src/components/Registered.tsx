  import { IoIosArrowDown } from "react-icons/io";
  import { useState } from "react";

  function Registered(){
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="flex flex-col bg-[#2A3656] rounded-2xl p-4 transition-all duration-300 mb-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl text-white">Startup 1</span>
          <IoIosArrowDown
            size={32}
            color="white"
            className={`transform transition-transform duration-300 ${
              isOpen ? "" : "rotate-180"
            }`}
          />
        </div>

        {isOpen && (
          <div className="mt-2 space-y-2 flex flex-col">
            <span className="text-xl text-[#7C8BA1]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              nostrum quis neque voluptates provident
            </span>
            <span className="text-xl text-white">2010</span>
          </div>
        )}
      </div>
    );
  }

  export default Registered;
