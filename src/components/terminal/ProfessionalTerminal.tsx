
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Wifi, Signal, Battery, Server, Code, Database, Cloud, Zap, Shield } from 'lucide-react';

interface TerminalCommand {
  command: string;
  output: string[];
  delay?: number;
}

const ProfessionalTerminal: React.FC = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: TerminalCommand[] = [
    {
      command: 'jblinx --system-status --verbose',
      output: [
        '🚀 JBLinx Studio Platform v3.2.1 - Enterprise Edition',
        '════════════════════════════════════════════════════════',
        '',
        '┌─ CORE SYSTEMS STATUS ──────────────────────────────────┐',
        '│ ✓ CodeFusion Studio      [OPERATIONAL] ⚡ 99.9% uptime │',
        '│ ✓ VitalitySync Platform  [OPERATIONAL] 💚 2.8k users   │', 
        '│ ✓ MindMate AI Assistant  [OPERATIONAL] 🧠 Advanced ML  │',
        '│ ✓ NestCore Enterprise    [OPERATIONAL] 🏢 50+ clients  │',
        '│ ✓ CloudSync Services     [OPERATIONAL] ☁️ Multi-region │',
        '│ ✓ SecureShield          [OPERATIONAL] 🛡️ Zero breaches │',
        '└────────────────────────────────────────────────────────┘',
        '',
        '🎯 All flagship products: NOMINAL | Performance: OPTIMAL'
      ]
    },
    {
      command: 'jblinx deployment --show-metrics --live',
      output: [
        'Fetching real-time deployment metrics...',
        '',
        '╔══════════════════════════════════════════════════════╗',
        '║                 🌍 GLOBAL DEPLOYMENT                ║',
        '╠══════════════════════════════════════════════════════╣',
        '║ 🚀 Active Deployments  │ 47 products    [SCALING]   ║',
        '║ 👥 Global Users        │ 18,500+       [+2.3k/mo]  ║',
        '║ ⭐ GitHub Stars        │ 2,847+        [TRENDING]   ║',
        '║ 📊 Success Rate       │ 99.7%         [EXCELLENT]  ║',
        '║ 🔄 CI/CD Pipelines    │ 24/7 Active   [AUTO-SCALE] ║',
        '║ 🌐 CDN Coverage       │ 6 Continents  [LOW-LATENCY]║',
        '╚══════════════════════════════════════════════════════╝',
        '',
        '💡 Peak performance across all regions'
      ]
    },
    {
      command: 'ls -la /jblinx/flagship-products --details',
      output: [
        'Scanning flagship product portfolio...',
        '',
        '/jblinx/flagship-products/',
        '├── 🎮 gaming-division/',
        '│   ├── mindmate-strategy/     # AI-Powered Gaming Platform',
        '│   ├── game-engine-core/     # Custom Unity Extensions',
        '│   └── multiplayer-sdk/      # Real-time Gaming Framework',
        '├── 💻 development-tools/',
        '│   ├── codefusion-studio/    # Professional Web IDE',
        '│   ├── api-forge/           # REST/GraphQL Generator',
        '│   └── deployment-wizard/    # One-click Cloud Deploy',
        '├── 🏥 health-technology/',
        '│   ├── vitalitysync-app/    # Comprehensive Wellness',
        '│   ├── medical-dashboard/    # Healthcare Analytics',
        '│   └── telemedicine-suite/   # Remote Care Platform',
        '├── 🏢 enterprise-solutions/',
        '│   ├── nestcore-platform/   # Property Management',
        '│   ├── business-automation/  # Workflow Optimization',
        '│   └── data-intelligence/    # Advanced Analytics',
        '└── 🛡️ security-services/',
        '    ├── secure-shield/       # Cybersecurity Suite',
        '    ├── auth-guardian/       # Identity Management',
        '    └── privacy-vault/       # Data Protection',
        '',
        '📈 Portfolio Value: $2.3M+ | Active Users: 18.5k+'
      ]
    },
    {
      command: 'jblinx performance --benchmark --real-time',
      output: [
        'Running comprehensive performance analysis...',
        '',
        '⚡ PERFORMANCE BENCHMARKS ⚡',
        '═══════════════════════════════════════',
        '',
        '🔥 Load Time Metrics:',
        '  └─ Average Response: 147ms (EXCELLENT)',
        '  └─ P95 Response: 289ms (OPTIMAL)',
        '  └─ Global CDN Hit Rate: 97.8%',
        '',
        '🎯 User Experience Scores:',
        '  └─ Lighthouse Performance: 98/100',
        '  └─ Core Web Vitals: ALL GREEN',
        '  └─ User Satisfaction: 4.9/5.0 ⭐',
        '',
        '🛡️ Security & Reliability:',
        '  └─ Uptime SLA: 99.97% (EXCEEDED)',
        '  └─ Security Score: A+ Rating',
        '  └─ Zero Critical Vulnerabilities',
        '',
        '🚀 Status: ENTERPRISE-READY | Scale: UNLIMITED'
      ]
    }
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const runCommand = async () => {
      if (currentCommandIndex >= commands.length) {
        setTimeout(() => {
          setCurrentCommandIndex(0);
          setDisplayText('');
        }, 4000);
        return;
      }

      const command = commands[currentCommandIndex];
      setIsTyping(true);
      
      // Type command with realistic speed
      const commandText = `[jblinx@enterprise-hub]$ ${command.command}`;
      for (let i = 0; i <= commandText.length; i++) {
        setDisplayText(commandText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 40));
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Add output progressively with realistic delays
      let fullOutput = commandText;
      for (let i = 0; i < command.output.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 150));
        fullOutput += '\n' + command.output[i];
        setDisplayText(fullOutput);
        
        // Auto-scroll to bottom
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }
      
      setIsTyping(false);
      
      timeoutId = setTimeout(() => {
        setCurrentCommandIndex(prev => prev + 1);
      }, 3000);
    };

    runCommand();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentCommandIndex]);

  // Enhanced cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900/95 border border-emerald-400/40 rounded-lg shadow-2xl shadow-emerald-500/20 overflow-hidden backdrop-blur-sm">
      {/* Enhanced Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/90 border-b border-slate-600">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            <Terminal className="w-4 h-4 text-emerald-400 ml-2" />
            <span className="text-slate-300 text-sm font-mono font-bold">JBLinx Enterprise Terminal</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-slate-400 text-xs">
            <Server className="w-3 h-3 text-emerald-400" />
            <span className="font-mono">enterprise-hub</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-500">
            <Signal className="w-3 h-3 text-green-400" />
            <Wifi className="w-3 h-3 text-green-400" />
            <Battery className="w-3 h-3 text-green-400" />
          </div>
        </div>
      </div>
      
      {/* Enhanced Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-4 bg-slate-900/95 h-96 overflow-auto relative scrollbar-thin scrollbar-thumb-emerald-500/50 scrollbar-track-slate-800"
      >
        <div className="text-emerald-400/70 text-xs mb-3 font-mono border-b border-slate-700/50 pb-2">
          🚀 JBLinx Studio Enterprise Operating System v3.2.1
          <span className="float-right text-slate-500">Secure Shell • Authenticated</span>
        </div>
        
        <div className="font-mono text-sm leading-relaxed">
          <pre className="text-emerald-400 whitespace-pre-wrap">
            {displayText}
          </pre>
          
          {/* Enhanced Cursor */}
          <div className="flex items-center mt-2">
            <span className="text-emerald-400 mr-2 font-bold">[jblinx@enterprise-hub]$</span>
            {(isTyping || showCursor) && (
              <div className="w-2 h-5 bg-emerald-400 animate-pulse"></div>
            )}
          </div>
        </div>
        
        {/* Enhanced Status indicators */}
        <div className="absolute bottom-3 right-4 flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-1 text-emerald-400/70 bg-slate-800/50 px-2 py-1 rounded">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="font-mono">LIVE</span>
          </div>
          <div className="flex items-center space-x-1 text-cyan-400/70 bg-slate-800/50 px-2 py-1 rounded">
            <Shield className="w-3 h-3" />
            <span className="font-mono">SECURE</span>
          </div>
          <div className="flex items-center space-x-1 text-purple-400/70 bg-slate-800/50 px-2 py-1 rounded">
            <Zap className="w-3 h-3" />
            <span className="font-mono">ENTERPRISE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTerminal;
