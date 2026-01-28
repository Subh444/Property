
import React, { useState, useMemo } from 'react';
import { MOCK_PROPERTIES, Icons, PRINCIPLES } from './constants';
import { ListingType, Property } from './types';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import AIConsultant from './components/AIConsultant';
import PropertyInsights from './components/PropertyInsights';

function App() {
  const [listingType, setListingType] = useState<ListingType>(ListingType.BUY);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter(p => 
      p.type === listingType && 
      (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       p.location.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [listingType, searchQuery]);

  const selectedProperty = useMemo(() => {
    return MOCK_PROPERTIES.find(p => p.id === selectedPropertyId);
  }, [selectedPropertyId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1600" 
          alt="Dubai Skyline" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 max-w-5xl w-full px-4 text-center">
          <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-bounce">
            One-Stop Investment Solution
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg leading-tight">
            The One-Stop Solution for Your <br/>
            <span className="text-red-500">Investment in Dubai</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium">
            Changing living for good in the MENA region with data-led insights and future-first thinking.
          </p>
          
          <div className="bg-white p-3 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-3 max-w-4xl mx-auto">
            <div className="flex bg-gray-100 rounded-2xl p-1 md:w-56">
              <button 
                onClick={() => setListingType(ListingType.BUY)}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition duration-200 ${listingType === ListingType.BUY ? 'bg-white text-red-600 shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Buy for Investment
              </button>
              <button 
                onClick={() => setListingType(ListingType.RENT)}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition duration-200 ${listingType === ListingType.RENT ? 'bg-white text-red-600 shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Rent
              </button>
            </div>
            <div className="flex-1 flex items-center bg-gray-100 rounded-2xl px-5 py-3 md:py-0">
              <Icons.Search />
              <input 
                type="text" 
                placeholder="Search by area, yield or building..."
                className="bg-transparent border-none focus:ring-0 flex-1 ml-3 text-gray-800 placeholder-gray-400 font-semibold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-red-700 transition duration-300 flex items-center justify-center gap-2 shadow-xl shadow-red-200">
              <Icons.Search />
              Find Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-3">Our Way of Working</h2>
            <h3 className="text-4xl font-black text-gray-900">Property Finder Guiding Principles</h3>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">The core values that empower us to lead the MENA tech ecosystem and change living for good.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRINCIPLES.map((principle, index) => (
              <div key={index} className="group p-8 rounded-3xl border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300">
                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                  {principle.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {principle.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                  {listingType === ListingType.BUY ? 'High-Yield Investment Listings' : 'Featured Rentals'}
                </h2>
                <p className="text-gray-500 text-sm mt-1">Curated selection based on our principles of Impact and Future-first Thinking.</p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Sort:</span>
                <select className="bg-white border-2 border-gray-100 rounded-xl text-sm font-bold px-4 py-2 focus:outline-none focus:border-red-600">
                  <option>Best ROI</option>
                  <option>Price (Low to High)</option>
                  <option>New Projects</option>
                </select>
              </div>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map(property => (
                  <PropertyCard 
                    key={property.id} 
                    property={property} 
                    onViewDetails={(id) => setSelectedPropertyId(id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-16 text-center border-2 border-dashed border-gray-200">
                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                   <Icons.Search />
                </div>
                <h3 className="text-xl font-bold text-gray-900">No investment matching your criteria</h3>
                <p className="text-gray-500 mt-2 max-w-sm mx-auto">Try a broader search or ask our AI Consultant for future-first recommendations.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Detail Overlay */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-5xl h-[92vh] rounded-[40px] overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 shadow-2xl">
            <div className="flex-1 overflow-y-auto">
              <div className="relative h-[450px]">
                <img src={selectedProperty.imageUrl} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button 
                  onClick={() => setSelectedPropertyId(null)}
                  className="absolute top-8 right-8 bg-white/10 hover:bg-white/30 backdrop-blur-xl text-white p-3 rounded-full transition-all hover:rotate-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-8 left-8 text-white">
                   <span className="bg-red-600 text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded mb-2 inline-block">Impact Choice</span>
                   <h2 className="text-4xl font-black">{selectedProperty.title}</h2>
                   <p className="flex items-center gap-1 text-gray-200 mt-2"><Icons.Location /> {selectedProperty.location}</p>
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <div className="flex-1">
                    <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">Estimated Value</h3>
                    <div className="text-5xl font-black text-gray-900 tracking-tighter">
                      {selectedProperty.price.toLocaleString()} <span className="text-xl text-gray-400">{selectedProperty.currency}</span>
                    </div>
                  </div>
                  <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex flex-col items-center justify-center min-w-[150px]">
                    <span className="text-xs font-black text-red-600 uppercase tracking-widest mb-1">Expected ROI</span>
                    <span className="text-3xl font-black text-red-700">7.2%</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-12">
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col items-center">
                    <Icons.Bed />
                    <span className="text-lg font-black text-gray-900 mt-2">{selectedProperty.bedrooms > 0 ? selectedProperty.bedrooms : 'Studio'}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bedrooms</span>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col items-center">
                    <Icons.Bath />
                    <span className="text-lg font-black text-gray-900 mt-2">{selectedProperty.bathrooms}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bathrooms</span>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col items-center">
                    <Icons.Area />
                    <span className="text-lg font-black text-gray-900 mt-2">{selectedProperty.area}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sqft</span>
                  </div>
                </div>

                <div className="mb-12">
                   <PropertyInsights property={selectedProperty} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                       <span className="w-1.5 h-6 bg-red-600 rounded-full"></span>
                       Strategic Overview
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line font-medium">
                      {selectedProperty.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-6">Premium Amenities</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProperty.amenities.map(a => (
                        <span key={a} className="bg-gray-50 text-gray-700 px-6 py-3 rounded-2xl text-sm font-bold border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-white border-t border-gray-100 flex gap-6">
              <button className="flex-1 bg-white border-2 border-red-600 text-red-600 font-black py-5 rounded-3xl hover:bg-red-50 transition-all text-lg tracking-tight">
                Get Investment Pack
              </button>
              <button className="flex-1 bg-red-600 text-white font-black py-5 rounded-3xl hover:bg-red-700 transition-all shadow-2xl shadow-red-300 text-lg tracking-tight">
                Secure This Opportunity
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Floating Component */}
      <AIConsultant />

      <footer className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="flex flex-col items-center md:items-start gap-6 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-200">PF</div>
                <span className="text-2xl font-black text-gray-900 tracking-tighter">Property Finder Investment</span>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed text-center md:text-left">
                The leading property portal in MENA, dedicated to shaping an inclusive future. 
                We are your one-stop solution for Dubai investments, changing living for good.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
              <div>
                <h5 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-6">Explore</h5>
                <ul className="space-y-4 text-gray-500 font-bold text-sm">
                  <li><a href="#" className="hover:text-red-600 transition-colors">Buy Property</a></li>
                  <li><a href="#" className="hover:text-red-600 transition-colors">Rent Property</a></li>
                  <li><a href="#" className="hover:text-red-600 transition-colors">Find Agent</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-6">About Us</h5>
                <ul className="space-y-4 text-gray-500 font-bold text-sm">
                  <li><a href="#" className="hover:text-red-600 transition-colors">Our Principles</a></li>
                  <li><a href="#" className="hover:text-red-600 transition-colors">Tech Hub</a></li>
                  <li><a href="#" className="hover:text-red-600 transition-colors">Careers</a></li>
                </ul>
              </div>
              <div className="hidden md:block">
                <h5 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-6">Legal</h5>
                <ul className="space-y-4 text-gray-500 font-bold text-sm">
                  <li><a href="#" className="hover:text-red-600 transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-red-600 transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-red-600 transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-gray-100 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              © 2024 Property Finder. Changing living for good.
            </p>
            <div className="flex gap-4 items-center">
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Powered by</span>
              <span className="text-red-600 font-black tracking-tighter text-lg italic">Gemini AI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
