const About = () => {
    return (
      <section id="about" className="min-h-screen">
         <h2 className="flex justify-center items-center pt-24 pb-6 text-gray-300 font-bold text-4xl 2xl:text-6xl">About</h2>
              <span className="text-xl xl:text-3xl flex flex-col justify-center items-center  
                            text-gray-500 text-center">
                  <p className="md:w-1/2 hover:text-white transition duration-300">Sono <span className="text-sky-400">Patryk</span>, un ragazzo di 25 
                      anni appassionato di tecnologia e programmazione.
                      Mi piace creare soluzioni ad uso personale e a volte su commisione con l'obbiettivo di 
                      facilitare l'attivita quotidiane. Nel tempo
                      libero amo rilassarmi a contatto con la natura facendo escursioni.
                  </p>
                  <p className="md:w-1/2 pt-10 hover:text-white transition duration-300">
                    In campo <span className="text-sky-400">IT</span> sono a mio agio nei ruoli <strong className="hover:bg-green-300 underline decoration-2 decoration-green-600 
                    transition duration-300 ">Junior Data Analyst</strong> e anche <strong className="hover:bg-red-300 underline decoration-2 decoration-red-600 
                    transition duration-300 ">Junior Developer</strong>, in quest'ultima
                    ho discrete conoscenze in una moltitudine di linguaggi per la mia capacita di <strong className="hover:bg-purple-300 underline decoration-2 decoration-purple-600 
                    transition duration-300 ">Problem Solving</strong> esploro moltissimo tra essi per affrontare svariati problemi che mi vengono 
                    proposti.
                  </p>
              </span>
              <div className="flex flex-wrap justify-center gap-4 xl:px-64 pt-10">
              <div id="cards" className="">
                <div className="flex flex-col items-center p-3 bg-grayCard rounded-3xl w-56 2xl:w-72">
                  <h2 className="text-2xl 2xl:text-4xl font-bold text-sky-500">AutoCad</h2>
                  <p className="pt-3 pb-3 2xl:text-xl text-gray-300">Modellazione 2D/3D</p>
                  <a href="../dowload_resource/tecna_evolution.pdf"><button className="border-2 rounded-full font-bold hover:bg-white hover:text-black bg-customGray text-gray-300 p-1 2xl:p-2 2xl:text-lg">Visualizza</button></a>
                </div>
              </div>
              <div id="cards" className="">
                <div className="flex flex-col items-center p-3 bg-grayCard rounded-3xl w-56 2xl:w-72">
                  <h2 className="text-2xl 2xl:text-4xl font-bold text-sky-500">DevOps Azure</h2>
                  <p className="pt-3 pb-3 2xl:text-xl text-gray-300">Microsoft</p>
                  <button className="border-2 rounded-full font-bold hover:bg-white hover:text-black bg-customGray text-gray-300 p-1 2xl:p-2 2xl:text-lg">In Corso</button>
                </div>
              </div>
              </div>
      </section>
    );
  };
  export default About;
  