<<<<<<< HEAD

=======
>>>>>>> 4d1d2db (Initial commit)
export interface Project {
  title: string;
  description: string;
  longDescription?: string[];
  image: string;
  additionalImages?: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
<<<<<<< HEAD
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform with product filtering, cart functionality, and payment processing.',
    longDescription: [
      'This e-commerce platform provides a complete shopping experience with features like product filtering, cart functionality, user authentication, and secure payment processing.',
      'The frontend was built with React and styled with Tailwind CSS, while the backend uses Node.js, Express, and MongoDB to handle product data, user accounts, and transactions.',
      'The project implements Stripe for payment processing and includes features like wishlist, order tracking, and product reviews.'
    ],
    image: '/path/to/image.jpg',
    additionalImages: ['/path/to/image2.jpg', '/path/to/image3.jpg', '/path/to/image4.jpg', '/path/to/image5.jpg'],
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce-project',
  },
  {
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop functionality, user authentication, and task categorization.',
    longDescription: [
      'This task management application helps users organize their work with features like drag-and-drop task reordering, custom categories, priority levels, and due dates.',
      'Built with React and Firebase, it provides real-time updates and seamless synchronization across devices, ensuring users always have access to their latest task list.',
      'The app includes user authentication, task filtering, search functionality, and customizable views to help users stay organized and productive.'
    ],
    image: '/path/to/image.jpg',
    additionalImages: ['/path/to/image2.jpg', '/path/to/image3.jpg', '/path/to/image4.jpg'],
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/task-management-app',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application showing current and forecasted weather data with location search functionality.',
    longDescription: [
      'The Weather Dashboard provides users with detailed current weather conditions and 7-day forecasts for any location worldwide.',
      'Built with JavaScript and a third-party weather API, it displays temperature, humidity, wind speed, UV index, and precipitation probability in an intuitive interface.',
      'The app includes features like location search, saving favorite locations, and automatic detection of the user\'s current location for immediate weather updates.'
    ],
    image: '/path/to/image.jpg',
    additionalImages: ['/path/to/image2.jpg', '/path/to/image3.jpg'],
    tags: ['JavaScript', 'Weather API', 'CSS'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
  },
  {
    title: 'Personal Blog',
    description: 'A blog platform built with modern technologies featuring markdown support and comment system.',
    longDescription: [
      'This personal blog platform provides a clean, responsive design optimized for reading and content discovery.',
      'Built with Next.js and featuring markdown support, it enables easy content creation while maintaining excellent performance and SEO.',
      'The platform includes features like categorization, tagging, search functionality, and a comment system powered by a headless CMS.'
    ],
    image: '/path/to/image.jpg',
    additionalImages: ['/path/to/image2.jpg', '/path/to/image3.jpg', '/path/to/image4.jpg'],
    tags: ['Next.js', 'Markdown', 'Vercel'],
    githubUrl: 'https://github.com/yourusername/blog-platform',
  },
  {
    title: 'Fitness Tracker',
    description: 'An application to track workout routines and progress with data visualization and goal setting.',
    longDescription: [
      'This fitness tracking application helps users monitor their workout routines and track progress over time through intuitive data visualizations.',
      'Built with React for the frontend and Express/MongoDB for the backend, it allows users to create custom workout plans, log exercises, and set fitness goals.',
      'The app includes features like progress charts, personal bests tracking, workout timers, and custom exercise libraries.'
    ],
    image: '/path/to/image.jpg',
    additionalImages: ['/path/to/image2.jpg', '/path/to/image3.jpg'],
    tags: ['React', 'Chart.js', 'Express'],
    githubUrl: 'https://github.com/yourusername/fitness-tracker',
  },
  {
    title: 'Recipe App',
    description: 'A recipe discovery and storage application with filtering options and user profiles.',
    longDescription: [
      'This recipe application allows users to discover, save, and share cooking recipes from around the world.',
      'Built with React Native and Firebase, it provides a cross-platform experience with features like recipe categories, ingredient-based search, and customizable user profiles.',
      'The app includes functionality for creating shopping lists based on recipes, meal planning, and nutritional information calculation.'
    ],
    image: '/path/to/image.jpg',
    additionalImages: ['/path/to/image2.jpg', '/path/to/image3.jpg', '/path/to/image4.jpg'],
    tags: ['React Native', 'Firebase', 'Food API'],
    githubUrl: 'https://github.com/yourusername/recipe-app',
  }
=======
    title: 'GateKeeper',
    description: 'A centralized web app enhancing residential community management through secure access, real-time communication, visitor tracking, and service request handling.',
    longDescription: ['Details for GateKeeper will be added here.'],
    image: '/gatekeeper.png',
    additionalImages: [
      '/gatekeeper1.png',
      '/gatekeeper2.png',
      '/gatekeeper3.png',
      '/gatekeeper4.png',
      '/gatekeeper5.png',
      '/gatekeeper6.png',
    ],
    tags: ['Community Management', 'Resident Portal', 'Visitor Management', 'Maintenance Tracking', 'Digital Society', 'Smart Living'],
    githubUrl: 'https://github.com/sanskarkesari/GateKeeper.git',
  },
  {
    title: 'Certificate Locker',
    description: 'A web application that allows users to securely store and manage their certificates in the cloud. Users can log in, upload certificates (PDF, PNG, JPEG), view, download, and delete them from their dashboard.',
    longDescription: ['Details for Certificate Locker will be added here.'],
    image: '/certificate-locker.png',
    additionalImages: [
      '/certificate-locker1.png',
      '/certificate-locker2.png',
    ],
    tags: ['Web Application', 'Certificate Management', 'Cloud Storage', 'Firebase'],
    githubUrl: 'https://github.com/sanskarkesari/Certificate-Locker.git',
  },
  {
    title: 'Customer Churn Analysis',
    description: 'Project focuses on analyzing customer churn in the telecom industry to understand customer behavior, reduce churn, and develop actionable marketing strategies.',
    longDescription: ['Details for Customer Churn Analysis will be added here.'],
    image: '/customer-churn-analysis.png',
    additionalImages: [
      '/customer-churn-analysis1.png',
      '/customer-churn-analysis2.png',
      '/customer-churn-analysis3.png',
      '/customer-churn-analysis4.png'
    ],
    tags: ['Customer Churn', 'Telecom', 'Machine Learning', 'EDA', 'Data Science', 'Customer Retention'],
    githubUrl: 'https://github.com/sanskarkesari/Customer-Churn-Analysis.git',
  },
  {
    title: 'AgriConnect',
    description: 'AI-powered system predicting sugarcane yield, detecting diseases, offering farming guidelines, voice-enabled chatbot, and real-time weather-based insights.',
    longDescription: ['Details for AgriConnect will be added here.'],
    image: '/agriconnect.png',
    additionalImages: [
      '/agriconnect1.png',
      '/agriconnect2.png',
      '/agriconnect3.png',
      '/agriconnect4.png'
    ],
    tags: ['AI in Farming', 'Sugarcane Yield Prediction', 'Crop Disease Detection', 'Weather-Based Guidelines', 'Multilingual Support', 'Machine Learning', 'Sustainable Agriculture'],
    githubUrl: 'https://github.com/sanskarkesari/AgriConnect_Sugarcane_Helper_for_Farmers.git',
  },
  {
    title: 'Restore',
    description: 'Restore is a sustainable e-commerce platform for buying new products and reselling old ones affordably, directly or online.',
    longDescription: ['Details for Restore will be added here.'],
    image: '/restore.png',
    additionalImages: [
      '/restore1.png',
      '/restore2.png',
      '/restore3.png',
      '/restore4.png'
    ],
    tags: ['SustainableEcommerce', 'EcoFriendly', 'BuyAndResell', 'ReuseReduceRecycle'],
    githubUrl: 'https://github.com/sanskarkesari/ReStore.git',
  },
>>>>>>> 4d1d2db (Initial commit)
];
