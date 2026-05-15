import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lead, LeadFormData } from '../types/lead';

interface LeadContextValue {
  leads: Lead[];
  createLead: (data: LeadFormData) => void;
  updateLead: (id: number, data: Partial<Lead>) => void;
  deleteLead: (id: number) => void;
  getLead: (id: number) => Lead | undefined;
}

const LeadContext = createContext<LeadContextValue | undefined>(undefined);

const initialLeads: Lead[] = [
  {
    id: 1,
    name: 'Northwind Traders',
    email: 'hello@northwind.example',
    phone: '(555) 123-4567',
    source: 'website',
    status: 'NEW',
    created_at: '2026-04-12',
    updated_at: '2026-04-12',
  },
  {
    id: 2,
    name: 'Globex Corporation',
    email: 'sales@globex.example',
    phone: '(555) 765-4321',
    source: 'campaign',
    status: 'CONTACTED',
    created_at: '2026-04-10',
    updated_at: '2026-04-11',
  },
  {
    id: 3,
    name: 'Initech',
    email: 'contact@initech.example',
    phone: '(555) 555-0133',
    source: 'referral',
    status: 'QUALIFIED',
    created_at: '2026-04-08',
    updated_at: '2026-04-09',
  },
  {
    id: 4,
    name: 'Wayne Enterprises',
    email: 'info@wayne.example',
    phone: '(555) 777-0099',
    source: 'website',
    status: 'CONVERTED',
    created_at: '2026-04-05',
    updated_at: '2026-04-06',
  },
  {
    id: 5,
    name: 'Stark Industries',
    email: 'partners@stark.example',
    phone: '(555) 888-1010',
    source: 'campaign',
    status: 'LOST',
    created_at: '2026-04-01',
    updated_at: '2026-04-04',
  },
];

export const LeadProvider = ({ children }: { children: ReactNode }) => {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);

  const createLead = (data: LeadFormData) => {
    const nextId = leads.length
      ? Math.max(...leads.map((lead) => lead.id)) + 1
      : 1;

    const newLead: Lead = {
      id: nextId,
      status: 'NEW',
      created_at: new Date().toISOString().slice(0, 10),
      updated_at: new Date().toISOString().slice(0, 10),
      ...data,
    };

    setLeads((current) => [newLead, ...current]);
  };

  const updateLead = (id: number, data: Partial<Lead>) => {
    setLeads((current) =>
      current.map((lead) =>
        lead.id === id
          ? { ...lead, ...data, updated_at: new Date().toISOString().slice(0, 10) }
          : lead
      )
    );
  };

  const deleteLead = (id: number) => {
    setLeads((current) => current.filter((lead) => lead.id !== id));
  };

  const getLead = (id: number) => {
    return leads.find((lead) => lead.id === id);
  };

  const value = useMemo(
    () => ({ leads, createLead, updateLead, deleteLead, getLead }),
    [leads]
  );

  return (
    <LeadContext.Provider value={value}>
      {children}
    </LeadContext.Provider>
  );
};

export const useLeadContext = () => {
  const context = useContext(LeadContext);

  if (!context) {
    throw new Error('useLeadContext must be used within LeadProvider');
  }

  return context;
};
