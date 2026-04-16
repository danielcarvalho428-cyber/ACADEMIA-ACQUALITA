import acqualitaLogo from './assets/acqualita-logo.png';

function LogoMark({ size = 56, dark = false }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <img
        src={acqualitaLogo}
        alt=""
        role="presentation"
        className={`absolute left-1/2 top-0 h-[180%] w-auto max-w-none -translate-x-1/2 ${
          dark
            ? ''
            : '[filter:brightness(0)_saturate(100%)_invert(77%)_sepia(53%)_saturate(795%)_hue-rotate(63deg)_brightness(96%)_contrast(91%)]'
        }`}
        style={{ clipPath: 'inset(0 0 42% 0)' }}
      />
    </div>
  );
}

function BrandText({ dark = false }) {
  const brandSerif = { fontFamily: '"Cormorant Garamond", serif' };
  const textColor = dark ? 'text-[#0B1F3A]' : 'text-white';
  const subColor = dark ? 'text-emerald-700' : 'text-emerald-300';

  return (
    <div>
      <div
        style={brandSerif}
        className={`flex items-end text-3xl font-semibold tracking-[0.08em] sm:text-4xl ${textColor}`}
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

      <p className={`mt-1 text-[10px] uppercase tracking-[0.55em] sm:text-xs ${subColor}`}>
        ACADEMIA
      </p>
    </div>
  );
}

