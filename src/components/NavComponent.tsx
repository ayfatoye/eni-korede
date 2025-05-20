function NavComponent() {

  return (
    <div className="flex flex-col items-center justify-center h-[20vh]">
  <h2 className="text-white text-xl mb-4">ENIOLA & AKOREDE</h2>

  <ul className="flex flex-row list-none space-x-4 text-blue-500">
    <li><a href="#">Home</a></li>
    <li><a href="#">Schedule</a></li>
    <li><a href="#">Registry</a></li>
    <li><a href="#">RSVP</a></li>
  </ul>
</div>
  );
}

export default NavComponent;