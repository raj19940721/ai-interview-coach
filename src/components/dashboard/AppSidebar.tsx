export default function AppSidebar() {
  return (
    <aside className="w-72 p-4 bg-slate-900 text-white">
      <div className="text-lg font-semibold mb-4">App Sidebar</div>
      <nav>
        <ul className="space-y-2">
          <li>Overview</li>
          <li>Projects</li>
          <li>Reports</li>
        </ul>
      </nav>
    </aside>
  );
}
