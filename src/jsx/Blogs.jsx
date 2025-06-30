import React, { useEffect } from 'react';
import '../css/Blogs.css';

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      title: 'Mastering React.js for Modern Front-End Development',
      description: `React.js has become a must-have skill for frontend developers. In this article, we cover everything from setting up with Vite or CRA, JSX syntax, component lifecycle, using hooks like useEffect and useState, and component-based architecture. We’ll also dive into performance tips like lazy loading, code splitting, and using memoization to prevent unnecessary renders.`,
      date: 'June 1, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Understanding State Management with Redux and Context API',
      description: `Managing state in large applications is critical. This blog explains Redux basics, the role of actions and reducers, and when to use Context API instead. We also cover redux-toolkit, middleware like redux-thunk, and best practices for scalable state logic in frontend apps.`,
      date: 'June 2, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Building Responsive Layouts with Tailwind CSS',
      description: `Tailwind CSS speeds up development and ensures consistency. This guide explains utility-first design, customizing your Tailwind config, using responsive breakpoints, dark mode classes, and how to integrate Tailwind with frameworks like React and Next.js.`,
      date: 'June 3, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Animating with Framer Motion in React Apps',
      description: `Framer Motion makes React animation easy and powerful. Learn how to create smooth transitions, animate presence for conditional elements, and build micro-interactions that enhance user experience in a professional web application.`,
      date: 'June 4, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Connecting Frontend and Backend in MERN',
      description: `MERN allows seamless full-stack JavaScript development. Learn how React communicates with Express using Axios, securing APIs with JWT tokens, managing headers, and building a real-time dashboard by combining frontend events with backend responses.`,
      date: 'June 5, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Creating RESTful APIs with Express.js',
      description: `Express.js makes building APIs simple. Explore how to define routes, use middleware, manage errors, connect MongoDB with Mongoose, and handle CRUD operations efficiently. We'll also explore folder structures and MVC patterns.`,
      date: 'June 6, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Authentication with JWT and Cookies in MERN Apps',
      description: `Authentication is crucial in web apps. We’ll cover implementing login/signup with hashed passwords using bcrypt, generating JWT tokens, storing them in HTTP-only cookies, and protecting both frontend and backend routes securely.`,
      date: 'June 7, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Deploying MERN Apps with Vercel and Render',
      description: `Learn step-by-step deployment: frontend to Vercel, backend to Render, and connecting with MongoDB Atlas. We also explain how to manage environment variables, domain setup, and CI/CD workflows for continuous integration.`,
      date: 'June 8, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Headless WordPress with React: A Powerful Combo',
      description: `Using WordPress as a headless CMS allows you to build faster and more modern frontends. This blog shows how to fetch content using the WordPress REST API and render it in React using Axios or Fetch, while managing routing and meta tags dynamically.`,
      date: 'June 9, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Creating WordPress Child Themes for Custom Design',
      description: `Learn how to safely customize WordPress themes by building a child theme. We cover style overrides, adding new templates, enqueueing scripts and styles, and making your WordPress design unique without breaking core updates.`,
      date: 'June 10, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Must-Have WordPress Plugins for Modern Websites',
      description: `Explore a curated list of plugins for SEO (Yoast), performance (LiteSpeed Cache), security (Wordfence), page building (Elementor), and backups (UpdraftPlus). We also explain when to avoid bloated plugins to keep your site fast.`,
      date: 'June 11, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Building a Custom Post Type in WordPress',
      description: `Sometimes blog posts aren’t enough. Learn how to register custom post types and taxonomies for portfolios, events, and testimonials using ` +
      "`register_post_type()` and `register_taxonomy()` functions.",
      date: 'June 12, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Integrating Contact Forms in WordPress & React',
      description: `This blog explains integrating forms using Contact Form 7 in WordPress and React Hook Form in React. We also cover form validation, styling, backend email support, and bot protection using Google reCAPTCHA.`,
      date: 'June 13, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'SEO Optimization Tips for Developers (React & WordPress)',
      description: `SEO isn’t just for marketers. Learn how to use meta tags, open graph tags, alt attributes, optimized routing, lazy loading images, and structured schema markup for better search engine rankings in both WordPress and React.`,
      date: 'June 14, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Dark Mode in React Websites with Tailwind',
      description: `Learn how to enable dark mode in your React apps using Tailwind CSS. We explore class-based toggling, saving mode in localStorage, and syncing with user device settings for a consistent experience.`,
      date: 'June 15, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Creating Admin Panels with React and Express',
      description: `Admin dashboards are vital for data management. Learn how to build them using protected routes, dynamic tables, charts with Recharts, and full CRUD operations from a REST API backend.`,
      date: 'June 16, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'React File Uploads: Drag-and-Drop & Folder Uploads',
      description: `Explore how to implement drag-and-drop file uploads, folder uploads with input[type='file'][webkitdirectory], and progress tracking. This is perfect for building portfolio and blog admin panels.`,
      date: 'June 17, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Modern Hosting Options for 2025: Vercel, Netlify & Cloudflare Pages',
      description: `Compare modern hosting platforms for static and dynamic websites. We’ll look at Vercel for frontend apps, Render for backend hosting, and how Cloudflare Pages improves speed and scalability for free.`,
      date: 'June 18, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Using Firebase for Authentication and Realtime Data',
      description: `Firebase offers powerful tools for login, database, and hosting. This guide walks through Firebase Auth, Firestore setup, secure rules, and how to integrate it with your React frontends quickly.`,
      date: 'June 19, 2025',
      author: 'Awais Mughal',
    },
    {
      title: 'Best Practices for Scalable Web Projects',
      description: `No matter the stack, good practices matter. We wrap up with a guide on naming conventions, component reuse, lazy loading, folder structures, environment configs, and GitHub project organization.`,
      date: 'June 20, 2025',
      author: 'Awais Mughal',
    },
  ];

  return (
    <section className="blogs">
      <div className="blogs-banner">
        <img src="/Blogs.jpg" alt="Blogs Banner" />
        <h1 className="blogs-heading">Our Latest Articles & Insights</h1>
      </div>

      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <div className="blog-meta">
              <span>{blog.date}</span>
              <span>By {blog.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
