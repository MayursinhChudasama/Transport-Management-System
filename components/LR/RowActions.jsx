"use client";
import Link from "next/link";
import deleteLr from "@/lib/deleteLr";
import { useState } from "react";

export default function RowActions({ lr_no, onDeleted }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("Delete this LR entry?")) return;
    try {
      setLoading(true);
      await deleteLr(lr_no);
      onDeleted?.(lr_no);
    } catch (err) {
      alert(err.message || "Failed to delete");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex gap-2">
      <Link
        href={`/${lr_no}`}
        className="px-2 py-1 text-xs rounded bg-blue-500/20 text-blue-300 hover:bg-blue-500/30"
      >
        View
      </Link>
      <button
        onClick={handleDelete}
        disabled={loading}
        className="px-2 py-1 text-xs rounded bg-red-600/20 text-red-400 hover:bg-red-600/30 disabled:opacity-50"
      >
        {loading ? "..." : "Delete"}
      </button>
    </div>
  );
}
