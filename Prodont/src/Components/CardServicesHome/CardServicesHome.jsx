export function CardServicesHome(props) {
  const { image, title } = props;

  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col bg-gradient-to-r from-purple-200/50 via-blue-200/50 to-cyan-400/50 rounded shadow-md p-4 w-full sm:w-64">
        <div className="flex flex-col items-center">
          <img 
            className="w-60 h-40 mb-4 rounded-lg object-cover" 
            src={image} 
            alt={title} 
          />
          <h3 className="text-violet-800 font-FuturaBook text-lg text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
}
