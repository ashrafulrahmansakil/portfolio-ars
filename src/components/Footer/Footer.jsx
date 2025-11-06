export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <div className="container mx-auto">
        <p className="p-3 capitalize text-center pb-56">
          all rights reserved @{year} Ashraful-Rahman-sakil
        </p>
      </div>
    </div>
  )
}
