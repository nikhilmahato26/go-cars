import { 
  Car, Shield, Heart, Home, Briefcase, User, GraduationCap, Building, ShieldCheck, FileCheck 
} from 'lucide-react';

export const financeServices = [
  {
    id: 'car-finance',
    title: 'Car Finance',
    category: 'Auto',
    description: 'Quick approval loans for purchasing new or used cars with lowest interest rates and flexible tenures.',
    iconName: 'Car',
    features: ['Up to 90% funding', 'Minimal documentation', 'Low Interest Rates starting at 8.5% p.a.', 'Flexible tenure up to 7 years']
  },
  {
    id: 'vehicle-insurance',
    title: 'Vehicle Insurance',
    category: 'Insurance',
    description: 'Comprehensive third-party and zero-depreciation insurance policies to keep your car secured.',
    iconName: 'Shield',
    features: ['Zero depreciation add-ons', 'Cashless garage network', 'Quick claim settlement', 'No Claim Bonus (NCB) protection']
  },
  {
    id: 'general-insurance',
    title: 'General Insurance',
    category: 'Insurance',
    description: 'Secure your valuable properties, gadgets, travels and assets against unexpected incidents.',
    iconName: 'ShieldCheck',
    features: ['Customized asset covers', 'Instant policy issuance', 'Affordable premiums', '24/7 dedicated support']
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    category: 'Insurance',
    description: 'Ensure premium medical treatment for your family with cashless hospitalization covers.',
    iconName: 'Heart',
    features: ['Cashless treatment in 10,000+ hospitals', 'No pre-policy medical check-up (up to 45 yrs)', 'Tax benefits under Sec 80D', 'Critical illness rider options']
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    category: 'Insurance',
    description: 'Financial security and protection for your loved ones. Plans including term plans and investment policies.',
    iconName: 'FileCheck',
    features: ['High claim settlement ratio', 'Low premium rates for term cover', 'Lump-sum payouts', 'Optional accidental cover']
  },
  {
    id: 'home-loan',
    title: 'Home Loan',
    category: 'Loan',
    description: 'Turn your dream of owning a house into reality with customized mortgage options and easy EMIs.',
    iconName: 'Home',
    features: ['Attractive interest rates', 'Balance transfer facility', 'Tenure up to 30 years', 'Pradhan Mantri Awas Yojana benefits']
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    category: 'Loan',
    description: 'Collateral-free working capital and expansion funds tailored specifically for SMEs and MSMEs.',
    iconName: 'Briefcase',
    features: ['Collateral-free up to ₹50 Lakhs', 'Quick disbursal in 48 hours', 'Flexible repayment schedules', 'Minimal financial statements']
  },
  {
    id: 'personal-loan',
    title: 'Personal Loan',
    category: 'Loan',
    description: 'Unsecured personal credits to manage immediate requirements such as weddings, medical emergencies, or travels.',
    iconName: 'User',
    features: ['Instant eligibility check', 'No end-use restrictions', 'Zero collateral required', 'Interest rates starting from 10.5% p.a.']
  },
  {
    id: 'education-loan',
    title: 'Education Loan',
    category: 'Loan',
    description: 'Finance your children\'s higher education in top national and global universities.',
    iconName: 'GraduationCap',
    features: ['Covers 100% course costs including stay', 'Tax benefit under Section 80E', 'Repayment moratorium during course period', 'Fast approval processing']
  },
  {
    id: 'property-loan',
    title: 'Loan Against Property',
    category: 'Loan',
    description: 'Unlock the value of your residential or commercial real estate for business expansion or personal needs.',
    iconName: 'Building',
    features: ['Lower interest rates than personal loans', 'High loan-to-value (LTV) ratio', 'Longer repayment tenures', 'Continue using your property']
  }
];
