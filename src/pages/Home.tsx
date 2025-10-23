import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AtomIcon,
  Zap,
  Users,
  BookOpen,
  MessageSquare,
  Download,
  Video,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <AtomIcon className="w-20 h-20 text-primary animate-spin-slow" />
              <div className="text-left">
                <h1 className="text-6xl md:text-7xl font-bold text-glow">AJA FORUM</h1>
                <p className="text-2xl md:text-3xl text-primary">FOR PHYSICS</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Explore. Question. <span className="text-primary text-glow">Discover.</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a futuristic learning platform where students and teachers connect in real-time
              to unlock the mysteries of physics through interactive Q&A, multimedia resources, and
              collaborative learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                  <Users className="w-5 h-5 mr-2" />
                  Student Portal
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="glow" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Teacher Portal
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 particle-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-primary text-glow">AJA Forum?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience physics education like never before with our cutting-edge platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/30 hover-glow">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Interactive Q&A</h3>
              <p className="text-muted-foreground">
                Post questions via text, audio, or video and get expert answers from experienced
                physics teachers in real-time.
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-secondary/30 hover-glow">
              <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Rich Resources</h3>
              <p className="text-muted-foreground">
                Access comprehensive study materials including notes, slides, PDFs, and video
                lectures curated by expert teachers.
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-accent/30 hover-glow">
              <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Multimedia Support</h3>
              <p className="text-muted-foreground">
                Learn through various formats - text, audio, and video content designed to match
                your learning style and preferences.
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/30 hover-glow">
              <div className="w-16 h-16 rounded-xl gradient-glow flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Real-time Notifications</h3>
              <p className="text-muted-foreground">
                Stay updated with instant notifications when teachers answer your questions or
                upload new study materials.
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-secondary/30 hover-glow">
              <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Expert Teachers</h3>
              <p className="text-muted-foreground">
                Connect with qualified physics educators who are passionate about helping you
                understand complex concepts with clarity.
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-accent/30 hover-glow">
              <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your learning journey with detailed dashboards showing your questions,
                answers, and resource downloads.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-card/80 backdrop-blur-sm border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                About <span className="text-primary text-glow">AJA Forum</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AJA Forum for Physics is a revolutionary educational platform designed to bridge the
                gap between students seeking knowledge and teachers eager to share their expertise.
                We've created an immersive, futuristic learning environment that makes physics
                accessible, engaging, and exciting.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform leverages cutting-edge technology to provide seamless communication,
                rich multimedia content, and an intuitive user experience. Whether you're a student
                curious about quantum mechanics or a teacher passionate about sharing the wonders of
                the universe, AJA Forum is your gateway to collaborative physics education.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 particle-bg">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm border-primary/30 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-primary text-glow">Physics Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students and teachers already exploring the universe of physics
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-lg py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AtomIcon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-bold text-lg">AJA FORUM</h3>
                  <p className="text-xs text-primary">FOR PHYSICS</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering physics education through technology and collaboration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/auth" className="hover:text-primary transition-colors">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="hover:text-primary transition-colors">
                    Teacher Portal
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@ajaforum.edu</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Location: Physics Institute, University Campus</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 AJA Forum for Physics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
