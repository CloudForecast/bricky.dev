import React from 'react';
import { Container } from './Container';
import { TargetIcon, UsersIcon, DatabaseIcon } from 'lucide-react';
export const QueryAttributionSection: React.FC = () => {
  return <section className="py-20 bg-slate-900 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] text-transparent bg-clip-text">
              Query-Level
            </span>{' '}
            Cost Attribution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See exactly which queries and users are driving your warehouse
            costs. Enable accurate chargeback and identify optimization
            opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          <FeatureCard icon={<TargetIcon className="text-[#ce5732]" size={24} />} title="Identify Cost-Heavy Queries" description="Identify the 20% of queries driving 80% of your warehouse costs. Focus your optimization efforts where they'll have the biggest impact." />
          <FeatureCard icon={<UsersIcon className="text-[#e06e34]" size={24} />} title="User-Level Attribution" description="Attribute warehouse costs to specific users and teams for accurate chargeback and showback models." />
          <FeatureCard icon={<DatabaseIcon className="text-[#ff8a3b]" size={24} />} title="Cost-Per-Query Insights" description="See exactly what each query costs to run. Stop wondering why your warehouse bills are so high." />
        </div>
      </Container>
      {/* Modern background elements */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#ff8a3b]/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#ce5732]/5 rounded-full blur-[100px]"></div>
      {/* Geometric elements */}
      <div className="absolute top-20 right-[15%] w-16 h-16 border border-slate-700/30 rounded-full"></div>
      <div className="absolute bottom-40 left-[10%] w-14 h-14 border border-slate-700/30 rounded-lg rotate-12"></div>
    </section>;
};
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description
}) => {
  return <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/30 hover:border-[#ff8a3b]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#ff8a3b]/5 hover:translate-y-[-5px] group">
      <div className="flex justify-center mb-6 w-16 h-16 mx-auto bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
      <div className="mt-6 h-1 w-0 mx-auto bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] rounded-full transition-all duration-500 group-hover:w-1/2"></div>
    </div>;
};