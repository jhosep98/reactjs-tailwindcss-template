function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        alt="random_image"
        className="w-full"
        src="https://source.unsplash.com/random"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2 ">
          Photo by John Doe
        </div>
      </div>
    </div>
  );
}

export default App;
