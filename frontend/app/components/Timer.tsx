"use client";
import React from "react";

export default function Timer({ timeElapsed }: { timeElapsed: number }) {
  return (
    <div className="flex items-center justify-center mt-10 bg-black">
      <div className="px-8 py-6 border border-gray-700 rounded-lg shadow-lg text-white text-6xl font-bold">
        {new Date(timeElapsed * 1000).toISOString().substring(11, 19)}
      </div>
    </div>
  );
}
