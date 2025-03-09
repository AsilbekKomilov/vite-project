import { Route, Routes } from "react-router-dom"
import Debt from "./components/Debt"
import DebtUsers from "./Page/DebtUsers"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Debt />} />
        <Route path="/debtUsers" element={<DebtUsers />} />
      </Routes>
    </div>
  )
}

export default App