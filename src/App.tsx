import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4 w-full max-w-4xl">
        <ChatInterface />
        <p className="text-gray-500 text-sm font-medium opacity-70">
          Developed by Abhishek Hirve © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default App;
