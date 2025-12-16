
export default function Cards({children, className} : any){

  const defaultName : string = 'Jordan';

  return (
    <div className={`border rounded-md border-gray-600 p-4 ${className}`}>
      {children}
    </div>
  )
}