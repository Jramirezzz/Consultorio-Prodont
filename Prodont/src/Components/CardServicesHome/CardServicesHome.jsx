export function CardServicesHome(props) {
    const { image, title } = props;
  
    return (
      <>
      <section>
        <div>
          <img className="w-60 z-20" src={image} alt="image" />
          <h3 className="text-zinc-900">{title}</h3>
        </div>
      </section>

        
      </>
    );
  }
  