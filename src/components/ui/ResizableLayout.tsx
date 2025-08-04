
import React, { useState, useCallback } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './resizable';
import { cn } from '@/lib/utils';

interface ResizableLayoutProps {
  children?: React.ReactNode;
  leftPanel?: React.ReactNode;
  rightPanel?: React.ReactNode;
  topPanel?: React.ReactNode;
  bottomPanel?: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  defaultSizes?: number[];
  minSizes?: number[];
  maxSizes?: number[];
}

const ResizableLayout: React.FC<ResizableLayoutProps> = ({
  children,
  leftPanel,
  rightPanel,
  topPanel,
  bottomPanel,
  orientation = 'horizontal',
  className,
  defaultSizes = [25, 50, 25],
  minSizes = [15, 30, 15],
  maxSizes = [40, 70, 40]
}) => {
  const [panelSizes, setPanelSizes] = useState<number[]>(defaultSizes);

  const handleResize = useCallback((sizes: number[]) => {
    setPanelSizes(sizes);
  }, []);

  if (orientation === 'vertical') {
    return (
      <div className={cn('professional-resizable-layout w-full h-full', className)}>
        <ResizablePanelGroup
          direction="vertical"
          onLayout={handleResize}
          className="professional-resizable-group h-full"
        >
          {topPanel && (
            <>
              <ResizablePanel
                defaultSize={defaultSizes[0]}
                minSize={minSizes[0]}
                maxSize={maxSizes[0]}
                className="professional-resizable-panel"
              >
                <div className="h-full w-full professional-panel-content professional-backdrop">
                  {topPanel}
                </div>
              </ResizablePanel>
              <ResizableHandle 
                withHandle 
                className="professional-resize-handle bg-slate-700/50 hover:bg-purple-500/30 transition-colors duration-300"
              />
            </>
          )}
          
          <ResizablePanel
            defaultSize={topPanel && bottomPanel ? defaultSizes[1] : (topPanel || bottomPanel ? defaultSizes[1] + defaultSizes[2] : 100)}
            minSize={minSizes[1]}
            className="professional-resizable-panel-main"
          >
            <div className="h-full w-full professional-main-content">
              {children}
            </div>
          </ResizablePanel>
          
          {bottomPanel && (
            <>
              <ResizableHandle 
                withHandle 
                className="professional-resize-handle bg-slate-700/50 hover:bg-purple-500/30 transition-colors duration-300"
              />
              <ResizablePanel
                defaultSize={defaultSizes[2]}
                minSize={minSizes[2]}
                maxSize={maxSizes[2]}
                className="professional-resizable-panel"
              >
                <div className="h-full w-full professional-panel-content professional-backdrop">
                  {bottomPanel}
                </div>
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    );
  }

  return (
    <div className={cn('professional-resizable-layout w-full h-full', className)}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={handleResize}
        className="professional-resizable-group h-full"
      >
        {leftPanel && (
          <>
            <ResizablePanel
              defaultSize={defaultSizes[0]}
              minSize={minSizes[0]}
              maxSize={maxSizes[0]}
              className="professional-resizable-panel"
            >
              <div className="h-full w-full professional-panel-content professional-backdrop">
                {leftPanel}
              </div>
            </ResizablePanel>
            <ResizableHandle 
              withHandle 
              className="professional-resize-handle bg-slate-700/50 hover:bg-purple-500/30 transition-colors duration-300"
            />
          </>
        )}
        
        <ResizablePanel
          defaultSize={leftPanel && rightPanel ? defaultSizes[1] : (leftPanel || rightPanel ? defaultSizes[1] + defaultSizes[2] : 100)}
          minSize={minSizes[1]}
          className="professional-resizable-panel-main"
        >
          <div className="h-full w-full professional-main-content">
            {children}
          </div>
        </ResizablePanel>
        
        {rightPanel && (
          <>
            <ResizableHandle 
              withHandle 
              className="professional-resize-handle bg-slate-700/50 hover:bg-purple-500/30 transition-colors duration-300"
            />
            <ResizablePanel
              defaultSize={defaultSizes[2]}
              minSize={minSizes[2]}
              maxSize={maxSizes[2]}
              className="professional-resizable-panel"
            >
              <div className="h-full w-full professional-panel-content professional-backdrop">
                {rightPanel}
              </div>
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </div>
  );
};

export default ResizableLayout;
