import type { Lead } from '../../types/lead';

import { getValidTransitions } from '../../utils/status';

interface Props {
  lead: Lead;
  onChange: (status: string) => void;
}

export const StatusActions = ({
  lead,
  onChange,
}: Props) => {
  const transitions = getValidTransitions(
    lead.status
  );

  if (transitions.length === 0) {
    return (
      <p className="text-gray-400 text-sm">
        Status Locked
      </p>
    );
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {transitions.map((status) => (
        <button
          key={status}
          onClick={() => onChange(status)}
          className="border px-2 py-1 rounded text-sm"
        >
          Mark as {status}
        </button>
      ))}
    </div>
  );
};