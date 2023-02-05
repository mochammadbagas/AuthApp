export default function Layout({ children }) {
  return (
    <div className='flex h-screen bg-blue-400'>
      <div className='m-auto bg-slate-50 rounded-md w-11/12 lg:w-4/5 h-5/6 lg:h-5/6 grid lg:grid-cols-2 overflow-hidden'>
        <div className='bg-gray-300 text-center hidden lg:block'>Images</div>
        <div className='right flex flex-col justify-evenly'>
          <div className='text-center py-10'>{children}</div>
        </div>
      </div>
    </div>
  );
}
