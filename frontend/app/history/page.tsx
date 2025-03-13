"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import { fetchHistory } from "@/lib/api/fetchHistory";

export default function History() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetchHistory("/api/sessions").then((res) => setSessions(res));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white ">
      <Header />
      <div className="max-w-6xl mx-auto p-6 mt-20">
        <h1 className="text-3xl font-semibold text-center mb-6">
          📜 Milking History
        </h1>
        {!sessions ? (
          <p className="font-bold text-center">
            couldn't connect to the server.
          </p>
        ) : (
          <Table data={sessions} />
        )}
      </div>
    </div>
  );
}
