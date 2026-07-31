const streams = [
  ["SOC", "0xAF", "ALERT", "01", "SIEM", "7F", "MITRE", "IP"],
  ["FF", "IOC", "10.0.0.8", "EDR", "0x3C", "LOG", "DNS", "01"],
  ["AUTH", "4624", "4625", "0x9A", "SOC", "TCP", "443", "HASH"],
  ["MITRE", "T1059", "SIEM", "IOC", "0xFF", "ALERT", "IP", "01"],
  ["SYS", "EVENT", "0x7E", "SOC", "53", "DNS", "IOC", "SCAN"],
  ["EDR", "ALERT", "0x2B", "MITRE", "01", "SIEM", "LOG", "IP"],
  ["SOC", "0xC4", "IOC", "443", "AUTH", "HASH", "FF", "EVENT"],
  ["SIEM", "T1021", "ALERT", "01", "0x11", "IP", "EDR", "LOG"],
  ["MITRE", "IOC", "0x8D", "SOC", "TCP", "443", "SCAN", "01"],
  ["ALERT", "SIEM", "FF", "EVENT", "0x6A", "DNS", "SOC", "IOC"],
  ["LOG", "IP", "0xDE", "AUTH", "MITRE", "01", "EDR", "ALERT"],
  ["SOC", "SIEM", "0xB7", "IOC", "443", "HASH", "01", "MITRE"],
  ["T1059", "ALERT", "IP", "0x4F", "LOG", "SOC", "EDR", "01"],
  ["IOC", "DNS", "SIEM", "FF", "0x21", "MITRE", "EVENT", "SOC"],
  ["AUTH", "4625", "ALERT", "0x90", "IP", "SOC", "01", "EDR"],
  ["SOC", "MITRE", "SIEM", "0x5D", "IOC", "LOG", "443", "01"],
];

export default function CyberBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 flex justify-around opacity-[0.33] [mask-image:linear-gradient(to_bottom,transparent,black_7%,black_93%,transparent)] max-sm:opacity-[0.22]">
        {streams.map((tokens, index) => (
          <span
            key={index}
            className="cyber-data-stream whitespace-pre text-center font-mono text-[9px] font-medium leading-7 text-neon/75 sm:text-[10px]"
            style={{
              animationDelay: `${-index * 0.77}s`,
              animationDuration: `${12 + (index % 5) * 2.1}s`,
              opacity: 0.38 + (index % 4) * 0.12,
            }}
          >
            {Array.from({ length: 8 }, (_, block) =>
              tokens.map((token, tokenIndex) => `${tokenIndex % 3 === 0 ? "› " : ""}${token}\n`).join("") +
              (block % 2 === 0 ? "···\n" : "//\n")
            ).join("")}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,10,.28)_55%,rgba(5,7,10,.7)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/15 via-void/38 to-void/76" />
    </div>
  );
}
