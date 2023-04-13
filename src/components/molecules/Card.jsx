export default function Card({ children }) {
  return (
    <div className="container w-96 flex flex-col gap-2 rounded-lg p-4 bg-slate-100 text-gray-900 max-w-screen-sm shadow-lg items-center">
      {children}
    </div>
  )
}
