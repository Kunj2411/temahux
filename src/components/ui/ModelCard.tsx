export default function ModelCard({ title, description }: any) {
    return (
        <div className="p-10 border border-white/5 bg-surface-base/20 rounded-card group hover:border-accent transition-all">
            <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-accent group-hover:text-white transition-colors">
                {title}
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    )
}
