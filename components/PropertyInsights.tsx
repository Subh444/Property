
import React, { useEffect, useState } from 'react';
import { getPropertyInsights } from '../services/geminiService';
import { Property } from '../types';

interface PropertyInsightsProps {
  property: Property;
}

const PropertyInsights: React.FC<PropertyInsightsProps> = ({ property }) => {
  const [insights, setInsights] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInsights = async () => {
      setLoading(true);
      const res = await getPropertyInsights(property.location);
      setInsights(res);
      setLoading(false);
    };
    fetchInsights();
  }, [property]);

  if (loading) return (
    <div className="bg-red-50 p-6 rounded-xl border border-red-100 animate-pulse">
      <div className="h-4 bg-red-200 rounded w-1/4 mb-4"></div>
      <div className="h-10 bg-red-200 rounded w-full mb-2"></div>
      <div className="h-10 bg-red-200 rounded w-full"></div>
    </div>
  );

  if (!insights) return null;

  return (
    <div className="bg-red-50 p-6 rounded-xl border border-red-100 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">AI Insight</span>
        <h4 className="text-red-900 font-bold uppercase text-xs tracking-widest">Market Analysis</h4>
        <div className="ml-auto flex items-center gap-1">
          <span className="text-red-900 font-bold text-lg">{insights.investmentRating}</span>
          <span className="text-red-700 text-xs font-medium">/ 10 Rating</span>
        </div>
      </div>
      <p className="text-gray-800 text-sm mb-6 leading-relaxed">
        {insights.summary}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h5 className="text-red-800 font-bold text-xs uppercase mb-3 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Pros
          </h5>
          <ul className="space-y-2">
            {insights.pros.map((p: string, i: number) => (
              <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-red-800 font-bold text-xs uppercase mb-3 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Considerations
          </h5>
          <ul className="space-y-2">
            {insights.cons.map((c: string, i: number) => (
              <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                <svg className="h-4 w-4 text-red-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyInsights;
