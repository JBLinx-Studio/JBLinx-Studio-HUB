
import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, Wifi, Battery, Signal } from 'lucide-react';
import { audioManager } from '../../utils/audioEffects';

interface TerminalLine {
  text: string;
  color?: string;
  delay?: number;
}

interface TerminalCommand {
  prompt: string;
  lines: TerminalLine[];
  duration: number;
}

const OptimizedTerminal = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayLines, setDisplayLines] = useState<TerminalLine[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [uptime, setUptime] = useState(99.9);

  const commands: TerminalCommand[] = [
    {
      prompt: 'root@jblinx-mainframe:~# ',
      lines: [
        { text: 'system-scan --ecosystem-status', color: 'text-green-400' },
        { text: '', delay: 200 },
        { text: '┌─ JBLINX ECOSYSTEM STATUS ─────────────────┐', color: 'text-cyan-400' },
        { text: '│ ✓ CodeFusion Studio    [OPERATIONAL]      │', color: 'text-green-400' },
        { text: '│ ✓ VitalitySync Pro     [OPERATIONAL]      │', color: 'text-green-400' },
        { text: '│ ✓ MindMate Gaming      [OPERATIONAL]      │', color: 'text-green-400' },
        { text: '│ ✓ NestCore Platform    [OPERATIONAL]      │', color: 'text-green-400' },
        { text: '│ ⚡ CodeCraftAI Pro     [BETA-ACTIVE]      │', color: 'text-yellow-400' },
        { text: '└───────────────────────────────────────────┘', color: 'text-cyan-400' },
        { text: '', delay: 100 },
        { text: '[SUCCESS] All flagship systems nominal', color: 'text-green-400' }
      ],
      duration: 8000
    },
    {
      prompt: 'root@jblinx-mainframe:~# ',
      lines: [
        { text: 'analytics --live-metrics --realtime', color: 'text-green-400' },
        { text: '', delay: 300 },
        { text: '╔══════════════════════════════════════════╗', color: 'text-purple-400' },
        { text: '║           LIVE SYSTEM METRICS            ║', color: 'text-purple-400' },
        { text: '╠══════════════════════════════════════════╣', color: 'text-purple-400' },
        { text: '║ Active Users     │ 2,847+    [████▲]    ║', color: 'text-cyan-400' },
        { text: '║ GitHub Stars     │ 1,623+    [███▲]     ║', color: 'text-yellow-400' },
        { text: '║ Projects Live    │ 47        [███●]     ║', color: 'text-green-400' },
        { text: '║ Satisfaction     │ 98.7%     [████▲]    ║', color: 'text-green-400' },
        { text: '║ System Uptime    │ 99.9%     [████●]    ║', color: 'text-green-400' },
        { text: '╚══════════════════════════════════════════╝', color: 'text-purple-400' },
        { text: '', delay: 100 },
        { text: '[INFO] Performance: Optimal across all nodes', color: 'text-cyan-400' }
      ],
      duration: 8000
    },
    {
      prompt: 'root@jblinx-mainframe:~# ',
      lines: [
        { text: 'tree /ecosystem --depth=3 --active-only', color: 'text-green-400' },
        { text: '', delay: 200 },
        { text: '/jblinx-ecosystem/', color: 'text-orange-400' },
        { text: '├── development-suite/', color: 'text-cyan-400' },
        { text: '│   ├── codefusion-studio/     # Advanced IDE', color: 'text-green-400' },
        { text: '│   └── codecraftai-pro/      # AI Engineer', color: 'text-yellow-400' },
        { text: '├── health-platform/', color: 'text-cyan-400' },
        { text: '│   └── vitalitysync/         # Wellness Tracker', color: 'text-red-400' },
        { text: '├── gaming-hub/', color: 'text-cyan-400' },
        { text: '│   └── mindmate/             # Strategic Games', color: 'text-purple-400' },
        { text: '├── property-tech/', color: 'text-cyan-400' },
        { text: '│   └── nestcore/             # Real Estate Suite', color: 'text-orange-400' },
        { text: '└── community/', color: 'text-cyan-400' },
        { text: '    ├── tutorials/           # Learning Resources', color: 'text-green-400' },
        { text: '    └── documentation/       # Technical Docs', color: 'text-green-400' },
        { text: '', delay: 100 },
        { text: '[SUMMARY] 5 flagship products | Infinite possibilities', color: 'text-green-400' }
      ],
      duration: 8000
    }
  ];

  const typeCommand = useCallback(async () => {
    const cmd = commands[currentCommand];
    setIsTyping(true);
    setDisplayLines([]);

    // Type prompt
    setDisplayLines([{ text: cmd.prompt, color: 'text-green-400' }]);
    await new Promise(resolve => setTimeout(resolve, 500));

    // Add command lines one by one
    for (let i = 0; i < cmd.lines.length; i++) {
      const line = cmd.lines[i];
      
      if (line.delay) {
        await new Promise(resolve => setTimeout(resolve, line.delay));
      }
      
      setDisplayLines(prev => [...prev, line]);
      
      // Play sound for important lines only
      if (line.text.includes('✓') || line.text.includes('SUCCESS') || line.text.includes('INFO')) {
        audioManager.playTypewriterSound();
      }
      
      await new Promise(resolve => setTimeout(resolve, 150));
    }

    setIsTyping(false);
    
    // Hold display
    await new Promise(resolve => setTimeout(resolve, cmd.duration));
    
    // Move to next command
    setCurrentCommand(prev => (prev + 1) % commands.length);
  }, [currentCommand, commands]);

  useEffect(() => {
    typeCommand();
  }, [typeCommand]);

  // Update uptime periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => Math.min(99.9, prev + (Math.random() - 0.5) * 0.05));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border-2 border-green-400/60 relative overflow-hidden group hover:border-green-300 transition-all duration-300 shadow-2xl shadow-green-400/20">
      {/* CRT Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/3 to-transparent pointer-events-none"></div>
      
      {/* Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)',
        }}
      ></div>
      
      {/* Terminal Header */}
      <div className="flex items-center justify-between p-3 border-b border-green-400/40 bg-green-400/5">
        <div className="flex items-center space-x-3">
          <div className="text-green-400 text-xs font-mono font-bold flex items-center space-x-2">
            <Terminal className="w-4 h-4" />
            <span>JBLINX MAINFRAME v3.7.2</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-green-400 text-xs font-mono flex items-center space-x-1">
            <span>UPTIME: {uptime.toFixed(1)}%</span>
            <div className="flex space-x-1 ml-2">
              <Signal className="w-3 h-3 text-green-400" />
              <Wifi className="w-3 h-3 text-green-400" />
              <Battery className="w-3 h-3 text-green-400" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm h-80 bg-black relative overflow-hidden">
        <div className="text-green-400/70 mb-2 text-xs">
          JBLinx Unified Operating System - Secure Terminal Access
        </div>
        <div className="space-y-1">
          {displayLines.map((line, index) => (
            <div key={index} className={`${line.color || 'text-green-400'} leading-relaxed`}>
              {line.text}
            </div>
          ))}
          {isTyping && (
            <div className="inline-block w-2 h-4 bg-green-400 animate-pulse"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OptimizedTerminal;
