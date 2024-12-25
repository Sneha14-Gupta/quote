import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function AddQuotes({ onSubmit, onSort }) {
    const [inputValue, setInputValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputValue.trim()) return;
        onSubmit(inputValue)
        setInputValue("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Add Quote" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

                <div>
                    <Button>Add</Button>
                    <Button onClick={onSort}>Sort</Button>
                </div>

            </div>
        </form>
    )
}
