import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Mail,
  Menu,
  X,
  PenTool,
  Megaphone,
  Share2,
  Layout,
  Video,
  Search,
  Users,
  Star,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';

const profileData = {
  name: "Carolina Agudelo Cardona",
  role: "Comunicadora Social en formación",
  profile: "Convierto ideas en estrategias, contenidos, mensajes efectivos y experiencias visuales que fortalecen la conexión entre marcas, organizaciones y sus audiencias.",
  about: "Estudiante de últimos semestres de Comunicación Social en la Universidad Católica Luis Amigó, apasionada por la conexión humana a través de mensajes. Me defino con un perfil organizado, resolutivo y creativo, con un fuerte enfoque en redacción, diseño y producción audiovisual.",
  email: "carolinaagudelo783@gmail.com",
  socials: {
    linkedin: "#",
    instagram: "https://www.instagram.com/carolina.agudelo0",
  },
  strengths: [
    { name: "Redacción creativa", icon: PenTool },
    { name: "Estrategias de comunicación", icon: Megaphone },
    { name: "Gestión de RRSS", icon: Share2 },
    { name: "Diseño gráfico", icon: Layout },
    { name: "Contenido audiovisual", icon: Video },
    { name: "Investigación social", icon: Search },
    { name: "Comunicación organizacional", icon: Users },
    { name: "Branding", icon: Star },
  ],
  tools: [
    "Canva", "Photoshop", "Illustrator", "Premiere", "InDesign", "After Effects", "Audition", "CapCut", "Office", "Google Workspace"
  ],
  portfolio: [
    {
      id: 1,
      title: "Plantilla de instructivo",
      category: "Piezas gráficas",
      image: `${import.meta.env.BASE_URL}PiezasGraficas/PlantilladeInstructivo/image003.png`,
      description: "Desarrollo de una plantilla para un instructivo automatizado, facilitando el envío de procesos estandarizados a través del correo electrónico."
    },
    {
      id: 2,
      title: "Presentación concurso Ser Ejemplo",
      category: "Piezas gráficas",
      image: `${import.meta.env.BASE_URL}PiezasGraficas/PresentacionConcursoSerEjemplo/Diapositiva1.PNG`,
      description: "Creación de la presentación de una de las exposiciones ganadoras del concurso más importante de la organización, destacando los datos y mensajes más relevantes.",
      images: [
        `${import.meta.env.BASE_URL}PiezasGraficas/PresentacionConcursoSerEjemplo/Diapositiva1.PNG`,
        `${import.meta.env.BASE_URL}PiezasGraficas/PresentacionConcursoSerEjemplo/Diapositiva2.PNG`,
        `${import.meta.env.BASE_URL}PiezasGraficas/PresentacionConcursoSerEjemplo/Diapositiva3.PNG`,
        `${import.meta.env.BASE_URL}PiezasGraficas/PresentacionConcursoSerEjemplo/Diapositiva4.PNG`,
        `${import.meta.env.BASE_URL}PiezasGraficas/PresentacionConcursoSerEjemplo/Diapositiva5.PNG`
      ]
    },
    {
      id: 3,
      title: "Brief Comité Regulatorio",
      category: "Contenido y redacción",
      image: `${import.meta.env.BASE_URL}ContenidoyRedaccion/BriefComiteRegulatorio/Brief Comité Regulatorio.png`,
      description: "Creación y diseño del brief del Comité Regulatorio, un comité interno. Se trata de un documento conciso y estratégico que recopila información clave sobre el proyecto y funciona como una hoja de ruta dirigida a algunos vicepresidentes de la organización."
    },
    {
      id: 4,
      title: "La Liga del Cumplimiento",
      category: "Estrategias de comunicación",
      image: `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/Diapositiva1_1.PNG`,
      description: "Estrategia orientada a comunicar la evolución del Comité Regulatorio. En el contexto previo al Mundial 2026, se empleó un lenguaje futbolístico para facilitar la comprensión y promover la apropiación de los mensajes transversales, los cuales explican las nuevas reglas, roles, acompañamientos, métricas y expectativas.\n\nPúblico objetivo: Toda la organización.",
      sections: [
        {
          title: "Íconos e ilustraciones",
          description: "Línea gráfica con temática de fútbol que refuerza el lenguaje utilizado para comunicar la estrategia.",
          images: [
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/CANCHA-01.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/CANCHA-02.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/CANCHA-03.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 2-02.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 2-03.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 2-04.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 2-05.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 2-06.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 2-07.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 2-08.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 2-09.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 2-10.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 2-11.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-02.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-03.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-04.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-05.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-06.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-07.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-08.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-09.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-10.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-11.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-12.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-13.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-14.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-15.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES 3-16.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-02.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-03.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-04.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-05.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-06.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-07.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-08.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-09.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-10.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-11.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-12.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-13.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-14.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-15.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-16.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-17.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-18.png`,
            `${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/ILUSTRACIONES-20.png`
          ]
        },
        {
          title: "Fase pretemporada",
          description: "Infográfico difundido por el área de Comunicaciones Corporativas a toda la organización. Su objetivo fue dar a conocer la información nueva y actualizada del Comité Regulatorio, promoviendo que tanto los colaboradores directamente involucrados como aquellos que no lo están se mantengan informados sobre sus novedades y su propósito.",
          images: [`${import.meta.env.BASE_URL}EstrategiasdeComunicacion/LaLigadelCumplimiento/Diapositiva1_1.PNG`]
        }
      ]
    },
    {
      id: 5,
      title: "Informe Ejecutivo Comité Regulatorio",
      category: "Contenido y redacción",
      image: `${import.meta.env.BASE_URL}ContenidoyRedaccion/BriefComiteRegulatorio/Brief Comité Regulatorio.png`, 
      description: "Creación y diseño del Informe Ejecutivo del Comité Regulatorio, elaborado de manera bimestral. Este documento tiene como objetivo comunicar con anticipación a los integrantes del comité las iniciativas que se discutirán en la siguiente sesión, facilitando su comprensión mediante un lenguaje claro y el suministro de insumos clave, como las normas legales que respaldan cada iniciativa.",
      pdf: `${import.meta.env.BASE_URL}ContenidoyRedaccion/InformeEjecutivoComiteRegulatorio/Informe Ejecutivo - Comité 16 de abril de 2026.pdf`
    }
  ],
  categories: ["Todos", "Audiovisual", "Estrategias de comunicación", "Piezas gráficas", "Contenido y redacción"]
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur-md z-50 border-b border-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#inicio" className="text-xl font-light tracking-widest text-foreground uppercase">
              C. Agudelo
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-secondary text-sm font-medium tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button onClick={toggleDarkMode} className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Toggle Dark Mode">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Toggle Dark Mode">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-secondary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-secondary hover:bg-muted rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ isDarkMode }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-background/40 z-10 backdrop-blur-[2px] transition-colors duration-300"></div>
        <img 
          src={isDarkMode ? "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" : "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1920"} 
          alt="Background" 
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="order-2 md:order-1 bg-background p-8 md:p-12 rounded-[2rem] border border-border shadow-2xl"
        >
          <motion.h2 variants={fadeUp} className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">
            {profileData.role}
          </motion.h2>
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight leading-tight mb-6">
            Hola, soy <br />
            <span className="font-medium text-foreground whitespace-nowrap">{profileData.name.split(' ')[0]} {profileData.name.split(' ')[1]}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
            {profileData.profile}
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4">
            <a href="#portafolio" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-hover transition-colors shadow-sm">
              Ver Portafolio
            </a>
            <a href="#contacto" className="inline-flex items-center px-6 py-3 border border-border text-base font-medium rounded-full text-foreground bg-background hover:bg-muted transition-colors">
              Contactar
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-72 h-96 md:w-full md:h-[600px] overflow-hidden rounded-2xl bg-muted shadow-2xl">
            {/* Placeholder for perfil.jpeg */}
            <img
              src="perfil.jpeg"
              alt={profileData.name}
              className="object-cover w-full h-full text-transparent"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=1000";
              }}
            />
            <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-muted px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">Sobre Mí</h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            {profileData.about}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-light text-foreground mb-8 flex items-center">
            Fortalezas <ChevronRight className="ml-2 text-secondary" />
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileData.strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex items-center p-4 bg-background border border-border rounded-xl hover:shadow-md hover:border-primary/20 transition-all group"
                >
                  <div className="flex-shrink-0 mr-4 text-secondary/70 group-hover:text-secondary transition-colors">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-foreground font-medium">{strength.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-light text-foreground mb-8 flex items-center">
            Herramientas <ChevronRight className="ml-2 text-secondary" />
          </motion.h3>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {profileData.tools.map((tool, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-muted border border-border text-foreground rounded-full text-sm font-medium hover:bg-border transition-colors"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-background border border-border rounded-2xl shadow-2xl overflow-y-auto flex flex-col z-10"
      >
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-4 flex justify-between items-center z-20">
          <div>
            <h3 className="text-2xl font-light text-foreground">{project.title}</h3>
            <span className="text-secondary font-medium uppercase text-xs tracking-wider">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 sm:p-8 space-y-8">
          {project.description && (
            <p className="text-lg text-muted-foreground font-light whitespace-pre-line leading-relaxed">
              {project.description}
            </p>
          )}

          {project.image && !project.images && !project.pdf && !project.sections && (
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={project.image} alt={project.title} className="w-full object-contain max-h-[60vh] bg-muted/30" />
            </div>
          )}

          {project.images && project.images.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xl font-light text-foreground border-b border-border pb-2">Galería</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-border bg-muted/30">
                    <img src={img} alt={`Slide ${idx + 1}`} className="w-full object-contain cursor-pointer hover:scale-105 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.pdf && (
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-border pb-2">
                <h4 className="text-xl font-light text-foreground">Documento</h4>
                <a href={project.pdf} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline flex items-center">
                  Abrir en nueva pestaña <ChevronRight size={16} />
                </a>
              </div>
              <div className="w-full h-[600px] border border-border rounded-xl overflow-hidden bg-muted">
                <iframe src={project.pdf} className="w-full h-full" title={project.title} />
              </div>
            </div>
          )}

          {project.sections && project.sections.map((sec, idx) => (
            <div key={idx} className="space-y-6 pt-6 border-t border-border">
              <h4 className="text-2xl font-light text-foreground">{sec.title}</h4>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">{sec.description}</p>
              {sec.images && sec.images.length > 0 && (
                <div className={`grid gap-4 ${sec.images.length > 1 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'}`}>
                  {sec.images.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-border bg-muted/30 aspect-square flex items-center justify-center">
                      <img src={img} alt={`${sec.title} ${i + 1}`} className="w-full h-full object-contain hover:scale-105 transition-transform" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const filteredPortfolio = filter === "Todos"
    ? profileData.portfolio
    : profileData.portfolio.filter(item => item.category === filter);

  return (
    <section id="portafolio" className="py-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Portafolio</h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {profileData.categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-background text-muted-foreground hover:bg-muted border border-border'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setSelectedProject(item)}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-background shadow-sm hover:shadow-xl transition-all cursor-pointer aspect-[4/3] border border-border/50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-4 bottom-4 bg-background p-4 rounded-xl border border-border opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col justify-end shadow-xl">
                  <span className="text-secondary font-semibold tracking-wider uppercase mb-1 text-xs">{item.category}</span>
                  <h4 className="text-foreground text-lg font-medium leading-tight">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contacto" className="bg-muted py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">¿Trabajamos juntos?</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light text-lg">
            Estoy disponible para nuevos proyectos y oportunidades. Si tienes una idea en mente o buscas fortalecer la comunicación de tu marca, hablemos.
          </p>

          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center text-xl font-medium text-foreground hover:text-primary transition-colors mb-12"
          >
            <Mail className="mr-3" />
            {profileData.email}
          </a>

          <div className="flex justify-center gap-6 mb-16">
            <a href={profileData.socials.linkedin} className="w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href={profileData.socials.instagram} className="w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
          </div>

          <div className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} {profileData.name}. Todos los derechos reservados.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <Hero isDarkMode={isDarkMode} />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
