import { motion } from "framer-motion";

interface Session {
  id: string;
  start_time: string;
  end_time: string;
  duration: number;
  milk_quantity: number;
}

export default function Table({ data }: { data: Session[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white text-black rounded-lg overflow-hidden hidden sm:table">
        <thead className="bg-gray-300">
          <tr>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Start Time</th>
            <th className="p-3 text-left">End Time</th>
            <th className="p-3 text-left">Duration</th>
            <th className="p-3 text-left">Milk (L)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((session) => (
            <motion.tr
              key={session.id}
              className="border-t hover:bg-gray-200 transition duration-200"
            >
              <td className="p-3">
                {new Date(session.start_time).toLocaleDateString()}
              </td>
              <td className="p-3">
                {new Date(session.start_time).toLocaleTimeString()}
              </td>
              <td className="p-3">
                {new Date(session.end_time).toLocaleTimeString()}
              </td>
              <td className="p-3">{session.duration} sec</td>
              <td className="p-3">{session.milk_quantity} L</td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      {/* Mobile-friendly format */}
      <div className="sm:hidden space-y-4">
        {data.map((session) => (
          <motion.div
            key={session.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <p className="text-gray-600">
              <strong>Date:</strong>{" "}
              {new Date(session.start_time).toLocaleDateString()}
            </p>
            <p className="text-gray-600">
              <strong>Start:</strong>{" "}
              {new Date(session.start_time).toLocaleTimeString()}
            </p>
            <p className="text-gray-600">
              <strong>End:</strong>{" "}
              {new Date(session.end_time).toLocaleTimeString()}
            </p>
            <p className="text-gray-600">
              <strong>Duration:</strong> {session.duration} sec
            </p>
            <p className="text-gray-600">
              <strong>Milk:</strong> {session.milk_quantity} L
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
