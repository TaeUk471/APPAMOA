import ListboxContainer from "./ListboxContainer";

const ListBoxSection = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-gradient-to-b from-purple-700 to-stone-500 p-6 md:p-8 text-white rounded-sm">
        <p className="font-roboto text-xl md:text-3xl font-bold text-center md:text-left leading-relaxed">
          {`View the patient's data through their profile, hospital, attending physician, comprehensive indicators, and
          examination dates.`}
        </p>
        <span className="block mt-4 font-poppins text-sm md:text-lg text-center md:text-left">
          Access the data on the dashboard or generate a PDF through the Edit page!
        </span>
      </div>
      <ListboxContainer />
    </div>
  );
};

export default ListBoxSection;
