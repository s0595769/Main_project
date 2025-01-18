import React from "react";

const data = new Array(24).fill({ title: "Dummy Title", description: "Lorem ipsum dolor sit amet" });

function ContentGrid() {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Popular on Internet</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-stone-500 rounded-md p-4 shadow hover:shadow-lg transition"
          >
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-700">{item.description}</p>
            <a href="#" className="text-white underline mt-2 block">Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentGrid;
