
const Logo = () => {
  const handleImageClick = () => {
    console.log('http://localhost:3000/');
  };
  return (
    <div onClick={handleImageClick} className="logo">
      <svg
        width="154"
        height="154"
        viewBox="0 0 154 154"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="154" height="154" rx="10" fill="#FF9600" />
        <path
          d="M34.6875 41.2727H59.2614L76.1648 82.4659H77.017L93.9205 41.2727H118.494V114H99.1761V71.9545H98.608L82.4148 113.432H70.767L54.5739 71.6705H54.0057V114H34.6875V41.2727Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Logo;
