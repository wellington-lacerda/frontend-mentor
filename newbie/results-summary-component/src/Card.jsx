import data from "./data.json";

const categoryStyles = {
  Reaction: "bg-red-50 text-red-500",
  Memory: "bg-yellow-50 text-yellow-500",
  Verbal: "bg-teal-50 text-teal-600",
  Visual: "bg-blue-50 text-blue-700",
};

function Card() {
  return (
    <div className="flex flex-col gap-4">
      {data.map((res) => (
        <div
          key={res.category}
          className={`flex flex-row justify-between items-center gap-x-4 p-4 rounded-xl ${
            categoryStyles[res.category] || "bg-blue-50 text-blue-700"
          }`}
        >
          <div className="flex flex-row items-center gap-x-3 font-bold">
            <img src={res.icon} alt={res.category} />
            <span>{res.category}</span>
          </div>

          <div className="text-slate-700">
            <span className="font-bold">{res.score}</span>{" "}
            <span className="opacity-50">/ 100</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
