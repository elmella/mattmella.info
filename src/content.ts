// All site content lives here. Edit this file to update the site.

export interface Link {
  label: string;
  href: string;
}

export interface Role {
  org: string;
  orgNote?: string;
  href?: string;
  title: string;
  location: string;
  dates: string;
  points: string[];
  links?: Link[];
}

export interface Dashboard {
  slug: string; // page lives at #/<slug>
  name: string;
  tagline: string;
  description: string;
  src: string; // Tableau Public view URL
}

export interface Project {
  name: string;
  title?: string; // full paper title, if any
  tagline: string;
  description: string;
  links: Link[];
}

const tableau = (view: string): string =>
  `https://public.tableau.com/views/${view}?:embed=y&:showVizHome=no&:tabs=yes&:toolbar=yes`;

export const profile = {
  name: "Matthew Mella",
  headline: "Founding Machine Learning Scientist at a stealth startup",
  about: [
    "Hi, I'm Matt. I'm a founding machine learning scientist at a stealth startup, where I build AI models of patient biology to identify which patients are most likely to respond to a new treatment.",
    "My work spans multimodal patient models, single-cell foundation models and drug-response prediction. I studied applied math at BYU.",
  ],
  links: [
    { label: "Email", href: "mailto:matthmella@gmail.com" },
    { label: "GitHub", href: "https://github.com/elmella" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mattmella/" },
    { label: "X / Twitter", href: "https://x.com/_elmella" },
  ] satisfies Link[],
};

export const experience: Role[] = [
  {
    org: "Stealth Startup",
    orgNote: "~$20M raised",
    title: "Founding Machine Learning Scientist",
    location: "San Francisco, California",
    dates: "Nov 2024 – Present",
    points: [
      "Co-developed a multimodal AI model of 14,000+ blood-cancer patients and built its DNA-sequencing component; the model beat clinical risk scores by up to 2x on 7 external trials and nominated drug targets confirmed in vitro.",
      "Led a team of 4 to pretrain a 500M-parameter single-cell foundation model with flow matching on 100M+ cells (Ray, DDP, 16 GPUs), outperforming leading published models on perturbation prediction.",
      "Sped up model training with a transcriptomics data loader 100x+ faster than standard tools and GPU optimizations that raised throughput ~8x; built secure AWS infrastructure for terabytes of patient data.",
      "Led a team of 3 on the company's first pilot with a global pharma, correctly identifying the mechanism of action of 2 blinded drugs and building a drug-response model that beat the prior state of the art (R² = 0.88).",
    ],
  },
  {
    org: "Theis Lab, Helmholtz Munich",
    title: "Independent Researcher",
    location: "Remote",
    dates: "June 2025 – Present",
    points: [
      "Chem-PerturBridge (NeurIPS 2026): a harmonized resource of 1.25M drug-treated gene-expression samples from 8 assay types, with a benchmark of how consistently drug effects reproduce across datasets.",
    ],
  },
  {
    org: "Pattern",
    href: "https://pattern.com/",
    title: "Data Science Intern",
    location: "Lehi, Utah",
    dates: "Aug 2021 – Sept 2022",
    points: [
      "A market-share and review-trend analysis of 300M+ Amazon products that led to a new skincare brand launch.",
      "An NLP analysis of sentiment and themes across thousands of customer reviews, used in due diligence for a $22M acquisition.",
    ],
    links: [{ label: "Interactive dashboard: Where To Build →", href: "#/where-to-build" }],
  },
  {
    org: "Contrary",
    href: "https://contrary.com/",
    title: "Venture Partner",
    location: "",
    dates: "",
    points: [],
  },
];

export const projects: Project[] = [
  {
    name: "Chem-PerturBridge",
    title: "Chem-PerturBridge: a harmonized compendium of small molecule perturbation transcriptomic effects",
    tagline: "NeurIPS 2026 · with the Theis Lab, Helmholtz Munich",
    description:
      "A harmonized collection of 12 datasets measuring how 37,000+ drugs change gene expression. The same drug's effects agree only loosely across datasets, yet models trained on the pooled data predict unseen compounds better.",
    links: [
      { label: "Dataset", href: "https://huggingface.co/datasets/theislab/chem-perturbridge" },
      { label: "Pipeline code", href: "https://github.com/theislab/Chem-PerturBridge" },
      { label: "Analysis code", href: "https://github.com/theislab/Chem-PerturBridge_analysis" },
    ],
  },
  {
    name: "HMM Diarization",
    tagline: "Speaker identification from text",
    description:
      "A Conditional Hidden Markov Model that identifies speakers in written transcripts, trained on 19,000 NPR episode transcripts. Reaches 77% accuracy while staying far cheaper and more interpretable than deep learning approaches.",
    links: [{ label: "GitHub", href: "https://github.com/elmella/hmm-diarization" }],
  },
  {
    name: "Somethin' Fishy",
    tagline: "Optimal control for agent coordination",
    description:
      "Uses Pontryagin's Maximum Principle and bang-bang control to route a fleet of fishing ships for maximum harvest, a template for coordinating any group of agents visiting points of interest.",
    links: [{ label: "GitHub", href: "https://github.com/elmella/somethin-fishy" }],
  },
  {
    name: "Flight of the Bumblebees",
    tagline: "Dynamical systems modeling",
    description:
      "A gravity-inspired, first-order dynamical system simulating bees flying home through a field of distracting flowers, with applications to behavioral models of agents pursuing a goal amid distractions.",
    links: [{ label: "GitHub", href: "https://github.com/elmella/all-the-buzz" }],
  },
  {
    name: "How Interest-ing",
    tagline: "Forecasting Federal Reserve decisions",
    description:
      "Regression and classification models predicting changes in the federal funds rate from economic indicators collected from FRED, OECD and other sources.",
    links: [{ label: "GitHub", href: "https://github.com/elmella/how-interest-ing" }],
  },
];

export const education = {
  school: "Brigham Young University",
  degree: "BS, Applied Mathematics",
  dates: "April 2025",
  notes: [] as string[],
};

export const dashboards: Dashboard[] = [
  {
    slug: "where-to-build",
    name: "Where To Build",
    tagline: "Built at Pattern · Tableau",
    description:
      "An in-depth market-sizing and strategy tool built on product-level data across all of Amazon US.",
    src: tableau("WheretoBuild/WheretoBuild"),
  },
];
