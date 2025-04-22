function Checkbox({id,l1,l2,l3,l4,l5}:{id:string,l1:string,l2:string,l3:string,l4:string,l5:string}) {
  return (
    <div className="flex flex-col text-xl gap-3" id={id}>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox" id={l1}
          className="appearance-none w-6 h-6 border-2 border-[#002790] bg-transparent rounded-sm checked:bg-[#002790] checked:border-[#002790] focus:outline-none cursor-pointer"
        />
        <label htmlFor={l1} className="cursor-pointer">Pitch convincente(+6)</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox" id={l2}
          className="appearance-none w-6 h-6 border-2 border-[#002790] bg-transparent rounded-sm checked:bg-[#002790] checked:border-[#002790] focus:outline-none cursor-pointer"
        />
        <label htmlFor={l2} className="cursor-pointer">Produto com bugs(-4)</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox" id={l3}
          className="appearance-none w-6 h-6 border-2 border-[#002790] bg-transparent rounded-sm checked:bg-[#002790] checked:border-[#002790] focus:outline-none cursor-pointer"
        />
        <label htmlFor={l3} className="cursor-pointer">Boa tração de usuários(+3)</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox" id={l4}
          className="appearance-none w-6 h-6 border-2 border-[#002790] bg-transparent rounded-sm checked:bg-[#002790] checked:border-[#002790] focus:outline-none cursor-pointer"
        />
        <label htmlFor={l4} className="cursor-pointer">Investidor irritado(-6)</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox" id={l5}
          className="appearance-none w-6 h-6 border-2 border-[#002790] bg-transparent rounded-sm checked:bg-[#002790] checked:border-[#002790] focus:outline-none cursor-pointer"
        />
        <label htmlFor={l5} className="cursor-pointer">Fake news no pitch(-8)</label>
      </div>
    </div>
  );
}

export default Checkbox;
