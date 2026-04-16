import acqualitaLogo from './assets/acqualita-logo.png';

function LogoMark({ size = 56 }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <img
        src={acqualitaLogo}
        alt=""
        className="absolute left-1/2 top-0 h-[180%] w-auto max-w-none -translate-x-1/2 [filter:brightness(0)_saturate(100%)_invert(77%)_sepia(53%)_saturate(795%)_hue-rotate(63deg)_brightness(96%)_contrast(91%)]"
        style={{ clipPath: 'inset(0 0 42% 0)' }}
      />
    </div>
  );
}

function BrandText() {
  const brandSerif = { fontFamily: '"Cormorant Garamond", serif' };

  return (
    <div>
      <div
        style={brandSerif}
        className="flex items-end text-3xl font-semibold tracking-[0.08em] text-white sm:text-4xl"
      >
        <span>AC</span>

        <span className="relative inline-block mx-[0.02em]">
          <span>Q</span>

          <svg
            viewBox="0 0 56 16"
            aria-hidden="true"
            className="pointer-events-none absolute left-[40%] top-[74%] h-3.5 w-8 -translate-x-1/2 sm:top-[76%] sm:h-4 sm:w-9"
          >
            <path
              d="M4 10 C10 4, 18 4, 26 10 C33 14, 40 14, 50 8"
              fill="none"
              stroke="rgb(110 231 183)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <span>UALITÁ</span>
      </div>

      <p className="mt-1 text-[10px] uppercase tracking-[0.55em] text-emerald-300 sm:text-xs">
        ACADEMIA
      </p>
    </div>
  );
}

