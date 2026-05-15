import {
  Home,
  Users,
  BarChart3,
  LayoutGrid,
  FileText,
  Layers,
  CheckSquare,
  Briefcase,
  User,
  Mail,
  LifeBuoy,
  MessageCircle,
  Inbox,
  BadgeCheck,
  CalendarCheck,
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

const sidebarGroups = [
  {
    title: 'MAIN',
    items: [
      { label: 'Home', icon: Home, to: '/' },
      { label: 'Reports & Analytics', icon: BarChart3 },
      { label: 'Workspace Smartboards', icon: LayoutGrid, to: '/board' },
    ],
  },
  {
    title: 'WORKSPACE SMARTBOARDS',
    items: [
      { label: 'Solution Requests', icon: FileText },
      { label: 'Parent Accounts', icon: Layers },
      { label: 'My Tasks', icon: CheckSquare },
    ],
  },
  {
    title: 'WORKSPACE',
    items: [
      { label: 'Accounts', icon: Users, to: '/leads' },
      { label: 'Opportunities', icon: Briefcase },
      { label: 'Contacts', icon: User },
      { label: 'Leads', icon: Mail },
      { label: 'Deal Support Requests', icon: LifeBuoy },
      { label: 'FreshDesk Tickets', icon: MessageCircle },
      { label: 'SRF SPR', icon: Inbox },
      { label: 'BANT Qualifications', icon: BadgeCheck },
      { label: 'Tasks', icon: CalendarCheck },
    ],
  },
];

export const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen border-r border-slate-800 bg-slate-950 text-slate-100">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <h1 className="text-lg font-semibold tracking-tight">
          Acme Inc.
        </h1>
      </div>

      <div className="px-6 py-5">
        {sidebarGroups.map((group) => (
          <div key={group.title} className="mb-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              {group.title}
            </p>

            <div className="space-y-2">
              {group.items.map((item) => {
                const Icon = item.icon;

                if (item.to) {
                  return (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                          isActive
                            ? 'bg-slate-800 text-white'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`
                      }
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </NavLink>
                  );
                }

                return (
                  <button
                    key={item.label}
                    type="button"
                    className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};