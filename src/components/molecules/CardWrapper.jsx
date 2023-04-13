export default function CardWrapper({ children }) {
  return (
    <div className="items-center container mx-auto my-2 px-4 md:px-12">
      <div className="-mx-1 flex flex-wrap lg:-mx-4">{children}</div>
    </div>
  )
}
