import { useState } from "react"

export function useForm() {
    const [data, setForm] = useState({
        username: '',
        password: '', 
        remember: false
    })

    function handleInputChange(event) {
        const { name, value, } = event.target

        setForm((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    return {
        data: data,
        onInputChange: handleInputChange,
    }

}

export function HookForm() {
    const { data, onInputChange } = useForm()

    return (
        <div>
            <h2 className="text-2xl font-bold underline mx-3 mb-2">Hook Form</h2>
            <h4 className="ml-4">{data.username} {data.password}</h4>
            <input name="username" type="text" value={data.username} className="ml-3 mt-3 mb-2 border border-black" placeholder="--username--" onChange={onInputChange}/>
            <input name="password" type="password" value={data.password} className="ml-3 mr-2 mt-3 mb-2 border border-black" placeholder="--password--" onChange={onInputChange}/>
        </div>
    )
}