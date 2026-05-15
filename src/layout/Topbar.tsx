import { Search, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Topbar = () => {
  const navigate = useNavigate();
  const handleSaveSmartboard = () => {
    navigate('/board');
  };

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      <div className="flex flex-col justify-center">
        <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
          Accounts
        </span>
        <div className="mt-1 flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-slate-900">
            All Accounts
          </h1>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-3">
        <div className="relative w-full max-w-md">
          <Search
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            placeholder="Search accounts..."
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <button
          type="button"
          onClick={handleSaveSmartboard}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
        >
          Save as Smartboard
        </button>

        <button
          type="button"
          onClick={() => navigate('/leads/create')}
          className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <Plus size={16} />
          Add Merchant
        </button>
      </div>
    </header>
  );
};