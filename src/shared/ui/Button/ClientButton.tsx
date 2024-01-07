'use client';

/* eslint-disable react/button-has-type */
import React from 'react';

export default function ClientButton(
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
): React.ReactNode {
  const { children } = props;
  return (
    <button
      {...props}
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-200 border-teal-400 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
    >
      {children}
    </button>
  );
}
