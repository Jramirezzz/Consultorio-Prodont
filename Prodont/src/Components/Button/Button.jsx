export function Button(props) {
    const { name } = props;
    return (
      <button className="bg-violet-500 text-white w-26 rounded-lg py-2 px-4 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50">
        {name}
      </button>
    );
  }
  