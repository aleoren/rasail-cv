import React from "react";

// Objek Hobi
const hobbies = [
  {
    id: 1,
    name: "Menonton Film",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYymCQJJw5f5uf2gT2WVq14lC9X9pkOGnHwg&s",
  },
  {
    id: 2,
    name: "Motoran",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFhSlzZVygjOwcAFx_84aYqDja6XKmgcjxw&s",
  },
  {
    id: 3,
    name: "Bermain Game",
    image:
      "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/10/01/4050735460.jpg",
  },
  {
    id: 4,
    name: "Ngoding",
    image:
      "https://i.pinimg.com/236x/43/0c/59/430c597c8590aeba5e8b93365fc418b0.jpg",
  },
];

export default function MyGallery() {
  return (
    <div className="container mx-auto p-6 text-center pt-20">
      <h2 className="text-gray-800 text-3xl font-extrabold mb-8">My Hobby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="relative border-2 border-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={hobby.image}
              alt={hobby.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}