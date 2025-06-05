function Schedule() {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh] mb-12 md:mb-24 md:min-h-[60vh]">
      <div className="flex flex-col items-start w-full h-full">
        <div className="flex flex-col items-center h-1/2 md:pt-28 justify-between">
          <p className="text-[#717769] pt-12 md:hidden text-2xl md:text-3xl font-bold md:font-semibold mt-2">
            SCHEDULE
          </p>
          <p className="text-[#717769] text-3xl md:text-4xl font-bold md:font-medium md:pb-6 mt-2">
            Saturday, December 20, 2025
          </p>
          <img
            src="/icons8-hearts-50.png"
            alt="Icon of two linked hearts"
            className="w-9 h-9"
          />
        </div>
        <div className="flex flex-col justify-between w-full pt-12 h-1/4">
          <div>
            <p className="text-[#717769] text-2xl md:text-4xl font-bold md:font-medium">
              TRADITIONAL WEDDING
            </p>
            <p className="text-[#717769] text-2xl md:text-4xl font-medium">
              12:00 am - 10:15 am
            </p>
          </div>
          <div className="mt-12 mb-10">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/icons8-hearts-50.png"
                alt="Icon of two linked hearts"
                className="w-9 h-9"
              />
            </div>
            <p className="text-[#717769] text-2xl md:text-4xl font-bold md:font-medium">
              WHITE PEOPLE WEDDING
            </p>
            <p className="text-[#717769] text-2xl md:text-4xl font-medium">
              10:00 am - 11:59 pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
