import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DeleteConfirmModal from "../../components/DeleteConfirmModal";
import { api } from "../../lib/api";
import type { Source } from "../../types";

export default function AdminSourcesPage(): JSX.Element {
  const [sources, setSources] = useState<Source[]>([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [note, setNote] = useState("");
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = () => api.getSources().then(setSources);

  useEffect(() => {
    load();
  }, []);

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-black text-[var(--brand-navy)]">Source / Reference Management</h1>

      <form
        className="card grid gap-2 p-4 md:grid-cols-3"
        onSubmit={async (event) => {
          event.preventDefault();
          if (!name) {
            toast.error("Source name required");
            return;
          }
          await api.createSource({ name, url, note });
          setName("");
          setUrl("");
          setNote("");
          toast.success("Source added");
          load();
        }}
      >
        <input className="rounded-lg border border-slate-300 p-2" placeholder="Source name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="rounded-lg border border-slate-300 p-2" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <input className="rounded-lg border border-slate-300 p-2" placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />
        <button className="md:col-span-3 rounded-lg bg-[var(--brand-navy)] px-4 py-2 font-semibold text-white">Add Source</button>
      </form>

      <div className="card p-4">
        <div className="space-y-2">
          {sources.map((source) => (
            <article key={source.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
              <div>
                <p className="font-semibold">{source.name}</p>
                <p className="text-xs text-slate-500">{source.url}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="rounded-lg border border-slate-300 px-2 py-1 text-sm"
                  onClick={async () => {
                    const nameValue = window.prompt("Source name", source.name) || source.name;
                    const urlValue = window.prompt("Source URL", source.url || "") || source.url;
                    const noteValue = window.prompt("Source note", source.note || "") || source.note;
                    await api.updateSource(source.id, { name: nameValue, url: urlValue, note: noteValue });
                    toast.success("Source updated");
                    load();
                  }}
                >
                  Edit
                </button>
                <button className="rounded-lg bg-[var(--brand-red)] px-2 py-1 text-sm text-white" onClick={() => setDeleting(source.id)}>
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <DeleteConfirmModal
        open={deleting !== null}
        title="Delete source?"
        onCancel={() => setDeleting(null)}
        onConfirm={async () => {
          if (deleting == null) return;
          await api.deleteSource(deleting);
          setDeleting(null);
          toast.success("Source deleted");
          load();
        }}
      />
    </section>
  );
}
