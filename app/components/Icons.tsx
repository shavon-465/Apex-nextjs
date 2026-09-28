/**
 * Icons extracted verbatim from the Pen.dev canvas export.
 * Every path `d`, `viewBox`, and stroke-width is preserved 1:1 from the design.
 */

type IconProps = { className?: string };

/** Hamburger menu — 3 stacked lines (navbar) */
export function MenuIcon() {
  return (
    <div className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden relative">
      {[12, 6, 18].map((top, i) => (
        <svg
          key={top}
          viewBox="0 0 16.5 1"
          preserveAspectRatio="none"
          className="box-border w-[16.5px] h-[1.5px] absolute left-[3.75px] overflow-visible"
          style={{ top: `${top}px`, zIndex: i }}
        >
          <path
            d="M0 0l16.5 0"
            fill="none"
            stroke="#ffffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      ))}
    </div>
  );
}

/** GearSix — "Trusted parts" card */
export function GearSixIcon() {
  return (
    <div className="box-border w-[36px] md:w-[48px] h-[36px] md:h-[48px] shrink-0 overflow-hidden relative">
      <svg
        viewBox="0 0 80 80"
        preserveAspectRatio="none"
        className="box-border w-[11.25px] md:w-[15px] h-[11.25px] md:h-[15px] absolute left-[12.375px] md:left-[16.5px] top-[12.375px] md:top-[16.5px] overflow-visible z-0"
      >
        <path
          d="M80 40c0 22.09139-17.90861 40-40 40-22.09139 0-40-17.90861-40-40 0-22.09139 17.90861-40 40-40 22.09139 0 40 17.90861 40 40z"
          fill="none"
          stroke="#000000ff"
          strokeWidth="3.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg
        viewBox="0.00000858306884765625 0 207.94539546966553 192"
        preserveAspectRatio="none"
        className="box-border w-[29.242px] md:w-[38.99px] h-[27px] md:h-[36px] absolute left-[3.377px] md:left-[4.503px] top-[4.5px] md:top-[6px] overflow-visible z-[1]"
      >
        <path
          d="M106.03269 174.11c-1.33999 0-2.69 0-4 0l-32.05 17.89c-12.47675-4.19687-24.0493-10.71088-34.11-19.2l-0.12-36c-0.71-1.11999-1.38-2.25-2-3.41l-31.87-18.14999c-2.51025-12.69713-2.51025-25.76289 0-38.46001l31.84-18.1c0.65-1.15 1.32-2.29 2-3.41l0.16-36c10.05164-8.51357 21.62118-15.05155 34.1-19.27l32 17.89c1.34 0 2.69 0 4 0l32.00001-17.89c12.47674 4.19686 24.0493 10.71087 34.11 19.2l0.11999 36c0.71001 1.12 1.38001 2.25 2 3.41l31.85001 18.14c2.51025 12.69712 2.51025 25.76289 0 38.46001l-31.84 18.09999c-0.64999 1.14999-1.32001 2.29001-2 3.41l-0.16 36c-10.04486 8.51495-21.60748 15.05626-34.08 19.28l-31.95001-17.89z"
          fill="none"
          stroke="#000000ff"
          strokeWidth="3.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

/** SealCheck — "Reliable quality" card */
export function SealCheckIcon() {
  return (
    <div className="box-border w-[36px] md:w-[48px] h-[36px] md:h-[48px] shrink-0 overflow-hidden relative">
      <svg
        viewBox="-0.0000019073486328125 -0.0000019073486328125 208.00000190734863 208.00000190734863"
        preserveAspectRatio="none"
        className="box-border w-[29.25px] md:w-[39px] h-[29.25px] md:h-[39px] absolute left-[3.375px] md:left-[4.5px] top-[3.375px] md:top-[4.5px] overflow-visible z-0"
      >
        <path
          d="M30.46 177.53999c-9.2-9.19999-3.1-28.52998-7.78-39.84999-4.86-11.69-22.68-21.19-22.68-33.69 0-12.5 17.82-22 22.68-33.69 4.68-11.31-1.42-30.65 7.78-39.85 9.2-9.2 28.54-3.1 39.85-7.78 11.74-4.86 21.19-22.68 33.69-22.68 12.5 0 22 17.82 33.69 22.68 11.32001 4.68 30.65-1.42 39.84999 7.78 9.2 9.2 3.10002 28.53 7.78002 39.85 4.86 11.74 22.67999 21.19 22.67999 33.69 0 12.5-17.81999 22-22.67999 33.69-4.68 11.32001 1.41998 30.65-7.78002 39.84999-9.19999 9.2-28.52998 3.10002-39.84999 7.78002-11.69 4.86-21.19 22.67999-33.69 22.67999-12.5 0-22-17.81999-33.69-22.67999-11.31-4.68-30.65 1.41998-39.85-7.78002z"
          fill="none"
          stroke="#000000ff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg
        viewBox="0 0 80 56"
        preserveAspectRatio="none"
        className="box-border w-[11.25px] md:w-[15px] h-[7.875px] md:h-[10.5px] absolute left-[12.375px] md:left-[16.5px] top-[14.625px] md:top-[19.5px] overflow-visible z-[1]"
      >
        <path
          d="M0 32l24 24 56-56"
          fill="none"
          stroke="#000000ff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

/** Handshake — "Support" card */
export function HandshakeIcon() {
  const stroke = {
    fill: "none",
    stroke: "#000000ff",
    strokeWidth: "2.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };
  return (
    <div className="box-border w-[36px] md:w-[48px] h-[36px] md:h-[48px] shrink-0 overflow-hidden relative">
      <svg
        viewBox="0 0 160 56"
        preserveAspectRatio="none"
        className="box-border w-[22.5px] md:w-[30px] h-[7.875px] md:h-[10.5px] absolute left-[5.625px] md:left-[7.5px] top-[19.125px] md:top-[25.5px] overflow-visible z-0"
      >
        <path d="M160 16l-40 40-64-16-56-40" {...stroke} />
      </svg>
      <svg
        viewBox="0 0 110.6400146484375 14.630000114440918"
        preserveAspectRatio="none"
        className="box-border w-[15.559px] md:w-[20.745px] h-[2.057px] md:h-[2.743px] absolute left-[10.221px] md:left-[13.628px] top-[7.875px] md:top-[10.5px] overflow-visible z-[1]"
      >
        <path d="M0 14.63l55.32-14.63 55.32001 14.63" {...stroke} />
      </svg>
      <svg
        viewBox="-9.5367431640625e-7 -0.000003816559910774231 64.67488193511963 79.99888229556382"
        preserveAspectRatio="none"
        className="box-border w-[9.095px] md:w-[12.127px] h-[11.25px] md:h-[15px] absolute left-[1.126px] md:left-[1.501px] top-[7.875px] md:top-[10.5px] overflow-visible z-[2]"
      >
        <path
          d="M26.36488 4.41888l-25.52 51.06001c-0.94843 1.89647-1.10516 4.0919-0.43575 6.10386 0.66941 2.01197 2.11019 3.67588 4.00575 4.62613l27.58 13.79 32.68-65.37-27.57-13.78c-0.93953-0.47118-1.96271-0.75259-3.01105-0.82817-1.04834-0.07558-2.1013 0.05617-3.0987 0.38771-0.9974 0.33154-1.9197 0.85637-2.71418 1.54451-0.79448 0.68814-1.44558 1.52608-1.91607 2.46595z"
          {...stroke}
        />
      </svg>
      <svg
        viewBox="0 6.258487701416016e-7 64.67487335205078 79.99888548254967"
        preserveAspectRatio="none"
        className="box-border w-[9.095px] md:w-[12.127px] h-[11.25px] md:h-[15px] absolute left-[25.779px] md:left-[34.373px] top-[7.875px] md:top-[10.5px] overflow-visible z-[3]"
      >
        <path
          d="M32.67999 79.99888l27.58001-13.79c1.89557-0.95024 3.33634-2.61415 4.00575-4.62613 0.66941-2.01197 0.51267-4.20739-0.43576-6.10386l-25.51999-51.06001c-0.4705-0.93987-1.1216-1.77782-1.91608-2.46595-0.79448-0.68814-1.71677-1.21297-2.71417-1.54451-0.9974-0.33154-2.05037-0.46329-3.09871-0.38771-1.04834 0.07558-2.07151 0.35699-3.01105 0.82817l-27.56999 13.78 32.67999 65.37z"
          {...stroke}
        />
      </svg>
      <svg
        viewBox="-0.000004082918167114258 0 120.00458171963692 80"
        preserveAspectRatio="none"
        className="box-border w-[16.876px] md:w-[22.501px] h-[11.25px] md:h-[15px] absolute left-[13.499px] md:left-[17.999px] top-[10.125px] md:top-[13.5px] overflow-visible z-[4]"
      >
        <path
          d="M88.00458 0l-40 0-45.66 44.29c-0.84882 0.84839-1.49588 1.87688-1.89327 3.00928-0.39739 1.1324-0.53491 2.3397-0.40238 3.53246 0.13253 1.19277 0.53171 2.34043 1.16798 3.35798 0.63627 1.01755 1.49332 1.87892 2.50767 2.52029 17.51 11.19 41.28 10.41999 60.28-8.71001l40 32 16-16"
          {...stroke}
        />
      </svg>
      <svg
        viewBox="-0.000003814697265625 0.0000019073486328125 68.06000137329102 29.249998092651367"
        preserveAspectRatio="none"
        className="box-border w-[9.571px] md:w-[12.761px] h-[4.113px] md:h-[5.484px] absolute left-[7.875px] md:left-[10.5px] top-[26.262px] md:top-[35.016px] overflow-visible z-[5]"
      >
        <path d="M68.06 29.25l-41.72-10.42999-26.34-18.82001" {...stroke} />
      </svg>
    </div>
  );
}

/** Social icons — footer */
export function FacebookIcon({ className }: IconProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="none"
        className="box-border w-full h-full absolute left-0 top-0 overflow-visible z-0"
      >
        <path d="M0 0l24 0 0 24-24 0 0-24z" fill="#000000ff" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="none"
        className="box-border w-full h-full absolute left-0 top-0 overflow-visible z-[1]"
      >
        <path
          d="M0 12.067c0 5.967 4.333 10.927 10 11.933l0-8.667-3 0 0-3.333 3 0 0-2.667c0-3 1.933-4.666 4.667-4.666 0.866 0 1.8 0.133 2.666 0.266l0 3.067-1.533 0c-1.467 0-1.8 0.733-1.8 1.667l0 2.333 3.2 0-0.533 3.333-2.667 0 0 8.667c5.667-1.006 10-5.966 10-11.933 0-6.637-5.4-12.067-12-12.067-6.6 0-12 5.43-12 12.067z"
          fill="#ffffffff"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 16 16"
        preserveAspectRatio="none"
        className="box-border w-full h-full absolute left-0 top-0 overflow-visible z-0"
      >
        <path
          d="M8.00123 0c1.23052 0.00043 2.44435 0.28471 3.54709 0.83073 1.10274 0.54602 2.06466 1.33906 2.81094 2.31744 0.74628 0.97838 1.25681 2.11573 1.49187 3.32359 0.23507 1.20785 0.18833 2.45365-0.13656 3.6405-0.3249 1.18685-0.9192 2.28275-1.73668 3.20248-0.81748 0.91972-1.83611 1.63847-2.97666 2.10034-1.14055 0.46187-2.37226 0.65441-3.59936 0.56264-1.22709-0.09176-2.41647-0.46536-3.47564-1.09172l-3.267 1.088c-0.08802 0.0292-0.18242 0.03334-0.27265 0.01197-0.09024-0.02137-0.17275-0.06742-0.23833-0.13299-0.06557-0.06557-0.11162-0.14809-0.13299-0.23832-0.02137-0.09024-0.01723-0.18464 0.01197-0.27266l1.089-3.266c-0.71934-1.21487-1.10437-2.59847-1.11596-4.01028-0.0116-1.41181 0.35064-2.80155 1.04993-4.02807 0.69929-1.22652 1.71071-2.24613 2.93156-2.95529 1.22084-0.70915 2.60762-1.08258 4.01947-1.08236z m-2.78599 4.004c-0.10174 0.00342-0.20152 0.029-0.29237 0.07494-0.09085 0.04594-0.17058 0.11114-0.23363 0.19106-0.18 0.211-0.688 0.725-0.688 1.767 0 1.044 0.705 2.054 0.80399 2.196 0.098 0.138 1.388 2.28 3.363 3.2 0.36667 0.17 0.74 0.31867 1.12 0.446 0.472 0.16 0.902 0.139 1.242 0.085 0.379-0.06 1.164-0.513 1.329-1.01 0.163-0.493 0.163-0.918 0.113-1.007-0.049-0.088-0.18-0.142-0.378-0.25-0.196-0.105-1.165-0.618-1.34499-0.687-0.18-0.073-0.312-0.106-0.443 0.105-0.132 0.213-0.507 0.691-0.623 0.832-0.113 0.139-0.23 0.159-0.425 0.053-0.198-0.105-0.831-0.33-1.58401-1.054-0.585-0.561-0.98-1.258-1.094-1.469-0.116-0.213-0.013-0.326 0.085-0.433 0.09-0.094 0.198-0.246 0.29601-0.371 0.097-0.122 0.132-0.21 0.19799-0.353 0.064-0.141 0.031-0.266-0.018-0.371-0.049-0.105-0.443-1.152-0.607-1.577-0.16-0.413-0.323-0.355-0.44299-0.363-0.114-0.005-0.245-0.005-0.376-0.005z"
          fill="#ffffffff"
        />
      </svg>
    </div>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0.0000011920928955078125 -0.000014066696166992188 799.4743640422821 799.4594867229462"
        preserveAspectRatio="none"
        className="box-border w-full h-full absolute left-0 top-0 overflow-visible z-0"
      >
        <path
          d="M399.62973 266.42975c-73.39999 0-133.29999 59.89999-133.29999 133.29999 0 73.39999 59.9 133.29998 133.29999 133.29998 73.39999 0 133.30002-59.89999 133.30002-133.29998 0-73.4-59.90003-133.29999-133.30002-133.29999z m399.80002 133.29999c0-55.20002 0.5-109.9-2.59998-165-3.09997-64-17.70001-120.80001-64.5-167.6-46.90002-46.9-103.60003-61.4-167.60003-64.5-55.20002-3.1-109.90003-2.6-165.00003-2.6-55.20002 0-109.89997-0.5-164.99996 2.6-64 3.1-120.8 17.7-167.60001 64.5-46.9 46.9-61.4 103.6-64.5 167.6-3.1 55.20001-2.6 109.89999-2.6 165 0 55.1-0.5 109.89999 2.6 165 3.1 64 17.7 120.79998 64.50001 167.59997 46.90001 46.90003 103.6 61.40003 167.6 64.5 55.2 3.09998 109.89995 2.60004 164.99996 2.60004 55.20001 0 109.90002 0.49994 165.00003-2.60004 64-3.09997 120.80005-17.70001 167.60003-64.5 46.90003-46.90002 61.40003-103.59997 64.5-167.59997 3.20002-55.10001 2.59998-109.79999 2.59998-165z m-399.80002 205.09997c-113.5 0-205.09999-91.59997-205.09999-205.09997 0-113.5 91.59999-205.10001 205.09999-205.10001 113.50003 0 205.10001 91.60001 205.10001 205.10001 0 113.5-91.59998 205.09997-205.10001 205.09997z m213.50003-370.69998c-26.5 0-47.90002-21.39999-47.90002-47.89999 0-26.5 21.40002-47.9 47.90002-47.9 26.5 0 47.90003 21.4 47.90003 47.9 0.00787 6.29254-1.22571 12.52481-3.63013 18.33987-2.40442 5.81506-5.93237 11.09866-10.3819 15.54816-4.44952 4.44949-9.73303 7.97749-15.54809 10.38189-5.81507 2.40441-12.04737 3.63797-18.33991 3.63007z"
          fill="#ffffffff"
        />
      </svg>
    </div>
  );
}
