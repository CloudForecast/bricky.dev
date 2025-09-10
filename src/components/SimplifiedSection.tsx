import React from 'react';
import { Container } from './Container';
import { TagIcon, LineChartIcon, BarChartIcon, HelpCircleIcon } from 'lucide-react';
export const SimplifiedSection: React.FC = () => {
  return <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The{' '}
            <span className="bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] text-transparent bg-clip-text">
              Black Box
            </span>{' '}
            of databricks Costs
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Most databricks users struggle with understanding and controlling
            their costs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          <FeatureCard icon={<TagIcon className="text-[#ce5732]" size={24} />} title="Finally, See Exactly Where Your Money is Going" description="Stop guessing which teams and projects are driving your databricks costs. Get granular attribution down to the workspace, cluster, and job level." gradient="from-[#ce5732]/20 to-[#ff8a3b]/20" borderColor="border-[#ce5732]/30" />
          <FeatureCard icon={<LineChartIcon className="text-[#e06e34]" size={24} />} title="Stop Wasting Money on Inefficient Clusters" description="Identify idle resources, oversized clusters, and inefficient jobs that are silently draining your budget every day." gradient="from-[#e06e34]/20 to-[#ff8a3b]/20" borderColor="border-[#e06e34]/30" />
          <FeatureCard icon={<BarChartIcon className="text-[#ff8a3b]" size={24} />} title="Get a Single, Unified View of All Your Costs" description="Consolidate databricks spending across AWS, Azure, and GCP into one clear dashboard instead of juggling multiple billing systems." gradient="from-[#ff8a3b]/20 to-[#ce5732]/20" borderColor="border-[#ff8a3b]/30" />
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