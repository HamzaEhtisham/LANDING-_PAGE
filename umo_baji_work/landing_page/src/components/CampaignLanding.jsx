import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Award,
  Globe,
  TrendingUp,
  Users,
  Briefcase,
  GraduationCap,
  Phone,
  Linkedin,
} from "lucide-react";

// Floating Card Component
const FloatingCard = ({ icon: Icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-6 rounded-2xl border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/50">
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
};

// Main Component
export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080b1a] text-white overflow-x-hidden relative">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl -top-96 -left-96 animate-pulse"></div>
        <div className="absolute w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl -bottom-96 -right-96 animate-pulse delay-1000"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
      </div>
      {/* Subtle Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-30"></div>
      {/* Global Animation Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.01] to-transparent animate-pulse duration-5000 pointer-events-none"></div>{" "}
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-b from-slate-900/95 to-slate-900/80 backdrop-blur-xl border-b border-indigo-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            ICAP 2025
          </div>
          <div className="flex gap-6">
            <a
              href="#vision"
              className="hover:text-indigo-400 transition-colors duration-300"
            >
              Vision
            </a>
            <a
              href="#experience"
              className="hover:text-indigo-400 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
        {/* Modern Animated Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* Primary Gradient Orbs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/30 to-indigo-500/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>

          {/* Glowing Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] via-transparent to-purple-500/[0.03]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in space-y-6">
              <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                I'm Muhammad Samiullah
                <span className="text-white">, FCA</span>
              </h1>
              <p className="text-2xl text-indigo-300 font-semibold">
                Candidate for ICAP Council Election 2025
              </p>
              <p className="text-xl text-slate-300 max-w-2xl">
                Finance & Business Leader with over two decades of experience,
                currently serving as VP ICAP Chair and leading multiple
                strategic committees.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 backdrop-blur-sm flex items-center justify-center border border-indigo-500/20 hover:bg-indigo-500/20 transition-all duration-300">
                <Globe className="text-indigo-400" size={24} />
              </div>
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 backdrop-blur-sm flex items-center justify-center border border-indigo-500/20 hover:bg-indigo-500/20 transition-all duration-300">
                <Award className="text-indigo-400" size={24} />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl border-2 border-indigo-500/20 aspect-square">
              <img
                src="/pic2-Picsart-BackgroundChanger.jpg"
                alt="Muhammad Samiullah Siddiqui"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="col-span-2 flex flex-wrap gap-4 mt-8">
            <a
              href="#vision"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>Discover the Vision</span>
              <TrendingUp size={18} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl font-semibold hover:bg-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <Phone size={18} />
            </a>
          </div>
        </div>
      </section>
      {/* Professional Summary */}
      <section className="relative py-20 px-6 transition-all duration-500 group hover:bg-gradient-to-b hover:from-transparent hover:via-indigo-500/[0.03] hover:to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm rounded-3xl p-12 border border-indigo-500/10 shadow-lg transition-all duration-500 group-hover:border-indigo-500/20 group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
            <Briefcase className="text-indigo-400 mb-6" size={48} />
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Professional Summary
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              A dynamic finance leader with over two decades of experience in
              financial strategy, governance, and professional development.
              Currently serving as Finance Director and actively shaping ICAP's
              future through leadership in multiple strategic committees.
            </p>
          </div>
        </div>
      </section>
      {/* ICAP Contributions */}
      <section className="relative py-20 px-6 transition-all duration-500 group hover:bg-gradient-to-b hover:from-transparent hover:via-indigo-500/[0.03] hover:to-transparent">
        <div className="max-w-6xl mx-auto">
          <Award className="text-indigo-400 mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ICAP Leadership
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-xl p-8 rounded-2xl border border-indigo-500/30 transform hover:scale-105 transition-all duration-500">
              <Award className="text-indigo-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-indigo-300">
                Vice President
              </h3>
              <p className="text-slate-300">
                Leading ICAP's strategic initiatives and driving organizational
                excellence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30 transform hover:scale-105 transition-all duration-500">
              <Globe className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Global Representation
              </h3>
              <p className="text-slate-300">
                Member - PAIB Advisory Group, IFAC (2022-2028). Representing
                Pakistan globally.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-2xl p-10 border border-indigo-500/20">
            <h3 className="text-3xl font-bold mb-8 text-indigo-300">
              Chair of Committees and Boards
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "PAIB Committee",
                  desc: "Advocating for value creation by professional accountants in business",
                },
                {
                  title: "AML Supervisory Board",
                  desc: "Strengthening ICAP's AML/CFT framework and compliance oversight",
                },
                {
                  title: "Incubation Committee",
                  desc: "Promoting innovation and entrepreneurship among young CAs",
                },
                {
                  title: "Examination Committee",
                  desc: "Leading reforms to ensure transparency and quality in examinations",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-700/30 transition-all duration-300"
                >
                  <CheckCircle
                    className="text-indigo-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Professional Experience */}
      <section
        id="experience"
        className="relative py-20 px-6 transition-opacity duration-500 hover:bg-gradient-to-b hover:from-transparent hover:via-indigo-500/[0.02] hover:to-transparent group"
      >
        <div className="max-w-6xl mx-auto">
          <Briefcase className="text-indigo-400 mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-500 transform hover:scale-[1.02]">
              <Briefcase className="text-indigo-400 mb-4" size={36} />
              <h3 className="text-2xl font-bold text-white mb-2">
                Board Member & Finance Director
              </h3>
              <p className="text-indigo-300 mb-4">
                Oxford University Press Pakistan (Current)
              </p>
              <p className="text-slate-300">
                Leading financial strategy, compliance, and stakeholder
                engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-2">
                  Executive Director & CFO
                </h4>
                <p className="text-slate-400">
                  Pakistan Oxygen Limited (Previously Linde Pakistan Limited)
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-2">
                  Director Commercial Energy Sector
                </h4>
                <p className="text-slate-400">
                  Siemens Pakistan Limited (Pakistan, Afghanistan, UAE)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education */}
      <section className="relative py-20 px-6 transition-all duration-500 group hover:bg-gradient-to-b hover:from-transparent hover:via-indigo-500/[0.03] hover:to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm rounded-2xl p-10 border border-indigo-500/10 shadow-lg transition-all duration-500 group-hover:border-indigo-500/20 group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
            <GraduationCap className="text-indigo-400 mb-6" size={48} />
            <h2 className="text-4xl font-bold mb-8 text-indigo-300">
              Education & Credentials
            </h2>
            <ul className="space-y-4 text-lg text-slate-300">
              <li className="flex items-center gap-3">
                <CheckCircle
                  className="text-indigo-400 flex-shrink-0"
                  size={20}
                />
                <span>Fellow Member of ICAP</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  className="text-indigo-400 flex-shrink-0"
                  size={20}
                />
                <span>
                  Executive Education: Said Business School (Oxford), Harvard
                  Business School, LUMS, Babson College, Duke Business School
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Vision Section */}
      <section
        id="vision"
        className="relative py-20 px-6 transition-opacity duration-500 hover:bg-gradient-to-b hover:from-transparent hover:via-indigo-500/[0.02] hover:to-transparent group"
      >
        <div className="max-w-6xl mx-auto">
          <TrendingUp className="text-indigo-400 mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Vision for ICAP
          </h2>
          <p className="text-3xl text-center text-indigo-300 font-semibold mb-16 italic">
            Together for one ICAP!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <FloatingCard
              icon={TrendingUp}
              title="Empower Future CAs"
              description="Modernized education and mentorship programs to prepare the next generation of chartered accountants."
              delay={100}
            />
            <FloatingCard
              icon={Award}
              title="Enhance Transparency & Governance"
              description="Implementing robust governance frameworks across all ICAP functions for greater accountability."
              delay={200}
            />
            <FloatingCard
              icon={Globe}
              title="Strengthen Global Recognition"
              description="Elevating the CA Pakistan qualification on the international stage and fostering global partnerships."
              delay={300}
            />
            <FloatingCard
              icon={Users}
              title="Promote Innovation & Technology"
              description="Driving digital transformation in accounting and finance practices for the modern era."
              delay={400}
            />
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="relative py-20 px-6 transition-opacity duration-500 hover:bg-gradient-to-b hover:from-transparent hover:via-indigo-500/[0.02] hover:to-transparent group">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Your Support Can Make a Difference
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Help bring progressive, transparent, and inclusive leadership to
            ICAP.
          </p>
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-2xl">
            <div className="bg-slate-900 rounded-2xl p-8">
              <p className="text-2xl font-bold text-indigo-300 mb-8">
                Together, we can build a stronger ICAP!
              </p>
              <a
                href="#contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-110"
              >
                Join the Movement
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 px-6 bg-gradient-to-br from-purple-900/30 via-slate-900/30 to-indigo-900/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+923042224200"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-full border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="text-indigo-400" size={24} />
              <span className="text-white font-semibold">+92-304-2224200</span>
            </a>
            <a
              href="https://www.linkedin.com/in/samiullah-siddiqui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin className="text-white" size={24} />
              <span className="text-white font-semibold">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative py-10 px-6">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="text-lg mb-2">Muhammad Samiullah Siddiqui, FCA</p>
          <p className="text-sm">
            ICAP Council Election 2025 - Together for one ICAP!
          </p>
        </div>
      </footer>
    </div>
  );
}
