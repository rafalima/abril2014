module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "QA Night",
      description: "Encontro do grupo Teste de Software-PE",     
      topics: "aprendizagem baseada em problemas (PBL) e automação de testes de software", 
      date: "16 de abril de 2014",
      venue: "na Qualiti",
      address: "Av. Marquês de Olinda, 126 - 4º andar - Bairro do Recife",
      city: "Recife",
      state: "PE"
    },

    callToAction: {
        text: "Aguarde!",
        link: "https://docs.google.com/forms/d/1fI3mGSFs0phtxbq8ePX7yp0nsPelHjncuIqGEpU0-rY/viewform"
    },

    site: {
      theme: "yellow-swan",
      url: "http://testedesoftwarepe.github.io/abril2014/",
      googleanalytics: "UA-33656081-1"
    },

    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'partners'
      // 'contact'
    ],

    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      //sponsors: "Sponsors",
      partners: "Parceiros",
      //contact: "Contact"
    },

   schedule: [
      {
        name: "Check-in",
        time: "19h15"
      }, 

      {
        name: "Christiano Gonçalves Guerra",
        photo: "themes/yellow-swan/img/christiano.jpeg",
        bio: "Formado em Ciência da Computação pelo Universidade Católica de Pernambuco em 2005, trabalhando com desenvolvimento de software em C# e Python de 2006 até 2009 quando passou para a área de teste com automação. Atualmente é engenheiro de teste do C.E.S.A.R.",
        company: "C.E.S.A.R",
        link: {
          href: "https://twitter.com/chrisgguerra",
          text: "@chrisgguerra"
        },
        presentation: {
          title: "Testes Funcionais com Selenium e Java",
          description: "Automação de testes funcionais utilizando o Selenium como framework de automação e Java como liguagem de programação.",
          time: "19:30"
        }
      },

      {
        name: "Coffee Break",
        time: "20h"
      },

      {
        name: "Ana Claudia Monte",
        photo: "themes/yellow-swan/img/ana_claudia.jpg",
        bio: "Ana Claudia possui mestrado em Ciência da Computação pela UFPE na área de Gestão de Processos, graduada em Sistema de Informação pela Faculdade Pernambucana-FAPE. Atua na área de teste desde 2007 com planejamento, projeto, execução e controle de falhas de testes. Professora universitária da Faculdade Pernambucana-FAPE. Atualmente trabalha como Analista de Teste da empresa AGFA HealthCare desde 2010.",
        company: "AGFA",
        link: {
          text: "anaclaudia.monte@gmail.com"
        },
        presentation: {
          title: "Gestão de Processos Aplicada ao Ensino de Teste de Software.",
          description: "A busca por profissionais qualificados que possuem considerável experiência prática vem crescendo dia-a-dia. Mas, no processo de aprendizagem do ensino tradicional, o aluno é em grande parte um receptor de informações, incluindo conceitos e fundamentos teóricos, onde raramente é dada a prática na resolução de problemas. Portanto, com vista a minimizar este problema, o Ensino de Aprendizagem Baseada em Problemas (PBL) é sugerido.",
          time: "20h10"
        }
      },      
    ],

    partners: [
      {
        name: "ThoughWorks Recife",
        logo: "themes/yellow-swan/img/tw-logo.png",
        url: "http://www.thoughtworks.com/pt/"
      },
      {
        name: "UNINASSAU",
        logo:"themes/yellow-swan/img/uninassau-logo.jpeg",
        url: "http://www.mauriciodenassau.edu.br/"
      },
      {
        name: "Qualiti",
        logo:"themes/yellow-swan/img/qualiti-logo.jpeg",
        url: "http://www.qualiti.com.br/"
      }
    ],

    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
