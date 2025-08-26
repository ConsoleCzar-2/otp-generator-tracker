"use client";

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await fetch('/api/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.log('Tracking failed:', error);
      }
    };

    trackVisitor();
  }, []);

  return null;
}
