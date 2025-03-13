"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";

export default function History() {
  const [sessions, setSessions] = useState([]);
  const sampleData = [
    {
      id: "1",
      start_time: "2024-03-12T08:00:00Z",
      end_time: "2024-03-12T08:30:00Z",
      duration: 1800,
      milk_quantity: 2.5,
    },
    {
      id: "2",
      start_time: "2024-03-12T12:00:00Z",
      end_time: "2024-03-12T12:20:00Z",
      duration: 1200,
      milk_quantity: 1.8,
    },
    {
      id: "3",
      start_time: "2024-03-12T18:15:00Z",
      end_time: "2024-03-12T18:40:00Z",
      duration: 1500,
      milk_quantity: 3.2,
    },
    {
      id: "4",
      start_time: "2024-03-12T18:15:00Z",
      end_time: "2024-03-12T18:40:00Z",
      duration: 1500,
      milk_quantity: 3.2,
    },
    {
      id: "5",
      start_time: "2024-03-12T18:15:00Z",
      end_time: "2024-03-12T18:40:00Z",
      duration: 1500,
      milk_quantity: 3.2,
    },
  ];

  useEffect(() => {
    fetch("/api/sessions")
      .then((res) => res.json())
      .then((data) => setSessions(data));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <Header title="📜 Milking History" />
      <Table data={sampleData} />
    </div>
  );
}
