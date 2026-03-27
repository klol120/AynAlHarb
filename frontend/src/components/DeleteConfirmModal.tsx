export default function DeleteConfirmModal({
  open,
  title,
  onCancel,
  onConfirm
}: {
  open: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}): JSX.Element | null {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4">
      <div className="card w-full max-w-sm p-5">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">This action cannot be undone.</p>
        <div className="mt-4 flex justify-end gap-2">
          <button className="rounded-lg border border-slate-300 px-3 py-2" onClick={onCancel}>
            Cancel
          </button>
          <button className="rounded-lg bg-[var(--brand-red)] px-3 py-2 font-semibold text-white" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
