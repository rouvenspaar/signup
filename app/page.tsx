import NewsletterForm from "@/components/NewsletterForm";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center p-10 min-h-screen">
      <div className="space-y-1">
        <h2 className="z-10 text-3xl font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text">
          Join the waitlist for
        </h2>
        <h1 className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-red-400 to-red-800 animate-fade-in-3">
          AstroLog
        </h1>
      </div>
      <NewsletterForm />
      <div className="text-white flex animate-fade-in-3">
        <h1>Get the preview version&nbsp;</h1>
        <a href="https://www.google.ch" className="text-[#c02d39] underline hover:text-[#a0232d]">here</a>
        <h1>&nbsp;(JAR file).</h1>
      </div>
      <Socials />
    </main>
  );
}
