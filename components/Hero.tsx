'use client';

import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={
          {
            backgroundImage:
              'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        }
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-400/30">
            <TrendingUp className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Trending in Retail Innovation</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the Future of
            <span className="text-blue-400"> Retail Shopping</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
            Connect with trending products, share your experiences, and discover what's popular in your community. Join thousands of shoppers making smarter choices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Explore Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              See What's Trending
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-sm text-gray-400">Active Shoppers</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">100K+</div>
              <div className="text-sm text-gray-400">Product Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}