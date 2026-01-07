"use client";

import { useState } from "react";

interface ExpandableSectionProps {
  title: string;
  items: { name: string; url: string }[];
}

export function ExpandableSection({ title, items }: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <span className="transform transition-transform duration-200" style={{ display: 'inline-block', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          ▸
        </span>
        {title}
      </button>
      {isOpen && (
        <ul className="mt-2 ml-6 space-y-2">
          {items.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
