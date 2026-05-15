import type { LeadStatus } from '../types/lead';

export const STATUS_ORDER: LeadStatus[] = [
  'NEW',
  'CONTACTED',
  'QUALIFIED',
  'CONVERTED',
  'LOST',
];

export const STATUS_COLORS: Record<LeadStatus, string> = {
  NEW: 'bg-blue-100 text-blue-700',
  CONTACTED: 'bg-yellow-100 text-yellow-700',
  QUALIFIED: 'bg-purple-100 text-purple-700',
  CONVERTED: 'bg-green-100 text-green-700',
  LOST: 'bg-red-100 text-red-700',
};

export const getValidTransitions = (
  current: LeadStatus
): LeadStatus[] => {
  switch (current) {
    case 'NEW':
      return ['CONTACTED', 'LOST'];

    case 'CONTACTED':
      return ['QUALIFIED', 'LOST'];

    case 'QUALIFIED':
      return ['CONVERTED', 'LOST'];

    default:
      return [];
  }
};

export const isTerminalStatus = (status: LeadStatus) => {
  return status === 'CONVERTED' || status === 'LOST';
};