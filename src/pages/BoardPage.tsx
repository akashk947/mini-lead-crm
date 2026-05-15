import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BOARD_COLUMNS = [
  {
    title: 'Backlog',
    subtitle: 'Ideas and new account requests',
    items: [
      {
        title: 'Parent account clean up',
        details: 'Review duplicate records and merge cleanly.',
        tag: 'Accounts',
      },
      {
        title: 'Solution requests summary',
        details: 'Group incoming requests by customer need.',
        tag: 'Requests',
      },
    ],
  },
  {
    title: 'In Progress',
    subtitle: 'Work currently underway',
    items: [
      {
        title: 'Qualification follow-up',
        details: 'Confirm lead status and update next steps.',
        tag: 'Leads',
      },
      {
        title: 'Smartboard layout review',
        details: 'Finalize the board sections and actions.',
        tag: 'Board',
      },
    ],
  },
  {
    title: 'Completed',
    subtitle: 'Finished priorities',
    items: [
      {
        title: 'Workspace access audit',
        details: 'Verified access levels for all accounts.',
        tag: 'Security',
      },
      {
        title: 'Merchant profile updates',
        details: 'Completed the latest merchant data refresh.',
        tag: 'Updates',
      },
    ],
  },
];

export const BoardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Workspace Smartboards
            </p>
            <h1 className="text-3xl font-semibold text-slate-900">Board</h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/leads/create')}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
            >
              Create Account
            </button>

            <button
              type="button"
              onClick={() => navigate('/leads/create')}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <Plus size={16} />
              New Smartboard
            </button>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
          Your workspace board gives a visual view of active smartboards, account workstreams,
          and progress across the team.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {BOARD_COLUMNS.map((column) => (
          <section
            key={column.title}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  {column.title}
                </h2>
                <p className="mt-1 text-xs text-slate-500">{column.subtitle}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500">
                {column.items.length}
              </span>
            </div>

            <div className="space-y-4">
              {column.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.details}
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-900/5 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
