<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oakvale Area Outreach Team - Promoting health, hope, help, and change</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Dark theme for eye strain relief with kid-friendly colors */
        body { 
            font-family: 'Comic Sans MS', system-ui, -apple-system, sans-serif; 
            margin: 0; 
            background-color: #0f172a; 
            color: #e2e8f0;
        }
        .container { 
            max-width: 1152px; 
            margin: 0 auto; 
            padding: 0 1rem; 
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
        .hero h1 { 
            font-size: 3rem; 
            font-weight: bold; 
            margin-bottom: 1.5rem; 
            line-height: 1.2; 
        }
        .hero .highlight { 
            color: #fbbf24; 
            text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }
        .section { 
            padding: 4rem 0; 
        }
        .section-dark {
            background-color: #1e293b;
        }
        .section-darker {
            background-color: #0f172a;
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
        .grid { 
            display: grid; 
            gap: 2rem; 
        }
        .grid-2 { 
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
        }
        .grid-3 { 
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
        }
        .text-center { 
            text-align: center; 
        }
        .mb-4 { 
            margin-bottom: 1rem; 
        }
        .mb-8 { 
            margin-bottom: 2rem; 
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
        .nav-content { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
        }
        .logo { 
            display: flex; 
            align-items: center; 
            gap: 0.75rem; 
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
        .footer { 
            background-color: #0f172a; 
            color: #e2e8f0; 
            padding: 3rem 0; 
            border-top: 3px solid #1e293b;
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
        
        h1, h2, h3 {
            font-family: 'Comic Sans MS', sans-serif;
        }
        
        .impact-stat {
            background: rgba(255,255,255,0.1);
            border-radius: 0.5rem;
            padding: 0.5rem;
            margin-bottom: 0.75rem;
            border-left: 4px solid #fbbf24;
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <div class="container">
            <div class="nav-content">
                <div class="logo">
                    <div class="logo-circle">🦉</div>
                    <span style="font-weight: bold; font-size: 1.25rem; color: #e2e8f0;">Oakvale Area Outreach Team</span>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-primary">🌟 Volunteer</button>
                    <button class="btn btn-secondary">❤️ Donate</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; align-items: center; position: relative; z-index: 1;">
                <div>
                    <h1>Promoting health, hope, help, and change... <span class="highlight">one person at a time! 🌈</span></h1>
                    <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">
                        Serving Oakvale and Mercer County, West Virginia through community-driven outreach, 
                        disaster recovery, youth development, and neighbor-to-neighbor support. 
                        <br><em style="color: #fbbf24;">🎨 Where kids create art, explore trails, and build friendships! 🥾</em>
                    </p>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <button class="btn btn-secondary">🎨 Join Our Art Adventures</button>
                        <button class="btn btn-fun">🥾 Explore Hiking Trails</button>
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.1); border-radius: 1rem; padding: 1.5rem; border: 2px solid rgba(255,255,255,0.2);">
                    <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; color: #fbbf24;">🌟 Community Magic</h3>
                    <div class="impact-stat">
                        <div style="display: flex; justify-content: space-between;">
                            <span>🌙 Night Owl Community</span>
                            <span style="font-weight: bold; color: #fbbf24;">777</span>
                        </div>
                    </div>
                    <div class="impact-stat">
                        <div style="display: flex; justify-content: space-between;">
                            <span>✨ Lives Touched</span>
                            <span style="font-weight: bold; color: #fbbf24;">268+</span>
                        </div>
                    </div>
                    <div class="impact-stat">
                        <div style="display: flex; justify-content: space-between;">
                            <span>🎨 Young Artists & Hikers</span>
                            <span style="font-weight: bold; color: #fbbf24;">50+</span>
                        </div>
                    </div>
                    <div class="impact-stat">
                        <div style="display: flex; justify-content: space-between;">
                            <span>💫 Magic Moments</span>
                            <span style="font-weight: bold; color: #fbbf24;">∞</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Programs Section -->
    <section class="section section-dark">
        <div class="container">
            <div class="text-center mb-8">
                <h2 style="font-size: 2.25rem; font-weight: bold; margin-bottom: 1rem; color: #fbbf24;">🌈 Our Fun Adventures</h2>
                <p style="font-size: 1.25rem; color: #cbd5e1;">
                    From art projects to mountain hikes, we're creating magical memories and building a stronger community together!
                </p>
            </div>

            <div class="grid grid-2">
                <div class="card">
                    <div class="image-placeholder">
                        🏔️ Flood Recovery Heroes
                        <br><small style="color: #94a3b8;">flood.jpg from Strapi</small>
                    </div>
                    <div class="fun-icon red">🚨</div>
                    <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.75rem; color: #fbbf24;">Emergency Response Team</h3>
                    <p style="color: #cbd5e1; margin-bottom: 1rem;">
                        When disasters strike, our community heroes spring into action! Home cleanup, supply distribution, 
                        and neighbor helping neighbor - that's how we roll! 💪
                    </p>
                    <button class="btn" style="color: #ef4444; background: none; border: 2px solid #ef4444; padding: 0.5rem 1rem;">Learn More 🌟</button>
                </div>

                <div class="card">
                    <div class="image-placeholder">
                        🎁 Community Blessing Boxes
                        <br><small style="color: #94a3b8;">Blessing_box.jpg from Strapi</small>
                    </div>
                    <div class="fun-icon green">📦</div>
                    <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.75rem; color: #fbbf24;">Magical Blessing Boxes</h3>
                    <p style="color: #cbd5e1; margin-bottom: 1rem;">
                        Like treasure chests scattered throughout our community! 24/7 access to food, clothes, and surprises 
                        for families who need a little extra magic. ✨
                    </p>
                    <button class="btn" style="color: #10b981; background: none; border: 2px solid #10b981; padding: 0.5rem 1rem;">Find Treasure 🗺️</button>
                </div>

                <div class="card">
                    <div class="image-placeholder">
                        🎨 Kids Creating & Exploring
                        <br><small style="color: #94a3b8;">hero kids.jpg from Strapi</small>
                    </div>
                    <div class="fun-icon blue">🌟</div>
                    <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.75rem; color: #fbbf24;">Harmony's Kids Art & Adventure Club</h3>
                    <p style="color: #cbd5e1; margin-bottom: 1rem;">
                        Mountain hikes, trail building, photography adventures, and art projects celebrating our beautiful 
                        Appalachian home! Where creativity meets the great outdoors! 🏔️🎨
                    </p>
                    <button class="btn" style="color: #3b82f6; background: none; border: 2px solid #3b82f6; padding: 0.5rem 1rem;">Join the Fun 🎉</button>
                </div>

                <div class="card">
                    <div class="image-placeholder">
                        🎪 Family Fun Events
                        <br><small style="color: #94a3b8;">family and kids.jpg from Strapi</small>
                    </div>
                    <div class="fun-icon yellow">🎉</div>
                    <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.75rem; color: #fbbf24;">Seasonal Community Celebrations</h3>
                    <p style="color: #cbd5e1; margin-bottom: 1rem;">
                        Christmas magic, Secret Santa surprises, holiday light tours, and year-round celebrations that 
                        bring smiles to every face in our community! 🎄✨
                    </p>
                    <button class="btn" style="color: #f59e0b; background: none; border: 2px solid #f59e0b; padding: 0.5rem 1rem;">See Calendar 📅</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Community Gallery -->
    <section class="section section-darker">
        <div class="container">
            <div class="text-center mb-8">
                <h2 style="font-size: 2.25rem; font-weight: bold; margin-bottom: 1rem; color: #fbbf24;">🎨 Our Community Art Gallery</h2>
                <p style="font-size: 1.25rem; color: #cbd5e1;">
                    Real stories, real art, real adventures from our amazing Oakvale family!
                </p>
            </div>

            <div class="grid grid-3 mb-8">
                <div class="card">
                    <div class="image-placeholder">
                        🎨 Owl Mural Masterpiece
                        <br><small style="color: #94a3b8;">owls_mural.jpg from Strapi</small>
                    </div>
                    <div class="fun-icon purple">🦉</div>
                    <h3 style="font-weight: bold; margin-bottom: 0.5rem; color: #fbbf24;">Oakvale Owls Mural Magic</h3>
                    <p style="color: #cbd5e1; font-size: 0.875rem;">Community artists creating beautiful murals celebrating our mountain heritage and Oakvale Owls spirit!</p>
                </div>

                <div class="card">
                    <div class="image-placeholder">
                        ⭐ Young Heroes Shine
                        <br><small style="color: #94a3b8;">hero kids.jpg from Strapi</small>
                    </div>
                    <div class="fun-icon blue">⭐</div>
                    <h3 style="font-weight: bold; margin-bottom: 0.5rem; color: #fbbf24;">Certificate Heroes</h3>
                    <p style="color: #cbd5e1; font-size: 0.875rem;">Amazing kids receiving recognition for their outstanding community service and creative achievements!</p>
                </div>

                <div class="card">
                    <div class="image-placeholder">
                        🌈 Traveling Art Adventure
                        <br><small style="color: #94a3b8;">Traveling_art.jpg from Strapi</small>
                    </div>
                    <div class="fun-icon pink">🎨</div>
                    <h3 style="font-weight: bold; margin-bottom: 0.5rem; color: #fbbf24;">Art That Travels</h3>
                    <p style="color: #cbd5e1; font-size: 0.875rem;">Our collective art exhibit showcasing diverse local talents and stories that inspire communities everywhere!</p>
                </div>
            </div>

            <div class="text-center">
                <button class="btn btn-primary" style="font-size: 1.1rem;">🌙 Join Our Night Owl Community - 777 Members</button>
            </div>
        </div>
    </section>

    <!-- Leadership Team -->
    <section class="section section-dark">
        <div class="container">
            <div class="text-center mb-8">
                <h2 style="font-size: 2.25rem; font-weight: bold; margin-bottom: 1rem; color: #fbbf24;">🌟 Our Amazing Leadership Team</h2>
                <p style="font-size: 1.25rem; color: #cbd5e1;">
                    The wonderful people who make all the magic happen in our Oakvale community!
                </p>
            </div>

            <div class="grid grid-3">
                <div class="text-center">
                    <div class="team-photo">
                        📷 Deb's Photo
                        <br><small>Deb.jpg</small>
                    </div>
                    <h3 style="font-weight: bold; margin-bottom: 0.25rem; color: #fbbf24;">Debra Williby-Walker</h3>
                    <p style="color: #8b5cf6; font-weight: 500; margin-bottom: 0.5rem;">🌟 Executive Director</p>
                    <p style="color: #cbd5e1; font-size: 0.875rem;">Leading our mission and spreading joy throughout the community with amazing outreach programs!</p>
                </div>

                <div class="text-center">
                    <div class="team-photo">
                        📷 Cindy's Photo
                        <br><small>cindy.jpg</small>
                    </div>
                    <h3 style="font-weight: bold; margin-bottom: 0.25rem; color: #fbbf24;">Cindy Neeley</h3>
                    <p style="color: #10b981; font-weight: 500; margin-bottom: 0.5rem;">💰 Finance Director</p>
                    <p style="color: #cbd5e1; font-size: 0.875rem;">Making sure every penny helps our community grow and thrive - our money magician! ✨</p>
                </div>

                <div class="text-center">
                    <div class="team-photo">
                        📷 Loretta's Photo
                        <br><small>Loretta.jpg</small>
                    </div>
                    <h3 style="font-weight: bold; margin-bottom: 0.25rem; color: #fbbf24;">Loretta Champ</h3>
                    <p style="color: #f59e0b; font-weight: 500; margin-bottom: 0.5rem;">📱 Social Media & Admin Wizard</p>
                    <p style="color: #cbd5e1; font-size: 0.875rem;">Keeping everyone connected and sharing all our amazing community adventures online!</p>
                </div>

                <div class="text-center">
                    <div class="team-photo">
                        📷 Rhanda's Photo
                        <br><small>Rhanda.jpg</small>
                    </div>
                    <h3 style="font-weight: bold; margin-bottom: 0.25rem; color: #fbbf24;">Rhanda Blake</h3>
                    <p style="color: #8b5cf6; font-weight: 500; margin-bottom: 0.5rem;">🎯 Project Coordinator</p>
                    <p style="color: #cbd5e1; font-size: 0.875rem;">Organizing all our fun initiatives and helping volunteers find their perfect community project!</p>
                </div>

                <div class="text-center">
                    <div class="team-photo">
                        📷 Elizabeth's Photo
                        <br><small>Elizabeth.jpg</small>
                    </div>
                    <h3 style="font-weight: bold; margin-bottom: 0.25rem; color: #fbbf24;">Karen Leathers</h3>
                    <p style="color: #ec4899; font-weight: 500; margin-bottom: 0.5rem;">🤝 H4H Liaison</p>
                    <p style="color: #cbd5e1; font-size: 0.875rem;">Connecting us with our Harmony for Hope family to create even more community magic!</p>
                </div>

                <div class="text-center">
                    <div class="team-photo">
                        📷 Adventure Team
                        <br><small>Park.jpg</small>
                    </div>
                    <h3 style="font-weight: bold; margin-bottom: 0.25rem; color: #fbbf24;">Youth Adventure Leaders</h3>
                    <p style="color: #6366f1; font-weight: 500; margin-bottom: 0.5rem;">🥾 Kenton, Brady & Kendall</p>
                    <p style="color: #cbd5e1; font-size: 0.875rem;">Leading hiking adventures, trail projects, and photography fun in our beautiful mountains!</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="section hero">
        <div class="container">
            <div class="text-center" style="position: relative; z-index: 1;">
                <h2 style="font-size: 2.25rem; font-weight: bold; margin-bottom: 1.5rem;">🌈 Ready to Join Our Adventure?</h2>
                <p style="font-size: 1.25rem; margin-bottom: 2rem;">
                    Become part of our 777-member family creating art, exploring trails, and spreading joy 
                    throughout Oakvale and Mercer County, West Virginia! 🎨🥾
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-secondary">🌟 Volunteer With Us</button>
                    <button class="btn btn-fun">❤️ Make a Donation</button>
                    <button class="btn btn-primary">🦉 Join Our Night Owl Community</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                <div>
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                        <div class="logo-circle">🦉</div>
                        <div>
                            <h3 style="font-weight: bold; color: #fbbf24;">Oakvale Area Outreach Team</h3>
                            <p style="color: #94a3b8; font-size: 0.875rem;">A subsidiary of Harmony for Hope, Inc.</p>
                        </div>
                    </div>
                    <p style="color: #cbd5e1;">
                        Promoting health, hope, help, and change in Oakvale and Mercer County through 
                        community-driven outreach, kids' art programs, hiking adventures, and neighbor-to-neighbor support! 🌈
                    </p>
                </div>

                <div>
                    <h4 style="font-weight: bold; margin-bottom: 1rem; color: #fbbf24;">🌟 Quick Links</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 0.5rem;"><a href="#" style="color: #cbd5e1; text-decoration: none;">🎨 About OAOT</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="#" style="color: #cbd5e1; text-decoration: none;">🥾 Our Programs</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="#" style="color: #cbd5e1; text-decoration: none;">👥 Leadership Team</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="#" style="color: #cbd5e1; text-decoration: none;">⭐ Volunteer</a></li>
                        <li><a href="#" style="color: #cbd5e1; text-decoration: none;">🌙 Facebook Group</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style="font-weight: bold; margin-bottom: 1rem; color: #fbbf24;">📞 Contact Us</h4>
                    <div style="color: #cbd5e1;">
                        <p>🏔️ Oakvale, Mercer County<br>West Virginia</p>
                        <p>📧 info@oaot.harmonyforhope.org</p>
                        <p>☎️ (304) 555-OAOT</p>
                        <div style="margin-top: 1rem;">
                            <p style="color: #94a3b8; font-size: 0.875rem;">🌙 Night Owl Community:</p>
                            <p style="color: #fbbf24; font-weight: bold;">777 Active Members</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style="border-top: 1px solid #374151; padding-top: 2rem; margin-top: 2rem; text-center;">
                <p style="color: #94a3b8;">
                    &copy; 2024 Oakvale Area Outreach Team • A subsidiary of Harmony for Hope, Inc.
                </p>
                <p style="color: #94a3b8; margin-top: 0.25rem;">
                    🌈 Promoting health, hope, help, and change...one person at a time! 🎨🥾✨
                </p>
            </div>
        </div>
    </footer>
</body>
</html>
