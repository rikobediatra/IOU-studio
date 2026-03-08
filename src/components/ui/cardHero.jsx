import Image from "next/image";

export default function TeamCard({ member }) {
  return (
    <div className="relative min-w-113.25 min-h-113.25 overflow-hidden group">
      <Image
        src={member.image}
        alt={member.name}
        fill
        unoptimized
        className="object-cover transition duration-500 lg:opacity-60 lg:group-hover:opacity-100 group-hover:scale-105"
      />
      
      {/* Overlay Teks (Nama & Role) */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between uppercase">
        <p className="text-white text-[16px] tracking-[0%] font-medium">{member.name}</p>
        <p className="text-white text-[16px] tracking-[0%] font-medium">{member.role}</p>
      </div>
    </div>
  );
}
