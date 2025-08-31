import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-graybg-light to-graybg-dark">
      Üdvj a próbafeladaton!
      <Link
        href="/admin/movies"
        className="block px-3 py-2 rounded-md hover:bg-brand hover:text-white transition"
      >
        Go to Admin
      </Link>
    </div>
  );
}
