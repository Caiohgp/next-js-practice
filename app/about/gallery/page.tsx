import { Metadata } from "next"
import ImageList from "./components/imageList"
import H1 from "@/components/h1"

export const metadata : Metadata = {
    title:"Gallery"
}

export default function GalleryPage(){
    return(
        <div>

            <H1>Gallery</H1>

            <div className="mt-12">
                <ImageList/>
            </div>
            
        </div>
        
        
    )
}