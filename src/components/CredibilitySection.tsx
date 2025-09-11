import React from 'react';
import { Container } from './Container';
import { AwardIcon, DatabaseIcon } from 'lucide-react';
export const CredibilitySection: React.FC = () => {
  return <section className="py-20 bg-slate-950 relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built by{' '}
            <span className="bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] text-transparent bg-clip-text">
              Cloud Cost Experts
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our founder has been running{' '}
            <a href="https://cloudforecast.io" target="_blank" rel="noopener noreferrer" className="text-[#ff8a3b] hover:underline">
              CloudForecast
            </a>{' '}
            since 2019, helping companies optimize millions in cloud spending.
            Now we're bringing that same expertise specifically to Databricks
            cost optimization.
          </p>
          <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/50 mb-8">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <DatabaseIcon size={24} className="text-[#ce5732]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Built on Databricks System Tables
                </h3>
                <p className="text-gray-300">
                  We use the same data sources as Databricks' own cost
                  attribution, with advanced algorithms for accurate query-level
                  cost distribution. No guesswork, just precise attribution
                  based on actual resource usage.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] p-[1px] rounded-full">
              <div className="bg-slate-900 rounded-full px-6 py-3 flex items-center">
                <AwardIcon size={20} className="text-[#ff8a3b] mr-2" />
                <span className="font-bold">
                  6+ Years Cloud Cost Optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#ce5732]/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#ff8a3b]/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-20 right-[15%] w-16 h-16 border border-slate-700/30 rounded-full"></div>
      <div className="absolute bottom-40 left-[10%] w-14 h-14 border border-slate-700/30 rounded-lg rotate-12"></div>
    </section>;
};