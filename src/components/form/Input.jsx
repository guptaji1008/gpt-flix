const Input = ({ placeholder, type }) => {
  return (
    <div>
      <input
        className="w-80 bg-slate-600 text-slate-300 mt-3 py-3 px-4 rounded outline-none"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
