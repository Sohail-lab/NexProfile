import React from 'react'

interface ATSProps {
  score: number;
  suggestions: {
    type: "good" | "improve";
    tip: string;
  }[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  // Determine background gradient based on score
  let gradientClass = '';
  let iconSrc = '';
  let statusText = '';

  if (score > 69) {
    gradientClass = 'from-green-100';
    iconSrc = '/icons/ats-good.svg';
    statusText = 'Good';
  } else if (score > 49) {
    gradientClass = 'from-yellow-100';
    iconSrc = '/icons/ats-warning.svg';
    statusText = 'Acceptable';
  } else {
    gradientClass = 'from-red-100';
    iconSrc = '/icons/ats-bad.svg';
    statusText = 'Needs Improvement';
  }

  return (
    <div className={`rounded-lg p-6 bg-gradient-to-b ${gradientClass} to-white shadow-md`}>
      {/* Top section with icon and headline */}
      <div className="flex items-center mb-4">
        <img src={iconSrc} alt="ATS Score Icon" className="w-10 h-10 mr-3" />
        <h2 className="text-xl font-bold">ATS score - {score}/100</h2>
      </div>

      {/* Description section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Applicant Tracking System Analysis</h3>
        <p className="text-gray-600 mb-4">
          This score represents how well your resume is optimized for Applicant Tracking Systems.
          A higher score means better chances of getting past automated resume screening.
        </p>

        {/* Suggestions list */}
        <ul className="space-y-3 mb-4">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start">
              <img
                src={suggestion.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
                alt={suggestion.type === "good" ? "Check" : "Warning"}
                className="w-5 h-5 mt-0.5 mr-2"
              />
              <span>{suggestion.tip}</span>
            </li>
          ))}
        </ul>

        {/* Closing line */}
        <p className="text-sm font-medium text-gray-700 mt-4">
          Continue improving your resume to increase your chances of getting interviews.
        </p>
      </div>
    </div>
  );
};

export default ATS;
