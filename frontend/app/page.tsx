import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-gray-50 flex items-center justify-center overflow-hidden">
      {/* Blur dekorációk */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-primary-light rounded-full filter blur-3xl opacity-30"></div>

      {/* Tartalom */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-6">
          Jászolos Ádám próbafeladat
        </h2>
        <p className="text-gray-600 mb-6">Üdvözlöm a próbafeladaton!</p>
        <Link
          href="/admin"
          className="inline-block px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition"
        >
          Admin
        </Link>
      </div>
    </div>
  );
}
