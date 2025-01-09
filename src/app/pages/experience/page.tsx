const Experience = () => {
    return (
        <section id="exp" className="min-h-screen">
            <h1 className="flex justify-center text-4xl font-bold pt-24">Experience</h1>
            <div className="flex flex-col justify-start items-center pt-3">
                <div className="flex flex-col 2xl:flex-row 2xl:grid-row-1 2xl:grid-cols-2 w-3/4 bg-grayCard rounded-2xl p-5 my-5">
                    <div className="flex flex-col 2xl:w-1/4 justify-center items-center">
                        <img className="w-36" src="..\img\Logo_unicam.png" alt="logo_unicam" />
                    </div>
                    <div className="flex flex-col 2xl:w-3/4 2xl:justify-start 2xl:items-start justify-center items-center pt-3">
                        <h1 className="text-4xl text-sky-400 font-bold">Settembre 2022- Aprile 2025</h1>
                        <h2 className="text-lg font-bold">Studente dell'Universita' di Camerino</h2>
                        <p className="text-justify mx-16 2xl:mx-0 2xl:text-start pb-3 2xl:text-lg">Corso di Laurea in <span className="text-sky-400">Scienze e Tecnologie Informatiche (L-31). </span>Durante questo percorso ho sviluppato 
                        diverse <span className="text-sky-400">skills </span>in diversi linguaggi di programmazione e processi di un sviluppo software dalla sua concezione
                        fino alla effettiva produzione. I progetti principali a cui ho potuto dare il mio contributo sono stati il 
                        progetto <span className="text-sky-400">SAFE (Sistema IoT Soccorso e Monitoraggio Ambienti)</span> e <span className="text-sky-400">RevGames (Sito Recensione 
                        Videogame)</span> per ulteriori informazioni sui vari progetti sotto c'e' il collegamento al <span className="text-sky-400">Github</span>.</p>
                        <button className="border-2 border-white rounded-full font-bold hover:bg-white hover:text-black bg-customGray p-3">Github</button>
                    </div>
                </div>
                <div className="flex flex-col justify-between 2xl:flex-row 2xl:grid-row-1 2xl:grid-cols-2 w-3/4 bg-grayCard rounded-2xl p-5">
                    <div className="flex flex-col 2xl:w-1/4 justify-center items-center">
                        <img className="bg-white w-36 rounded-2xl p-2" src="..\img\logo_512x512.png" alt="logo_unicam" />
                    </div>
                    <div className="flex flex-col 2xl:w-3/4 2xl:justify-start 2xl:items-start justify-center items-center pt-3">
                        <h1 className="text-4xl text-sky-400 font-bold">Gennaio 2025 - In Corso</h1>
                        <h2 className="text-lg font-bold">Stagista</h2>
                        <p className="text-justify mx-16 2xl:mx-0 2xl:text-start pb-3 2xl:text-lg">Stage curricolare per conto dell'Universita' di Camerino con l'obbiettivo raccolta ed uso di dataset per l'ottimizzazione di un macchinario industriale attraverso algoritmi di Intelligenza Artificiale.<br></br>
                            -<span className="text-sky-400"> Raccolta dati</span> da un macchinario industriale durante il processo produttivo<br></br>
                            - Applicazione di tecniche di <span className="text-sky-400">analisi</span> e <span className="text-sky-400">correlazione dei dati raccolti</span>.<br></br>
                            - Applicazione di algoritmi di intelligenza artificiale per l'ottimizzazione: <span className="text-sky-400">Reti neurali (ad esempio, per la previsione di 
                                parametri chiave)</span>, <span className="text-sky-400">Algoritmi di clustering (per segmentare i dati e identificare pattern ricorrenti)</span>.<br></br>
                            - Applicazione di tecniche di validare i risultati attraverso <span className="text-sky-400">simulazioni e/o test su dati reali</span>.<br></br>
                        </p>
                        <button className="border-2 border-white rounded-full font-bold hover:bg-white hover:text-black bg-customGray p-3">Link</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Experience;