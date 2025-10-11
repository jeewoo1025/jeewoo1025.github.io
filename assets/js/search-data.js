// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "(*: Equal contributions. Alphabetical order.)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-challenges-in-korea-s-ai-ecosystem",
      
        title: "Challenges in Korea’s AI Ecosystem",
      
      description: "Reflections on systemic challenges in Korea’s AI research and industry landscape",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/koreaAI/";
        
      },
    },{id: "news-i-attend-acl-2023-at-toronto-canada-and-do-an-oral-presentation-session-summarization",
          title: 'I attend ACL 2023 at Toronto, Canada and do an oral presentation (Session:...',
          description: "",
          section: "News",},{id: "news-i-m-starting-a-new-position-as-a-research-engineer-at-lg-electronics",
          title: 'I’m starting a new position as a research engineer at LG Electronics!',
          description: "",
          section: "News",},{id: "news-i-attend-naacl-2024-at-mexico-city-mexico-and-present-our-poster",
          title: 'I attend NAACL 2024 at Mexico City, Mexico and present our poster!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%65%65%77%6F%6F%31%30%32%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jeewoo1025", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/suljeewoo", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=czR5GfYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
