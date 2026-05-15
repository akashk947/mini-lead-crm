import type { Lead } from '../../types/lead';

import { StatusBadge } from './StatusBadge';
import { StatusActions } from './StatusActions';

interface Props {
  leads: Lead[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onStatusChange: (
    id: number,
    status: string
  ) => void;
}

const formatMerchantId = (id: number) =>
  `Acme${id.toString().padStart(4, '0')}`;

const formatCreatedAt = (date: string) =>
  new Date(date).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const getOwnerName = (email: string) => {
  const raw = email.split('@')[0];
  const name = raw.split(/[._]/)[0];
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const LeadTable = ({
  leads,
  onDelete,
  onEdit,
  onStatusChange,
}: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="text-left text-xs uppercase tracking-[0.2em] text-slate-500">
            <th className="px-4 py-3">
              <input
                type="checkbox"
                aria-label="Select all rows"
                className="h-4 w-4 rounded border-slate-300 text-slate-700"
              />
            </th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Record type</th>
            <th className="px-4 py-3">Merchant ID</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Owner</th>
            <th className="px-4 py-3">Created at</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead, index) => (
            <tr
              key={lead.id}
              className={
                index % 2 === 0
                  ? 'bg-white'
                  : 'bg-slate-50'
              }
            >
              <td className="px-4 py-4 align-top">
                <input
                  type="checkbox"
                  aria-label={`Select ${lead.name}`}
                  className="h-4 w-4 rounded border-slate-300 text-slate-700"
                />
              </td>

              <td className="px-4 py-4 align-top">
                <div className="font-medium text-slate-900">
                  {lead.name}
                </div>
                <div className="text-sm text-slate-500">
                  {lead.phone}
                </div>
              </td>

              <td className="px-4 py-4 align-top text-slate-700">
                {lead.source}
              </td>

              <td className="px-4 py-4 align-top text-slate-700">
                {formatMerchantId(lead.id)}
              </td>

              <td className="px-4 py-4 align-top text-slate-700">
                {lead.email}
              </td>

              <td className="px-4 py-4 align-top text-slate-700">
                {getOwnerName(lead.email)}
              </td>

              <td className="px-4 py-4 align-top text-slate-700">
                {formatCreatedAt(lead.created_at)}
              </td>

              <td className="px-4 py-4 align-top">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => onEdit(lead.id)}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-50"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(lead.id)}
                      className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-700 transition hover:bg-rose-100"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <StatusBadge status={lead.status} />
                    <StatusActions
                      lead={lead}
                      onChange={(status: string) =>
                        onStatusChange(lead.id, status)
                      }
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};