import { CiLink } from "react-icons/ci";

function Project({ title, description, technologies, link, github }) {
  // Check if this is the SalesBuddy CRM project
  const isSalesBuddy = title === "SalesBuddy CRM";
  
  // Check if this is the E-commerce Web Application project
  const isEcommerce = title === "The Glowry Studio (Womens Clothing WebApp)";
  
  // Check if this is the Healthcare project
  const isHealthcare = title === "HealthCare Pro - Online Doctor Consultation Platform";
  
  // Check if this is the Corporate Portfolio project
  const isPortfolio = title === "Research Connect LLC - Corporate Portfolio Website";
  
  // Function to format description with highlighted text
  const formatDescription = (text) => {
    if (!isSalesBuddy && !isEcommerce && !isHealthcare && !isPortfolio) return text;
    
    return text.split('\n').map((line, index) => {
      // Handle credentials section (SalesBuddy only)
      if (isSalesBuddy && (line.includes('🔑') || line.includes('Demo Access Credentials'))) {
        return (
          <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg my-3">
            <div className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              🔑 Demo Access Credentials
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">Email:</span>
                <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400">
                  tiwaririjul14@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">Password:</span>
                <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400">
                  Me6@ramnivas
                </span>
              </div>
            </div>
          </div>
        );
      }
      
      // Handle status section (E-commerce only)
      if (isEcommerce && (line.includes('🚀') && line.includes('Status:'))) {
        return (
          <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500 p-3 rounded-r-lg my-3">
            <div className="flex items-center gap-2 text-green-800 dark:text-green-300 font-medium text-sm">
              🚀 <span className="font-semibold">Status:</span>
              <span>Currently in development, soon to be deployed to production</span>
            </div>
          </div>
        );
      }
      
      // Handle status section (Healthcare only)
      if (isHealthcare && (line.includes('🚀') && line.includes('Status:'))) {
        return (
          <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-l-4 border-teal-500 p-3 rounded-r-lg my-3">
            <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-medium text-sm">
              🚀 <span className="font-semibold">Status:</span>
              <span>Production-ready healthcare platform with full appointment management system</span>
            </div>
          </div>
        );
      }
      
      // Handle status section (Portfolio only)
      if (isPortfolio && (line.includes('🚀') && line.includes('Status:'))) {
        return (
          <div key={index} className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-l-4 border-purple-500 p-3 rounded-r-lg my-3">
            <div className="flex items-center gap-2 text-purple-800 dark:text-purple-300 font-medium text-sm">
              🚀 <span className="font-semibold">Status:</span>
              <span>Live production website serving global corporate clients</span>
            </div>
          </div>
        );
      }
      
      // Handle important note (SalesBuddy only)
      if (isSalesBuddy && (line.includes('⚠️') || line.includes('Important:'))) {
        return (
          <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500 p-3 rounded-r-lg my-3">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-medium text-sm">
              ⚠️ <span>Important:</span>
              <span className="font-semibold">This application is optimized for desktop viewing only.</span>
            </div>
          </div>
        );
      }
      
      // Handle feature list
      if (line.includes('•') || line.includes('Key Features') || line.includes('Technical Implementation')) {
        return (
          <div key={index} className="my-2">
            {line.includes('Key Features') ? (
              <div className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                ✨ Key Features:
              </div>
            ) : line.includes('Technical Implementation') ? (
              <div className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                🔧 Technical Implementation:
              </div>
            ) : (
              <div className="ml-4 text-sm text-gray-700 dark:text-gray-300">
                {line.replace('•', '•')}
              </div>
            )}
          </div>
        );
      }
      
      // Handle main description with highlighted words
      if (line.includes('**')) {
        const parts = line.split(/(\*\*.*?\*\*)/);
        return (
          <div key={index} className="my-2">
            {parts.map((part, partIndex) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <span key={partIndex} className="font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1 rounded">
                    {part.slice(2, -2)}
                  </span>
                );
              }
              return part;
            })}
          </div>
        );
      }
      
      return <div key={index} className="my-1">{line}</div>;
    });
  };

  return (
    <div className={`hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-300 p-6 md:rounded-xl ${
      isSalesBuddy 
        ? 'border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10' 
        : isEcommerce 
        ? 'border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10'
        : isHealthcare
        ? 'border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 dark:from-teal-900/10 dark:to-cyan-900/10'
        : isPortfolio
        ? 'border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-900/10 dark:to-indigo-900/10'
        : ''
    }`}>
      <div className={`flex gap-2 overflow-x-scroll py-2 ${
        isSalesBuddy 
          ? 'salesbuddy-scrollbar' 
          : isEcommerce
          ? 'ecommerce-scrollbar'
          : isHealthcare
          ? 'healthcare-scrollbar'
          : isPortfolio
          ? 'portfolio-scrollbar'
          : 'default-scrollbar'
      }`}>
        {/* =========== TECHNOLOGIES USED =========== */}
        {technologies.split(",").map((tech, index) => (
          <span
            className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
              isSalesBuddy 
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500' 
                : isEcommerce
                ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-500'
                : isHealthcare
                ? 'bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500'
                : isPortfolio
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-800/30 dark:text-purple-500'
                : 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500'
            }`}
            key={index}
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* =========== PROJECT TITLE =========== */}
      <h3 className={`font-bold text-lg mt-4 ${
        isSalesBuddy 
          ? 'text-blue-700 dark:text-blue-300' 
          : isEcommerce
          ? 'text-green-700 dark:text-green-300'
          : isHealthcare
          ? 'text-teal-700 dark:text-teal-300'
          : isPortfolio
          ? 'text-purple-700 dark:text-purple-300'
          : 'text-zinc-700 dark:text-zinc-300'
      }`}>
        {isSalesBuddy && <span className="text-2xl mr-2">🚀</span>}
        {isEcommerce && <span className="text-2xl mr-2">🛒</span>}
        {isHealthcare && <span className="text-2xl mr-2">🏥</span>}
        {isPortfolio && <span className="text-2xl mr-2">🌐</span>}
        {title}
      </h3>
      
      {/* =========== PROJECT DESCRIPTION =========== */}
      <div className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
        {(isSalesBuddy || isEcommerce || isHealthcare || isPortfolio) ? formatDescription(description) : description}
      </div>

      <div className="flex gap-6 text-zinc-600 dark:text-zinc-300 font-medium">
        {/* =========== PROJECT LINK =========== */}
        <a
          href={link}
          className={`flex gap-2 mt-4 cursor-pointer transition-all duration-300 ${
            isSalesBuddy 
              ? 'hover:text-blue-800 hover:dark:text-blue-500' 
              : isEcommerce
              ? 'hover:text-green-800 hover:dark:text-green-500'
              : isHealthcare
              ? 'hover:text-teal-800 hover:dark:text-teal-500'
              : isPortfolio
              ? 'hover:text-purple-800 hover:dark:text-purple-500'
              : 'hover:text-red-800 hover:dark:text-red-500'
          }`}
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Project</span>
        </a>
        {/* =========== PROJECT GITHUB =========== */}
        <a
          href={github}
          className={`flex gap-2 mt-4 cursor-pointer transition-all duration-300 ${
            isSalesBuddy 
              ? 'hover:text-blue-800 hover:dark:text-blue-500' 
              : isEcommerce
              ? 'hover:text-green-800 hover:dark:text-green-500'
              : isHealthcare
              ? 'hover:text-teal-800 hover:dark:text-teal-500'
              : isPortfolio
              ? 'hover:text-purple-800 hover:dark:text-purple-500'
              : 'hover:text-red-800 hover:dark:text-red-500'
          }`}
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Github</span>
        </a>
      </div>
    </div>
  );
}

export default Project;
