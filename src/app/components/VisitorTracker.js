"use client";

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await fetch('/api/tracker', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ timestamp: new Date().toISOString() })
        });
      } catch (error) {
        console.log('Tracking failed:', error);
      }
    };

    trackVisitor();
  }, []);

  return null;
}