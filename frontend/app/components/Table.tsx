import { motion } from "framer-motion";

interface Session {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  milkCollected: number;
}

export default function Table({ data }: { data: Session[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-black bg-opacity-50 backdrop-blur-md text-white rounded-lg border border-gray-500 hidden sm:table">
        <thead className="bg-gray-800 bg-opacity-50">
          <tr>
            <th className="p-3 text-left border-b border-gray-500">Date</th>
            <th className="p-3 text-left border-b border-gray-500">
              Start Time
            </th>
            <th className="p-3 text-left border-b border-gray-500">End Time</th>
            <th className="p-3 text-left border-b border-gray-500">Duration</th>
            <th className="p-3 text-left border-b border-gray-500">Milk (L)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((session) => (
            <motion.tr
              key={session._id}
              whileHover={{ backgroundColor: "rgba(128,128,128,0.2)" }}
              className="border-t border-gray-500 transition duration-200"
            >
              <td className="p-3">{session.date}</td>
              <td className="p-3">{session.startTime}</td>
              <td className="p-3">{session.endTime}</td>
              <td className="p-3">{session.duration} sec</td>
              <td className="p-3">{session.milkCollected} L</td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      {/* Mobile-friendly format */}
      <div className="sm:hidden space-y-4">
        {data.map((session) => (
          <motion.div
            key={session._id}
            whileHover={{ scale: 1.02 }}
            className="bg-black bg-opacity-50 backdrop-blur-md p-4 rounded-lg border border-gray-500 shadow-lg"
          >
            <p className="text-white">
              <strong>Date:</strong> {session.date}
            </p>
            <p className="text-white">
              <strong>Start:</strong> {session.startTime}
            </p>
            <p className="text-white">
              <strong>End:</strong> {session.endTime}
            </p>
            <p className="text-white">
              <strong>Duration:</strong> {session.duration} sec
            </p>
            <p className="text-white">
              <strong>Milk:</strong> {session.milkCollected} L
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
