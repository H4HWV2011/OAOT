"use client";

import React from "react";

export default function OAOTHomePage() {
  return (
    <>
      {/* Custom CSS Styles */}
      <style jsx global>{`
        /* Dark theme for eye strain relief with kid-friendly colors */
        body {
          font-family: 'Comic Sans MS', system-ui, -apple-system, sans-serif;
          margin: 0;
          background-color: #0f172a;
          color: #e2e8f0;
        }
        
        .hero {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e1b4b 100%);
          color: #e2e8f0;
          padding: 4rem 0;
          position: relative;
        }
        
        .hero::before {
          content: '🌟 ⭐ 🌙 ✨ 🦉 🏔️ 🎨 🥾';
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          text-align: center;
          font-size: 2rem;
          opacity: 0.3;
          animation: twinkle 4s infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .card {
          background: #334155;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          margin-bottom: 1rem;
          border: 2px solid #475569;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.4);
          border-color: #64748b;
        }
        
        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-weight: bold;
          text-decoration: none;
          cursor: pointer;
          border: none;
          font-family: 'Comic Sans MS', sans-serif;
          transition: all 0.3s ease;
        }
        
        .btn-primary {
          background: linear-gradient(45deg, #3b82f6, #1d4ed8);
          color: white;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
        }
        
        .btn-secondary {
          background: linear-gradient(45deg, #f59e0b, #d97706);
          color: white;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
        }
        
        .btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
        }
        
        .btn-fun {
          background: linear-gradient(45deg, #10b981, #059669);
          color: white;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }
        
        .btn-fun:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.6);
        }
        
        .nav {
          background: #1e293b;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 3px solid #475569;
        }
        
        .logo-circle {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(45deg, #8b5cf6, #7c3aed);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
          animation: glow 2s infinite alternate;
        }
        
        @keyframes glow {
          from { box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4); }
          to { box-shadow: 0 6px 20px rgba(139, 92, 246, 0.7); }
        }
        
        .image-placeholder {
          width: 100%;
          height: 200px;
          background: linear-gradient(45deg, #374151, #4b5563);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          border: 3px dashed #6b7280;
          color: #d1d5db;
          font-weight: bold;
          font-family: 'Comic Sans MS', sans-serif;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .image-placeholder:hover {
          border-color: #9ca3af;
          background: linear-gradient(45deg, #4b5563, #6b7280);
        }
        
        .team-photo {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #374151, #4b5563);
          border-radius: 50%;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px dashed #6b7280;
          color: #d1d5db;
          font-size: 0.875rem;
          text-align: center;
          font-family: 'Comic Sans MS', sans-serif;
          transition: all 0.3s ease;
        }
        
        .team-photo:hover {
          border-color: #9ca3af;
          background: linear-gradient(45deg, #4b5563, #6b7280);
          transform: scale(1.05);
        }
        
        .fun-icon {
          width: 4rem;
          height: 4rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          font-size: 2rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }
        
        .fun-icon:hover {
          transform: rotate(10deg) scale(1.1);
        }
        
        .fun-icon.red { background: linear-gradient(45deg, #ef4444, #dc2626); }
        .fun-icon.green { background: linear-gradient(45deg, #10b981, #059669); }
        .fun-icon.blue { background: linear-gradient(45deg, #3b82f6, #1d4ed8); }
        .fun-icon.yellow { background: linear-gradient(45deg, #f59e0b, #d97706); }
        .fun-icon.purple { background: linear-gradient(45deg, #8b5cf6, #7c3aed); }
        .fun-icon.pink { background: linear-gradient(45deg, #ec4899, #db2777); }
        
        .impact-stat {
          background: rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          padding: 0.5rem;
          margin-bottom: 0.75rem;
          border-left: 4px solid #fbbf24;
        }
        
        .footer {
          background-color: #0f172a;
          color: #e2e8f0;
          padding: 3rem 0;
          border-top: 3px solid #1e293b;
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="logo-circle">🦉</div>
              <span className="font-bold text-xl text-slate-100">Oakvale Area Outreach Team</span>
            </div>
            <div className="flex gap-4">
              <button className="btn btn-primary">🌟 Volunteer</button>
              <button className="btn btn-secondary">❤️ Donate</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Promoting health, hope, help, and change... <span style={{color: '#fbbf24', textShadow: '0 0 10px rgba(251, 191, 36, 0.5)'}}>one person at a time! 🌈</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Serving Oakvale and Mercer County, West Virginia through community-driven outreach,
                disaster recovery, youth development, and neighbor-to-neighbor support.
                <br />
                <em style={{color: '#fbbf24'}}>🎨 Where kids create art, explore trails, and build friendships! 🥾</em>
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="btn btn-secondary">🎨 Join Our Art Adventures</button>
                <button className="btn btn-fun">🥾 Explore Hiking Trails</button>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl p-6 border-2 border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-4" style={{color: '#fbbf24'}}>🌟 Community Magic</h3>
              <div className="impact-stat">
                <div className="flex justify-between">
                  <span>🌙 Night Owl Community</span>
                  <span className="font-bold" style={{color: '#fbbf24'}}>777</span>
                </div>
              </div>
              <div className="impact-stat">
                <div className="flex justify-between">
                  <span>✨ Lives Touched</span>
                  <span className="font-bold" style={{color: '#fbbf24'}}>268+</span>
                </div>
              </div>
              <div className="impact-stat">
                <div className="flex justify-between">
                  <span>🎨 Young Artists & Hikers</span>
                  <span className="font-bold" style={{color: '#fbbf24'}}>50+</span>
                </div>
              </div>
              <div className="impact-stat">
                <div className="flex justify-between">
                  <span>💫 Magic Moments</span>
                  <span className="font-bold" style={{color: '#fbbf24'}}>∞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#fbbf24'}}>🌈 Our Fun Adventures</h2>
            <p className="text-xl text-slate-300">
              From art projects to mountain hikes, we're creating magical memories and building a stronger community together!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="image-placeholder">
                🏔️ Flood Recovery Heroes
                <br /><small className="text-slate-400">flood.jpg from Strapi</small>
              </div>
              <div className="fun-icon red">🚨</div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#fbbf24'}}>Emergency Response Team</h3>
              <p className="text-slate-300 mb-4">
                When disasters strike, our community heroes spring into action! Home cleanup, supply distribution,
                and neighbor helping neighbor - that's how we roll! 💪
              </p>
              <button className="text-red-400 border-2 border-red-400 px-4 py-2 rounded hover:bg-red-400 hover:text-white transition-colors">
                Learn More 🌟
              </button>
            </div>

            <div className="card">
              <div className="image-placeholder">
                🎁 Community Blessing Boxes
                <br /><small className="text-slate-400">Blessing_box.jpg from Strapi</small>
              </div>
              <div className="fun-icon green">📦</div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#fbbf24'}}>Magical Blessing Boxes</h3>
              <p className="text-slate-300 mb-4">
                Like treasure chests scattered throughout our community! 24/7 access to food, clothes, and surprises
                for families who need a little extra magic. ✨
              </p>
              <button className="text-green-400 border-2 border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:text-white transition-colors">
                Find Treasure 🗺️
              </button>
            </div>

            <div className="card">
              <div className="image-placeholder">
                🎨 Kids Creating & Exploring
                <br /><small className="text-slate-400">hero kids.jpg from Strapi</small>
              </div>
              <div className="fun-icon blue">🌟</div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#fbbf24'}}>Harmony's Kids Art & Adventure Club</h3>
              <p className="text-slate-300 mb-4">
                Mountain hikes, trail building, photography adventures, and art projects celebrating our beautiful
                Appalachian home! Where creativity meets the great outdoors! 🏔️🎨
              </p>
              <button className="text-blue-400 border-2 border-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition-colors">
                Join the Fun 🎉
              </button>
            </div>

            <div className="card">
              <div className="image-placeholder">
                🎪 Family Fun Events
                <br /><small className="text-slate-400">family and kids.jpg from Strapi</small>
              </div>
              <div className="fun-icon yellow">🎉</div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#fbbf24'}}>Seasonal Community Celebrations</h3>
              <p className="text-slate-300 mb-4">
                Christmas magic, Secret Santa surprises, holiday light tours, and year-round celebrations that
                bring smiles to every face in our community! 🎄✨
              </p>
              <button className="text-yellow-400 border-2 border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition-colors">
                See Calendar 📅
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#fbbf24'}}>🎨 Our Community Art Gallery</h2>
            <p className="text-xl text-slate-300">
              Real stories, real art, real adventures from our amazing Oakvale family!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card">
              <div className="image-placeholder">
                🎨 Owl Mural Masterpiece
                <br /><small className="text-slate-400">owls_mural.jpg from Strapi</small>
              </div>
              <div className="fun-icon purple">🦉</div>
              <h3 className="font-bold mb-2" style={{color: '#fbbf24'}}>Oakvale Owls Mural Magic</h3>
              <p className="text-slate-300 text-sm">Community artists creating beautiful murals celebrating our mountain heritage and Oakvale Owls spirit!</p>
            </div>

            <div className="card">
              <div className="image-placeholder">
                ⭐ Young Heroes Shine
                <br /><small className="text-slate-400">hero kids.jpg from Strapi</small>
              </div>
              <div className="fun-icon blue">⭐</div>
              <h3 className="font-bold mb-2" style={{color: '#fbbf24'}}>Certificate Heroes</h3>
              <p className="text-slate-300 text-sm">Amazing kids receiving recognition for their outstanding community service and creative achievements!</p>
            </div>

            <div className="card">
              <div className="image-placeholder">
                🌈 Traveling Art Adventure
                <br /><small className="text-slate-400">Traveling_art.jpg from Strapi</small>
              </div>
              <div className="fun-icon pink">🎨</div>
              <h3 className="font-bold mb-2" style={{color: '#fbbf24'}}>Art That Travels</h3>
              <p className="text-slate-300 text-sm">Our collective art exhibit showcasing diverse local talents and stories that inspire communities everywhere!</p>
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-primary text-lg">🌙 Join Our Night Owl Community - 777 Members</button>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#fbbf24'}}>🌟 Our Amazing Leadership Team</h2>
            <p className="text-xl text-slate-300">
              The wonderful people who make all the magic happen in our Oakvale community!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="team-photo">
                📷 Deb's Photo
                <br /><small>Deb.jpg</small>
              </div>
              <h3 className="font-bold mb-1" style={{color: '#fbbf24'}}>Debra Williby-Walker</h3>
              <p className="text-purple-400 font-medium mb-2">🌟 Executive Director</p>
              <p className="text-slate-300 text-sm">Leading our mission and spreading joy throughout the community with amazing outreach programs!</p>
            </div>

            <div className="text-center">
              <div className="team-photo">
                📷 Cindy's Photo
                <br /><small>cindy.jpg</small>
              </div>
              <h3 className="font-bold mb-1" style={{color: '#fbbf24'}}>Cindy Neeley</h3>
              <p className="text-emerald-400 font-medium mb-2">💰 Finance Director</p>
              <p className="text-slate-300 text-sm">Making sure every penny helps our community grow and thrive - our money magician! ✨</p>
            </div>

            <div className="text-center">
              <div className="team-photo">
                📷 Loretta's Photo
                <br /><small>Loretta.jpg</small>
              </div>
              <h3 className="font-bold mb-1" style={{color: '#fbbf24'}}>Loretta Champ</h3>
              <p className="text-amber-400 font-medium mb-2">📱 Social Media & Admin Wizard</p>
              <p className="text-slate-300 text-sm">Keeping everyone connected and sharing all our amazing community adventures online!</p>
            </div>

            <div className="text-center">
              <div className="team-photo">
                📷 Rhanda's Photo
                <br /><small>Rhanda.jpg</small>
              </div>
              <h3 className="font-bold mb-1" style={{color: '#fbbf24'}}>Rhanda Blake</h3>
              <p className="text-purple-400 font-medium mb-2">🎯 Project Coordinator</p>
              <p className="text-slate-300 text-sm">Organizing all our fun initiatives and helping volunteers find their perfect community project!</p>
            </div>

            <div className="text-center">
              <div className="team-photo">
                📷 Elizabeth's Photo
                <br /><small>Elizabeth.jpg</small>
              </div>
              <h3 className="font-bold mb-1" style={{color: '#fbbf24'}}>Karen Leathers</h3>
              <p className="text-pink-400 font-medium mb-2">🤝 H4H Liaison</p>
              <p className="text-slate-300 text-sm">Connecting us with our Harmony for Hope family to create even more community magic!</p>
            </div>

            <div className="text-center">
              <div className="team-photo">
                📷 Adventure Team
                <br /><small>Park.jpg</small>
              </div>
              <h3 className="font-bold mb-1" style={{color: '#fbbf24'}}>Youth Adventure Leaders</h3>
              <p className="text-indigo-400 font-medium mb-2">🥾 Kenton, Brady & Kendall</p>
              <p className="text-slate-300 text-sm">Leading hiking adventures, trail projects, and photography fun in our beautiful mountains!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hero py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">🌈 Ready to Join Our Adventure?</h2>
            <p className="text-xl mb-8">
              Become part of our 777-member family creating art, exploring trails, and spreading joy
              throughout Oakvale and Mercer County, West Virginia! 🎨🥾
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="btn btn-secondary">🌟 Volunteer With Us</button>
              <button className="btn btn-fun">❤️ Make a Donation</button>
              <button className="btn btn-primary">🦉 Join Our Night Owl Community</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="logo-circle">🦉</div>
                <div>
                  <h3 className="font-bold" style={{color: '#fbbf24'}}>Oakvale Area Outreach Team</h3>
                  <p className="text-slate-400 text-sm">A subsidiary of Harmony for Hope, Inc.</p>
                </div>
              </div>
              <p className="text-slate-300">
                Promoting health, hope, help, and change in Oakvale and Mercer County through
                community-driven outreach, kids' art programs, hiking adventures, and neighbor-to-neighbor support! 🌈
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{color: '#fbbf24'}}>🌟 Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white">🎨 About OAOT</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">🥾 Our Programs</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">👥 Leadership Team</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">⭐ Volunteer</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">🌙 Facebook Group</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{color: '#fbbf24'}}>📞 Contact Us</h4>
              <div className="text-slate-300">
                <p>🏔️ Oakvale, Mercer County<br />West Virginia</p>
                <p>📧 info@oaot.harmonyforhope.org</p>
                <p>☎️ (304) 555-OAOT</p>
                <div className="mt-4">
                  <p className="text-slate-400 text-sm">🌙 Night Owl Community:</p>
                  <p className="font-bold" style={{color: '#fbbf24'}}>777 Active Members</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 mt-8 text-center">
            <p className="text-slate-400">
              &copy; 2024 Oakvale Area Outreach Team • A subsidiary of Harmony for Hope, Inc.
            </p>
            <p className="text-slate-400 mt-1">
              🌈 Promoting health, hope, help, and change...one person at a time! 🎨🥾✨
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
