function HeaderItem({title , Icon}) {
    return (
        <div className='group flex flex-col items-center  cursor-pointer w-12 sm:w-20 hover:text-white'>
            <Icon className='h-5 mb-1 group-hover:animate-bounce' />
            <p className="opacity-0 group-hover:opacity-100 group-hover:animate-pulse  tracking-widest text-xs">{title}</p>
        </div>
    ) 
}

export default HeaderItem
