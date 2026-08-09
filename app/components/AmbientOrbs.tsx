export function AmbientOrbs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-[140px]"
        style={{
          background: "var(--orb-1)",
          animation: "orb1 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-[160px]"
        style={{
          background: "var(--orb-2)",
          animation: "orb2 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-40 left-1/3 h-[560px] w-[560px] rounded-full blur-[150px]"
        style={{
          background: "var(--orb-3)",
          animation: "orb1 24s ease-in-out infinite",
        }}
      />
    </div>
  );
}
