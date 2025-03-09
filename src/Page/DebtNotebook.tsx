import  { useState } from 'react'

interface Entry {
  name: string
  amount: string
  time: string
}

interface DebtNotebookProps {
  addEntry: (entry: Entry) => void
}

function DebtNotebook({ addEntry }: DebtNotebookProps) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = () => {
    addEntry({ name, amount, time })
    setName('')
    setAmount('')
    setTime('')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Debt Notebook
      </h1>
      <input 
        type="text" 
        placeholder="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <input 
        type="text" 
        placeholder="amount" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <input 
        type="date" 
        placeholder="time" 
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <button 
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  )
}

export default DebtNotebook