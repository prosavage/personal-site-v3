export const Legend = () => {
    return (
        // Show the legend on desktop only.
      <div className="tems-center flex  items-center">
        <span className="text-sm text-gray-500 mr-2">Less</span>
        <div className="flex  items-center">
          <div className="h-3 w-3 bg-gray-200 m-0.5 rounded-sm"></div>
          <div className="h-3 w-3 bg-sky-200 m-0.5 rounded-sm"></div>
          <div className="h-3 w-3 bg-sky-400 m-0.5 rounded-sm"></div>
          <div className="h-3 w-3 bg-sky-600 m-0.5 rounded-sm"></div>
          <div className="h-3 w-3 bg-sky-800 m-0.5 rounded-sm"></div>
        </div>
        <span className="text-sm text-gray-500 ml-2">More</span>
      </div>
    );
  };
  