class SceneMain extends Phaser.Scene
{
	constructor()
	{
		super('SceneMain');
	}
	preload()
	{

		//this.bar = new Bar({ scene: this, x: game.config.width / 2, y: game.config.height / 2 });
		this.progText = this.add.text(game.config.width / 2, game.config.height / 2, "0%", { color: '#ffffff', fontSize: game.config.width / 20 });
		this.progText.setOrigin(0.5, 0.5);
		this.load.on('progress', this.onProgress, this);

		this.load.image("road", "images/road.jpg");
		this.load.image("line", "images/line.png");
		this.load.spritesheet("cars", "images/cars.png", {
			frameWidth: 60,
			frameHeight: 126
		});

		this.load.image("titleBack", "images/titleBack.jpg");

		this.load.image("pcar1", "images/pcar1.png");
		this.load.image("pcar2", "images/pcar2.png");
		this.load.image("cone", "images/cone.png");
		this.load.image("barrier", "images/barrier.png");
		this.load.image("toggleBack", "images/ui/toggles/1.png");
		this.load.image("sfxOff", "images/ui/icons/sfx_off.png");
		this.load.image("sfxOn", "images/ui/icons/sfx_on.png");
		this.load.image("musicOn", "images/ui/icons/music_on.png");
		this.load.image("musicOff", "images/ui/icons/music_off.png");
		this.load.audio("backgroundMusic", ['audio/random-race.mp3', 'audio/random-race.ogg']);
		this.load.audio("boom", ['audio/boom.mp3', 'audio/boom.ogg']);
		this.load.audio("whoosh", ['audio/whoosh.mp3', 'audio/whoosh.ogg']);
	}
	create()
	{
		//set up 
		emitter = new Phaser.Events.EventEmitter();
		controller = new Controller();
		model.gameOver = false;
		model.speed = 1;
		model.score = 0;
		//
		//
		//define our objects
		this.road = new Road({
			scene: this
		});
		this.road.x = game.config.width * .25;
		this.road.makeLines();
		//
		//
		this.road2 = new Road({
			scene: this
		});
		this.road2.x = game.config.width * .75;
		this.road2.makeLines();
		this.road2.car.setFrame(1);
		// this.alignGrid = new AlignGrid({
		//     scene: this,
		//     rows: 5,
		//     cols: 5
		// });
		// this.alignGrid.showNumbers();
		// var soundButtons = new SoundButtons({
		// 	scene: this
		// });
		this.sb = new ScoreBox({
			scene: this
		});
		this.sb.x = game.config.width / 2;
		this.sb.y = 50;
		emitter.on(G.SCORE_UPDATED, this.scoreUpdated, this);
	}
	scoreUpdated()
	{
		if (model.score / 5 == Math.floor(model.score / 5))
		{
			model.speed += .25;
			if (model.speed > 1.5)
			{
				model.speed = 1.5;
			}
		}
	}
	update()
	{
		//constant running loop
		this.road.moveLines();
		this.road.moveObject();
		//
		//
		this.road2.moveLines();
		this.road2.moveObject();
	}
}