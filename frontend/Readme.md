This is my personal portfolio website for showcasing my projects, skills, and experience. It features a homepage with an introduction of what I do, a works section with project listings, profile page of who am I, skillsets and about my past jobs, and a contact form.

# Tech Stack: #
Frontend: Reactjs
Language: Typescript
Styling: Tailwind CSS
Animation: Tailwind CSS / Framer Motion

Folder Structure
src/
├── assets/                     // All Image Assets (will be moved to dropbox in the future)
├── components/
│   ├── Container.tsx           // Contains the children elements if screen width is above 1550px  
│   ├── Footer.tsx              // Footer component
│   ├── Header.tsx              // Navigation component
│   ├── Loading.tsx             // for Suspense fallback 
│   └── SectionTitle.tsx        // Section title component
├── context/
│   └── AppContext.tsx          // Manage state globally
├── data/
│   ├── icon_list.json          // list of icons with url
│   └── works_data.json         // works/project data
├── modules/                // Components within pages
│   ├── landing/
│   │   ├── Contact.tsx         // Redirection component to Contact page
│   │   ├── IDo.tsx             // What I Do component
│   │   ├── Intro.tsx           // Topmost / landing section
│   │   └── Works.tsx           // Redirection component to works
│   ├── profile/
│   │   ├── JobHistory.tsx      // Job history component
│   │   ├── MySkills.tsx        // Skill set list component
│   │   └── WhoAmI.tsx          // Self introduction component
│   └── works/
│       └── WorkList.tsx        // Work list component
├── pages/
│   ├── ContactMe.tsx           // Contact page
│   ├── Landing.tsx             // Landing page
│   ├── MyWorks.tsx             // Works / Project page
│   ├── Page404.tsx             // Page 404 page
│   └── Profile.tsx             // Profile page
├── util/
│   ├── getDeviceInfo.tsx       // check for device type [ pc | mobile]
│   ├── getScreenHeight.tsx     // collect screen height
│   ├── getScreenWidth.tsx      // collect screen width / return media type [ sm | md | lg | xl ] 
│   └── monthByNumber.tsx       // convert number [ 1 - 12 ] to month name [ January - December ]
└── App.js                  // Main app entry point


# PS: still under improvement while job hunting so please be patient: ^_^