import { Link } from "react-router-dom"



export default function Header() {
  return (
    <header className="bg-slate-700 shadow-md">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
      <Link to="/">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap mr-4 text-blue-600">
          siko mobility
        </h1>
      </Link>
      <ul className="flex  gap-4 ">
        <Link to="/">
          <li className="hidden sm:inline text-slate-100 hover:underline">
            Espace Marchand
          </li>
        </Link>
        <Link to="/">
          <li className="hidden sm:inline text-slate-100 hover:underline">
            Nos services
          </li>
        </Link>
      </ul>
      <button
        type="button"
        className="bg-blue-600 text-white rounded-lg text-sm p-3 "
      >
        Simulation
      </button>
    </div>
  </header>
  )
}
