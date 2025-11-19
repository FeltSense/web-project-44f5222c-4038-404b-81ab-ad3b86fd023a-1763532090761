'use client';

import { Star, TrendingUp, ThumbsUp } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Fashion Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'RetailHub transformed how I shop online. The community reviews are authentic and the trending section helps me discover products I would have never found otherwise. Best shopping platform ever!',
      rating: 5,
      votes: 234,
    },
    {
      name: 'Michael Chen',
      role: 'Tech Reviewer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'The rating system is incredibly intuitive and the verified purchase badges give me confidence in the reviews. I\'ve saved hundreds of dollars by making better purchasing decisions.',
      rating: 5,
      votes: 189,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lifestyle Blogger',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'Following other shoppers with similar tastes has been a game-changer. The social discovery feature is brilliant and I love sharing my finds with my followers. Highly recommend!',
      rating: 5,
      votes: 312,
    },
    {
      name: 'David Park',
      role: 'Home Decor Enthusiast',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'The trending products section is my go-to for staying ahead of the curve. I\'ve discovered so many amazing products and the community is incredibly helpful and supportive.',
      rating: 5,
      votes: 267,
    },
    {
      name: 'Jessica Thompson',
      role: 'Beauty Expert',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      quote: 'As someone who reviews beauty products, RetailHub is essential. The platform makes it easy to share detailed reviews and connect with people who value honest opinions.',
      rating: 5,
      votes: 445,
    },
    {
      name: 'James Wilson',
      role: 'Fitness Coach',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      quote: 'I recommend RetailHub to all my clients looking for quality fitness equipment. The verified reviews and community discussions have helped me find the best products for my gym.',
      rating: 5,
      votes: 198,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">Trusted by 50,000+ Shoppers</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Real reviews from real shoppers who've transformed their shopping experience with RetailHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                <ThumbsUp className="h-4 w-4 mr-1 text-blue-600" />
                <span>{testimonial.votes} people found this helpful</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}