function PurposeIcon({ type }) {
  if (type === 'mission') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="4" fill="currentColor" />
        <path d="M32 32 L47 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M43 18 H50 V25" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'vision') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
        <path
          d="M10 32 C16 22, 24 17, 32 17 C40 17, 48 22, 54 32 C48 42, 40 47, 32 47 C24 47, 16 42, 10 32 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle cx="32" cy="32" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="2.5" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
      <path
        d="M32 12 L47 24 L41 45 H23 L17 24 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M32 12 L23 24 L32 45 L41 24 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M17 24 H47" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export default function AcademiaAcqualitaLandingPage() {
  const whatsappNumber = '5562985921452';
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=Olá!%20Quero%20mais%20informações%20sobre%20a%20Academia%20Acqualitá.`;
  const instagramHref =
    'https://www.instagram.com/academiaacqualita?igsh=MXdoaW02amVqbW1kZA==';
  const mapsHref = 'https://maps.app.goo.gl/6K8yMepiibpA5NPQ7';

  const brandSerif = { fontFamily: '"Cormorant Garamond", serif' };

  const benefits = [
    'Ambiente moderno, climatizado e acolhedor',
    'Estrutura completa para treino, natação e bem-estar',
    'Atendimento próximo e foco na sua evolução',
    'Espaço pensado para toda a família',
  ];

  const purposeItems = [
    {
      key: 'mission',
      eyebrow: 'Missão',
      title: 'Promover saúde ao corpo e à alma.',
      text:
        'Através da atividade física, proporcionar saúde ao corpo e à alma, em um ambiente profissional e cristão para toda a família, visando a longevidade com qualidade.',
    },
    {
      key: 'vision',
      eyebrow: 'Visão',
      title: 'Ser reconhecida por cumprir sua missão com excelência.',
      text:
        'Ser reconhecida pelo cumprimento eficiente da missão, aliado a um ambiente acolhedor e aconchegante.',
    },
    {
      key: 'values',
      eyebrow: 'Valores',
      title: 'Excelência, amor, respeito, união e alegria.',
      text:
        'Excelência é nossa palavra de ordem. Cultivamos um ambiente direcionado pelo amor, respeito, união e alegria.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#0B1F3A]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_24%),radial-gradient(circle_at_90%_20%,rgba(11,31,58,0.08),transparent_22%),linear-gradient(180deg,#ffffff_0%,#f7f8fa_100%)]" />
        <div className="absolute left-[-8rem] top-16 h-[20rem] w-[20rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-28 h-[18rem] w-[18rem] rounded-full bg-[#0B1F3A]/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-[4.5rem] sm:w-[4.5rem]">
              <LogoMark size={50} />
            </div>

            <BrandText />
          </a>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
              <a href="#beneficios" className="transition hover:text-white">
                Benefícios
              </a>
              <a href="#proposito" className="transition hover:text-white">
                Essência
              </a>
              <a href="#servicos" className="transition hover:text-white">
                Modalidades
              </a>
              <a href="#contato" className="transition hover:text-white">
                Contato
              </a>
            </nav>

            <a
              href={instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Academia Acqualitá"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:scale-[1.04] hover:border-emerald-400 hover:text-emerald-300"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.9 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.7A5.3 5.3 0 1 1 6.7 12 5.3 5.3 0 0 1 12 6.7Zm0 1.8A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#040404_0%,#0B1F3A_58%,#07111f_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.20),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.10),transparent_18%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pb-28 md:pt-24">
            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-200 backdrop-blur-xl">
                Experiência premium em saúde e movimento
              </div>

              <h1
                style={brandSerif}
                className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-8xl"
              >
                Treino, cuidado
                <span className="block bg-gradient-to-r from-white via-emerald-300 to-white bg-clip-text pb-2 text-transparent">
                  e elegância.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                A Academia Acqualitá une musculação, natação e hidroginástica em um
                ambiente sofisticado, acolhedor e completo para todas as idades.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500 px-7 py-3.5 text-center text-sm font-semibold text-black shadow-[0_12px_35px_rgba(16,185,129,0.30)] transition hover:scale-[1.02]"
                >
                  Falar no WhatsApp
                </a>

                <a
                  href="#contato"
                  className="rounded-full border border-white/14 bg-white/6 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/10"
                >
                  Ver localização
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-white/12 bg-white/6 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                    Treino
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">Musculação</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/12 bg-white/6 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                    Aquático
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">Natação</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/12 bg-white/6 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                    Bem-estar
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    Hidroginástica
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-emerald-300/12 via-white/8 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-white/7 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                <div className="rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.04)_100%)] p-8">
                  <p className="text-xs uppercase tracking-[0.34em] text-emerald-300/90">
                    Acqualitá Experience
                  </p>

                  <h2
                    style={brandSerif}
                    className="mt-4 text-4xl font-semibold leading-[1.04] text-white sm:text-5xl"
                  >
                    Movimento com presença, conforto e cuidado.
                  </h2>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-[1.5rem] border border-white/12 bg-black/15 px-5 py-4">
                      <p className="text-sm text-white/85">
                        Estrutura completa para treino, aulas aquáticas e bem-estar.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/12 bg-black/15 px-5 py-4">
                      <p className="text-sm text-white/85">
                        Um ambiente pensado para receber adultos, crianças e bebês.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/12 bg-black/15 px-5 py-4">
                      <p className="text-sm text-white/85">
                        Atendimento próximo, visual elegante e atmosfera premium.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-emerald-400/70 via-white/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.34em] text-emerald-700/80">
                Benefícios
              </p>
              <h2
                style={brandSerif}
                className="mt-4 text-4xl font-semibold leading-tight text-[#0B1F3A] md:text-6xl"
              >
                Uma experiência exclusiva, com mais presença e sofisticação.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(2,6,23,0.06)]"
                >
                  <div className="mb-5 h-px w-16 bg-gradient-to-r from-[#050505] via-emerald-500 to-transparent" />
                  <p className="text-lg font-medium leading-8 text-[#0B1F3A]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proposito" className="relative bg-[linear-gradient(180deg,#eaf8ee_0%,#f5fbf7_45%,#eef8f1_100%)] py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.10),transparent_24%)]" />
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[2.75rem] border border-emerald-100 bg-[#0b1528] p-8 text-white shadow-[0_22px_70px_rgba(2,6,23,0.10)] md:p-10">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.34em] text-emerald-300/85">
                  Essência Acqualitá
                </p>
                <h2
                  style={brandSerif}
                  className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl"
                >
                  Missão, visão e valores que sustentam a marca.
                </h2>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {purposeItems.map((item) => (
                  <div
                    key={item.key}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_12px_40px_rgba(0,0,0,0.10)] backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-400/10 text-emerald-300">
                        <PurposeIcon type={item.key} />
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-300">
                        {item.eyebrow}
                      </p>
                    </div>

                    <h3
                      style={brandSerif}
                      className="mt-6 text-3xl font-semibold leading-tight text-white"
                    >
                      {item.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-white/72">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#0b1528] py-16 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.34em] text-emerald-300/85">
                Modalidades
              </p>
              <h2
                style={brandSerif}
                className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl"
              >
                Treino, movimento e bem-estar.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/65">
                Duas experiências centrais, apresentadas com mais clareza, menos ruído e
                uma linguagem mais premium.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.08)_0%,rgba(34,197,94,0.08)_100%)] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.20)]">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
                  Treino
                </p>
                <h3
                  style={brandSerif}
                  className="mt-4 text-4xl font-semibold text-white"
                >
                  Musculação
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                  Treino com estrutura, acompanhamento e performance em um ambiente
                  pensado para evolução com conforto e presença.
                </p>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-emerald-400/70 via-white/40 to-transparent" />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/15 p-4">
                    <p className="text-sm uppercase tracking-[0.26em] text-white/40">
                      Estrutura
                    </p>
                    <p className="mt-2 text-base font-medium text-white">
                      Treino com conforto e performance
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/15 p-4">
                    <p className="text-sm uppercase tracking-[0.26em] text-white/40">
                      Foco
                    </p>
                    <p className="mt-2 text-base font-medium text-white">
                      Evolução física com acompanhamento
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/12 bg-white/[0.04] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
                  Aquático
                </p>
                <h3
                  style={brandSerif}
                  className="mt-4 text-4xl font-semibold text-white"
                >
                  Natação & Hidro
                </h3>
                <p className="mt-4 text-base leading-7 text-white/65">
                  Atividades na água para diferentes fases da vida, com foco em
                  acolhimento, saúde e bem-estar.
                </p>

                <div className="mt-6 divide-y divide-white/10">
                  <div className="py-4 first:pt-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          Natação para bebês
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-white/65">
                          Segurança, adaptação e estímulo desde os primeiros anos.
                        </p>
                      </div>
                      <div className="mt-1 shrink-0 text-emerald-300">↗</div>
                    </div>
                  </div>

                  <div className="py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          Natação infantil
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-white/65">
                          Aprendizado progressivo com confiança e coordenação.
                        </p>
                      </div>
                      <div className="mt-1 shrink-0 text-emerald-300">↗</div>
                    </div>
                  </div>

                  <div className="py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          Natação para adultos
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-white/65">
                          Saúde, técnica e condicionamento para diferentes níveis.
                        </p>
                      </div>
                      <div className="mt-1 shrink-0 text-emerald-300">↗</div>
                    </div>
                  </div>

                  <div className="py-4 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          Hidroginástica
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-white/65">
                          Movimento, mobilidade e bem-estar com baixo impacto.
                        </p>
                      </div>
                      <div className="mt-1 shrink-0 text-emerald-300">↗</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-7xl px-6 pb-24 pt-20">
          <div className="rounded-[2.25rem] border border-slate-200 bg-[#050505] p-8 text-white shadow-[0_20px_80px_rgba(0,0,0,0.18)] md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.34em] text-emerald-300/85">
                Contato
              </p>
              <h2
                style={brandSerif}
                className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl"
              >
                Venha conhecer a Academia Acqualitá.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                Fale com a equipe no WhatsApp ou abra a localização da academia no mapa.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#050505] shadow-[0_12px_35px_rgba(255,255,255,0.10)] transition hover:scale-[1.02]"
                >
                  Chamar no WhatsApp
                </a>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:border-emerald-300/50 hover:text-emerald-300"
                >
                  Abrir no Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/25 bg-gradient-to-r from-emerald-300 to-emerald-500 text-black shadow-[0_16px_40px_rgba(16,185,129,0.35)] transition hover:scale-[1.03]"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.669.15-.198.297-.768.965-.941 1.164-.173.198-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.475-.883-.787-1.48-1.758-1.653-2.055-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.496.099-.199.05-.372-.025-.521-.074-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.793.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.711.226 1.358.194 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.004 2.003c-5.514 0-9.983 4.469-9.983 9.983 0 1.762.46 3.484 1.333 5.003L2 22l5.129-1.305a9.95 9.95 0 0 0 4.875 1.263h.004c5.513 0 9.992-4.469 9.992-9.983 0-2.673-1.04-5.186-2.928-7.074a9.91 9.91 0 0 0-7.068-2.898m0 18.17h-.003a8.3 8.3 0 0 1-4.231-1.157l-.303-.18-3.044.774.812-2.968-.197-.304a8.3 8.3 0 0 1-1.277-4.42c0-4.59 3.736-8.325 8.33-8.325 2.22 0 4.306.864 5.876 2.433a8.27 8.27 0 0 1 2.438 5.892c-.002 4.592-3.74 8.325-8.331 8.325" />
        </svg>
      </a>

      <footer className="border-t border-[#0B1F3A]/10 bg-[#050505] px-6 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <LogoMark size={42} />
              </div>

              <BrandText />
            </div>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Treino, saúde e performance com uma experiência mais sofisticada e acolhedora.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300/90">
              Informações
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              R. C-137, 741 - quadra 322 lote 2 - Jardim América, Goiânia - GO, 74275-060
            </p>
            <p className="mt-2 text-sm text-white/70">Telefone: (62) 3920-2121</p>
            <p className="mt-2 text-sm text-white/70">CNPJ: 21.923.441/0001-35</p>
          </div>

          <div className="md:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300/90">
              Conecte-se
            </p>
            <div className="mt-3 flex items-center gap-4 md:justify-end">
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/70 transition hover:text-white"
              >
                Instagram
              </a>
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/70 transition hover:text-white"
              >
                Maps
              </a>
            </div>
            <p className="mt-6 text-sm text-white/45">
              © 2026 Academia Acqualitá. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}