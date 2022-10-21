import React, {useContext} from "react"
import {getClass} from "../utils"
import {Context} from "../Context.jsx"
import Image from "../component/Image.jsx"


function Photos() {
    const {photos} = useContext(Context)

    const displayPhotos = photos.map((photo, index)=>{
        return(<Image img={photo} key={index}  alt="" className={getClass(index)} />)
    })
   

    return (
        <main className="photos">
            {displayPhotos}
        </main>
    )
}

export default Photos