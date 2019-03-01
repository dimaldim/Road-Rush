class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }
    preload() {

        this.bar=new Bar({scene:this,x:game.config.width/2,y:game.config.height/2});
    	this.progText=this.add.text(game.config.width/2,game.config.height/2,"0%",{color:'#ffffff',fontSize:game.config.width/20});
    	this.progText.setOrigin(0.5,0.5);
    	this.load.on('progress', this.onProgress, this);

        this.load.image("road", "images/road.jpg");
        this.load.image("line", "images/line.png");
        this.load.spritesheet("cars", "images/cars.png", {
            frameWidth: 60,
            frameHeight: 126
        });

        this.load.image("titleBack","images/titleBack.jpg");

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
    onProgress(value)
    {
        this.bar.setPercent(value);
    	var per=Math.floor(value*100);
    	this.progText.setText(per+"%");
    }
    create() {
    	this.scene.start("SceneTitle");
    }
}