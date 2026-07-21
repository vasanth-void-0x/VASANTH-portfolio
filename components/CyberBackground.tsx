export default function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 bg-cyber-grid-fixed [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-neon/10 blur-[140px]" />
      <div className="absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-volt/10 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-signal/10 blur-[140px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void" />
    </div>
  );
}
