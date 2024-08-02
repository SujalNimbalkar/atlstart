import React from "react";
import { ReactComponent as ExpertiseIcon } from "../assets/expertise-icon.svg";
import { ReactComponent as StrategyIcon } from "../assets/strategy-icon.svg";
import { ReactComponent as FutureProofIcon } from "../assets/futureproof-icon.svg";
import { ReactComponent as TransformationIcon } from "../assets/transformation-icon.svg";

const WhyAltStart = () => {
  return (
    <section className="bg-white text-black py-20 font-syne">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 uppercase tracking-wider mb-2">
            Why AltStart
          </p>
          <h2 className="text-4xl font-bold text-black">
            Forge the AI Edge in Your Workforce
          </h2>
          <p className="text-lg mt-4">
            The future of business is powered by AI fluency. AltStart equips
            your teams with the cutting-edge skills and strategic thinking to
            become AI-ready. Here's how we unlock your organization's potential:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <ExpertiseIcon className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">AI Expertise, Unleashed</h3>
            <p>
              We go beyond basic training, crafting comprehensive programs that
              transform your workforce into AI specialists.
            </p>
          </div>
          <div>
            <StrategyIcon className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Strategic Advantage</h3>
            <p>
              Our training isn't just about technical skills. We foster a deep
              understanding of how to leverage AI for strategic advantage.
            </p>
          </div>
          <div>
            <FutureProofIcon className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Future-Proof Your Workforce
            </h3>
            <p>
              The world of work is constantly evolving. AltStart equips your
              teams with the adaptability and critical thinking required to
              thrive in an AI-driven future.
            </p>
          </div>
          <div>
            <TransformationIcon className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Success Through Transformation
            </h3>
            <p>
              We don't just train; we partner with you. We work collaboratively
              to understand your unique needs and goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAltStart;
