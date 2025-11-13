
import Link from "next/link";
const Header: React.FC=()=>{
    return(
    <header className="bg-blue-600 text-white shadow-md py-4">
        <div className="containor max-auto flex justify-between items-center px-4">
            <h3 className="font-bold text-2xl">
                <Link href="/">Daily Contents</Link>
            </h3>
            <nav>
                <ul className="flex space-x-6">
                    <li className="hover:underline">
                        <Link href="/Posts">posts</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="/Users">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    )
}
export default Header;