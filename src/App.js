import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  const [servs, setServs] = useState([]);

  useEffect(() => {
    const servs = [
      {
        title: "E-Commerce",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
    {
        title: "Responsive Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
    {
        title: "Web Security",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
    ];
    setServs(servs);
  }, []);

  const [portf, setPortf] = useState([]);

  useEffect(() => {
    const portf = [
      {
        h: "Threads",
        p: "Illustration"
      },
      {
        h: "Explore",
        p: "Graphic Design"
      },
      {
        h: "Finish",
        p: "Identity"
      },
      {
        h: "Lines",
        p: "Branding"
      },
      {
        h: "Southwest",
        p: "Website Design"
      },
      {
        h: "Window",
        p: "Photography"
      },
    ];
    setPortf(portf);
  }, []);

  const [about, setAbout] = useState([]);
  useEffect(() => {
    const about = [
      {
        time: "2009-2011",
        h: "Our Humble Beginnings",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      },
      {
        time: "March 2011",
        h: "An Agency is Born",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    },
    {
        time: "December 2015",
        h: "Transition to Full Service",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    },
    {
        time: "July 2020",
        h: "Phase Two Expansion",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    },
    ];
    setAbout(about);
  }, []);

  const [team, setTeam] = useState([]);
  useEffect(() => {
    const team = [
      {
        name: "Parveen Anand",
        function: "Lead Designer"
      },
      {
        name: "Diana Petersen",
        function: "Lead Marketer"
      },
      {
        name: "Larry Parker",
        function: "Lead Developer"
      },
    ];
    setTeam(team);
  }, []);


  return (
    <div className="">
     
      <Header />
      <Services servs={servs} />
      <Portfolio portf={portf} />
      <About about={about}/>
      <Team team={team}/>
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
