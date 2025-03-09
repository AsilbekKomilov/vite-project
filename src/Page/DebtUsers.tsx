import React, { useState } from 'react'
import DebtNotebook from './DebtNotebook'

interface Entry {
  name: string
  amount: string
  time: string
  status: string
}

function DebtUsers() {
  const [status, setStatus] = useState('Active')
  const [entries, setEntries] = useState<Entry[]>([])

  const addEntry = (entry: Entry) => {
    setEntries([...entries, { ...entry, status: 'Not Paid' }])
    setStatus('Entry Added')
  }

  const deleteEntry = (index: number) => {
    const newEntries = entries.filter((_, i) => i !== index)
    setEntries(newEntries)
    setStatus('Entry Deleted')
  }

  const editEntry = (index: number, updatedAmount: string) => {
    const newEntries = entries.map((entry, i) => 
      i === index ? { ...entry, amount: updatedAmount, status: 'Paid' } : entry
    )
    setEntries(newEntries)
    setStatus('Entry Edited')
  }

  return (
    <div className="p-5 bg-gray-100 rounded-lg">
    
      <DebtNotebook addEntry={addEntry} />
      <div className="mt-4">
        <span className="font-bold">Status: </span>
        <span>{status}</span>
      </div>
      <ul className="mt-4">
        {entries.map((entry, index) => (
          <li key={index} className="mb-2 p-2 border border-gray-300 rounded">
            <div>
              <span className="font-bold">Name: </span>{entry.name}
            </div>
            <div>
              <span className="font-bold">Amount: </span>{entry.amount}
            </div>
            <div>
              <span className="font-bold">Time: </span>{entry.time}
            </div>
            <div>
              <span className="font-bold">Status: </span>{entry.status}
            </div>
            <button 
              onClick={() => deleteEntry(index)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 mr-2"
            >
              Delete
            </button>
            <button 
              onClick={() => {
                const updatedAmount = prompt('Enter new amount:', entry.amount)
                if (updatedAmount) {
                  editEntry(index, updatedAmount)
                }
              }}
              className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-700"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DebtUsers