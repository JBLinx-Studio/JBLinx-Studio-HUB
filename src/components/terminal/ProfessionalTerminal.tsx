
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Wifi, Signal, Battery, Volume2, VolumeX, Zap } from 'lucide-react';
import { useTheme } from '../enhanced/EnhancedThemeProvider';

interface TerminalCommand {
  command: string;
  output: string[];
}

const ProfessionalTerminal: React.FC = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isBooting, setIsBooting] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const { playSound, soundEnabled, toggleSound, glitchMode, toggleGlitch } = useTheme();

  const commands: TerminalCommand[] = [
    {
      command: 'jblinx --status',
      output: [
        '████████████████████████████████ 100%',
        'JBLinx Studio Platform v2.1.7',
        '',
        '┌─ SYSTEM STATUS ─────────────────┐',
        '│ ✓ CodeFusion      [OPERATIONAL] │',
        '│ ✓ VitalitySync    [OPERATIONAL] │', 
        '│ ✓ MindMate        [OPERATIONAL] │',
        '│ ✓ NestCore        [OPERATIONAL] │',
        '│ ✓ CodeCraftAI     [BETA-ACTIVE] │',
        '└─────────────────────────────────┘',
        '',
        'All systems: NOMINAL'
      ]
    },
    {
      command: 'system --analytics',
      output: [
        'Fetching live metrics...',
        '',
        '╔════════════════════════════════╗',
        '║         LIVE METRICS           ║',
        '╠════════════════════════════════╣',
        '║ Active Users  │ 2,847+   [▲]  ║',
        '║ GitHub Stars  │ 1,623+   [▲]  ║',
        '║ Projects Live │ 47       [●]  ║',
        '║ Satisfaction  │ 98.7%    [▲]  ║',
        '║ Uptime SLA    │ 99.9%    [●]  ║',
        '╚════════════════════════════════╝'
      ]
    },
    {
      command: 'ls --products',
      output: [
        '/jblinx/products/',
        '├── development/',
        '│   ├── codefusion-studio/   # Web IDE',
        '│   └── codecraftai-pro/    # AI Assistant', 
        '├── health-tech/',
        '│   └── vitalitysync/       # Wellness App',
        '├── gaming/',
        '│   └── mindmate/           # Strategy Hub',
        '├── proptech/',
        '│   └── nestcore/           # Real Estate',
        '└── resources/',
        '    └── documentation/',
        '',
        '5 flagship products ready for deployment'
      ]
    }
  ];

  useEffect(() => {
    if (isBooting) {
      playSound('monitor02', 0.4);
      const bootTimer = setTimeout(() => {
        setIsBooting(false);
        playSound('combination8', 0.3);
      }, 2000);
      return () => clearTimeout(bootTimer);
    }
  }, [isBooting, playSound]);

  useEffect(() => {
    if (isBooting) return;

    let timeoutId: NodeJS.Timeout;
    
    const runCommand = async () => {
      if (currentCommandIndex >= commands.length) {
        playSound('monitor05', 0.2);
        setTimeout(() => {
          setCurrentCommandIndex(0);
          setDisplayText('');
        }, 3000);
        return;
      }

      const command = commands[currentCommandIndex];
      setIsTyping(true);
      
      // Play command start sound
      playSound('holoPopup', 0.15);
      
      // Type command with controlled speed
      const commandText = `[jblinx@studio]$ ${command.command}`;
      for (let i = 0; i <= commandText.length; i++) {
        setDisplayText(commandText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      // Show cursor briefly
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Add output progressively
      let fullOutput = commandText;
      for (let i = 0; i < command.output.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 200));
        fullOutput += '\n' + command.output[i];
        setDisplayText(fullOutput);
      }
      
      setIsTyping(false);
      playSound('plugSocket', 0.1);
      
      // Wait before next command
      timeoutId = setTimeout(() => {
        setCurrentCommandIndex(prev => prev + 1);
      }, 2500);
    };

    runCommand();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentCommandIndex, isBooting, playSound]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  if (isBooting) {
    return (
      <div className="bg-black border border-emerald-400/60 rounded-lg shadow-2xl shadow-emerald-400/20 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-600">
          <div className="flex items-center space-x-3">
            <Terminal className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-gray-300 text-sm font-mono">INITIALIZING...</span>
          </div>
        </div>
        
        <div className="p-4 bg-black h-80 flex items-center justify-center">
          <div className="text-center">
            <div className="text-emerald-400 text-2xl font-mono mb-4 animate-pulse">
              JBLINX STUDIO
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-black border border-emerald-400/60 rounded-lg shadow-2xl shadow-emerald-400/20 overflow-hidden transition-all duration-300 ${glitchMode ? 'animate-pulse' : ''}`}>
      {/* Enhanced Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-600">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-300 text-sm font-mono">Terminal</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleSound}
            className="text-gray-400 hover:text-emerald-400 transition-colors"
            title={`Sound ${soundEnabled ? 'On' : 'Off'}`}
          >
            {soundEnabled ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
          </button>
          
          <button 
            onClick={toggleGlitch}
            className="text-gray-400 hover:text-emerald-400 transition-colors"
            title="Toggle Glitch Mode"
          >
            <Zap className="w-3 h-3" />
          </button>
          
          <div className="text-gray-400 text-xs font-mono">jblinx@studio</div>
          <div className="flex items-center space-x-1 text-gray-500">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3 h-3" />
          </div>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-4 bg-black h-80 overflow-hidden relative"
      >
        <div className="text-emerald-400/60 text-xs mb-2 font-mono">
          JBLinx Studio Operating System v2.1.7
        </div>
        
        <div className="font-mono text-sm leading-relaxed h-full overflow-hidden">
          <pre className="text-emerald-400 whitespace-pre-wrap h-64 overflow-hidden">
            {displayText}
          </pre>
          
          {/* Enhanced Cursor */}
          <div className="flex items-center mt-2">
            <span className="text-emerald-400 mr-1">[jblinx@studio]$</span>
            {(isTyping || showCursor) && (
              <div className="w-2 h-4 bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400"></div>
            )}
          </div>
        </div>
        
        {/* Enhanced Status indicators */}
        <div className="absolute bottom-2 right-4 flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-1 text-emerald-400/60">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400"></div>
            <span>LIVE</span>
          </div>
          <div className="text-gray-500">
            SYS_OK
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTerminal;
