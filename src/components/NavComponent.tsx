function NavComponent() {

  return (
    <div className="flex flex-col items-center justify-between h-[20vh] w-[100vw] bg-white">
      <h2 className="text-5xl text-[#717769] font-medium mt-2">ENIOLA & AKOREDE</h2>

      <ul className="flex flex-row list-none space-x-4 mb-2 text-[#717769] font-normal text-2xl">
        <li className="hover:underline underline-offset-[8px]"><a href="#">Home</a></li>
        <li className="hover:underline underline-offset-[8px]"><a href="#">Schedule</a></li>
        <li className="hover:underline underline-offset-[8px]"><a href="#">Registry</a></li>
        <li className="hover:underline underline-offset-[8px]"><a href="#">RSVP</a></li>
      </ul>
    </div>
  );
}

export default NavComponent;