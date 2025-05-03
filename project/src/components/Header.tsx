import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setSearchQuery(value);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold text-amber-800 flex items-center">
            <span className="mr-2">Thousif's Recipe Book </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-slate-800 hover:text-amber-700 transition-colors">
              Home
            </Link>
            <Link to="/recipes" className="font-medium text-slate-800 hover:text-amber-700 transition-colors">
              Recipes
            </Link>
            <Link to="/favorites" className="font-medium text-slate-800 hover:text-amber-700 transition-colors">
              Favorites
            </Link>
            <Link to="/add-recipe" className="font-medium text-slate-800 hover:text-amber-700 transition-colors">
              Add Recipe
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="pl-10 pr-4 py-2 w-56 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-800 focus:outline-none"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-slate-800 hover:text-amber-700 transition-colors">
                Home
              </Link>
              <Link to="/recipes" className="font-medium text-slate-800 hover:text-amber-700 transition-colors">
                Recipes
              </Link>
              <Link to="/favorites" className="font-medium text-slate-800 hover:text-amber-700 transition-colors">
                Favorites
              </Link>
              <Link to="/add-recipe" className="font-medium text-slate-800 hover:text-amber-700 transition-colors">
                Add Recipe
              </Link>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;