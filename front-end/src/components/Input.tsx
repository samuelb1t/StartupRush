function Input({ type, placeholder,id }: { type: string; placeholder: string,id:string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full text-2xl px-4 py-2 rounded-2xl bg-transparent border-2 border-[#2A3656] text-[#7C8BA1]"
      id={id}
    />
  );
}

export default Input;
