export default function ContactWorldMap() {
  return (
    <div className="contact-world-map" aria-hidden="true">
      <svg viewBox="0 0 1000 430" preserveAspectRatio="xMidYMid slice">
        <g className="contact-map-land">
          <path d="M74 112 145 68 235 72 284 106 267 143 221 157 189 207 133 194 101 154Z" />
          <path d="M252 218 289 232 309 285 292 347 265 391 238 329 224 266Z" />
          <path d="M431 101 481 74 533 85 558 119 535 145 494 139 467 160 438 145Z" />
          <path d="M485 171 551 157 593 202 579 266 544 321 502 286 475 220Z" />
          <path d="M555 91 646 58 770 72 862 110 828 151 746 156 699 199 626 182 581 144Z" />
          <path d="M763 281 821 265 883 291 872 334 817 345 778 323Z" />
          <path d="M898 178 930 167 943 191 918 210Z" />
        </g>
        <g className="contact-map-links">
          <path d="M180 140 Q420 40 610 135" />
          <path d="M610 135 Q735 100 824 303" />
          <path d="M610 135 Q520 250 277 285" />
        </g>
        {[{x:180,y:140},{x:610,y:135},{x:824,y:303},{x:277,y:285}].map((p,i)=><g key={i}><circle cx={p.x} cy={p.y} r="4"/><circle className="contact-map-pulse" cx={p.x} cy={p.y} r="10"/></g>)}
      </svg>
    </div>
  );
}
