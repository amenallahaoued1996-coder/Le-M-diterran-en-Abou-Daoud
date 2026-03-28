/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChefHat, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  Instagram, 
  Facebook, 
  Utensils,
  ChevronRight,
  Calendar,
  Users
} from 'lucide-react';

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
    { name: 'Accueil', href: '#' },
    { name: 'À Propos', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-beige">
          ABOU DAOUD
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:text-beige transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reservation" 
            className="bg-beige text-bg-dark px-6 py-2 rounded-full text-sm font-semibold hover:bg-white transition-all transform hover:scale-105"
          >
            Réserver
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-gray border-t border-white/10 md:hidden py-8 px-6 flex flex-col space-y-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-serif tracking-wide text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#reservation" 
              className="bg-beige text-bg-dark py-4 rounded-xl font-bold text-center"
              onClick={() => setIsOpen(false)}
            >
              Réserver une Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1920" 
          alt="Restaurant ambiance" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-bg-dark"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-beige uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">Depuis 1998 • Bruxelles</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight">
            Le Méditerranéen <br />
            <span className="text-beige">Abou Daoud</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            L'excellence de la cuisine italienne halal. Une cuisine franche, réfléchie et spontanée au cœur de la Belgique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#menu" 
              className="bg-beige text-bg-dark px-10 py-4 rounded-full font-bold hover:bg-white transition-all flex items-center justify-center gap-2 group"
            >
              Voir le Menu
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#reservation" 
              className="border border-beige text-beige px-10 py-4 rounded-full font-bold hover:bg-beige hover:text-bg-dark transition-all"
            >
              Réserver une Table
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-beige opacity-50"
      >
        <div className="w-px h-12 bg-beige mx-auto mb-2"></div>
        <span className="text-[10px] uppercase tracking-widest">Découvrir</span>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-bg-gray">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-bg-dark">
            <img 
              src="/9.png" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-beige uppercase tracking-widest text-sm font-bold mb-4 block">Notre Histoire</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            La première pizzeria pasteria <span className="text-beige italic">halal</span> de Belgique.
          </h2>
          <p className="text-text-muted text-lg mb-6 leading-relaxed">
            Ouvert en mai 1998, Le Méditerranéen Abou Daoud est né d'une passion pour la cuisine italienne authentique et le respect des traditions. Nous sommes fiers d'être les pionniers du concept pasteria halal à Bruxelles.
          </p>
          <p className="text-text-muted text-lg mb-8 leading-relaxed">
            Tous nos plats et sauces sont préparés à la minute et nos desserts faits maison, à partir de produits frais et de qualité supérieure. Chez nous, la cuisine est franche, réfléchie, mais toujours spontanée.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
            <div>
              <h4 className="text-3xl font-serif font-bold text-beige mb-1">25+</h4>
              <p className="text-xs uppercase tracking-widest text-text-muted">Années d'Expérience</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif font-bold text-beige mb-1">100%</h4>
              <p className="text-xs uppercase tracking-widest text-text-muted">Produits Frais</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dishes = [
    {
      name: "Filet de Poisson Blanc",
      desc: "À la crème et champignons frais.",
      price: "18€",
      img: "/1.png"
    },
    {
      name: "Pizza Fruits de Mer",
      desc: "Sélection de fruits de mer frais, ail et persil.",
      price: "16€",
      img: "/2.png"
    },
    {
      name: "Tagliatelli Scampis",
      desc: "Pâtes fraîches avec scampis sautés et herbes.",
      price: "17€",
      img: "/3.png"
    },
    {
      name: "Pizza Poulet et Légumes",
      desc: "Poulet grillé, légumes de saison et fromage.",
      price: "15€",
      img: "/4.png"
    }
  ];

  return (
    <section id="menu" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-beige uppercase tracking-widest text-sm font-bold mb-4 block">Découvrez</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nos Incontournables</h2>
          <div className="w-24 h-1 bg-beige mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-xl">
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute top-4 right-4 bg-beige text-bg-dark font-bold px-4 py-1 rounded-full text-sm">
                  {dish.price}
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-beige transition-colors">{dish.name}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{dish.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="border-b-2 border-beige text-beige pb-1 font-bold tracking-widest uppercase text-sm hover:text-white hover:border-white transition-all"
          >
            Consulter le menu complet
          </button>
        </div>
      </div>

      {/* Full Menu Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-beige/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-white bg-black/70 p-2 rounded-full hover:bg-beige hover:text-bg-dark transition-all z-50 shadow-xl"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={24} />
              </button>
              
              {/* Container for surgical cropping and enhancement */}
              <div className="w-full h-full overflow-hidden bg-white">
                <img 
                  src="/menu1.png" 
                  alt="Menu complet" 
                  className="w-full h-auto transition-all duration-500"
                  style={{ 
                    clipPath: 'inset(5% 2% 5% 2%)', // Surgical crop of top and bottom artifacts
                    transform: 'scale(1.1)', // Slight zoom to fill the container after crop
                    filter: 'contrast(1.08) brightness(1.02) saturate(1.05)' // Visual enhancement
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Utensils className="text-beige" size={32} />,
      title: "Produits Frais",
      desc: "Tous nos ingrédients sont sélectionnés avec soin chaque matin au marché."
    },
    {
      icon: <ChefHat className="text-beige" size={32} />,
      title: "Expertise Chef",
      desc: "Une cuisine authentique maîtrisée par nos chefs passionnés depuis 1998."
    },
    {
      icon: <Star className="text-beige" size={32} />,
      title: "Ambiance Cosy",
      desc: "Un cadre élégant et chaleureux pour vos moments en famille ou entre amis."
    },
    {
      icon: <Clock className="text-beige" size={32} />,
      title: "Service Rapide",
      desc: "Une préparation à la minute sans compromis sur la qualité de nos plats."
    }
  ];

  return (
    <section className="py-24 px-6 bg-bg-gray">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {features.map((f, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="text-center p-8 rounded-3xl bg-bg-dark border border-white/5 hover:border-beige/30 transition-all"
          >
            <div className="mb-6 flex justify-center">{f.icon}</div>
            <h3 className="text-xl font-serif font-bold mb-4">{f.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "/5.png",
    "/6.png",
    "/7.png"
  ];

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-beige uppercase tracking-widest text-sm font-bold mb-4 block">Ambiance</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Galerie Photos</h2>
          <div className="w-24 h-1 bg-beige mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Djalil Menacer",
      text: "Très bonne expérience dans cette pizzeria ! Le personnel est très sympa et accueillant. Les pizzas sont délicieuses, bien garnies et avec des ingrédients frais. La décoration du lieu est soignée, créant une ambiance conviviale et chaleureuse. Un endroit parfait pour profiter d’un bon repas. Je recommande !",
      stars: 5
    },
    {
      name: "Manola",
      text: "On s'y est retrouvées par hazard en sortant du metro Clemenceau. On ne connaissaient pas du tous et vraiment une magnifique surprise que je recommande les yeux fermé. Le repas était delicieux et les assiettes bien decorèes. Le serveur était trés serviable et à l'écoute. Le tiramisu fait maison et les escalopes aubergines sont un delice😋 Je pense qu'il est dans le top 5 des meilleurs restaurant de Bruxelles.",
      stars: 5
    },
    {
      name: "Linda Zerrouki",
      text: "Plats goûteux et cuisinés avec des produits frais. Carte variée et diverse avec un focus sur les pâtes sous toutes leurs formes. Rapport qualité-prix très intéressant ; une valeur sûre !",
      stars: 5
    }
  ];

  return (
    <section className="py-24 px-6 bg-bg-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-3xl bg-bg-dark border border-white/5"
            >
              <div className="flex mb-6">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-beige fill-beige" />
                ))}
              </div>
              <p className="text-lg font-serif italic mb-8 text-text-light leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-beige/20 flex items-center justify-center text-beige font-bold">
                  {rev.name[0]}
                </div>
                <span className="font-bold tracking-wide">{rev.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReservationContact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Reservation Form */}
          <motion.div 
            id="reservation"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-gray p-10 rounded-3xl border border-white/5 shadow-2xl"
          >
            <h2 className="text-3xl font-serif font-bold mb-8">Réserver une Table</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-text-muted font-bold">Nom Complet</label>
                  <input type="text" className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 focus:border-beige outline-none transition-colors" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-text-muted font-bold">Téléphone</label>
                  <input type="tel" className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 focus:border-beige outline-none transition-colors" placeholder="04XX XX XX XX" />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-text-muted font-bold">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input type="date" className="w-full bg-bg-dark border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-beige outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-text-muted font-bold">Heure</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input type="time" className="w-full bg-bg-dark border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-beige outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-text-muted font-bold">Convives</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <select className="w-full bg-bg-dark border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-beige outline-none transition-colors appearance-none">
                      <option>1 Personne</option>
                      <option>2 Personnes</option>
                      <option>4 Personnes</option>
                      <option>6+ Personnes</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="w-full bg-beige text-bg-dark py-4 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-xl shadow-beige/10">
                Confirmer la Réservation
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-8">Nous Trouver</h2>
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-beige/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-beige" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Adresse</h4>
                  <p className="text-text-muted">Bergensesteenweg 163, 1070 Anderlecht, Belgique</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-beige/10 flex items-center justify-center shrink-0">
                  <Phone className="text-beige" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Téléphone</h4>
                  <p className="text-text-muted">+32 2 521 50 34</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-beige/10 flex items-center justify-center shrink-0">
                  <Clock className="text-beige" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Horaires d'Ouverture</h4>
                  <p className="text-text-muted">Lun, Mar, Jeu : 12:00 - 14:30, 17:30 - 23:30</p>
                  <p className="text-text-muted">Ven, Sam : 17:30 - 23:30</p>
                  <p className="text-text-muted">Mer, Dim : Fermé</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden grayscale opacity-50 border border-white/10 relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                alt="Map placeholder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                <button className="bg-white text-bg-dark px-6 py-2 rounded-full font-bold text-sm">Ouvrir dans Google Maps</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-gray pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-beige mb-6">ABOU DAOUD</h2>
            <p className="text-text-muted max-w-md leading-relaxed mb-8">
              Première pizzeria pasteria halal de Belgique. Une tradition culinaire d'excellence depuis 1998 au service de nos clients à Bruxelles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-beige hover:text-bg-dark transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-beige hover:text-bg-dark transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Navigation</h4>
            <ul className="space-y-4 text-text-muted">
              <li><a href="#" className="hover:text-beige transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-beige transition-colors">À Propos</a></li>
              <li><a href="#menu" className="hover:text-beige transition-colors">Menu</a></li>
              <li><a href="#reservation" className="hover:text-beige transition-colors">Réservations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-text-muted">
              <li>Bergensesteenweg 163, 1070 Anderlecht</li>
              <li>+32 2 521 50 34</li>
              <li>contact@aboudaoud.be</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-text-muted text-sm">
          <p>© {new Date().getFullYear()} Le Méditerranéen Abou Daoud. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-bg-dark text-text-light selection:bg-beige selection:text-bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <ReservationContact />
      </main>
      <Footer />
    </div>
  );
}
