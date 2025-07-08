"use client";
import { useState } from "react";
import RowActions from "./RowActions";

export default function LRTable({ lrList = [] }) {
  const [rows, setRows] = useState(lrList);

  const handleDeleted = (lr_no) => {
    setRows(rows.filter((r) => r.lr_no !== lr_no));
  };
  if (rows.length === 0) {
    return <p className="text-gray-400">No LR records found.</p>;
  }

  return (
    <div className="overflow-auto rounded-lg border border-gray-700">
      <table className="min-w-full divide-y divide-gray-700 text-sm">
        <thead className="bg-[#2b2b2b]">
          <tr>
            <th className="px-4 py-2 font-medium text-left">LR No</th>
            <th className="px-4 py-2 font-medium text-left">Date</th>
            <th className="px-4 py-2 font-medium text-left">LR Type</th>
            <th className="px-4 py-2 font-medium text-left">Consignor</th>
            <th className="px-4 py-2 font-medium text-left">Consignee</th>
            <th className="px-4 py-2 font-medium text-left">Articles</th>
            <th className="px-4 py-2 font-medium text-left">Gross Wt</th>
            <th className="px-4 py-2 font-medium text-left">Net Wt</th>
            <th className="px-4 py-2 font-medium text-left">Rate</th>
            <th className="px-4 py-2 font-medium text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {rows.map((lr) => (
            <tr key={lr.lr_no} className="hover:bg-gray-800">
              <td className="px-4 py-2 whitespace-nowrap">{lr.lr_no}</td>
              <td className="px-4 py-2 whitespace-nowrap">{new Date(lr.created_at).toLocaleDateString('in')}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lr.lr_type}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lr.consignor_name}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lr.consignee_name}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lr.no_of_articles}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lr.gross_weight}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lr.net_weight}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lr.rate}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <RowActions lr_no={lr.lr_no} onDeleted={handleDeleted} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
