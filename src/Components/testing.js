const test = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    const handleSubmit1 = (e)=>{
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <form onSubmit={handleSubmit1}>

            </form>
        </form>
    )
}