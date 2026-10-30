export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className='container mx-auto'>
        <p className='p-3 capitalize text-center pb-56'>
          all rights reserved @2025 - {year} Ashraful Rahman sakil
        </p>
      </div>
    </div>
  );
}
