import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const CarDetails = ({initialData = {model: 'Tesla Model 3', year:'2017', color: 'Metallic grey'}}) => {

    const inputRef = useRef(null)
    const [isChanged, setStatus] = useState(false)


    useEffect(() => {
        inputRef.current.elements.model.value = initialData.model
        inputRef.current.elements.year.value = initialData.year
        inputRef.current.elements.color.value = initialData.color
    }, [])


    useEffect(() => {
        if(isChanged === true){
            inputRef.current.elements.model.value = ''
            inputRef.current.elements.year.value = ''
            inputRef.current.elements.color.value = ''
        }
        else return
    }, [isChanged])


    const handleFormSubmit = () => {
        setStatus(true);
    }

    return ( 
        <div>
            <form onChange={handleFormSubmit} ref={inputRef}>
                <h2 className="text-2xl font-bold underline mx-3 mb-2">Car Details</h2>
                <label className="ml-4" htmlFor="model">Model:
                    <input name="model" type="text" className="mx-3 mt-2 mb-3 border border-black" />
                </label>
                <label className="ml-4" htmlFor="year">Year:
                    <input name="year" type="text" className="mx-3 mt-2 mb-3 border border-black" />
                </label>
                <label className="ml-4" htmlFor="color">Color:
                    <input name="color" type="text" className="mx-3 mt-2 mb-3 border border-black" />
                </label>
            </form>
        </div>
     );
}
export default CarDetails;