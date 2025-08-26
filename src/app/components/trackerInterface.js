import { useEffect } from 'react';
import { useRouter } from 'next/router';

const VisitorTracker = () => {
  const router = useRouter();

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await fetch('/api/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: router.asPath,
          }),
        });
      } catch (error) {
        // Fail silently - don't impact user experience
        console.warn('Visitor tracking failed:', error);
      }
    };

    // Track initial page load
    trackVisitor();

    // Track route changes
    const handleRouteChange = (url) => {
      fetch('/api/track-visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: url,
        }),
      }).catch(() => {}); // Fail silently
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return null; // This component doesn't render anything
};

export default VisitorTracker;
