const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("I am ready!");
});

const prefix = "!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "kotaro")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//bot.jpg',
  			name: 'bot.jpg'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "1010")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//1010.png',
  			name: '1010.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "aaa")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//aaa.png',
  			name: 'aaa.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "aizawa")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//aizawa.png',
  			name: 'aizawa.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "alexlie")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//alexlie.jpg',
  			name: 'alexlie.jpg'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "apollo")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//apollo.png',
  			name: 'apollo.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "autism")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//autism.png',
  			name: 'autism.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "avgn")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//avgn.png',
  			name: 'avgn.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "byakuya")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//byakuya.png',
  			name: 'byakuya.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "cease1")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//cease1.png',
  			name: 'cease1.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "cease2")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//cease2.png',
  			name: 'cease2.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "cease3")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//cease3.png',
  			name: 'cease3.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "cease4")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//cease4.png',
  			name: 'cease4.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "chart")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//chart.png',
  			name: 'chart.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "crinca")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//crinca.png',
  			name: 'crinca.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "doubt")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//doubt.jpg',
  			name: 'doubt.jpg'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "enzosmug")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//enzosmug.png',
  			name: 'enzosmug.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "familiarfaces")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//familiarfaces.png',
  			name: 'familiarfaces.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "gg")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//gg.png',
  			name: 'gg.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "gilbosta")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//gilbosta.png',
  			name: 'gilbosta.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "hihi")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//hihi.png',
  			name: 'hihi.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "hisbest")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//hisbest.png',
  			name: 'hisbest.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "ismiojoalex")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//ismiojoalex.png',
  			name: 'ismiojoalex.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "jojogil")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//jojogil.png',
  			name: 'jojogil.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "junko")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//junko.png',
  			name: 'junko.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "kriknak")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//kriknak.png',
  			name: 'kriknak.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "midoriya")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//midoriya.png',
  			name: 'midoriya.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "olhaisso")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//olhaisso.png',
  			name: 'olhaisso.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "opinion")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//opinion.png',
  			name: 'opinion.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "realshit")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//realshit.png',
  			name: 'realshit.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "redmidoriya")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//redmidoriya.png',
  			name: 'redmidoriya.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "rocknani")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//rocknani.png',
  			name: 'rocknani.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "sad")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//sad.png',
  			name: 'sad.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "significant")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//significant.jpg',
  			name: 'significant.jpg'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "slater")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//slater.png',
  			name: 'slater.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "thiskills")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//thiskills.jpg',
  			name: 'thiskills.jpg'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "widelyboring")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//widelyboring.png',
  			name: 'widelyboring.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "wtfwas")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//wtfwas.png',
  			name: 'wtfwas.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "zasmoji")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//zasmoji.png',
  			name: 'zasmoji.png'
  		}]
  	}); 
  } else
  if (message.content.startsWith(prefix + "bitch")) {
  	message.channel.send({
  		files: [{
  			attachment: './/images//bitch.png',
  			name: 'bitch.png'
  		}]
  	});
  } else
  if (message.content.startsWith(prefix + "ohno")) {
  	if (message.member.voiceChannel) {
  		message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        	const dispatcher = connection.playFile('.//ohno.mp3');
        	dispatcher.on('end', () => {
        		message.member.voiceChannel.leave();
        	});
        	
        })
        .catch(console.log);
    } else {
    	message.reply('You need to join a voice channel first!');
    }
} else
if (message.content.startsWith(prefix + "foo")) {
	message.channel.send("bar!");
}
});

client.login("NDUyNjM0MDM0NjQ5MTY5OTM0.DfT-Pg.YzpSEFaXTH1kC5za9rEZ6Sg3VPc");