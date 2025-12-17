import { Metadata } from "next"
import ImageList from "./components/imageList"

export const metadata : Metadata = {
    title:"Gallery"
}

export default function GalleryPage(){
    return(
        <div>

            <div className="text-3xl">
                Gallery
            </div>

            <div className="mt-12">
                <ImageList/>
            </div>
            
        </div>
        
        
    )
}