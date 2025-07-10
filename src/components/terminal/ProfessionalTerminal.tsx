
import React, { useState, useEffect } from 'react';

const ProfessionalTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const terminalLines = [
    '> Initializing JBLinx Studio HUB...',
    '> Loading systems...',
    '> Connection established.',
    '> Welcome to the future.'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLine < terminalLines.length) {
        const line = terminalLines[currentLine];
        const currentText = line.substring(0, displayText.length + 1);
        
        if (currentText === line) {
          setCurrentLine(prev => prev + 1);
          setDisplayText('');
        } else {
          setDisplayText(currentText);
        }
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentLine, displayText, terminalLines]);

  return (
    <div className="bg-slate-900/90 border border-emerald-500/30 rounded-lg p-6 font-mono text-sm backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <span className="ml-2 text-slate-400">terminal</span>
      </div>
      
      <div className="space-y-2">
        {terminalLines.slice(0, currentLine).map((line, index) => (
          <div key={index} className="text-emerald-400">
            {line}
          </div>
        ))}
        {currentLine < terminalLines.length && (
          <div className="text-emerald-400">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTerminal;
