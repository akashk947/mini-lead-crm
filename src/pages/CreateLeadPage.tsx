import { useNavigate } from 'react-router-dom';

import { LeadForm } from '../components/lead/LeadForm';
import { useLeadContext } from '../context/LeadContext';

export const CreateLeadPage = () => {
  const navigate = useNavigate();
  const { createLead } = useLeadContext();

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6">
        Create Lead
      </h1>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <LeadForm
          onSubmit={(data) => {
            createLead(data);
            navigate('/leads');
          }}
        />
      </div>
    </div>
  );
};
