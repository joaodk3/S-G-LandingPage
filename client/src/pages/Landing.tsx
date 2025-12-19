import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useSubmitInquiry } from "@/hooks/use-contact";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import aboutImage from "@assets/generated_images/modern_executive_boardroom_cityscape.png";
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
      phone: "",
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
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Gentle, Delicate Logo */}
              <a href="#" className="flex items-center gap-3 group">
                <span className="text-xl font-light tracking-wide text-primary" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
                  S&G
                </span>
                <span className="hidden sm:block h-4 w-px bg-border/60"></span>
                <span className="hidden sm:block text-[11px] font-normal text-muted-foreground tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Global Advisors
                </span>
              </a>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-64}
                  className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 tracking-wide"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ScrollLink to="contact" smooth={true} duration={800} offset={-64}>
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 text-sm font-medium tracking-wide">
                  Contact Us
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
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 z-0 opacity-[0.02] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm font-medium text-muted-foreground tracking-[0.2em] uppercase mb-6"
            >
              Strategic Advisory
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-[1.1] tracking-tight mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Business Expansion.
              <br />
              <span className="text-muted-foreground">Investment Strategy.</span>
              <br />
              Global Mobility.
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              We help companies, entrepreneurs, and investors expand with clarity, structure, and strategic execution — from market entry to capital readiness.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ScrollLink to="contact" smooth={true} duration={800} offset={-64}>
                <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto font-medium">
                  Partner with Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ScrollLink>
              <ScrollLink to="services" smooth={true} duration={800} offset={-64}>
                <Button variant="outline" size="lg" className="text-base px-8 py-6 border-border hover:bg-muted/50 w-full sm:w-auto font-medium">
                  Explore Services
                </Button>
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-sm font-medium text-muted-foreground tracking-[0.2em] uppercase mb-4">About the Firm</p>
              <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-8 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Strategic Guidance for Complex Markets
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                S&G Global Advisors is a boutique consulting firm specializing in international business expansion, investment strategy, and workforce mobility.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We support organizations at every stage — from structuring and compliance to capital formation and operational execution — delivering end-to-end solutions with precision, transparency, and technical depth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative h-[350px] md:h-[450px] overflow-hidden"
            >
              <img 
                src={aboutImage} 
                alt="Modern executive boardroom with panoramic city view" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-sm font-medium text-muted-foreground tracking-[0.2em] uppercase mb-4">Our Expertise</p>
            <h3 className="text-3xl md:text-4xl font-semibold text-primary" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive Advisory Services
            </h3>
          </motion.div>

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
              subtext="CRM, Workflow Automation, AI Implementation"
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
      <section id="contact" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-sm font-medium text-white/60 tracking-[0.2em] uppercase mb-4">Contact Us</p>
              <h3 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Ready to expand, invest, or build?
              </h3>
              <p className="text-base text-white/70 leading-relaxed mb-10">
                S&G Global Advisors provides structured, high-impact consulting tailored to your business goals. Reach out to discuss how we can support your vision.
              </p>
              
              <div className="space-y-4 text-white/70">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <p className="text-sm">Global Market Entry Strategy</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <p className="text-sm">Operational Excellence & Compliance</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <p className="text-sm">Capital & Investment Readiness</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white p-8 md:p-10"
            >
              <h3 className="text-xl font-semibold text-primary mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Send us a message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary/80 text-sm font-medium">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-slate-50 border-slate-200 text-primary h-11 focus:ring-primary/20" {...field} />
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
                        <FormLabel className="text-primary/80 text-sm font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" className="bg-slate-50 border-slate-200 text-primary h-11 focus:ring-primary/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary/80 text-sm font-medium">Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" className="bg-slate-50 border-slate-200 text-primary h-11 focus:ring-primary/20" {...field} />
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
                        <FormLabel className="text-primary/80 text-sm font-medium">Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Ltd." className="bg-slate-50 border-slate-200 text-primary h-11 focus:ring-primary/20" {...field} />
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
                        <FormLabel className="text-primary/80 text-sm font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or inquiry..." 
                            className="bg-slate-50 border-slate-200 text-primary min-h-[100px] focus:ring-primary/20 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-medium text-sm transition-all"
                    disabled={submitInquiry.isPending}
                  >
                    {submitInquiry.isPending ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/50 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <a href="#" className="flex items-center gap-3 mb-4">
                <span className="text-xl font-light tracking-wide text-white" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
                  S&G
                </span>
                <span className="h-4 w-px bg-white/30"></span>
                <span className="text-[11px] font-normal text-white/60 tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Global Advisors
                </span>
              </a>
              <p className="text-sm leading-relaxed max-w-xs">
                Empowering businesses with clarity, structure, and strategy for global success.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4 text-sm tracking-wide">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><ScrollLink to="services" smooth={true} duration={800} offset={-64} className="hover:text-white cursor-pointer transition-colors duration-300">Business Expansion</ScrollLink></li>
                <li><ScrollLink to="services" smooth={true} duration={800} offset={-64} className="hover:text-white cursor-pointer transition-colors duration-300">Corporate Structuring</ScrollLink></li>
                <li><ScrollLink to="services" smooth={true} duration={800} offset={-64} className="hover:text-white cursor-pointer transition-colors duration-300">Capital Advisory</ScrollLink></li>
                <li><ScrollLink to="services" smooth={true} duration={800} offset={-64} className="hover:text-white cursor-pointer transition-colors duration-300">Due Diligence</ScrollLink></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4 text-sm tracking-wide">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Based in United States</li>
                <li>Global Reach</li>
                <li className="pt-2">
                  <ScrollLink to="contact" smooth={true} duration={800} offset={-64} className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                    Get in touch
                  </ScrollLink>
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
