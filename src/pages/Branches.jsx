import React from 'react';
import MissionScreen from '../components/MissionScreen'

export default function Branches() {
  return (
     <div class="bg-white">
    <section className="container-max section-padding py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Branches</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 (Active/Highlighted) */}
            <div className="rounded-lg bg-orange-600 text-white p-5 shadow transition-all">
              <h3 className="text-lg font-semibold mb-2">Main Branch</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Airport Hotel Ikeja</li>
                <li>Sunday Services 9AM</li>
              </ul>
            </div>

            {/* Cards 2 to 4 */}
            {[
              {
                title: 'Mainland Annex',
                bullets: ['Yaba, Lagos', 'Wednesdays 6PM'],
              },
              {
                title: 'Island Fellowship',
                bullets: ['Lekki Phase 1', 'Fridays 7PM'],
              },
              {
                title: 'Campus Hub',
                bullets: ['UNILAG Chapel', 'Tuesdays 5PM'],
              },
            ].map((card, index) => (
              <div
                key={index}
                className="rounded-lg bg-white text-black p-5 shadow hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>{card.bullets[0]}</li>
                  <li>{card.bullets[1]}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Google Map */}
        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3264663172313!2d3.3467292000000004!3d6.6062932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922d922f6b59%3A0xe1ef546f9143bf71!2sLagos%20Airport%20Hotel%20Ikeja!5e0!3m2!1sen!2sng!4v1752230815403!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>

    <MissionScreen/>
     </div>
   );
}