function EssenceIcon({ type }) {
  if (type === 'mission') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-10 w-10">
        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'vision') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-10 w-10">
        <path
          d="M10 32 C16 22, 24 18, 32 18 C40 18, 48 22, 54 32 C48 42, 40 46, 32 46 C24 46, 16 42, 10 32 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle cx="32" cy="32" r="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-10 w-10">
      <path
        d="M32 12 L46 22 L40 44 H24 L18 22 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M18 22 H46" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export default function AcademiaAcqualitaLandingPage() {
  const brandSerif = { fontFamily: '"Cormorant Garamond", serif' };

  const whatsappNumber = '5562985921452';
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=Olá!%20Quero%20mais%20informações%20sobre%20a%20Academia%20Acqualitá.`;
  const instagramHref =
    'https://www.instagram.com/academiaacqualita?igsh=MXdoaW02amVqbW1kZA==';
  const mapsHref = 'https://maps.app.goo.gl/6K8yMepiibpA5NPQ7';

  const sellingPoints = [
    'Estrutura premium',
    'Ambiente familiar',
    'Performance e bem-estar',
    'Atendimento próximo',
  ];

  const modalityCards = [
    {
      title: 'Musculação',
      text: 'Estrutura e acompanhamento para quem quer evolução de verdade.',
      tone: 'dark',
    },
    {
      title: 'Natação',
      text: 'Aulas para bebês, crianças e adultos com técnica e acolhimento.',
      tone: 'light',
    },
    {
      title: 'Hidroginástica',
      text: 'Movimento, mobilidade e bem-estar com baixo impacto.',
      tone: 'light',
    },
  ];

  const essence = [
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
      title: 'Ser reconhecida pelo cumprimento eficiente da missão.',
      text:
        'Aliando excelência, acolhimento e um ambiente verdadeiramente aconchegante.',
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
    <div className="min-h-screen bg-[#f4f6f8] text-[#0B1F3A]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_22%),linear-gradient(180deg,#ffffff_0%,#f4f6f8_100%)]" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-slate-900/8 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030303]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-[4.5rem] sm:w-[4.5rem]">
              <LogoMark size={50} />
            </div>
            <BrandText />
          </a>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
              <a href="#essencia" className="transition hover:text-white">
                Essência
              </a>
              <a href="#modalidades" className="transition hover:text-white">
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
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#020202_0%,#08182e_50%,#0b1f3a_100%)] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.22),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_20%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-28 md:pt-24">
            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-200 backdrop-blur-xl">
                Academia em Goiânia com musculação, natação e hidroginástica
              </div>

              <h1
                style={brandSerif}
                className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-[5.5rem]"
              >
                O tipo de academia
                <span className="block bg-gradient-to-r from-white via-emerald-300 to-white bg-clip-text text-transparent">
                  que dá vontade de fazer parte.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
                A Academia Acqualitá, no Jardim América em Goiânia, oferece uma experiência
                premium para quem quer treinar com presença, cuidar da saúde e sentir que
                encontrou um lugar certo para evoluir.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500 px-7 py-3.5 text-center text-sm font-semibold text-black shadow-[0_12px_35px_rgba(16,185,129,0.30)] transition hover:scale-[1.02]"
                >
                  Quero conhecer a Acqualitá
                </a>

                <a
                  href="#modalidades"
                  className="rounded-full border border-white/14 bg-white/6 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/10"
                >
                  Ver modalidades
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {sellingPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-white/10 bg-white/[0.05] px-4 py-4 text-sm text-white/82 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-br from-emerald-300/15 via-white/8 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.8rem] border border-white/12 bg-white/[0.07] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
                <div className="rounded-[2.2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_100%)] p-8">
                  <div className="flex items-center gap-4">
                    <LogoMark size={46} />
                    <div>
                      <p className="text-xs uppercase tracking-[0.34em] text-emerald-300/90">
                        Acqualitá Experience
                      </p>
                      <p className="mt-1 text-sm text-white/62">
                        Fitness, família e bem-estar
                      </p>
                    </div>
                  </div>

                  <h2
                    style={brandSerif}
                    className="mt-8 text-4xl font-semibold leading-[1.02] text-white sm:text-5xl"
                  >
                    Presença visual. Estrutura real. Ambiente que convida.
                  </h2>

                  <div className="mt-8 grid gap-4">
                    <div className="rounded-[1.4rem] border border-white/10 bg-black/20 px-5 py-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-white/38">
                        Espaço
                      </p>
                      <p className="mt-2 text-base text-white/84">
                        Academia pensada para transmitir qualidade logo no primeiro contato.
                      </p>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/10 bg-black/20 px-5 py-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-white/38">
                        Experiência
                      </p>
                      <p className="mt-2 text-base text-white/84">
                        Um ambiente acolhedor para treinar com constância e confiança.
                      </p>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/10 bg-black/20 px-5 py-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-white/38">
                        Estilo
                      </p>
                      <p className="mt-2 text-base text-white/84">
                        Visual premium, atendimento próximo e rotina que inspira evolução.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-emerald-400/70 via-white/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="essencia" className="relative overflow-hidden bg-[#08172c] py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_24%)]" />
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.34em] text-emerald-300/85">
                Nossa essência
              </p>
              <h2
                style={brandSerif}
                className="mt-4 text-4xl font-semibold leading-tight md:text-6xl"
              >
                Missão, visão e valores.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                Missão, visão e valores que sustentam a identidade da Academia Acqualitá.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {essence.map((item) => (
                <div
                  key={item.key}
                  className="rounded-[2.2rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.20)] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-400/10 text-emerald-300">
                      <EssenceIcon type={item.key} />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-300">
                      {item.eyebrow}
                    </p>
                  </div>

                  <h3
                    style={brandSerif}
                    className="mt-6 text-3xl font-semibold leading-tight"
                  >
                    {item.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-white/72">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="modalidades" className="relative py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.34em] text-emerald-700/80">
                  Modalidades
                </p>
                <h2
                  style={brandSerif}
                  className="mt-4 text-4xl font-semibold leading-tight text-[#0B1F3A] md:text-6xl"
                >
                  Três caminhos para viver a experiência Acqualitá.
                </h2>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0B1F3A] shadow-sm transition hover:border-emerald-400 hover:text-emerald-700"
              >
                Agendar atendimento
              </a>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
              {modalityCards.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[2.3rem] border p-8 shadow-[0_18px_50px_rgba(2,6,23,0.07)] ${
                    item.tone === 'dark'
                      ? 'border-slate-200 bg-[linear-gradient(145deg,#0b1f3a_0%,#102949_100%)] text-white lg:min-h-[22rem]'
                      : 'border-slate-200 bg-white text-[#0B1F3A] lg:min-h-[22rem]'
                  }`}
                >
                  <p
                    className={`text-sm uppercase tracking-[0.3em] ${
                      item.tone === 'dark' ? 'text-emerald-300/80' : 'text-emerald-700/80'
                    }`}
                  >
                    {index === 0 ? 'Destaque' : 'Modalidade'}
                  </p>

                  <h3
                    style={brandSerif}
                    className={`mt-5 text-4xl font-semibold leading-tight ${
                      item.tone === 'dark' ? 'text-white' : 'text-[#0B1F3A]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-6 text-base leading-8 ${
                      item.tone === 'dark' ? 'text-white/74' : 'text-slate-600'
                    }`}
                  >
                    {item.text}
                  </p>

                  <div
                    className={`mt-8 h-px w-full ${
                      item.tone === 'dark'
                        ? 'bg-gradient-to-r from-emerald-400/70 via-white/40 to-transparent'
                        : 'bg-gradient-to-r from-[#050505] via-emerald-500 to-transparent'
                    }`}
                  />

                  <p
                    className={`mt-6 text-sm leading-7 ${
                      item.tone === 'dark' ? 'text-white/64' : 'text-slate-500'
                    }`}
                  >
                    {item.title === 'Musculação' &&
                      'Para quem quer estrutura, performance e consistência.'}
                    {item.title === 'Natação' &&
                      'Para bebês, crianças e adultos com técnica e acolhimento.'}
                    {item.title === 'Hidroginástica' &&
                      'Para bem-estar, mobilidade e qualidade de vida.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-7xl px-6 pb-24 pt-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#050505] p-8 text-white shadow-[0_20px_80px_rgba(0,0,0,0.18)] md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.34em] text-emerald-300/85">
                  Contato
                </p>
                <h2
                  style={brandSerif}
                  className="mt-4 text-4xl font-semibold leading-tight md:text-6xl"
                >
                  O próximo passo é sentir a Acqualitá de perto.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                  Fale com a equipe, conheça o ambiente e veja como a rotina da academia pode
                  combinar com o que você busca.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.75rem] bg-white px-6 py-6 text-[#050505] shadow-[0_12px_35px_rgba(255,255,255,0.10)] transition hover:scale-[1.02]"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                    WhatsApp
                  </p>
                  <p className="mt-3 text-xl font-semibold">(62) 98592-1452</p>
                </a>

                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.75rem] border border-white/15 bg-white/5 px-6 py-6 transition hover:border-emerald-300/50"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                    Localização
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">Abrir no Maps</p>
                </a>

                <div className="rounded-[1.75rem] border border-white/15 bg-white/5 px-6 py-6 sm:col-span-2">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                    Endereço
                  </p>
                  <p className="mt-3 text-base leading-8 text-white/78">
                    R. C-137, 741 - quadra 322 lote 2 - Jardim América, Goiânia - GO, 74275-060
                  </p>
                </div>
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
