export default function HotelCard({
    name,
    location,
    price,
    rating,
    image,
  }: {
    name: string;
    location: string;
    price: string;
    rating: string;
    image: string;
  }) {
    return (
      <div className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
  
        <div className="absolute top-5 right-5">
          <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-bold text-black">{rating}</span>
          </div>
        </div>
  
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <div className="flex items-center gap-2 text-sm mb-3">
            <span>📍</span>
            <span className="text-white/90">{location}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">{price}</span>
            <span className="text-sm text-white/80">/ хоног</span>
          </div>
        </div>
      </div>
    );
  }
  