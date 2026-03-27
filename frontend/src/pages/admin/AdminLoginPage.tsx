import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { api } from "../../lib/api";

export default function AdminLoginPage(): JSX.Element {
  const [email, setEmail] = useState("admin@aynalharb.local");
  const [password, setPassword] = useState("Admin123!");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="grid min-h-screen place-items-center px-4">
      <form
        className="card w-full max-w-sm p-6"
        onSubmit={async (event) => {
          event.preventDefault();
          setLoading(true);
          try {
            const res = await api.login(email, password);
            localStorage.setItem("aah_token", res.token);
            toast.success("Logged in");
            navigate("/admin");
          } catch {
            toast.error("Invalid login");
          } finally {
            setLoading(false);
          }
        }}
      >
        <h1 className="mb-4 text-xl font-black text-[var(--brand-navy)]">Admin Login</h1>
        <input className="mb-2 w-full rounded-lg border border-slate-300 p-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="mb-3 w-full rounded-lg border border-slate-300 p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={loading} className="w-full rounded-lg bg-[var(--brand-red)] px-3 py-2 font-semibold text-white">
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </main>
  );
}
