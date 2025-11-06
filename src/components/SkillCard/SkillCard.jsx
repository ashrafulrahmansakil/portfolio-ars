
export default function SkillCard({ name, level = 60 }) {
    return (
        <div className="p-4 rounded-xl border border-white/5 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="font-medium">{name}</div>
                <div className="text-sm text-slate-400">{level}%</div>
            </div>
            <div className="mt-3 h-3 w-full bg-white/6 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${level}%`, background: 'linear-gradient(90deg,#06b6d4,#7c3aed)' }} />
            </div>
        </div>
    );
}