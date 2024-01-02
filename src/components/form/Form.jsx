
const Form = ({children, authType}) => {
  return (
    <form>
    <p className="text-3xl font-semibold text-white mb-2">{authType}</p>
    {children}
      <button className="w-80 bg-red-600 mt-8 text-white font-semibold py-3 px-4 rounded outline-none">
        {authType}
      </button>
    </form>
  )
}

export default Form
