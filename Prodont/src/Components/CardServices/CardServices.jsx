import { FourTitle } from "../../Components/index";

export function CardServices(props) {
  const { image, Description, title } = props;

  return (
    <section className="flex justify-center mb-28">
      <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 w-full md:w-3/5 h-auto md:h-64 rounded-md overflow-hidden shadow-lg">
        
        <div className="flex justify-center items-center w-full md:w-1/3">
          <img className="w-60 h-auto rounded-lg" src={image} alt="Image" />
        </div>
        
        <div className="flex flex-col justify-center items-start w-full md:w-2/3 p-4">
          <div>
            <FourTitle FourTitle={title} />
            <p className="text-left text-wrap font-FuturaBook text-violet-800">
              {Description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
