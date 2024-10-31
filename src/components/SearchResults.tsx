import React from 'react';
import { ArrowLeft, ExternalLink, ThumbsUp, ThumbsDown, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResultsProps {
  query?: string;
}

export default function SearchResults({ query = "Who is Elon Musk?" }: SearchResultsProps) {
  const navigate = useNavigate();

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-b from-[#111111] to-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Query Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate('/')}
            className="text-[#0095FF] hover:text-[#0080FF] transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-white text-xl font-medium">{query}</h2>
        </div>

        {/* Answer Section */}
        <div className="bg-[#111111] rounded-xl p-6 mb-6 border border-gray-800">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed">
              Elon Musk is a prominent businessman and investor, widely recognized for his influential roles in several high-profile companies, including SpaceX and Tesla, Inc. He was born on June 28, 1971, in Pretoria, South Africa, and has since become one of the wealthiest individuals globally.
            </p>
            
            <h3 className="text-white text-lg font-medium mt-6 mb-3">Career Highlights</h3>
            
            <p className="text-gray-300 leading-relaxed">
              <strong>SpaceX:</strong> Founded in 2002, SpaceX aims to reduce space transportation costs to enable the colonization of Mars. Musk serves as CEO and lead designer, overseeing the development of rockets and spacecraft.
            </p>
            
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Tesla, Inc.:</strong> Musk joined Tesla in 2004 as chairman and became CEO in 2008. The company has revolutionized the electric vehicle industry and expanded into sustainable energy solutions.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <h4 className="text-white text-sm font-medium mb-3">Sources</h4>
            <div className="flex flex-wrap gap-2">
              <a 
                href="#"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#0095FF] bg-[#222222] px-3 py-1.5 rounded-full transition-colors"
              >
                <span>en.wikipedia.org</span>
                <ExternalLink size={14} />
              </a>
              <a 
                href="#"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#0095FF] bg-[#222222] px-3 py-1.5 rounded-full transition-colors"
              >
                <span>tesla.com</span>
                <ExternalLink size={14} />
              </a>
              <a 
                href="#"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#0095FF] bg-[#222222] px-3 py-1.5 rounded-full transition-colors"
              >
                <span>businessinsider.com</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-[#0095FF] p-2 rounded-lg transition-colors">
              <ThumbsUp size={20} />
            </button>
            <button className="text-gray-400 hover:text-[#0095FF] p-2 rounded-lg transition-colors">
              <ThumbsDown size={20} />
            </button>
          </div>
          <button className="text-gray-400 hover:text-[#0095FF] p-2 rounded-lg transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </main>
  );
}