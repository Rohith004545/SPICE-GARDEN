export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-red-500 mb-4">
          Spice Garden
        </h2>

        <p className="mb-4">
          Serving authentic flavors with passion.
        </p>

        <p className="text-sm">
          © {new Date().getFullYear()} Spice Garden. All Rights Reserved.
        </p>

      </div>
    </footer>
  )
}