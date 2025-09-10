import React from 'react';
import { Container } from './Container';
import { DollarSignIcon, HelpCircleIcon, PieChartIcon } from 'lucide-react';
export const ProblemSection: React.FC = () => {
  return <section id="problem" className="py-20 bg-slate-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The{' '}
            <span className="bg-gradient-to-r from-[#ff3b3b] to-[#ff6a3b] text-transparent bg-clip-text">
              Problem
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Databricks customers struggle with cost visibility across both DBUs
            and cloud infrastructure
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ProblemCard icon={<HelpCircleIcon size={32} className="text-[#ff3b3b]" />} title="Who's Driving Costs?" description="Leaders can't identify which teams are responsible for Databricks spending, making accountability impossible." />
          <ProblemCard icon={<DollarSignIcon size={32} className="text-[#ff5a3b]" />} title="Complex Attribution" description="DBU costs don't clearly map back to actual workloads, creating a disconnect between usage and billing." />
          <ProblemCard icon={<PieChartIcon size={32} className="text-[#ff6a3b]" />} title="Hidden Optimization" description="Opportunities to optimize clusters and jobs remain invisible without proper visibility tools." />
        </div>
      </Container>
    </section>;
};
interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const ProblemCard: React.FC<ProblemCardProps> = ({
  icon,
  title,
  description
}) => {
  return <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-[#ff6a3b]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6a3b]/10">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>;
};