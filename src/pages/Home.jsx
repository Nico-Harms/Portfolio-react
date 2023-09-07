import Imageslider from "../components/Imageslider";

export default function Home() {
    return (
        <div className="home">
        <section className="videoSectionOne">
            <div className="videoSectionTextWrapper">
             <h2>Velkommen til Harms Rejser - Dit Ultimative Rejseeventyr Begynder Her!

</h2>
             <p>Drømmer du om at udforske fjerne horisonter, opdage nye kulturer og skabe minder for livet? Så er du kommet til det rette sted! Hos [Dit Rejsebureau Navn] er vi dedikerede til at gøre dine rejsetræ drømme til virkelighed. Vores mission er at skræddersy uforglemmelige rejseoplevelser, der opfylder dine ønsker og behov.

Vores Ekspertise

Med års erfaring i rejsebranchen har Harms rejser opbygget en solid ekspertise inden for alle aspekter af rejseplanlægning. Vores team af erfarne rejseeksperter brænder for at dele deres viden og lidenskab med dig, og de er klar til at skræddersy den perfekte rejseplan, uanset om det er en romantisk flugt, en spændende eventyrrejse eller en afslappende strandferie.</p>
             </div>
             <iframe className="videoClass" width="560" height="315" src="https://www.youtube.com/embed/6jucdemDQLE?si=XuNDwYvZ0LTiDLmD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>

        <section>
            <Imageslider />
            <div className="textWrapper">
           <h2>Vores Ekspertise</h2>
            <p>
Med års erfaring i rejsebranchen har Harms Rejser opbygget en solid ekspertise inden for alle aspekter af rejseplanlægning. Vores team af erfarne rejseeksperter brænder for at dele deres viden og lidenskab med dig, og de er klar til at skræddersy den perfekte rejseplan, 
uanset om det er en romantisk flugt, en spændende eventyrrejse eller en afslappende strandferie.</p>
<h2>Personlig Service</h2>
<p>Vi tror på, at hver rejsende er unik, og derfor tilbyder vi personlig service, der matcher dine præferencer. Fra at vælge den ideelle destination til at arrangere fly, 
    indkvartering, ture og aktiviteter, er vi med dig hvert skridt på vejen. Vi lytter til dine ønsker og drømme og sørger for, at din rejse bliver en skræddersyet oplevelse, der
     overstiger dine forventninger.</p>
</div>
        </section>


</div>
    )
}