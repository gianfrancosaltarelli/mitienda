import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

function Button({ children, onClick, type = 'primary', href = '/' }) {
  const baseClass =
    'inline-block px-4 py-2 font-semibold rounded cursor-pointer text-center transition duration-200 ease-in-out';

  const variantes = {
    primary: 'text-white bg-violet-500',
    error: 'bg-red-500',
    ghost: 'bg-transparent border border-violet-500 hover:border-violet-400',
    icon: 'p-4 bg-transparent rounded-full border border-violet-500 hover:border-violet-400 hover:bg-violet-500',
    link: 'bg-violet-500 text-white hover:bg-violet-700',
  };

  const className = twMerge(baseClass, variantes[type]);

  if (type === 'link') {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
