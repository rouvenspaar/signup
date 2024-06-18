import NewsletterForm from "@/components/NewsletterForm";
import Socials from "@/components/Socials";
import styles from './page.module.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
        <h1>Download the preview version&nbsp;</h1>
        <a href="" className="text-[#c02d39] underline hover:text-[#a0232d]">here</a>
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
            Since developing AstroLog took and still takes a lot of time and effort it won't be free but there will be a 30-day trial.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="4">
          <AccordionTrigger>Who develops AstroLog?</AccordionTrigger>
          <AccordionContent>
            Hi, my name is Rouven Spaar, and I am the sole developer of AstroLog. I am 19 years old and studying mechanical engineering.<br />
            <br />
            I have had an interest in astronomy since I was a little child. After getting my first telescope, I quickly transitioned into
            astrophotography. The most frustrating part for me was always classifying the raw files after a night of shooting. So, I searched
            for solutions and didn't find anything. I then quickly programmed a rudimentary solution for myself but soon realized that I
            wanted to make this solution public. That is when I started to develop a completely new, better-looking version of my proof of
            concept: AstroLog.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
