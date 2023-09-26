module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Usuarios', [
        {
          nome: "Wagner Gomes",
          email: "wagner.gomes@viveo.com",
          senha: "123456",
          perfil:"admin",
          status:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Ícaro Bandeira",
          email: "icaro.bandeira@viveo.com.br",
          senha: "123456",
          perfil: "user",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          nome: "Ellison Medeiros",
          email: "ellisson.medeiros@mafrahospitalar.com.br",
          senha: "123456",
          perfil: "user",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          nome: "Marcelo Zapata",
          email: "marcelo.zapata@viveo.com.br",
          senha: "123456",
          perfil: "user",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          nome: "Thiago Almeida",
          email: "thiago.almeida.1@viveo.com.br",
          senha: "123456",
          perfil: "user",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          nome: "Bárbara Oliveira",
          email: "barbara.oliveira@viveo.com.br",
          senha: "123456",
          perfil: "user",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          nome: "Gilberto Emiliano",
          email: "gilberto.emiliano@mafrahospitalar.com.br",
          senha: "123456",
          perfil: "user",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          nome: "Gabriel Marinho",
          email: "gabriel.marinho@viveo.com.br",
          senha: "123456",
          perfil: "user",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          nome: "Tiago Souza",
          email: "tiago.souza@viveo.com.br",
          senha: "123456",
          perfil: "user",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          nome: "Lucas Mariano",
          email: "lucas.mariano@viveo.com.br",
          senha: "123456",
          perfil: "user",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          nome: "Raquel Ramos",
          email: "raquel.ramos@viveo.com.br",
          senha: "123456",
          perfil: "user",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          nome: "Ana Lídia",
          email: "ana.rodrigues@viveo.com.br",
          senha: "123456",
          perfil: "user",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         }
        
   
    
      ], {})
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Usuarios', null, {})
    }
  }