import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Menu, 
  X,
  ArrowRight,
  DollarSign,
  Globe,
  Lightbulb,
  TrendingUp,
  Settings,
  Users,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FoundersProgram() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/#about" },
    { name: "Services", to: "/#services" },
    { name: "Contact", to: "/#contact" },
  ];

  const programFeatures = [
    {
      number: "1",
      title: "Investment",
      icon: DollarSign,
      description: "$25,000–$150,000 initial checks.",
      details: "Follow-on support for scalable models",
    },
    {
      number: "2",
      title: "International Expansion Support",
      icon: Globe,
      description: "Provided at no cost:",
      details: [
        "U.S. market-entry roadmap",
        "Corporate structuring & compliance guidance",
        "Incentives & location analysis",
        "Global partnerships & expansion pathways",
      ],
    },
    {
      number: "3",
      title: "Strategic Advisory",
      icon: Lightbulb,
      description: "Included for all accepted startups:",
      details: [
        "Go-to-market strategy",
        "Product & pricing refinement",
        "Competitor & market benchmarking",
        "Operational scaling frameworks",
      ],
    },
    {
      number: "4",
      title: "Capital Readiness",
      icon: TrendingUp,
      description: "We prepare founders to raise:",
      details: [
        "Pitch deck enhancement",
        "Financial model review",
        "Data room setup",
        "Investor narrative development",
      ],
    },
    {
      number: "5",
      title: "Operations & Systems Support",
      icon: Settings,
      description: "Essential infrastructure:",
      details: [
        "CRM setup",
        "Workflow automation",
        "AI-powered tools",
        "Dashboard and analytics",
      ],
    },
    {
      number: "6",
      title: "Founder Support",
      icon: Users,
      description: "Ongoing partnership:",
      details: [
        "Monthly strategy calls",
        "Direct access to S&G partners",
        "Crisis navigation & decision support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <span className="text-xl font-light tracking-wide text-primary" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
                  S&G
                </span>
                <span className="hidden sm:block h-4 w-px bg-border/60"></span>
                <span className="hidden sm:block text-[11px] font-normal text-muted-foreground tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Global Advisors
                </span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.to}
                  className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/#contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 text-sm font-medium tracking-wide">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 z-0 opacity-[0.02] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm font-medium text-muted-foreground tracking-[0.2em] uppercase mb-6"
            >
              S&G International Founders Program
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-[1.1] tracking-tight mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              For International Founders
              <br />
              <span className="text-muted-foreground">Expanding Globally</span>
              <br />
              <span className="text-primary">Full-Service Support + Investment</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-12"
            >
              The S&G Program is a selective initiative designed to identify high-potential founders and help them scale faster with the combined power of S&G Capital Partners and S&G Global Advisors.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base text-muted-foreground leading-relaxed max-w-3xl"
            >
              We invest capital into startups and support them with deep operational, strategic, and global-expansion expertise — enabling them to grow smarter, faster, and more efficiently.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-sm font-medium text-muted-foreground tracking-[0.2em] uppercase mb-4">Partnership, Not Just Investment</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              S&G is not just an investor, but a practical, hands-on partner.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="py-24 md:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {programFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="bg-white p-8 md:p-10 border border-border/60 hover:border-border hover:shadow-lg transition-all duration-500"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-semibold text-primary">{feature.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                        <h3 className="text-xl font-semibold text-primary" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      {Array.isArray(feature.details) ? (
                        <ul className="space-y-3">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary/70 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.details}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ready to Scale Your Startup Globally?
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              Join the S&G International Founders Program and get the capital, expertise, and strategic support you need to expand internationally.
            </p>
            <Link href="/#contact">
              <Button size="lg" variant="secondary" className="text-base px-8 py-6 font-medium">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/50 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <span className="text-xl font-light tracking-wide text-white" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
                  S&G
                </span>
                <span className="h-4 w-px bg-white/30"></span>
                <span className="text-[11px] font-normal text-white/60 tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Global Advisors
                </span>
              </Link>
              <p className="text-sm leading-relaxed max-w-xs">
                Empowering businesses with clarity, structure, and strategy for global success.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4 text-sm tracking-wide">Program</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/founders-program" className="hover:text-white transition-colors duration-300">International Founders Program</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors duration-300">Services</Link></li>
                <li><Link href="/#about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4 text-sm tracking-wide">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Based in United States</li>
                <li>Global Reach</li>
                <li className="pt-2">
                  <Link href="/#contact" className="text-white/80 hover:text-white transition-colors duration-300">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 items-center text-xs">
            <p>&copy; {new Date().getFullYear()} S&G Global Advisors. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

