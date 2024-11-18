import React from 'react';

const Button: React.FC = () => {
    return (
      <>
        <div className="bg-gray-100 p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-2">Hello, Tailwind!</h1>
          <p className="text-gray-700">This is a Tailwind CSS example.</p>
        </div>
      </>
    );
}

export default Button