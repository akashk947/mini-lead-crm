import { useForm } from 'react-hook-form';
import type { LeadFormData } from '../../types/lead';

interface Props {
  defaultValues?: Partial<LeadFormData>;
  isLoading?: boolean;
  onSubmit: (data: LeadFormData) => void;
}

export const LeadForm = ({
  defaultValues,
  isLoading = false,
  onSubmit,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LeadFormData>({
    mode: 'onChange',
    defaultValues: defaultValues || {
      name: '',
      email: '',
      phone: '',
      source: '',
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="space-y-5"
    >
      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          {...register('name', {
            required: 'Name is required',
          })}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-rose-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-rose-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Phone
        </label>
        <input
          {...register('phone', {
            required: 'Phone is required',
          })}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        />
        {errors.phone && (
          <p className="mt-2 text-sm text-rose-600">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Source
        </label>
        <input
          {...register('source', {
            required: 'Source is required',
          })}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        />
        {errors.source && (
          <p className="mt-2 text-sm text-rose-600">
            {errors.source.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValid || isLoading}
        className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50 hover:bg-slate-800"
      >
        {isLoading ? 'Saving...' : 'Save Lead'}
      </button>
    </form>
  );
};
