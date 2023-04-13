export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-gray-900 text-white px-3 py-1 font-semibold active:bg-gray-800 active:scale-95 transition duration-150 ease-in-out w-full"
    >
      {children}
    </button>
  )
}
