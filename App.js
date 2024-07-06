// src/App.js
import React, { useState } from 'react';
import MicLogo from './MicLogo';
import RecordingAnimation from './RecordingAnimation';

function App() {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="App h-screen flex flex-col items-center justify-center">
      <div className="flex-1 flex flex-col items-center justify-center">
        <MicLogo isRecording={isRecording} toggleRecording={toggleRecording} />
      </div>
      <div className={`w-full bg-gray-100 p-4 rounded-t-lg transition-all duration-500 ${isRecording ? 'h-auto' : 'h-0 overflow-hidden'}`}>
        {isRecording && <RecordingAnimation />}
        {!isRecording && (
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        )}
      </div>
    </div>
  );
}

export default App;
