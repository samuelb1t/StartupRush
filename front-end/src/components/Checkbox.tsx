function Checkbox({id}:{id:string}) {
  return (
    <div className="flex flex-col text-xl gap-3" id={id}>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          className="appearance-none w-6 h-6 border-2 border-[#002790] bg-transparent rounded-sm checked:bg-[#002790] checked:border-[#002790] focus:outline-none cursor-pointer"
        />
        <span>Pitch convincente(+6)</span>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          className="appearance-none w-6 h-6 border-2 border-[#002790] bg-transparent rounded-sm checked:bg-[#002790] checked:border-[#002790] focus:outline-none cursor-pointer"
        />
        <span>Produto com bugs(-4)</span>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          className="appearance-none w-6 h-6 border-2 border-[#002790] bg-transparent rounded-sm checked:bg-[#002790] checked:border-[#002790] focus:outline-none cursor-pointer"
        />
        <span>Boa tração de usuários(+3)</span>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          className="appearance-none w-6 h-6 border-2 border-[#002790] bg-transparent rounded-sm checked:bg-[#002790] checked:border-[#002790] focus:outline-none cursor-pointer"
        />
        <span>Investidor irritado(-6)</span>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          className="appearance-none w-6 h-6 border-2 border-[#002790] bg-transparent rounded-sm checked:bg-[#002790] checked:border-[#002790] focus:outline-none cursor-pointer"
        />
        <span>Fake news no pitch(-8)</span>
      </div>
    </div>
  );
}

export default Checkbox;
