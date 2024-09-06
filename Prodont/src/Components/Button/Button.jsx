import Popup from "reactjs-popup";

export function Button(props) {
    const { name } = props;
    return (
    <Popup trigger={<button className="bg-violet-500 text-white w-26 rounded-lg py-2 px-4 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50">
      {name}
    </button>
    }
    modal
    nested
    >
      {close => (
        <div className="modal">
          <button className="close"onClick={close}>
            &times
          </button>
          <div className="header"> 
            Modal Title
          </div>
          <div className="content">
            {''}
            Lorem Ipsum
          </div>
          <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>

          </div>
        </div>
      )}
    </Popup>
    );
  }
                      