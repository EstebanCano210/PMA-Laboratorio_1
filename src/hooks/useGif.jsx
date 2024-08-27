import { useState } from "react"

export const useGif = () =>{
    const [gif, setGif] = useState("")

    const reqGif = async () =>{
        await fetch("https://api.giphy.com/v1/gifs/random?api_key=xoAPtIF03lS8YiW5mfx7fUHowwzAhH2n").then(async(resp)=>{
            await resp.json().then(({data})=>{
                setGif(data.images.original.url)
            })
        }).catch(console.error)
    }

    const handleGetGif = ()=>{
        reqGif()
    }

    return {
        handleGetGif, gif
    }
}    