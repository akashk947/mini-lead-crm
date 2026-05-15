import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { LeadStatus } from '../types/lead';

import { LeadTable } from '../components/lead/LeadTable';
import { useLeadContext } from '../context/LeadContext';

const STATUS_OPTIONS: (LeadStatus | 'ALL')[] = [
  'ALL',
  'NEW',
  'CONTACTED',
  'QUALIFIED',
  'CONVERTED',
  'LOST',
];

export const LeadsPage = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<LeadStatus | 'ALL'>('ALL');

  const navigate = useNavigate();
  const { leads, deleteLead, updateLead } = useLeadContext();

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        search.trim() === '' ||
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.phone?.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === 'ALL' ||
        lead.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, statusFilter]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Workspace
            </p>
            <h1 className="text-3xl font-semibold text-slate-900">
              Accounts
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/leads/create')}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
            >
              + Add Merchant
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              Search accounts...
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search accounts..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-14 pr-4 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <select
            aria-label="Filter accounts by status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as LeadStatus | 'ALL')}
            className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none"
          >
            {STATUS_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option === 'ALL' ? 'All' : option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        {filteredLeads.length === 0 ? (
          <div className="p-10 text-center text-slate-600">
            No accounts found.
          </div>
        ) : (
          <LeadTable
            leads={filteredLeads}
            onDelete={(id) => {
              const confirmed = window.confirm('Delete this account?');
              if (confirmed) {
                deleteLead(id);
              }
            }}
            onEdit={(id) => navigate(`/leads/${id}/edit`)}
            onStatusChange={(id, status) =>
              updateLead(id, {
                status: status as LeadStatus,
                updated_at: new Date().toISOString().slice(0, 10),
              })
            }
          />
        )}
      </div>
    </div>
  );
};
