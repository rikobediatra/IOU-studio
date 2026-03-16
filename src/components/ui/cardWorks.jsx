import Image from "next/image"

export default function CardWorks({ work }) {
  return (
    <div className="group cursor-pointer">
      {/* IMAGE */}
      <div className="relative w-full aspect-square max-h-70 overflow-hidden group">
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className={`
            object-cover
            object-center
            transition-opacity
            duration-500
            opacity-100
            lg:opacity-50
            lg:group-hover:opacity-100
            lg:group-hover:scale-105
          `}
        />
      </div>

      {/* TEXT */}
      <div 
        className="
          flex 
          justify-between 
          mt-4
          transition-opacity
          duration-500
          opacity-100
          lg:opacity-0
          lg:group-hover:opacity-100
        "
      >
        <p>{work.title}</p>
        <p>{work.projectName}</p>
      </div>

    </div>
  )
}