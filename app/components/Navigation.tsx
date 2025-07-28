"use client";

import { navItems } from "@/data/portfolio";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({
  activeSection,
  setActiveSection,
}: NavigationProps) {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="flex justify-center items-center py-4">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
