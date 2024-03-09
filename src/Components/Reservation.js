import { ResFormInputs } from "./ResFormInputs"
import { useResFormContext } from "../hooks/useResFormContext"

export function Reservation (){

    const {title, page, setPage} = useResFormContext()

    const handleSubmit = (e)=>{
        e.preventDefault()
        setPage(page +1)
    }

    return(

        <form onSubmit={handleSubmit}>
            <header>
                {title[page]}
            </header>
            <ResFormInputs />
        </form>
    )
}