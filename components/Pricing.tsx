'use client';

import { Check, Zap, Shield, Heart } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Unlimited product ratings and reviews',
    'Access to trending products dashboard',
    'Follow unlimited shoppers',
    'Share products across all platforms',
    'Join community discussions',
    'Verified purchase badges',
    'Personalized recommendations',
    'Priority customer support',
    'Early access to new features',
    'Ad-free browsing experience',
  ];

  const trustBadges = [
    { icon: Shield, text: 'Secure Payment' },
    { icon: Zap, text: 'Instant Access' },
    { icon: Heart, text: '30-Day Guarantee' },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join thousands of smart shoppers for just $29. One price, all features, unlimited possibilities.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-500">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Premium Access</h3>
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">POPULAR</span>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-6xl font-bold text-gray-900">$29</span>
                  <span className="text-xl text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">Everything you need to shop smarter</p>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-8 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-6"
              >
                Start Your Journey Today
              </a>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="text-center">
                    <badge.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-xs text-gray-600">{badge.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 text-sm">
              Cancel anytime. No questions asked. 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}