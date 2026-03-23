import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Hammer, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  ChevronRight,
  Quote,
  Calculator,
  HardHat,
  Building2,
  Ruler,
  Wrench
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Početna', href: '#' },
    { name: 'Usluge', href: '#usluge' },
    { name: 'O Nama', href: '#o-nama' },
    { name: 'Projekti', href: '#projekti' },
    { name: 'Blog', href: '#blog' },
    { name: 'Kontakt', href: '#kontakt' },
    { name: 'Stranice', href: '#' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 overflow-x-hidden ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-sm">
            <span className="text-gold font-black text-xl">M</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-navy">MILDEN</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-bold text-[11px] uppercase tracking-widest text-navy hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-navy">
            <Phone className="w-4 h-4 text-gold" />
            <span className="font-bold text-xs">+381 64 342 81 12</span>
          </div>
          <a 
            href="#" 
            className="border-2 border-navy text-navy px-4 py-2 font-black text-[10px] uppercase tracking-widest hover:bg-navy hover:text-white transition-all"
          >
            GET PRO
          </a>
          <a 
            href="#kontakt" 
            className="bg-gold text-navy px-6 py-3 font-black text-[11px] uppercase tracking-widest hover:bg-navy hover:text-white transition-all shadow-lg shadow-gold/20"
          >
            Zatražite ponudu
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-navy" /> : <Menu className="text-navy" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white p-6 lg:hidden flex flex-col gap-4 shadow-2xl border-t border-navy/5"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-navy font-bold text-sm uppercase tracking-widest border-b border-navy/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-navy">
                <Phone className="w-4 h-4 text-gold" />
                <span className="font-bold text-sm">+381 64 342 81 12</span>
              </div>
              <a 
                href="#kontakt" 
                className="bg-gold text-navy px-6 py-3 font-black text-xs uppercase tracking-widest text-center"
              >
                Zatražite ponudu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-navy">
      {/* Background Image with Parallax - Enhanced for all screens */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y }} 
          className="absolute inset-0 w-full h-full scale-125"
        >
          <img 
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=2000" 
            alt="Construction Site" 
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/60 to-navy"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-w-5xl mx-auto lg:mx-0">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
          >
            <div className="h-[2px] w-12 bg-gold"></div>
            <span className="text-gold font-black tracking-[0.4em] uppercase text-[10px] sm:text-xs">
              Vrhunska Krovna Rešenja
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] mb-10 uppercase tracking-tighter"
          >
            VAŠA <span className="text-gold">IDEJA</span><br />
            NAŠA <span className="text-white">REALIZACIJA</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed font-medium"
          >
            MILDEN je lider u industriji krovnih sistema. Pružamo beskompromisni kvalitet, 
            sigurnost i dugovečnost za vaš dom ili poslovni prostor.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <a 
              href="#kontakt" 
              className="bg-gold text-navy px-12 py-6 font-black text-sm sm:text-base uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-gold/20 text-center flex items-center justify-center gap-3 group"
            >
              Započnite Projekat <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#projekti" 
              className="border-2 border-white/20 text-white px-12 py-6 font-black text-sm sm:text-base uppercase tracking-widest hover:bg-white hover:text-navy transition-all text-center"
            >
              Naši Radovi
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/10 pt-12"
          >
            {[
              { label: 'Završenih Projekata', val: '512+' },
              { label: 'Godina Iskustva', val: '25+' },
              { label: 'Zadovoljnih Klijenata', val: '100%' },
              { label: 'Garancija (Godina)', val: '10' }
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="text-gold font-black text-3xl sm:text-4xl mb-1">{stat.val}</p>
                <p className="text-white/40 font-bold uppercase text-[9px] sm:text-[10px] tracking-widest leading-tight">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <div className="bg-gold py-8 overflow-hidden border-y-4 border-navy">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 mx-6">
            <span className="text-navy font-black text-2xl md:text-4xl uppercase italic">512+ PROJEKATA ZAVRŠENO</span>
            <div className="w-3 h-3 bg-navy rotate-45"></div>
            <span className="text-navy font-black text-2xl md:text-4xl uppercase italic">25+ GODINA ISKUSTVA</span>
            <div className="w-3 h-3 bg-navy rotate-45"></div>
            <span className="text-navy font-black text-2xl md:text-4xl uppercase italic">VRHUNSKI MATERIJALI</span>
            <div className="w-3 h-3 bg-navy rotate-45"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    { icon: <Phone className="w-8 h-8" />, title: 'Konsultacije', desc: 'Prvi korak ka vašem cilju je detaljan razgovor o vašim potrebama.' },
    { icon: <Ruler className="w-8 h-8" />, title: 'Projektovanje', desc: 'Naš tim inženjera kreira precizne planove i 3D vizuelizacije.' },
    { icon: <Hammer className="w-8 h-8" />, title: 'Izvršenje', desc: 'Vrhunski majstori i moderna oprema garantuju besprekornu gradnju.' },
    { icon: <CheckCircle2 className="w-8 h-8" />, title: 'Održavanje', desc: 'Ostajemo uz vas i nakon projekta, brinući o dugovečnosti radova.' },
  ];

  return (
    <section id="usluge" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-gold"></div>
              <span className="text-gold font-black tracking-widest uppercase text-xs">Naš Put</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-navy uppercase italic leading-none mb-8">Proces <br /><span className="text-gold">Realizacije</span></h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="text-navy/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              Verujemo u transparentnost i preciznost. Svaki projekat prolazi kroz strogo definisane faze 
              kako bismo osigurali maksimalan kvalitet i vaše potpuno zadovoljstvo.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              whileHover={{ y: -15 }}
              className="group relative p-10 bg-navy/5 border-2 border-transparent hover:border-navy hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="text-gold mb-8 transform group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
              <h3 className="text-2xl font-black text-navy mb-4 uppercase tracking-tighter">{step.title}</h3>
              <p className="text-navy/60 font-medium leading-relaxed">{step.desc}</p>
              <div className="absolute top-6 right-6 font-black text-navy/10 text-6xl group-hover:text-gold/20 transition-colors">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { title: 'Zubarska Ordinacija', location: 'Stari Grad, Beograd', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800' },
    { title: 'Stambeni Prostor', location: 'Voždovac, Beograd', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
    { title: 'Kosmaj House', location: 'Kosmaj, Srbija', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
    { title: 'Moderni Krovni Sistem', location: 'Vračar, Beograd', img: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section id="projekti" className="py-24 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase italic">Naši Poslednji Projekti</h2>
          </div>
          <button className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest hover:text-white transition-colors">
            Pogledaj sve projekte <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 0.98 }}
              className="group relative h-[300px] sm:h-[400px] overflow-hidden cursor-pointer"
            >
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-gold font-bold uppercase tracking-tighter text-sm mb-1">{p.location}</p>
                <h3 className="text-2xl sm:text-3xl font-black uppercase italic mb-4">{p.title}</h3>
                <div className="h-1 w-0 group-hover:w-full bg-gold transition-all duration-500"></div>
                <span className="inline-block mt-4 opacity-0 group-hover:opacity-100 transition-opacity font-bold uppercase text-xs tracking-widest">View Case Study</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Vladimir Sapundzić',
      role: 'Arhitekta',
      text: 'Milden doo je kompanija koja kombinuje iskustvo, inovativnost i preciznost. Njihov pristup projektima je sistematičan i temeljan, dok je komunikacija uvek efikasna.',
      img: 'https://i.pravatar.cc/150?u=vladimir'
    },
    {
      name: 'Nemanja Jugović',
      role: 'Direktor Jugović Gradnja',
      text: 'Kao poslovni partneri, imali smo priliku da sarađujemo na nekoliko značajnih projekata. Njihova sposobnost da odgovore na sve zahteve ih čini idealnim partnerom.',
      img: 'https://i.pravatar.cc/150?u=nemanja'
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Utisci</span>
            <h2 className="text-4xl sm:text-5xl font-black text-navy uppercase italic mb-8">Šta Kažu Stručnjaci</h2>
            <p className="text-navy/60 mb-8">Poverenje gradimo na rezultatima i preporukama vodećih ljudi u industriji.</p>
            <div className="flex gap-4">
              <div className="w-12 h-12 border-2 border-navy flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all cursor-pointer">
                <ArrowRight className="w-6 h-6 rotate-180" />
              </div>
              <div className="w-12 h-12 border-2 border-navy flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all cursor-pointer">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-navy p-8 sm:p-10 relative"
              >
                <Quote className="absolute top-6 right-6 text-gold/20 w-12 h-12 sm:w-16 h-16" />
                <div className="flex items-center gap-4 mb-8">
                  <img src={t.img} alt={t.name} className="w-14 h-14 sm:w-16 h-16 rounded-full border-2 border-gold" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="text-white font-black text-lg sm:text-xl uppercase tracking-tighter">{t.name}</h4>
                    <p className="text-gold font-bold text-[10px] sm:text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <p className="text-white/80 italic leading-relaxed text-sm sm:text-base">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [num1] = useState(Math.floor(Math.random() * 10));
  const [num2] = useState(Math.floor(Math.random() * 10));
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleMath = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
    if (parseInt(e.target.value) === num1 + num2) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 skew-x-12 transform translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Kontakt</span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase italic mb-8 leading-none">Zatražite Ponudu</h2>
            <p className="text-white/60 text-base sm:text-lg mb-12 max-w-md">
              Spremni ste za sledeći korak? Popunite formu i naš tim će vas kontaktirati u najkraćem roku sa detaljnom procenom.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold flex items-center justify-center text-navy">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Telefon</p>
                  <p className="text-white font-bold text-base sm:text-lg">+381 64 342 81 12</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold flex items-center justify-center text-navy">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Email</p>
                  <p className="text-white font-bold text-base sm:text-lg">office@milden.rs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold flex items-center justify-center text-navy">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Lokacija</p>
                  <p className="text-white font-bold text-base sm:text-lg">Beograd, Srbija</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 sm:p-8 md:p-12 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-navy font-bold uppercase text-[10px] tracking-widest mb-2">Ime i Prezime</label>
                  <input type="text" className="w-full bg-navy/5 border-2 border-navy/10 px-4 py-3 focus:border-gold outline-none transition-all font-semibold" placeholder="Petar Petrović" />
                </div>
                <div>
                  <label className="block text-navy font-bold uppercase text-[10px] tracking-widest mb-2">Email Adresa</label>
                  <input type="email" className="w-full bg-navy/5 border-2 border-navy/10 px-4 py-3 focus:border-gold outline-none transition-all font-semibold" placeholder="petar@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-navy font-bold uppercase text-[10px] tracking-widest mb-2">Tip Projekta</label>
                <select className="w-full bg-navy/5 border-2 border-navy/10 px-4 py-3 focus:border-gold outline-none transition-all font-semibold appearance-none">
                  <option>Krovni Sistemi</option>
                  <option>Izgradnja Objekta</option>
                  <option>Adaptacija</option>
                  <option>Konsultacije</option>
                </select>
              </div>
              <div>
                <label className="block text-navy font-bold uppercase text-[10px] tracking-widest mb-2">Vaša Poruka</label>
                <textarea rows={4} className="w-full bg-navy/5 border-2 border-navy/10 px-4 py-3 focus:border-gold outline-none transition-all font-semibold" placeholder="Opišite vaš projekat..."></textarea>
              </div>

              {/* Anti-spam Bot */}
              <div className="bg-navy/5 p-4 border-2 border-navy/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calculator className="text-navy w-5 h-5" />
                  <span className="font-bold text-navy text-sm sm:text-base">Koliko je {num1} + {num2}?</span>
                </div>
                <input 
                  type="text" 
                  value={answer}
                  onChange={handleMath}
                  className="w-16 sm:w-20 bg-white border-2 border-navy/20 px-3 py-1 text-center font-black text-navy outline-none focus:border-gold" 
                  placeholder="?"
                />
              </div>

              <button 
                disabled={!isCorrect}
                className={`w-full py-5 font-black text-base sm:text-lg uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${isCorrect ? 'bg-gold text-navy hover:bg-navy hover:text-white cursor-pointer' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                Pošalji Zahtev <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy pt-24 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-sm">
                <span className="text-navy font-black text-lg">M</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">MILDEN</span>
            </div>
            <p className="text-white/50 mb-8 leading-relaxed">
              Vodeća građevinska firma u Srbiji, specijalizovana za premium krovne sisteme i stambenu izgradnju.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Usluge</h4>
            <ul className="space-y-4 text-white/50 font-semibold">
              <li><a href="#" className="hover:text-gold transition-colors">Krovni Sistemi</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Gruba Gradnja</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Adaptacije</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Projektovanje</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Lokacije</h4>
            <ul className="space-y-4 text-white/50 font-semibold">
              <li>Vračar, Beograd</li>
              <li>Voždovac, Beograd</li>
              <li>Stari Grad, Beograd</li>
              <li>Kosmaj, Srbija</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Newsletter</h4>
            <p className="text-white/50 mb-6 text-sm">Prijavite se za najnovije projekte i vesti.</p>
            <div className="flex">
              <input type="email" placeholder="Email adresa" className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-gold" />
              <button className="bg-gold text-navy px-4 py-3 font-bold">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} MILDEN.RS. Sva prava zadržana.
          </p>
          <div className="flex gap-8 text-white/30 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Politika Privatnosti</a>
            <a href="#" className="hover:text-white transition-colors">Uslovi Korišćenja</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-navy overflow-x-hidden w-full max-w-full relative">
      <Navbar />
      <main className="w-full overflow-x-hidden relative">
        <Hero />
        <TrustBar />
        <Process />
        <Projects />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />

      {/* Custom Styles for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Prevent horizontal scroll on all elements */
        * {
          max-width: 100vw;
        }
      `}</style>
    </div>
  );
}
