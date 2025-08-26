import Link from "next/link";
import { useEffect } from 'react';

useEffect(() => {
  const trackVisitor = async () => {
    try {
      await fetch('/api/tracker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
    }
  };

  trackVisitor();
}, []);


export default function Home() {
  return (
    <div className="block">
      <h1 className="otp fade-in">OTP System</h1>
      <nav>
        <ul>
          <div className="links fade-in">
          <li>
            <Link href="/generator"><span className="front">OTP Generator</span></Link>
          </li>
          </div>
          <div className="links fade-in">
          <li>
            <Link href="/receiver"><span className="front">OTP Receiver</span></Link>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
