import React from 'react';
import '../Home.css'; // Ensure this path is correct

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="sunhill-loading">
        {'S'.split('').map((char, index) => (
          <span key={index} className="letter letter-s" style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
          </span>
        ))}
        {'u'.split('').map((char, index) => (
          <span key={index} className="letter letter-u" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
            {char}
          </span>
        ))}
        {'n'.split('').map((char, index) => (
          <span key={index} className="letter letter-n" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
            {char}
          </span>
        ))}
        {'h'.split('').map((char, index) => (
          <span key={index} className="letter letter-h" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
            {char}
          </span>
        ))}
        {'i'.split('').map((char, index) => (
          <span key={index} className="letter letter-i" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
            {char}
          </span>
        ))}
        {'l'.split('').map((char, index) => (
          <span key={index} className="letter letter-l1" style={{ animationDelay: `${(index + 5) * 0.1}s` }}>
            {char}
          </span>
        ))}
        {'l'.split('').map((char, index) => (
          <span key={index} className="letter letter-l2" style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
