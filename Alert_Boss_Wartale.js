registerPlugin({
    name: 'Alert Boss Wartale',
    version: '1.0',
    backends: ['ts3'],
    description: 'This plugin alerts all bosses will be spawned 15 minutes earlier.',
    author: 'And4e - Wartale <andre3397@protonmail.com>',
    vars: {
        groupstoreceived: { // Grupos que vão ser adicionados para receber o alerta do boss
        title: 'Groups for alert about boss add here',
        type: 'strings',
      },
        bosstimeserver: { // Tempo do boss de acordo com o servidor (precisa ser trocado diariamente)
        title: 'Add here 00~55',
        placeholder: 'Default: 00~55',
		type: 'number',
      },
        timetoalert: { // Tempo de alerta conforme o boss time a escolha
        title: 'Select the time to alert before the bosses spawned. Example: 01:50',
        type: 'select',
        options: ['5',
                 '10',
                 '15']
      },
        nameallboss: {
        title: 'Here all boss, select All boss for get all boss spawed on some time',
        type: 'select',
        options: ['All boss',
		          'Draxos',
		          'Centlon',
				  'Guardião das Trevas',
				  'Valento',
				  'Fúria',
				  'Anjo Caido',
				  'Tulla',
				  'Kelvezu',
				  'Greedy',
    ]
},
		timezone: {
        title: 'Time zone',
        type: 'select',
        options: [
				'UTC-04:00',
				'UTC-03:30',
				'UTC-03:00',
         ]
		}
	}
}, function(sinusbot, config) {

    var event = require('event');
    var engine = require('engine');
    var backend = require('backend');
//  var store = require('store');
	
//	var config.clientInfo = backend.getServerGroupByID();
	if (config.backend.getServerGroupByID(!config.groupstoreceived)) {
	event.on('backend.chat') (	
                             msg('Ola, ' + config.nameallboss) )
	engine.log("If not configureted Alert Boss Wartale, please disable it.");
	                          }
})
