import { useEffect } from 'react';

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const response = await fetch('/api/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('Visitor tracked:', data.message);
        }
      } catch (error) {
        console.log('Tracking failed:', error);
      }
    };

    trackVisitor();
  }, []);

  return null;
};

export default VisitorTracker;
