export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 md:flex-row">
        <p className="text-gray-500">
          © {new Date().getFullYear()} AI Interview Coach
        </p>

        <p className="text-gray-500">
          Built with ❤️ using Next.js & TypeScript
        </p>
      </div>
    </footer>
  );
}