
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Wifi, Signal, Battery, Server, Code, Database, Cloud, Zap, Shield, Cpu, Globe, Activity, CheckCircle, TrendingUp, Users, Star, Rocket } from 'lucide-react';

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
      command: 'jblinx --system-overview --enterprise-status',
      output: [
        '🚀 JBLinx Studio Enterprise Platform v4.2.1 - Professional Edition',
        '═══════════════════════════════════════════════════════════════════',
        '',
        '┌─ ENTERPRISE INFRASTRUCTURE STATUS ─────────────────────────────────┐',
        '│ 🌟 Global Operations Center   [OPERATIONAL] ⚡ 99.97% uptime       │',
        '│ 💼 Enterprise Client Portal   [OPERATIONAL] 🏢 200+ corporations   │', 
        '│ 🧠 AI Development Engine      [OPERATIONAL] 🤖 GPT-4 Integration   │',
        '│ 🔒 Security Operations Center [OPERATIONAL] 🛡️ Zero breaches       │',
        '│ ☁️ Multi-Cloud Infrastructure [OPERATIONAL] 🌍 6 global regions    │',
        '│ 📊 Real-time Analytics Hub    [OPERATIONAL] 📈 Live monitoring     │',
        '│ 🚀 DevOps Automation Pipeline [OPERATIONAL] 🔄 24/7 deployments   │',
        '│ 💎 Premium Support Services   [OPERATIONAL] 👥 Enterprise SLA      │',
        '└─────────────────────────────────────────────────────────────────────┘',
        '',
        '✨ All enterprise systems: OPTIMAL | Security: MAXIMUM | Performance: EXCELLENT'
      ]
    },
    {
      command: 'jblinx portfolio --showcase --live-metrics --detailed',
      output: [
        'Scanning flagship product portfolio and live metrics...',
        '',
        '╔══════════════════════════════════════════════════════════════════╗',
        '║               🌍 JBLINX STUDIO PRODUCT ECOSYSTEM                ║',
        '╠══════════════════════════════════════════════════════════════════╣',
        '║ 🎯 CodeFusion Studio      │ Web IDE Platform    │ 12.5k users  ║',
        '║ ❤️ VitalitySync Health    │ Wellness Platform   │ 8.9k users   ║',
        '║ 🧠 MindMate AI Gaming     │ AI Gaming Engine    │ 15.2k users  ║',
        '║ 🏢 NestCore Enterprise    │ Property Management │ 6.1k clients ║',
        '║ ☁️ CloudSync Platform     │ Multi-Cloud SaaS    │ 22.3k users  ║',
        '║ 🛡️ SecureShield Suite     │ Cybersecurity      │ 4.7k orgs    ║',
        '║ 📊 DataFlow Analytics     │ Business Intel     │ 9.8k analysts║',
        '║ 📱 MobileCore SDK         │ Cross-Platform     │ 13.6k devs   ║',
        '║ 🎮 GameEngine Pro         │ Unity Extensions   │ 11.2k studios║',
        '║ 🤖 AIAssist Automation    │ ML Workflows       │ 7.3k teams   ║',
        '║ 🌐 WebPortal Enterprise   │ Business Portal    │ 16.8k corps  ║',
        '║ ⚙️ DevOps Hub Pro         │ CI/CD Pipeline     │ 5.4k teams   ║',
        '╚══════════════════════════════════════════════════════════════════╝',
        '',
        '📈 Total Active Users: 180.5k+ | Revenue: $2.3M+ | Growth: 380% YoY'
      ]
    },
    {
      command: 'jblinx performance --real-time --benchmarks --enterprise',
      output: [
        'Running comprehensive enterprise performance analysis...',
        '',
        '⚡ ENTERPRISE PERFORMANCE DASHBOARD ⚡',
        '═══════════════════════════════════════════════════════',
        '',
        '🔥 Infrastructure Metrics:',
        '  ├─ Global Response Time: 147ms avg (EXCELLENT)',
        '  ├─ P99 Response Time: 289ms (OUTSTANDING)',
        '  ├─ CDN Hit Rate: 97.8% (OPTIMAL)',
        '  ├─ Database Query Time: 23ms avg (BLAZING)',
        '  └─ API Throughput: 50k req/sec (HIGH-CAPACITY)',
        '',
        '🎯 Business Performance:',
        '  ├─ Client Satisfaction: 99.7% (EXCEPTIONAL)',
        '  ├─ User Retention Rate: 96.2% (INDUSTRY-LEADING)',
        '  ├─ Revenue Growth: 380% YoY (EXPLOSIVE)',
        '  ├─ Market Penetration: Top 3 in 4 sectors (DOMINANT)',
        '  └─ Innovation Index: 98/100 (CUTTING-EDGE)',
        '',
        '🛡️ Security & Reliability:',
        '  ├─ Uptime SLA: 99.97% (EXCEEDED)',
        '  ├─ Security Rating: A+ (MAXIMUM)',
        '  ├─ Vulnerability Score: 0 critical (PERFECT)',
        '  ├─ Compliance: SOC2, GDPR, HIPAA (CERTIFIED)',
        '  └─ Incident Response: < 5min (RAPID)',
        '',
        '🚀 Status: ENTERPRISE-READY | Scale: UNLIMITED | Future: AI-POWERED'
      ]
    },
    {
      command: 'jblinx deployment --status --automation --ci-cd',
      output: [
        'Fetching deployment automation and CI/CD pipeline status...',
        '',
        '🔄 CONTINUOUS DEPLOYMENT PIPELINE STATUS',
        '═════════════════════════════════════════════════════════',
        '',
        '📦 Active Deployments Pipeline:',
        '  ├─ Production Environments: 47 active',
        '  ├─ Staging Environments: 24 active',
        '  ├─ Development Branches: 156 active',
        '  ├─ Feature Deployments: 89 in progress',
        '  └─ Rollback Capability: 100% tested',
        '',
        '🤖 Automation Metrics:',
        '  ├─ Build Success Rate: 99.4%',
        '  ├─ Test Coverage: 97.8%',
        '  ├─ Deploy Frequency: 24/7 continuous',
        '  ├─ Lead Time: 12 minutes avg',
        '  └─ MTTR: 3.2 minutes',
        '',
        '🌍 Global Infrastructure:',
        '  ├─ AWS Multi-Region: us-east, eu-west, ap-south',
        '  ├─ Azure Cloud Services: North America, Europe',
        '  ├─ Google Cloud Platform: Global CDN',
        '  ├─ Edge Computing: 47 locations worldwide',
        '  └─ Load Balancing: Auto-scaling enabled',
        '',
        '✅ All systems automated | Zero-downtime deployments | Self-healing infrastructure'
      ]
    },
    {
      command: 'jblinx client-success --testimonials --case-studies --roi',
      output: [
        'Loading client success stories and ROI analytics...',
        '',
        '🏆 CLIENT SUCCESS & TESTIMONIALS DASHBOARD',
        '═══════════════════════════════════════════════════════════',
        '',
        '💼 Enterprise Client Highlights:',
        '  ├─ Fortune 500 Companies: 23 active clients',
        '  ├─ Healthcare Organizations: 45 implementations',
        '  ├─ Financial Institutions: 12 secure deployments',
        '  ├─ Gaming Studios: 78 successful launches',
        '  └─ Government Agencies: 15 compliant systems',
        '',
        '📊 Measurable Business Impact:',
        '  ├─ Average ROI: 340% within 12 months',
        '  ├─ Productivity Increase: 67% average',
        '  ├─ Cost Reduction: 45% operational savings',
        '  ├─ Time to Market: 60% faster delivery',
        '  └─ User Engagement: 89% increase',
        '',
        '🌟 Client Satisfaction Metrics:',
        '  ├─ Overall Rating: 4.94/5.0 stars',
        '  ├─ Renewal Rate: 97.8%',
        '  ├─ Referral Rate: 82.4%',
        '  ├─ Support Response: < 30 seconds',
        '  └─ Issue Resolution: 94% same-day',
        '',
        '💡 Innovation Recognition: 12 industry awards | 3 patent applications | 2 tech breakthrough recognitions'
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
        }, 5000);
        return;
      }

      const command = commands[currentCommandIndex];
      setIsTyping(true);
      
      // Type command with realistic developer speed
      const commandText = `[admin@jblinx-enterprise]$ ${command.command}`;
      for (let i = 0; i <= commandText.length; i++) {
        setDisplayText(commandText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 35));
      }
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Add output progressively with realistic processing delays
      let fullOutput = commandText;
      for (let i = 0; i < command.output.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 120));
        fullOutput += '\n' + command.output[i];
        setDisplayText(fullOutput);
        
        // Auto-scroll to bottom smoothly
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }
      
      setIsTyping(false);
      
      timeoutId = setTimeout(() => {
        setCurrentCommandIndex(prev => prev + 1);
      }, 4000);
    };

    runCommand();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentCommandIndex]);

  // Enhanced cursor animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900/98 border border-emerald-400/50 shadow-2xl shadow-emerald-500/25 overflow-hidden backdrop-blur-lg hover:shadow-emerald-400/30 transition-all duration-500">
      {/* Premium Terminal Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-slate-800/95 border-b border-slate-600/60 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3.5 h-3.5 bg-red-500 hover:bg-red-400 transition-colors cursor-pointer shadow-lg"></div>
              <div className="w-3.5 h-3.5 bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer shadow-lg"></div>
              <div className="w-3.5 h-3.5 bg-green-500 hover:bg-green-400 transition-colors cursor-pointer shadow-lg"></div>
            </div>
            <Terminal className="w-5 h-5 text-emerald-400 ml-3 animate-pulse" />
            <span className="text-slate-300 text-base font-mono font-bold tracking-wide">JBLinx Enterprise Command Center</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-slate-400 text-sm bg-slate-700/50 px-3 py-1.5 border border-slate-600/30">
            <Server className="w-4 h-4 text-emerald-400" />
            <span className="font-mono font-bold">enterprise-hub-01</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-500">
            <Signal className="w-4 h-4 text-green-400 animate-pulse" />
            <Wifi className="w-4 h-4 text-green-400" />
            <Battery className="w-4 h-4 text-green-400" />
          </div>
        </div>
      </div>
      
      {/* Enhanced Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-5 bg-slate-900/98 h-96 overflow-auto relative scrollbar-thin scrollbar-thumb-emerald-500/60 scrollbar-track-slate-800/50"
      >
        <div className="text-emerald-400/80 text-sm mb-4 font-mono border-b border-slate-700/60 pb-3 flex items-center justify-between">
          <div>
            🚀 JBLinx Studio Enterprise Operating System v4.2.1
            <div className="text-slate-500 text-xs mt-1">Secure Shell • Authenticated • Enterprise Mode</div>
          </div>
          <div className="text-slate-500 text-xs">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span>Connected</span>
            </div>
          </div>
        </div>
        
        <div className="font-mono text-sm leading-relaxed">
          <pre className="text-emerald-400 whitespace-pre-wrap font-medium">
            {displayText}
          </pre>
          
          {/* Enhanced Interactive Cursor */}
          <div className="flex items-center mt-3">
            <span className="text-emerald-400 mr-3 font-bold text-base">[admin@jblinx-enterprise]$</span>
            {(isTyping || showCursor) && (
              <div className="w-3 h-6 bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
            )}
          </div>
        </div>
        
        {/* Enhanced Premium Status Indicators */}
        <div className="absolute bottom-4 right-5 flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-2 text-emerald-400/80 bg-slate-800/70 px-3 py-2 border border-emerald-400/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
            <span className="font-mono font-bold">LIVE</span>
          </div>
          <div className="flex items-center space-x-2 text-cyan-400/80 bg-slate-800/70 px-3 py-2 border border-cyan-400/30 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span className="font-mono font-bold">SECURE</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-400/80 bg-slate-800/70 px-3 py-2 border border-purple-400/30 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span className="font-mono font-bold">ENTERPRISE</span>
          </div>
          <div className="flex items-center space-x-2 text-orange-400/80 bg-slate-800/70 px-3 py-2 border border-orange-400/30 backdrop-blur-sm">
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="font-mono font-bold">ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTerminal;
