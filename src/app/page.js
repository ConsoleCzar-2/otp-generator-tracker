import Link from "next/link";
import VisitorTracker from '../components/VisitorTracker';

export default function Home() {
  return (
    <>
      <VisitorTracker />
      {
        <div>
          <h1>OTP Generator</h1>
          <p>Generate secure OTP codes</p>
        </div>
      }
      <div>
        {
          <ul>
            <li>
              <Link href="/generator">OTP Generator</Link>
            </li>
            <li>
              <Link href="/receiver">OTP Receiver</Link>
            </li>
          </ul>
        }
      </div>
    </>
  );
}


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
