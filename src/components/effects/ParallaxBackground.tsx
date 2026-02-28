import React from 'react';

const ParallaxBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-orange-500/12 to-amber-500/8 blur-3xl" />
        <div className="absolute -bottom-48 -right-40 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-emerald-500/12 to-teal-500/8 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-amber-400/10 to-orange-400/6 blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(251,146,60,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.2) 1px, transparent 1px)',
            backgroundSize: '110px 110px'
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxBackground;

