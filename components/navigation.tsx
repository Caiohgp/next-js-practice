import Link from "next/link"
import style  from "./navigation.module.css"

export default function Navigation(){
    return (
        <nav className="font-mono">
            <div className="flex space-x-4 flex-col md:flex-row">
                <Link href="/" className={`md:hidden ${style.menu}`}>Home</Link>
                <Link href="/about" className={style.menu}>About</Link>
                <Link href="/gallery" className={style.menu}>Gallery</Link>
                <Link href="/about/projects" className={style.menu}>Projects</Link>
                <Link href="/posts" className={style.menu}>Posts</Link>
            </div>
        </nav>
        
    )
}