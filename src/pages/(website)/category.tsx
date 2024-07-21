const Category = () => {
  return (
    <div className="ml-[200px]">
      <h1 className="text-[#505F4E] text-[30px]">Kategorien</h1>
      <div className="space-y-4 pl-2 pt-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="checkbox1"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label
            htmlFor="checkbox1"
            className="ml-2 text-[#333333] whitespace-nowrap"
          >
            Eckige Töpfe
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="checkbox1"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label
            htmlFor="checkbox1"
            className="ml-2 text-[#333333] whitespace-nowrap"
          >
            Runde Töpfe
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="checkbox3"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="checkbox3" className="ml-2 text-[#333333] ">
            Untersetzer
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="checkbox4"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="checkbox4" className="ml-2 text-[#333333]">
            Pflanzschalen
          </label>
        </div>
      </div>
    </div>
  );
};

export default Category;
