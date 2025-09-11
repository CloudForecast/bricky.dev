import React from 'react';
import { Container } from './Container';
import { SearchIcon, UsersIcon, ServerIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from './Button';
export const SimplifiedSection: React.FC = () => {
  return <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The{' '}
            <span className="bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] text-transparent bg-clip-text">
              Black Box
            </span>{' '}
            of Databricks Costs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Most teams struggle to understand where their Databricks spend is
            going — especially which queries, users, and clusters are driving
            the bill.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          <FeatureCard icon={<SearchIcon className="text-[#ce5732]" size={24} />} title="You Don't Know Which Queries Drive Costs" description="Without query-level attribution, teams can't see which workloads are consuming the budget — making optimization guesswork." gradient="from-[#ce5732]/20 to-[#ff8a3b]/20" borderColor="border-[#ce5732]/30" />
          <FeatureCard icon={<UsersIcon className="text-[#e06e34]" size={24} />} title="No Clarity on User-Level Spend" description="Databricks costs often feel shared and unowned. Without visibility by user or team, accountability and chargeback are impossible." gradient="from-[#e06e34]/20 to-[#ff8a3b]/20" borderColor="border-[#e06e34]/30" />
          <FeatureCard icon={<ServerIcon className="text-[#ff8a3b]" size={24} />} title="Wasted Money on Inefficient Clusters" description="Idle resources, oversized clusters, and long-running jobs silently drain budgets every day." gradient="from-[#ff8a3b]/20 to-[#ce5732]/20" borderColor="border-[#ff8a3b]/30" />
        </div>
        <div className="flex justify-center mt-12 relative z-10">
          <Button primary href="https://savvycal.com/bricky/chat-with-founders?d=30" target="_blank" rel="noopener noreferrer">
            <span className="flex items-center">
              Unbox Your Databricks Costs
              <ArrowRightIcon size={16} className="ml-2" />
            </span>
          </Button>
        </div>
      </Container>
      {/* Modern background elements */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ce5732]/5 to-[#ff8a3b]/5 rounded-full blur-[100px]"></div>
      {/* Geometric elements */}
      <div className="absolute top-20 left-[15%] w-20 h-20 border border-slate-700/30 rounded-full"></div>
      <div className="absolute bottom-40 right-[10%] w-14 h-14 border border-slate-700/30 rounded-lg rotate-12"></div>
    </section>;
};
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  gradient,
  borderColor
}) => {
  return <div className={`group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border ${borderColor} hover:border-[#ff8a3b]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#ff8a3b]/5 hover:translate-y-[-5px]`}>
      <div className={`flex justify-center mb-6 w-16 h-16 mx-auto bg-gradient-to-br ${gradient} rounded-2xl p-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
      <div className={`mt-6 h-1 w-0 mx-auto bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] rounded-full transition-all duration-500 group-hover:w-1/2`}></div>
    </div>;
};