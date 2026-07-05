export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} AI Interview Coach
        </p>

        <p className="text-gray-500 mt-2 md:mt-0">
          Built with ❤️ using Next.js & TypeScript
        </p>
      </div>
    </footer>
  );
}
