export default function NavUser() {
  return (
    <div className="flex items-center gap-3 p-4 bg-slate-800 text-white rounded-xl">
      <div className="h-10 w-10 rounded-full bg-slate-700" />
      <div>
        <p className="text-sm font-medium">User Name</p>
        <p className="text-xs text-slate-400">Member</p>
      </div>
    </div>
  );
}
