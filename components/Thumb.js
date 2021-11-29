import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const  Thumb = ({result} , ref) => {
    const BASE_URL = process.env.BASE_URL || "https://image.tmdb.org/t/p/original"

    const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`

    const toBase64 = (str) =>
      typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str)
 


     return (
        <div ref={ref} className="group cursor-pointer p-2 transition  
        ease-in sm:hover:filter sm:hover:duration-300 hover:z-50 sm:hover:grayscale ">
            <Image
                layout="responsive"
                src={`${BASE_URL}${result.backdrop_path}`}
                height={1080}
                width={1920}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1080 , 1920))}`}
            />

            <div>
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-white text-2xl transition-all 
                ease-in-out duration-100  ">{result.title || result.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type} .` } {" "}
                    {result.release_date || result.first_air_date  } {" "}
                    <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
                </p>
            </div>
         </div>
    )
}

export default Thumb
 