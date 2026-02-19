import { Link } from "react-router-dom";

const links = [
  { text: "water softener repair burnsville mn", url: "/water-softener-repair-burnsville-mn", internal: true },
  { text: "water softener repair columbia mo", url: "/water-softener-repair-columbia-mo", internal: true },
  { text: "water softener repair chippewa falls", url: "/water-softener-repair-chippewa-falls", internal: true },
  { text: "water softener repair freeport il", url: "/water-softener-repair-freeport-il", internal: true },
  { text: "water softener repair henderson nv", url: "/water-softener-repair-henderson-nv", internal: true },
  { text: "water softener repair jackson mi", url: "/water-softener-repair-jackson-mi", internal: true },
  { text: "water softener repair lafayette indiana", url: "/water-softener-repair-lafayette-indiana", internal: true },
  { text: "water softener repair logan utah", url: "/water-softener-repair-logan-utah", internal: true },
  { text: "water softener repair maple grove mn", url: "/water-softener-repair-maple-grove-mn", internal: true },
  { text: "Dallas Slab Leak Support", url: "https://dallasplumber.vercel.app", internal: false },
  { text: "San Antonio Foundation Experts", url: "https://sanantonioplumbing.vercel.app", internal: false },
  { text: "San Francisco Diagnostic Pros", url: "https://plumbersanfranciscoca.vercel.app/", internal: false },
  { text: "Charlotte Leak Detection Specialists", url: "https://plumbercharlottenc.vercel.app/", internal: false },
];

const RandomLinks = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link, index) => (
            link.internal ? (
              <Link
                key={index}
                to={link.url}
                className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium uppercase tracking-widest"
              >
                {link.text}
              </Link>
            ) : (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium uppercase tracking-widest"
              >
                {link.text}
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
