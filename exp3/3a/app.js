
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="p-6 text-center bg-white rounded-xl shadow-md max-w-sm mx-auto">
      <h2 className="text-xl mb-4 font-semibold text-gray-800">Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition active:scale-95 font-medium"
      >
        Increase
      </button>
    </div>
  );
}

