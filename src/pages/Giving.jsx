import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import MissionScreen from  '../components/MissionScreen';

const tabs = [
  { label: 'Title', color: 'green' },
  { label: 'Offering', color: 'primary.orange' },
  { label: 'Project', color: 'primary.dark' },
  { label: 'Gift', color: 'primary.gray' },
];

const dummyAccounts = {
  Title: [
    { name: 'Main Title', number: '1234567890', bank: 'GTBank' },
    { name: 'Pastor’s Support', number: '0987654321', bank: 'Access Bank' },
    { name: 'Title Support', number: '1122334455', bank: 'Zenith Bank' },
    { name: 'Branch Title', number: '6677889900', bank: 'UBA' },
    { name: 'Overflow', number: '7788990011', bank: 'Fidelity' },
  ],
  Offering: [
    { name: 'Main Offering', number: '2233445566', bank: 'Access Bank' },
    { name: 'Midweek Offering', number: '3344556677', bank: 'GTBank' },
    { name: 'Love Offering', number: '4455667788', bank: 'UBA' },
    { name: 'Seed Offering', number: '5566778899', bank: 'Zenith' },
    { name: 'Thanksgiving', number: '6677889900', bank: 'FCMB' },
  ],
  Project: [
    { name: 'Building Fund', number: '7788990011', bank: 'Sterling Bank' },
    { name: 'Sound Upgrade', number: '8899001122', bank: 'Access' },
    { name: 'Outreach Support', number: '9900112233', bank: 'UBA' },
    { name: 'Expansion', number: '1011121314', bank: 'GTBank' },
    { name: 'Special Project', number: '1112131415', bank: 'Zenith' },
  ],
  Gift: [
    { name: 'Pastor’s Gift', number: '1213141516', bank: 'UBA' },
    { name: 'Ministry Gift', number: '1314151617', bank: 'FCMB' },
    { name: 'Mission Gift', number: '1415161718', bank: 'GTBank' },
    { name: 'Children Ministry', number: '1516171819', bank: 'Access' },
    { name: 'Welfare', number: '1617181920', bank: 'Zenith' },
  ],
};

export default function Giving() {
  const [activeTab, setActiveTab] = useState('Title');

  const currentTabData = dummyAccounts[activeTab];

   const tabColors = {
    Title: 'green',
    Offering: 'primary-orange',
    Project: 'primary-dark',
    Gift: 'primary-gray',
  };

  const getColorClass = (base) => {
    switch (base) {
      case 'green':
        return {
          border: 'border-green-600',
          bg: 'bg-green-50',
          text: 'text-green-800',
        };
      case 'primary-orange':
        return {
          border: 'border-[#FC6000]',
          bg: 'bg-[#FFF2E7]',
          text: 'text-[#FC6000]',
        };
      case 'primary-dark':
        return {
          border: 'border-[#01222C]',
          bg: 'bg-[#E6F0F2]',
          text: 'text-[#01222C]',
        };
      case 'primary-gray':
        return {
          border: 'border-[#1A1A1A]',
          bg: 'bg-neutral-100',
          text: 'text-[#1A1A1A]',
        };
      default:
        return {
          border: 'border-gray-300',
          bg: 'bg-white',
          text: 'text-gray-800',
        };
    }
  };

  const colorKey = tabColors[activeTab];
  const colorClasses = getColorClass(colorKey);

  return (
    
    <div className="bg-white container-max section-padding">
         

    <div
    className="relative h-[400px] bg-center bg-cover flex flex-col items-center justify-center text-center"
    style={{ backgroundImage: "url('/gallery/bridge11.jpg')" }}
    >
    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-0"></div>
    <h1 className="relative z-10 text-4xl font-bold text-white pb-6">
    God’s generosity never runs dry
    </h1>
    <span className="relative z-10 text-white text-lg pb-10">
    Let’s be rivers, not reservoirs
    </span>
    </div>

       <div className="flex justify-center mt-10 mb-8 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === tab.label
                ? 'bg-primary-orange text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Grid */}
   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 px-4 sm:px-6 pb-20">
  {/* Left: Cards (1/5 of the grid) */}
  <div className="md:col-span-3 grid grid-cols-2 gap-4">
    {currentTabData.map((item, i) => (
      <div
        key={i}
        className={`border-l-4 rounded-md px-4 py-3 flex justify-between items-center shadow-sm ${colorClasses.border} ${colorClasses.bg} ${colorClasses.text}`}
      >
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm">{item.number} — {item.bank}</p>
        </div>
        <button
          onClick={() => navigator.clipboard.writeText(item.number)}
        >
          <Copy size={16} className="inline-block mr-1" />
        </button>
      </div>
    ))}
  </div>
 
        {/* Right: QR Code */}
        <div className="md:col-span-2 flex justify-center items-center">
          <img
            src="/gallery/barcode.jpg"
            alt="QR Code"
            className="w-full max-w-xs h-auto object-contain"
          />
        </div>
      </div>

      <MissionScreen />
    </div>
  );
}
