import cor1 from '@/public/images/1.png'
import cor2 from '@/public/images/2.png'
import cor3 from '@/public/images/3.jpg'
import cor4 from '@/public/images/4.jpg'
import Image from 'next/image'

export default function ImageList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="h-100 overflow-hidden">
                <Image src={cor1} alt='Corinthians 1' className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw" priority={true} quality={50} placeholder="blur"/>
            </div>

            <div className="h-100 overflow-hidden">
                <Image src={cor2} alt='Corinthians 2' className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw" quality={50} placeholder="blur"/>
            </div>

            <div className="h-100 overflow-hidden">
                <Image src={cor3} alt='Corinthians 3' className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw" quality={50} placeholder="blur"/>
            </div>

            <div className="h-100 overflow-hidden">
                <Image src={cor4} alt='Corinthians 4' className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw" quality={50} placeholder="blur"/>
            </div>

        </div>
    )
}