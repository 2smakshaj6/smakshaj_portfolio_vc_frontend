// Put your profile image at: /public/images/profile.jpg
// Then uncomment this line in Home.js around line 280:

<img 
  src="/images/profile.jpg" 
  alt="Akshaj Shivara Madhusudhan - Cybersecurity Professional"
  className="w-full h-full object-cover"
/>

// =====================================
// CERTIFICATION IMAGES EXAMPLE
// =====================================

// Put certification badges in: /public/images/certifications/
// Then update the certifications section around line 650:

{portfolioData.certifications?.map((cert, index) => (
  <Card key={cert._id || index} className="...">
    <div className="flex items-start justify-between mb-4">
      <Award className="h-8 w-8 text-[rgb(218,255,1)] flex-shrink-0" />
      
      {/* REPLACE THIS PLACEHOLDER: */}
      <div className="w-16 h-16 bg-gradient-to-br from-[rgb(218,255,1)]/20...">
        <span className="text-xs text-[rgb(218,255,1)] font-bold">CERT</span>
      </div>
      
      {/* WITH YOUR ACTUAL CERTIFICATION IMAGE: */}
      <div className="w-16 h-16 rounded-lg overflow-hidden">
        <img 
          src={`/images/certifications/${cert.name.toLowerCase().replace(/\s+/g, '-')}.png`}
          alt={`${cert.name} Certification Badge`}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image doesn't exist
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-[rgb(218,255,1)]/20 to-[rgb(166,190,21)]/20 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
          <span className="text-xs text-[rgb(218,255,1)] font-bold">CERT</span>
        </div>
      </div>
    </div>
    {/* Rest of certification content */}
  </Card>
))}

// =====================================
// PROJECT IMAGES EXAMPLE  
// =====================================

// Put project screenshots in: /public/images/projects/
// Then update project cards around line 550:

{portfolioData.projects?.map((project, index) => (
  <Card key={project._id || index} className="...">
    
    {/* ADD PROJECT IMAGE AT THE TOP */}
    <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-[rgb(38,40,42)] to-[rgb(26,28,30)]">
      <img 
        src={`/images/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}.png`}
        alt={`${project.title} Screenshot`}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          // Fallback if image doesn't exist
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      {/* Fallback placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-[rgb(38,40,42)] to-[rgb(26,28,30)] flex items-center justify-center" style={{display: 'none'}}>
        <div className="text-center">
          <Terminal className="h-12 w-12 text-[rgb(218,255,1)] mx-auto mb-2" />
          <p className="text-[rgb(161,161,170)] text-sm">Project Image</p>
        </div>
      </div>
    </div>
    
    {/* Rest of existing project content */}
    <div className="flex items-center mb-6">
      {/* ... existing content ... */}
    </div>
  </Card>
))}

// =====================================
// COMPANY LOGOS IN EXPERIENCE SECTION
// =====================================

// Put company logos in: /public/images/companies/
// Then update experience cards around line 450:

<div className="flex items-center mb-6">
  {/* ADD COMPANY LOGO */}
  <div className="w-12 h-12 mr-4 rounded-lg overflow-hidden bg-white p-2">
    <img 
      src={`/images/companies/${exp.company.toLowerCase().replace(/\s+/g, '-')}-logo.png`}
      alt={`${exp.company} Logo`}
      className="w-full h-full object-contain"
      onError={(e) => e.target.style.display = 'none'}
    />
  </div>
  
  <div>
    <h3 className="text-2xl font-bold text-white mb-3">{exp.role}</h3>
    <div className="text-[rgb(218,255,1)] mb-6 text-lg font-semibold">{exp.company}</div>
  </div>
</div>

// =====================================
// BACKGROUND IMAGES
// =====================================

// Hero section background - around line 200:
<section 
  className="pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 relative"
  style={{
    backgroundImage: 'linear-gradient(rgba(17,17,19,0.8), rgba(26,28,30,0.9)), url("/images/hero-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
>

// =====================================
// SKILL CATEGORY ICONS
// =====================================

// Put custom skill icons in: /public/images/icons/
// Replace lucide icons with custom ones around line 600:

<div className="p-3 bg-gradient-to-br from-[rgb(218,255,1)]/20 to-[rgb(166,190,21)]/20 rounded-xl mr-4">
  <img 
    src={`/images/icons/${category.icon}-icon.png`}
    alt={`${category.category} Icon`}
    className="h-6 w-6"
    onError={(e) => {
      // Fallback to lucide icon if custom image fails
      e.target.style.display = 'none';
      // Show original lucide icon
    }}
  />
</div>