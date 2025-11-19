'use client';

import { TrendingUp, Users, Star, Share2, MessageCircle, Award } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Star,
      title: 'Product Ratings & Reviews',
      description: 'Rate and review products with our intuitive 5-star system. Share detailed feedback and help others make informed purchasing decisions.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Trending Products',
      description: 'Discover what's hot right now. Our algorithm surfaces the most popular and highly-rated products based on community engagement and ratings.',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Users,
      title: 'Social Discovery',
      description: 'Follow shoppers with similar tastes, see what they're buying, and get personalized recommendations from your community.',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Share2,
      title: 'Share Your Finds',
      description: 'Found something amazing? Share it with your network instantly. Build your reputation as a trendsetter in your favorite categories.',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      icon: MessageCircle,
      title: 'Community Discussions',
      description: 'Join conversations about products, ask questions, and get real answers from actual customers. Build connections that matter.',
      color: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
    {
      icon: Award,
      title: 'Verified Purchases',
      description: 'Trust badges and verified purchase indicators ensure authentic reviews. Make confident decisions based on genuine customer experiences.',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to Shop Smarter
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Powerful features designed to help you discover, rate, and share the products you love with a community of like-minded shoppers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}