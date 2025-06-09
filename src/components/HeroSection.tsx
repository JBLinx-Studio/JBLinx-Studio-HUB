
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Welcome to the Future of Tech</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              JBLinx Studio
            </span>
            <br />
            <span className="text-muted-foreground">Innovation Hub</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Your premier destination for cutting-edge technology solutions, innovative projects, and comprehensive digital services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <button className="group bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 flex items-center space-x-2">
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-muted transition-colors duration-200">
              Learn More
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 animate-slide-in">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">Optimized performance and cutting-edge technology for maximum efficiency.</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 animate-slide-in">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground">Enterprise-grade security and reliability you can trust for your business.</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 animate-slide-in">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation First</h3>
              <p className="text-muted-foreground">Stay ahead with the latest technologies and innovative solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
