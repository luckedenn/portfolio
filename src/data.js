import HeroImage from "/assets/bajuhitam.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/python.png";
import Tools4 from "/assets/tools/java.png";
import Tools5 from "/assets/tools/sql.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/looker.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/TensorFlow.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/scikit.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Python",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Java",
    ket: "Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "SQL",
    ket: "Database",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Looker Studio",
    ket: "Data Visualization",
    dad: "700",
    width: "w-9",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "TensorFlow",
    ket: "ML Library",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Scikit-Learn",
    ket: "ML Library",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Bank Transaction Fraud Detection",
    desk: "Developed an end-to-end fraud detection system using clustering and classification techniques to identify suspicious financial transactions and simulate real-world banking risk scenarios.",
    tools: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    link: "https://github.com/luckedenn/Fraud_Detection",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Business Performance Analytics Dashboard",
    desk: "Created a comprehensive analytics dashboard for business performance tracking, visualizing key metrics and KPIs to support data-driven decision-making.",
    tools: ["BigQuery", "SQL", "Looker Studio", "Data Analytics"],
    link: "https://lookerstudio.google.com/reporting/a3003f52-8b9a-4113-8a81-76885f817ae0",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Time Series Forecasting with Moirai-MoE",
    desk: "Implemented a transformer-based foundation model for time series forecasting with zero-shot and few-shot evaluation across multiple domains, analyzing model generalization capabilities.",
    tools: ["Python", "Deep Learning", "Transformer", "Time Series"],
    link: "https://github.com/luckedenn/Moirai_forecasting.git",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Bitcoin Price Prediction",
    desk: "Developed a machine learning model to predict Bitcoin prices using historical data and technical indicators, enabling informed trading decisions.",
    tools: ["Python", "Scikit-learn", "Time Series", "Machine Learning"],
    link: "https://github.com/luckedenn/Bitcoin_Prediction",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Sentiment Analysis of Fintech App Reviews",
    desk: "Built an NLP-based classification model to analyze user sentiment from Indodax app reviews, including data scraping, preprocessing, feature extraction, and evaluation.",
    tools: ["Python", "NLP", "Scikit-learn", "Text Processing"],
    link: "https://github.com/luckedenn/SentimentAnalysisIndodax",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Music Recommendation System",
    desk: "Created a content-based recommendation system that suggests songs based on feature similarity and user preferences using machine learning techniques.",
    tools: ["Python", "Recommendation System", "Data Analysis"],
    link: "https://github.com/luckedenn/Music-Recommendation",
    dad: "700",
  },
];
