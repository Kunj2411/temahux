import Link from "next/link";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import FadeIn from "@/components/ui/FadeIn";

export default function StudentDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 flex text-surface-dark font-body">
            <DashboardSidebar />

            {/* Main Content */}
            <main className="flex-1 p-12 overflow-y-auto">
                <FadeIn>
                    <header className="flex justify-between items-center mb-12">
                        <div>
                            <h1 className="text-2xl font-black tracking-tight">Welcome back, Alex.</h1>
                            <p className="text-sm text-slate-400 font-medium">You have 2 project milestones due this week.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-button text-xs font-bold shadow-sm hover:border-primary transition-all">
                                Focus Mode
                            </button>
                            <button className="px-5 py-2.5 bg-primary text-white rounded-button text-xs font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                                Continue Track
                            </button>
                        </div>
                    </header>
                </FadeIn>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <DashStat label="Course Progress" value="68%" delay={0.1} />
                    <DashStat label="Certificates" value="02" delay={0.2} />
                    <DashStat label="Skill Score" value="840" delay={0.3} />
                    <DashStat label="Focus Hours" value="12.5" delay={0.4} />
                </div>

                {/* Active Track Section */}
                <section className="mb-12">
                    <FadeIn delay={0.2}>
                        <div className="flex justify-between items-end mb-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Current Certification Track</h2>
                            <Link href="#" className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline">View All Tracks</Link>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-card p-8 flex flex-col md:flex-row items-center gap-12 shadow-sm">
                            <div className="size-24 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10">
                                <span className="text-primary text-4xl font-black">DA</span>
                            </div>
                            <div className="flex-1 w-full">
                                <h3 className="text-xl font-black mb-2">Digital Growth Architecture</h3>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                                    <div className="h-full bg-primary w-[68%]"></div>
                                </div>
                                <div className="flex flex-wrap gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                    <span>Module 04: Funnel Engineering</span>
                                    <span>Next Session: Tomorrow, 10:00 AM</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Two-Column Assets */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <FadeIn delay={0.3}>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Path Milestones</h2>
                        </FadeIn>
                        <div className="space-y-4">
                            <Milestone title="Complete SEO Audit Framework" status="In Progress" delay={0.4} />
                            <Milestone title="Build Programmatic Scaffolding" status="Pending" delay={0.5} />
                            <Milestone title="Venture Scale Case Study" status="Locked" delay={0.6} />
                        </div>
                    </div>
                    <div className="space-y-8">
                        <FadeIn delay={0.4}>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">My Mentors</h2>
                        </FadeIn>
                        <div className="space-y-4">
                            <MentorCard name="Sarah Chen" role="SEO Lead" delay={0.5} />
                            <MentorCard name="David Marks" role="SaaS Architect" delay={0.6} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function DashStat({ label, value, delay }: any) {
    return (
        <FadeIn delay={delay} className="h-full">
            <div className="bg-white p-6 border border-slate-200 rounded-card shadow-sm h-full group hover:border-primary transition-all">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">{label}</span>
                <span className="text-2xl font-black group-hover:text-primary transition-colors">{value}</span>
            </div>
        </FadeIn>
    )
}

function Milestone({ title, status, delay }: any) {
    return (
        <FadeIn delay={delay}>
            <div className="bg-white p-6 border border-slate-200 rounded-card flex items-center justify-between group hover:border-primary transition-all">
                <div className="flex items-center gap-4">
                    <div className={`size-4 rounded-full border-2 ${status === 'In Progress' ? 'border-primary' : 'border-slate-200'}`}></div>
                    <h4 className={`text-sm font-bold ${status === 'Locked' ? 'text-slate-300' : 'text-surface-dark'}`}>{title}</h4>
                </div>
                <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded ${status === 'In Progress' ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-slate-400'}`}>
                    {status}
                </span>
            </div>
        </FadeIn>
    )
}

function MentorCard({ name, role, delay }: any) {
    return (
        <FadeIn delay={delay}>
            <div className="bg-white p-4 border border-slate-200 rounded-card flex items-center gap-3 hover:border-primary transition-all group">
                <div className="size-10 bg-slate-100 rounded-full"></div>
                <div>
                    <h4 className="text-xs font-bold group-hover:text-primary transition-colors">{name}</h4>
                    <span className="text-[10px] text-slate-400 font-medium">{role}</span>
                </div>
            </div>
        </FadeIn>
    )
}
