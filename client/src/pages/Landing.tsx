import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useSubmitInquiry } from "@/hooks/use-contact";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { 
  Globe, 
  Building2, 
  Briefcase, 
  Users, 
  Cpu, 
  FileSearch, 
  Menu, 
  X,
  ArrowRight
} from "lucide-react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const submitInquiry = useSubmitInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    submitInquiry.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo Typography */}
              <a href="#" className="font-display font-bold text-2xl tracking-tighter text-primary">
                S&G <span className="text-muted-foreground font-sans text-sm font-normal tracking-widest ml-1 uppercase">Global Advisors</span>
              </a>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button className="rounded-none bg-primary hover:bg-primary/90 text-white px-6">
                  Get in Touch
                </Button>
              </ScrollLink>
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
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary font-display leading-tight tracking-tight mb-8">
              Business Expansion. <br />
              <span className="text-slate-500">Investment Strategy.</span> <br />
              Global Mobility.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10 font-light">
              We help companies, entrepreneurs, and investors expand with clarity, structure, and strategic execution — from market entry to capital readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button size="lg" className="rounded-none text-lg px-8 py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Partner with Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ScrollLink>
              <ScrollLink to="services" smooth={true} duration={500}>
                <Button variant="outline" size="lg" className="rounded-none text-lg px-8 py-6 border-primary/20 hover:bg-primary/5 w-full sm:w-auto">
                  Explore Services
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">About the Firm</h2>
              <h3 className="text-4xl font-display font-bold text-primary mb-6">Strategic Guidance for Complex Markets</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                S&G Global Advisors is a boutique consulting firm specializing in international business expansion, investment strategy, and workforce mobility.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We support organizations at every stage — from structuring and compliance to capital formation and operational execution — delivering end-to-end solutions with precision, transparency, and technical depth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] bg-slate-100 overflow-hidden"
            >
              {/* Abstract decorative element representing structure and clarity */}
              <div className="absolute inset-0 bg-primary/5"></div>
              <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-200/50 transform skew-x-12 translate-x-16"></div>
              
              {/* Corporate "office" feel without stock photo - using typography and shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center p-8 border border-primary/10 bg-white/50 backdrop-blur-sm max-w-sm">
                    <span className="block text-6xl font-display font-bold text-primary/10 mb-2">S&G</span>
                    <span className="text-sm font-medium text-primary uppercase tracking-widest">Global Advisors</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-display font-bold text-primary">Comprehensive Advisory Services</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Business & Expansion Consulting"
              description="Navigating new markets, validating opportunities, and launching operations with strategic precision."
              subtext="Business Plan, Market Analysis, Go-to-Market"
              icon={Globe}
              delay={0}
            />
            <ServiceCard
              title="Corporate Structuring & Compliance"
              description="Establishing the legal and operational foundation to scale while meeting regulatory requirements."
              subtext="Formation, Governance, Licensing"
              icon={Building2}
              delay={0.1}
            />
            <ServiceCard
              title="Investment & Capital Advisory"
              description="Preparing businesses for capital raising and institutional readiness through rigorous financial planning."
              subtext="Financial Modeling, Feasibility, Capital Structure"
              icon={Briefcase}
              delay={0.2}
            />
            <ServiceCard
              title="Workforce & Mobility Solutions"
              description="Connecting companies with qualified workforce pipelines to ensure operational continuity."
              subtext="Staffing, RPO, Mobility Program"
              icon={Users}
              delay={0.3}
            />
            <ServiceCard
              title="Automation & Systems Consulting"
              description="Building modern infrastructure for fast-growing companies to streamline workflows."
              subtext="CRM, Workflow Automation, AI-Driven Docs"
              icon={Cpu}
              delay={0.4}
            />
            <ServiceCard
              title="Due Diligence Services"
              description="Evaluating operations, finances, and investment fundamentals to mitigate risk."
              subtext="Operational, Financial, Commercial Due Diligence"
              icon={FileSearch}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Contact Us</h2>
              <h3 className="text-4xl font-display font-bold mb-6">Ready to expand, invest, or build?</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                S&G Global Advisors provides structured, high-impact consulting tailored to your business goals. Reach out to discuss how we can support your vision.
              </p>
              
              <div className="space-y-6 text-slate-300">
                <div className="flex items-start">
                  <div className="w-12 h-[1px] bg-accent mt-3 mr-4"></div>
                  <p>Global Market Entry Strategy</p>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-[1px] bg-accent mt-3 mr-4"></div>
                  <p>Operational Excellence & Compliance</p>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-[1px] bg-accent mt-3 mr-4"></div>
                  <p>Capital & Investment Readiness</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-6 font-display">Send us a message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-slate-50 border-slate-200 text-primary rounded-none h-12 focus:ring-primary/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" className="bg-slate-50 border-slate-200 text-primary rounded-none h-12 focus:ring-primary/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Ltd." className="bg-slate-50 border-slate-200 text-primary rounded-none h-12 focus:ring-primary/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or inquiry..." 
                            className="bg-slate-50 border-slate-200 text-primary rounded-none min-h-[120px] focus:ring-primary/20 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium rounded-none text-lg transition-all"
                    disabled={submitInquiry.isPending}
                  >
                    {submitInquiry.isPending ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <a href="#" className="font-display font-bold text-2xl tracking-tighter text-white mb-4 block">
                S&G <span className="text-slate-400 font-sans text-sm font-normal tracking-widest ml-1 uppercase">Global Advisors</span>
              </a>
              <p className="text-sm leading-relaxed max-w-xs">
                Empowering businesses with clarity, structure, and strategy for global success.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><ScrollLink to="services" smooth={true} className="hover:text-white cursor-pointer transition-colors">Business Expansion</ScrollLink></li>
                <li><ScrollLink to="services" smooth={true} className="hover:text-white cursor-pointer transition-colors">Corporate Structuring</ScrollLink></li>
                <li><ScrollLink to="services" smooth={true} className="hover:text-white cursor-pointer transition-colors">Capital Advisory</ScrollLink></li>
                <li><ScrollLink to="services" smooth={true} className="hover:text-white cursor-pointer transition-colors">Due Diligence</ScrollLink></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Based in United States
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Global Reach
                </li>
                <li className="mt-4">
                  <ScrollLink to="contact" smooth={true} className="text-white border-b border-white/30 hover:border-white pb-1 transition-all cursor-pointer">
                    Contact our team
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} S&G Global Advisors. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
