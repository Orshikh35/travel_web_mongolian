export default function BlogCard({
    image,
    title,
    category,
  }: {
    image: string;
    title: string;
    category: string;
  }) {
    return (
      <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <span className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold mb-3">
            {category}
          </span>
          <h4 className="text-xl font-bold leading-tight">{title}</h4>
        </div>
      </div>
    );
  }
  