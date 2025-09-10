import React from 'react';
import { Container } from './Container';
import { UsersIcon, BarChart2Icon, BriefcaseIcon } from 'lucide-react';
export const TargetUsersSection: React.FC = () => {
  return <section id="users" className="py-20 bg-slate-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who{' '}
            <span className="bg-gradient-to-r from-[#ff3b3b] to-[#ff6a3b] text-transparent bg-clip-text">
              Benefits
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bricky is designed for everyone in the Databricks ecosystem
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <UserCard icon={<UsersIcon size={40} className="text-[#ff3b3b]" />} title="Data Leaders" description="Directors, VPs, and Heads of Data/Engineering who need visibility and accountability across their organization." examples={['Track team spending', 'Justify ROI', 'Allocate costs']} />
          <UserCard icon={<BarChart2Icon size={40} className="text-[#ff5a3b]" />} title="FinOps Teams" description="Finance and operations professionals who need to tie Databricks usage into broader cloud spend management." examples={['Unify cloud billing', 'Forecast expenses', 'Identify waste']} />
          <UserCard icon={<BriefcaseIcon size={40} className="text-[#ff6a3b]" />} title="Partners & Consultants" description="Databricks partners and consultants who want to offer added value to their clients with cost optimization." examples={['Enhance client offerings', 'Prove value delivery', 'Build trust']} />
        </div>
      </Container>
    </section>;
};
interface UserCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}
const UserCard: React.FC<UserCardProps> = ({
  icon,
  title,
  description,
  examples
}) => {
  return <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-[#ff6a3b]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6a3b]/10 h-full flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="mt-auto">
        <div className="text-sm text-gray-400 mb-2">Perfect for:</div>
        <ul className="space-y-2">
          {examples.map((example, index) => <li key={index} className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#ff3b3b] to-[#ff6a3b] mr-2"></span>
              <span>{example}</span>
            </li>)}
        </ul>
      </div>
    </div>;
};