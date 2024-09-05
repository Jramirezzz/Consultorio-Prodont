export function CardServices(props) {
    const { image, Description, title } = props;
  
    return (
      <>
        <section className="flex justify-center mb-28">
          <div className="flex flex-row bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 w-3/5 h-64 rounded-md m-0">
            
            <div className="flex justify-center items-center w-1/3">
              <img className="w-60 z-20 rounded-lg" src={image} alt="Image" />
            </div>
  
            <div className="flex flex-col justify-center items-start w-2/3 p-4">
              <h3 className=" text-left text-wrap font-FuturaBook text-zinc-900 mb-2">
                {title}
              </h3>
              <p className=" text-left text-wrap font-FuturaBook text-zinc-900">
                {Description}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
  