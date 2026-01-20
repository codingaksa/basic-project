import { useState } from "react";
import resim from "./public/1000119544.jpg";

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const messages = [
    "Emin misin?",
    "Bir daha düşün",
    "Hadi ama",
    "Lütfen bir daha düşün",
    "Gerçekten mi?",
    "Son bir şans daha?",
    "Bak bir daha düşün",
    "Emin misin gerçekten?",
    "Lütfen...",
    "Son kez düşün",
  ];

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setShowImage(true);
  };

  const getCurrentMessage = () => {
    if (noClickCount === 0) return "";
    const messageIndex = Math.min(noClickCount - 1, messages.length - 1);
    return messages[messageIndex];
  };

  const getYesButtonSize = () => {
    const baseSize = 1;
    const growth = noClickCount * 0.1;
    return baseSize + growth;
  };

  if (showImage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-red-200">
        <div className="text-center p-8">
          <div className="mb-8 animate-bounce">
            <h1 className="text-6xl font-bold text-pink-600 mb-4">
              💕 Harika! 💕
            </h1>
            <p className="text-2xl text-gray-700">Bir kez daha deneyelim!</p>
          </div>
          <div className="max-w-md mx-auto">
            <img
              src={resim}
              alt="Romantic"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-red-200">
      <div className="text-center p-8 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-12 animate-pulse">
          Bir kez daha deneyelim mi?
        </h1>

        {noClickCount > 0 && (
          <div className="mb-8 animate-bounce">
            <p className="text-3xl md:text-4xl font-semibold text-red-500">
              {getCurrentMessage()}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={handleYesClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              transform: `scale(${getYesButtonSize()})`,
              fontSize: `${16 + noClickCount * 2}px`,
              padding: `${16 + noClickCount * 4}px ${32 + noClickCount * 8}px`,
            }}
          >
            Evet
          </button>

          <button
            onClick={handleNoClick}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              transform: noClickCount > 0 ? "scale(0.9)" : "scale(1)",
            }}
          >
            Hayır
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
