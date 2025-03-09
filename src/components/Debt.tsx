import { NavLink } from 'react-router-dom'

function Debt() {
  return (
    <div className="p-5 bg-gray-100 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">Debt</h1>
        <NavLink to="/debtnotebook" className="block mt-2 text-blue-500 hover:underline">Debt Notebook</NavLink>
        <NavLink to="/debtUsers" className="block mt-2 text-blue-500 hover:underline">Debt Users</NavLink>
        <NavLink to="/debt/settings" className="block mt-2 text-blue-500 hover:underline">Settings</NavLink>
        <NavLink to="/debt/logout" className="block mt-2 text-blue-500 hover:underline">Logout</NavLink>
    </div>
  )
}

export default Debt