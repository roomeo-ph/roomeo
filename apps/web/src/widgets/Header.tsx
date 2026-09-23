import roomeoLogo from "@/web/assets/roomeo.svg";

export default function Header() {
  return (
    <div className='flex flex-row justify-normal items-center pb-[0.25rem]'>
      <div className='h-[3.25rem] w-[3.25rem]'>
        <img src={roomeoLogo} alt="Roomeo Logo" />
      </div>
      <div className='flex flex-col pl-[0.56rem]'>
        <h1 className='text-[1.6422rem] font-bold'> Roomeo </h1>
        <p className='text-[0.7146rem]'> Verified listings near DLSU TAFT </p>
      </div>
    </div>
  );
}
