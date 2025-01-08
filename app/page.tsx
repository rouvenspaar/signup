import NewsletterForm from "@/components/NewsletterForm";
import styles from './page.module.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DownloadLink } from "@/components/DownloadLink";

export default function Home() {
  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center p-10 min-h-screen">
      <div className={styles.background} />
      <div className="space-y-1 mt-28">
        <h2 className="z-10 text-3xl font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text">
          Join the waitlist for
        </h2>
        <h1 className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-red-400 to-red-800 animate-fade-in-3 h-20">
          AstroLog
        </h1>
      </div>
      <NewsletterForm />
      <div className="flex animate-fade-in-3 text-sm text-gray-500">
        <h1>Take a look at the project&nbsp;</h1>
        <a href="https://github.com/astrolog-app/astrolog" className="text-[#c02d39] underline hover:text-[#a0232d]" target="_blank" rel="noopener noreferrer">here</a>
        <h1>.</h1>
      </div>
      <Accordion type="single" collapsible className={`${styles.accordion} animate-fade-in-3`}>
        <AccordionItem value="1">
          <AccordionTrigger>What is AstroLog?</AccordionTrigger>
          <AccordionContent>
            AstroLog is an astrophotography application that lets you log and classify
            all your imaging sessions - by its own or manually.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>When will AstroLog release?</AccordionTrigger>
          <AccordionContent>
            The exact release date of AstroLog is not determined but is expected in the first half of 2025.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>Do I have to purchase AstroLog?</AccordionTrigger>
          <AccordionContent>
            Since developing AstroLog took and still takes a lot of time and effort it won&apos;t be free but there will be a 30-day trial.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
