
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Wifi, Signal, Battery } from 'lucide-react';

interface TerminalCommand {
  command: string;
  output: string[];
}

const ProfessionalTerminal: React.FC = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

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
    let timeoutId: NodeJS.Timeout;
    
    const runCommand = async () => {
      if (currentCommandIndex >= commands.length) {
        // Reset after showing all commands
        setTimeout(() => {
          setCurrentCommandIndex(0);
          setDisplayText('');
        }, 3000);
        return;
      }

      const command = commands[currentCommandIndex];
      setIsTyping(true);
      
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
      
      // Wait before next command
      timeoutId = setTimeout(() => {
        setCurrentCommandIndex(prev => prev + 1);
      }, 2500);
    };

    runCommand();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentCommandIndex]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-950/95 border border-emerald-400/60 backdrop-blur-sm shadow-2xl shadow-emerald-400/20 overflow-hidden">
      {/* Terminal Header - More authentic without color circles */}
      <div className="flex items-center justify-between p-3 border-b border-emerald-400/40 bg-slate-900/90">
        <div className="flex items-center space-x-3">
          <div className="text-emerald-400 text-sm font-bold flex items-center space-x-2 font-mono">
            <Terminal className="w-4 h-4" />
            <span>jblinx@studio:~</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-emerald-400/70">
          <Signal className="w-3 h-3" />
          <Wifi className="w-3 h-3" />
          <Battery className="w-3 h-3" />
          <div className="text-xs font-mono">◉ LIVE</div>
        </div>
      </div>
      
      {/* Terminal Content - Fixed Height to Prevent Layout Shift */}
      <div 
        ref={terminalRef}
        className="p-4 bg-slate-950/90 h-80 overflow-hidden relative"
      >
        <div className="text-emerald-400/60 text-xs mb-2 font-mono">
          JBLinx Studio Operating System v2.1.7 - Terminal Session Active
        </div>
        
        <div className="font-mono text-sm leading-relaxed h-full overflow-hidden">
          <pre className="text-emerald-400 whitespace-pre-wrap h-64 overflow-hidden">
            {displayText}
          </pre>
          
          {/* Cursor */}
          <div className="flex items-center mt-2">
            <span className="text-emerald-400 mr-1 font-mono">[jblinx@studio]$</span>
            {(isTyping || showCursor) && (
              <div className="w-2 h-4 bg-emerald-400 animate-pulse"></div>
            )}
          </div>
        </div>
        
        {/* Status indicators at bottom */}
        <div className="absolute bottom-2 right-4 flex items-center space-x-2 text-xs font-mono">
          <div className="flex items-center space-x-1 text-emerald-400/60">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTerminal;
