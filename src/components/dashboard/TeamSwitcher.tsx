export default function TeamSwitcher() {
  return (
    <div className="p-4 bg-slate-800 text-white rounded-xl">
      <label className="block text-sm font-medium mb-2">Switch Team</label>
      <select className="w-full rounded-md border border-slate-700 bg-slate-900 p-2">
        <option>Team Alpha</option>
        <option>Team Beta</option>
        <option>Team Gamma</option>
      </select>
    </div>
  );
}
