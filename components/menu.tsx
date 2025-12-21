import Link from "next/link";
import Navigation from "./navigation";
import { ThemeToggle } from "./theme-toggle";

export default function Menu(){
        return (
        <header className="flex justify-between md:items-center">
            <div className="flex items-center md:space-x-12">
                <div className="hidden md:block">
                    <Link className="font-mono text-2xl" href="/">Caio Pereira</Link>
                </div>
                <Navigation/>
            </div>

            <div>
                <ThemeToggle/>
            </div>

        </header>
        )
}