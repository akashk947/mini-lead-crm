import type { LeadStatus } from '../../types/lead';

import { STATUS_COLORS } from '../../utils/status';

export const StatusBadge = ({
  status,
}: {
  status: LeadStatus;
}) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[status]}`}
    >
      {status}
    </span>
  );
};