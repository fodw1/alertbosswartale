registerPlugin({
    name: 'Alert Boss Wartale',
    version: '1.0',
    backends: ['ts3'],
    description: 'This plugin alerts all bosses that will be born 15 minutes earlier.',
    author: 'And4e - Wartale <andre3397@protonmail.com>',
    vars: [
      {
        name: 'groupstoadd',
        title: 'Groups for alert about boss add here, Group ID (ServerGroupID\'s)', // grupos que vão ser adicionados para receber o alerta do boss
        type: 'string',
      },
      {
        name: 'bosstimeserver',
        title: 'Add here time of server example: 01:50', // tempo do boss de acordo com o servidor (precisa ser trocado diariamente)
        type: 'string',
      },
      { 
        name: 'timetoalert',
        title: 'Select the time to alert before the boss born.', // tempo de alerta conforme o boss time a escolha
        type: 'select',
        options: ['5 minutes before',
                 '10 minutes before',
                 '15 minutes before']
      },
      {
          name:'messagetouser', //Message to user according with saved string
          title:'Esreva uma mensagem que sera enviada (%t = tempo do servidor agora) ',
          type:'string',
      }

],
    autorun: false
},
    (_, { message, type }) => {
    const event = require('event')
    var event = require('ClientServerGroupEvent')
    
    var groupstoadd = store.get('groupstoadd'); // deacordo com a docs estou obtendo as strings
    var bosstimeserver = store.get('bosstimeserver'); // deacordo com a docs estou obtendo as strings
    var timetoalert = store.get('timetoalert'); // deacordo com a docs estou obtendo as strings
    
    event.on('clientMove', ({ client, fromChannel }) => {
        let msg = message.replace('%t', client.name())
        if (!fromChannel) {
            if (ClientServerGroupEvent, id():groupstoadd) {
                client.chat(msg)
            }
});
