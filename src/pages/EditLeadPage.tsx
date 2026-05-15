import { useNavigate, useParams } from 'react-router-dom';

import { LeadForm } from '../components/lead/LeadForm';
import { useLeadContext } from '../context/LeadContext';

export const EditLeadPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getLead, updateLead } = useLeadContext();

  const lead = id ? getLead(Number(id)) : undefined;

  if (!lead) {
    return (
      <div className="max-w-xl mx-auto p-6 text-slate-700">
        Lead not found.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6">
        Edit Lead
      </h1>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <LeadForm
          defaultValues={lead}
          onSubmit={(formData) => {
            updateLead(lead.id, {
              ...formData,
              updated_at: new Date().toISOString().slice(0, 10),
            });
            navigate('/leads');
          }}
        />
      </div>
    </div>
  );
};
