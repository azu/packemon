import React, { useEffect, useState } from 'react';
import { Box } from 'ink';
import ProgressBar from 'ink-progress-bar';
import { Header } from '@boost/cli';
import Packemon from '../Packemon';

export interface BootPhaseProps {
  packemon: Packemon;
  onBooted: () => void;
}

export default function BootPhase({ packemon, onBooted }: BootPhaseProps) {
  const [progress, setProgress] = useState(0);

  // Monitor generation progress
  useEffect(() => {
    return packemon.onBootProgress.listen((current, total) => {
      setProgress(current / total);
    });
  }, [packemon]);

  // Find all packages and generate builds on mount
  useEffect(() => {
    void packemon.boot().then(() => {
      // Delay next phase to show progress bar
      setTimeout(() => {
        onBooted();
      }, 500);
    });
  }, [packemon, onBooted]);

  return (
    <Box flexDirection="column">
      <Header label="Bootstrapping packages and builds" />
      <ProgressBar percent={progress || 0.1} />
    </Box>
  );
}
