import Link from "next/link";
import VisitorTracker from './components/VisitorTracker'; 

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

