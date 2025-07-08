import fetchLR from "@/lib/fetchLR";
import LRTable from "@/components/LR/LRTable";

export const metadata = {
  title: "All LR Entries",
};

export default async function AllLRPage() {
  const lrList = await fetchLR();

  if (lrList.length === 0) {
    return (
      <main className="p-8 text-gray-200 max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-[#e87f05]">All LR Entries</h1>
        <p className="text-gray-400">No LR records found.</p>
      </main>
    );
  }

  return (
    <main className="p-8 text-gray-200 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-[#e87f05]">All LR Entries</h1>
      <LRTable lrList={lrList} />
    </main>
  );
}
