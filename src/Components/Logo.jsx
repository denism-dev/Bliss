import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* SVG-based Twisted "T & B" Logo */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-500 hover:scale-110"
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E50ED" />
            <stop offset="100%" stopColor="#1A39C2" />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#76E3B1" />
            <stop offset="100%" stopColor="#4CAF91" />
          </linearGradient>
        </defs>

        {/* Left Curved Shape (T - Green) */}
        <path
          d="M20 20 Q10 20 10 40 V60 H30 V20 Z"
          fill="url(#greenGradient)"
          // className="transition-all duration-500 ease-out hover:rotate-[-10deg]"
        />
        
        {/* Right Curved "B" Shape (Blue) */}
        <path
          d="M40 20 H70 Q85 20 85 40 Q85 50 70 50 Q85 50 85 70 Q85 85 70 85 H40 V20 Z"
          fill="url(#blueGradient)"
          // className="transition-all duration-500 ease-out hover:rotate-[10deg]"
        />
      </svg>

      {/* Logo Text */}
      <Link
        to="/"
        className="text-3xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-blue-800 to-blue-500 dark:from-blue-400 dark:to-blue-200 text-transparent bg-clip-text hover:scale-110 transition-all duration-500"
      >
        Tekobliss
      </Link>
    </div>
  );
};

export default Logo;
