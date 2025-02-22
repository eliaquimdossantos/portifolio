import { Typewriter } from "react-simple-typewriter";

export default function Landing() {
  return (
    <section className="flex w-full h-[70vh] items-center justify-center gap-8 mt-8">
      <div>
        <span className="text-violet-500 text-sm font-mono p-1 rounded-md font-black bg-violet-900/50">
          BOAS-VINDAS👋
        </span>
        <h1 className="text-4xl my-2 font-black">
          Sou <span className="bg-gradient-to-r to-violet-400 via-indigo-400 from-purple-400 text-transparent bg-clip-text">Eliaquim<br />Costa</span>
        </h1>
        <span className="text-indigo-400/80 font-mono text-sm font-medium">{' '}
          <Typewriter
            words={[' ', 'Desenvolvedor Full-stack']}             
            />
        </span>
      </div>

      {/* Container da imagem */}
      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* Camada de Blur atrás da imagem */}
        <div className="absolute inset-0 w-full h-full rounded-full blur-3xl bg-violet-500/50  scale-110"></div>

        {/* Imagem principal */}
        <img className="relative w-72 rounded-full" src="/profile.webp" alt="Profile" />
      </div>
    </section>
  );
}
