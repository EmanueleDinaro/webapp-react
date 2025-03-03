export default function Cards({ title, image, director, abstract }) {
  return (
    <div className="bg-neutral-100 w-80 h-150 p-2 rounded-2xl static drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
      <div>
        <img
          className="rounded-2xl w-80 h-90 object-cover drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex justify-center gap-4 relative bottom-5">
        <img
          className="h-28 drop-shadow-[0_0px_10px_rgba(122,122,122,0.8)] rounded"
          src={image}
          alt={title}
        />
        <div className="flex flex-col items-start justify-end">
          <h3 className="text-lg font-bold">{title}</h3>
          <h4 className="text-sm font-medium">{director}</h4>
        </div>
      </div>
      <div className="px-4 mb-4">
        <p className="text-sm font-small text-center">{abstract}</p>
      </div>
      <button
        type="button"
        className="bg-gray-700 hover:bg-gray-900 transition-all duration-300 text-white py-2 px-4 rounded-xl text-sm block mx-auto w-76 absolute bottom-2 right"
      >
        Scopri di più
      </button>
    </div>
  );
}
