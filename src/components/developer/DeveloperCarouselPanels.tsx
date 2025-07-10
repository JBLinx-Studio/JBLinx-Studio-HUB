
import React from 'react';
import { Code, Terminal, Wrench, Package, GitBranch, Cpu, Database, Cloud } from 'lucide-react';
import SectionCarousel from '../common/SectionCarousel';

const DeveloperCarouselPanels = () => {
  const developerPanels = [
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      subtitle: 'Modern development stacks',
      icon: Package,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-blue-400">
            <div className="font-semibold text-blue-400">React Ecosystem</div>
            <div className="text-sm">Next.js, Gatsby, React Native</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-green-400">
            <div className="font-semibold text-green-400">Backend Frameworks</div>
            <div className="text-sm">Node.js, Express, Fastify</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-purple-400">
            <div className="font-semibold text-purple-400">UI Libraries</div>
            <div className="text-sm">Tailwind, shadcn/ui, Material-UI</div>
          </div>
        </div>
      )
    },
    {
      id: 'devops',
      title: 'DevOps & Deployment',
      subtitle: 'Infrastructure as code',
      icon: Cloud,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-cyan-400">
            <div className="font-semibold text-cyan-400">Docker & Kubernetes</div>
            <div className="text-sm">Containerization & orchestration</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-blue-400">
            <div className="font-semibold text-blue-400">CI/CD Pipelines</div>
            <div className="text-sm">GitHub Actions, Jenkins, GitLab</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-indigo-400">
            <div className="font-semibold text-indigo-400">Cloud Platforms</div>
            <div className="text-sm">AWS, Azure, Google Cloud</div>
          </div>
        </div>
      )
    },
    {
      id: 'databases',
      title: 'Database Solutions',
      subtitle: 'Data storage & management',
      icon: Database,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-green-400">
            <div className="font-semibold text-green-400">SQL Databases</div>
            <div className="text-sm">PostgreSQL, MySQL, SQLite</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-orange-400">
            <div className="font-semibold text-orange-400">NoSQL Solutions</div>
            <div className="text-sm">MongoDB, Redis, DynamoDB</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-purple-400">
            <div className="font-semibold text-purple-400">Graph Databases</div>
            <div className="text-sm">Neo4j, Amazon Neptune</div>
          </div>
        </div>
      )
    },
    {
      id: 'version-control',
      title: 'Version Control',
      subtitle: 'Code collaboration',
      icon: GitBranch,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-yellow-400">
            <div className="font-semibold text-yellow-400">Git Workflows</div>
            <div className="text-sm">Advanced branching strategies</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-orange-400">
            <div className="font-semibold text-orange-400">Code Review</div>
            <div className="text-sm">Pull requests & quality control</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-red-400">
            <div className="font-semibold text-red-400">Release Management</div>
            <div className="text-sm">Semantic versioning & changelogs</div>
          </div>
        </div>
      )
    },
    {
      id: 'apis',
      title: 'API Development',
      subtitle: 'Service architecture',
      icon: Terminal,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-blue-400">
            <div className="font-semibold text-blue-400">RESTful APIs</div>
            <div className="text-sm">Standard HTTP service design</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-purple-400">
            <div className="font-semibold text-purple-400">GraphQL</div>
            <div className="text-sm">Flexible query language</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-green-400">
            <div className="font-semibold text-green-400">Microservices</div>
            <div className="text-sm">Distributed system architecture</div>
          </div>
        </div>
      )
    },
    {
      id: 'testing',
      title: 'Testing & Quality',
      subtitle: 'Code reliability',
      icon: Wrench,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-cyan-400">
            <div className="font-semibold text-cyan-400">Unit Testing</div>
            <div className="text-sm">Jest, Vitest, Testing Library</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-blue-400">
            <div className="font-semibold text-blue-400">E2E Testing</div>
            <div className="text-sm">Playwright, Cypress automation</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-indigo-400">
            <div className="font-semibold text-indigo-400">Performance Testing</div>
            <div className="text-sm">Load testing & optimization</div>
          </div>
        </div>
      )
    }
  ];

  return <SectionCarousel panels={developerPanels} className="mt-6" />;
};

export default DeveloperCarouselPanels;
