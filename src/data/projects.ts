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
];
