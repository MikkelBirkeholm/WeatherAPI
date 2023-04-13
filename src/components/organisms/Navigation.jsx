import Link from 'next/link'

export default function Navigation({ title }) {
  return (
    <div className="bg-slate-50 rounded-lg shadow-lg mb-5 px-5 py-2 text-black">
      <h2>{title}</h2>
      <nav className="flex gap-3">
        <Link href="/test">Test</Link>
        <Link href="/">Home</Link>
      </nav>
    </div>
  )
}
