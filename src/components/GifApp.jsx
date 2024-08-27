import { useGif } from "../hooks/useGif"

export const GifApp = () => {

    const {handleGetGif, gif} = useGif()

    return(
        <>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3 mb-4">
                <button onClick= {handleGetGif} className="d-grid gap-2 col-6 mx-auto btn btn-outline-info" type="button">Generar Gif</button>
            </div >   
            <div className="d-flex flex-row justify-content-center alig-items-center">   
                <img className="w-25" src= {gif} alt= "img"/>
            </div>
        </>
    )
}