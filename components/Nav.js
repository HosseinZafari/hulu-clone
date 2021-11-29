import { useRouter } from "next/dist/client/router"
import request from "../utils/request"
function Nav() {
    const router = useRouter()

    return (
        <nav className="relative">
            <div className='flex justify-between px-4 sm:px-8 text-2xl 
            whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden  scrollbar-hide'>
                {Object.entries(request).map(([key, { title, url }]) => (
                    <h2 key={key} className='last:pr-20 cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white 
                    active:text-red-500'
                        onClick={() => router.push(`/?genre=${key}`)}  >{title}</h2>
                ))}
            </div>

            <div className="absolute top-0 right-0 h-10 bg-gradient-to-l from-[#06202a] w-1/12" />
        </nav>
    )
}

export default Nav
