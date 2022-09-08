import { useEffect, useMemo } from "react"
import { useState } from "react"

const PersonalData = [
    {name: "Matteo", id: "1", age:"23"},
    {name: "Francesco", id: "2", age: "21"},
    {name: "Stefano", id: "3", age: "22"},
    {name: "Daniel", id: "4", age: "15"},
    {name: "Elisa", id: "5", age: "18"},
]

export function FilteredList({ items = PersonalData}) {
    const [list, setList ] = useState(items)
    const filter = useMemo(() => list.filter(PersonalData => PersonalData.age > 18), [])
    useEffect(() => {
        setList(filter)
    }, [])


    return (
        <div className="mb-3">
            <h2 className="text-2xl font-bold underline mx-3 mb-2">Filtered List</h2>
            <ul className="list-inside list-disc">
                {list.map(data => <li key={data.id}>{data.name}</li>)}
            </ul>
        </div>
    )
}