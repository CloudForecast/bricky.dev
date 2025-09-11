import React from 'react';
import { Container } from './Container';
import { BarChartIcon, BellIcon, LineChartIcon, TagIcon, SearchIcon } from 'lucide-react';
export const SolutionSection: React.FC = () => {
  return <section id="solution" className="py-20 relative overflow-hidden bg-slate-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Achieve{' '}
            <span className="bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] text-transparent bg-clip-text">
              Real Outcomes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your databricks cost visibility and optimization solution that
            delivers tangible results
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <FeatureItem icon={<TagIcon className="text-[#ce5732]" size={24} />} title="Reduce Your databricks Spend" description="Stop wasting money on idle clusters and inefficient jobs. Our users often find significant savings in the first month." />
              <FeatureItem icon={<SearchIcon className="text-[#ce5732]" size={24} />} title="Identify Cost-Heavy Queries" description="Identify the 20% of queries driving 80% of your warehouse costs. Focus your optimization efforts where they'll have the biggest impact." />
              <FeatureItem icon={<BellIcon className="text-[#e06e34]" size={24} />} title="Justify Your Budget with Confidence" description="Show your leaders exactly where every dollar is going. Turn cost conversations from defensive to strategic." />
              <FeatureItem icon={<BarChartIcon className="text-[#ff8a3b]" size={24} />} title="Make Smarter, Faster Decisions" description="Get clear, actionable insights delivered directly to you, so you can optimize your data strategy without guesswork." />
              <FeatureItem icon={<LineChartIcon className="text-[#ff8a3b]" size={24} />} title="Free Up Your Engineers' Time" description="Stop wasting valuable engineering hours manually tracking costs. Let your team focus on building, not billing." />
            </div>
          </div>
          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
              <img src="/bricky_hello_transparent_2.png" alt="Bricky saying Hello" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </Container>
      {/* Background elements */}
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#ce5732]/5 rounded-full blur-[100px]"></div>
    </section>;
};
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description
}) => {
  return <div className="flex gap-4">
      <div className="mt-1 bg-slate-800 p-2 rounded-lg">{icon}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>;
};