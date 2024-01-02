
const Form = ({children, authType, onSubmit, errorMsg, isPending}) => {
  return (
    <form onSubmit={onSubmit}>
    <p className="text-3xl font-semibold text-white mb-2">{authType}</p>
    {children}
      <button disabled={isPending} type="submit" className="w-80 bg-red-600 mt-8 text-white font-semibold py-3 px-4 rounded outline-none">
        {authType}
      </button>
      {errorMsg && <p className="text-red-700 w-80">{errorMsg}</p>}
    </form>
  )
}

export default Form
