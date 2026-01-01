import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Users, ShoppingBag, Smartphone, Layers, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const projects = [
    {
        projectName: "Aurum Fashion",
        category: "E-Commerce",
        description: "High-end fashion e-commerce platform with a focus on visual storytelling.",
        result: "150% increase in conversion rate",
        icon: ShoppingBag,
        image: "/images/projects/project_ecommerce_1767291947007.png",
        gradient: "from-amber-200 to-yellow-500",
    },
    {
        projectName: "Nexus Analytics",
        category: "SaaS Product",
        description: "Real-time analytics dashboard for a B2B SaaS platform.",
        result: "Reduced churn by 25%",
        icon: Layers,
        image: "/images/projects/project_dashboard_1767291965839.png",
        gradient: "from-blue-400 to-indigo-600",
    },
    {
        projectName: "Burst Fitness",
        category: "Mobile App",
        description: "Marketing landing page for a high-intensity interval training app.",
        result: "50k downloads in first month",
        icon: Smartphone,
        image: "/images/projects/project_mobile_app_1767291982266.png",
        gradient: "from-orange-400 to-rose-600",
    },
    {
        projectName: "Creative Pulse",
        category: "Agency Portfolio",
        description: "Award-winning portfolio site for a digital design agency.",
        result: "Featured on Awwwards",
        icon: Layout,
        image: "/images/projects/project_agency_1767292000458.png",
        gradient: "from-lime-300 to-green-600",
    },
    {
        projectName: "Creator Growth System",
        category: "Personal Branding",
        description: "A complete brand and website system built for a YouTube educator.",
        result: "3x audience growth in 6 months",
        icon: TrendingUp,
        // Using a gradient placeholder if image not available or reusing one
        gradient: "from-accent to-highlight",
    },
    {
        projectName: "Solo Founder Website",
        category: "Web Design",
        description: "Minimal personal website for a tech entrepreneur.",
        result: "Increased inbound leads by 40%",
        icon: Users,
        gradient: "from-primary to-accent",
    },
];

const Projects = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-20">
                <div className="container">
                    <div className="mb-12">
                        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
                            All Projects
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            A curated selection of my work across web design, product development, and branding.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-card rounded-3xl overflow-hidden shadow-card border border-border/50 hover-lift flex flex-col"
                            >
                                {/* Image Area */}
                                <div className={`relative h-56 overflow-hidden ${!project.image ? `bg-gradient-to-br ${project.gradient}` : 'bg-muted'}`}>
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.projectName}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-primary/10" />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-card/90 text-foreground border-0 backdrop-blur-sm">
                                            {project.category}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-auto">
                                        <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-accent transition-colors">
                                            {project.projectName}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                                            <project.icon className="w-4 h-4" />
                                            {project.result}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
                        <Button size="lg" variant="accent" onClick={() => window.open("/cv/CV.pdf", "_blank")}>
                            View My Resume
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Projects;
