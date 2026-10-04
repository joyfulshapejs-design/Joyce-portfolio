export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-5xl mx-auto text-center font-mono text-sm text-text-secondary">
        © {new Date().getFullYear()} Joyce Anne Salandanan &middot; Built with Next.js
      </div>
    </footer>
  );
}
