
const Form = ({children, authType, onSubmit, errorMsg, isPending}) => {
  return (
    <form onSubmit={onSubmit}>
    <p className="text-3xl font-semibold text-white mb-2">{authType}</p>
    {children}
      <button disabled={isPending} type="submit" className={(!isPending ? "bg-red-600 " : "bg-red-800 ") + "w-80 mt-8 text-white font-semibold py-3 px-4 rounded outline-none"}>
        {!isPending ? authType : (
          <div className="flex items-center justify-center py-1">
            <div class="loader"></div>
          </div>
        )}
      </button>
      {errorMsg && <p className="text-red-700 w-80">{errorMsg}</p>}
    </form>
  )
}

export default Form
