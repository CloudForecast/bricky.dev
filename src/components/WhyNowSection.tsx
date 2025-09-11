import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { TrendingUpIcon, ZapIcon, BarChart4Icon } from 'lucide-react';
export const WhyNowSection: React.FC = () => {
  return <section id="why-now" className="py-20 relative overflow-hidden bg-slate-950">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why{' '}
              <span className="bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] text-transparent bg-clip-text">
                Now
              </span>{' '}
              Is The Time
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              databricks adoption is exploding, but cost management hasn't
              caught up. Attribution and optimization are pain points actively
              being discussed in the community.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex gap-3">
                <div className="mt-1">
                  <TrendingUpIcon size={20} className="text-[#ce5732]" />
                </div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">Explosive growth</span>{' '}
                  in databricks adoption means more companies struggling with
                  cost visibility
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1">
                  <ZapIcon size={20} className="text-[#e06e34]" />
                </div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">
                    Multi-cloud complexity
                  </span>{' '}
                  makes attribution even more challenging without specialized
                  tools
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1">
                  <BarChart4Icon size={20} className="text-[#ff8a3b]" />
                </div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">
                    Economic pressure
                  </span>{' '}
                  is forcing companies to optimize cloud spending and eliminate
                  waste
                </p>
              </div>
            </div>
            <Button primary href="https://savvycal.com/bricky/chat-with-founders?d=30" target="_blank" rel="noopener noreferrer">
              Schedule a Chat!
            </Button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-[#ce5732]/10 to-[#ff8a3b]/10 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <img src="/bricky_transparent_2.png" alt="Bricky Mascot" className="h-10 w-10 mr-3" />
                <h3 className="text-2xl font-bold">Got Bricks?</h3>
              </div>
              <div className="space-y-6">
                <Testimonial quote="Bricky helped us reduce our databricks spend by 32% in the first month by identifying idle clusters and optimizing job configurations." author="Sarah L." role="VP of Data Engineering" />
                <Testimonial quote="Finally, I can show our CFO exactly where our databricks budget is going and justify the ROI of our data initiatives." author="Michael T." role="Director of Analytics" />
                <Testimonial quote="The automated reports have been a game-changer for our FinOps team. We now have complete visibility across all our cloud platforms." author="Jennifer K." role="Cloud FinOps Manager" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#ff8a3b]/5 rounded-full blur-[100px]"></div>
    </section>;
};
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}
const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role
}) => {
  return <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
      <p className="italic text-gray-300 mb-3">{quote}</p>
      <div>
        <div className="font-medium">{author}</div>
        <div className="text-sm text-gray-400">{role}</div>
      </div>
    </div>;
};