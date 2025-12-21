export default function PostListLoading() {
  return (
    <ul className="space-y-8">
      {Array(3).fill(0).map((_el, index) => (
        <li key={index}>
          <div className="w-full h-12 animate-pulse bg-neutral-100 dark:bg-neutral-700"></div>
        </li>
      ))}
    </ul>
  )
}