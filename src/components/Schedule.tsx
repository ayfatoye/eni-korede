function Schedule() {
  return (
    <div className="flex flex-col items-center justify-center h-full mb-12 md:mb-12 md:min-h-[60vh]">
      <div className="flex flex-col items-start w-full h-full">
        <div className="flex flex-col items-center h-1/2 md:pt-28 justify-between">
          <p className="text-[#717769] pt-12 mb-12 md:hidden text-2xl md:text-3xl font-bold md:font-semibold mt-2">
            SCHEDULE
          </p>
          <p className="text-[#717769] text-3xl mb-6 pb-6 md:text-4xl font-bold md:font-medium md:pb-6 mt-2">
            Saturday, December 20, 2025
          </p>
          <div className="flex items-center justify-center mb-6">
            <img
              src="/icons8-hearts-50.png"
              alt="Icon of two linked hearts"
              className="w-9 h-9 md:ml-6"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between w-full pt-2 h-1/4">
          <div>
            <p className="text-[#717769] text-2xl md:text-4xl font-bold md:font-medium">
              TRADITIONAL WEDDING
            </p>
            <p className="text-[#717769] text-2xl md:text-4xl font-medium">
              10:00 am - 02:00 pm
            </p>

            <div className="mt-12 text-center"></div>
          </div>
          <div className="mt-0 mb-10">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/icons8-hearts-50.png"
                alt="Icon of two linked hearts"
                className="w-9 h-9"
              />
            </div>
            <p className="text-[#717769] text-2xl md:text-4xl font-bold md:font-medium">
              RECEPTION
            </p>
            <p className="text-[#717769] text-2xl md:text-4xl font-medium">
              06:00 pm - 11:00 pm
            </p>
          </div>
          <div className="mt-12 mb-10">
            <p className="text-[#717769] text-2xl md:text-4xl font-light">
              Enoch Event Center
            </p>
            <a href="https://www.google.com/maps/place/Enoch's+Event+Center/@29.6889832,-95.6213606,17z/data=!3m1!4b1!4m6!3m5!1s0x8640dd7411d3de11:0x5c6f3c8f515870e0!8m2!3d29.6889833!4d-95.6164897!16s%2Fg%2F11fj0n11ty?entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D" className="text-[#717769] text-xl md:text-2xl underline font-bold">
              13350 Beechnut St, Houston, TX 77083
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
