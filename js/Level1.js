class Level1 extends Phaser.Scene {
    constructor() {
        //super is used to call the constructor of a parent class when you are extending or inheriting from another class.
        super({ key: "Level1" });
    }
    preload() {
        this.load.image('bg', 'assets/gradeAssets/GMSS-03-G7/Bg.png');
        this.load.image('navBar', 'assets/commonAssets/navBar.png');
        this.load.image('timebg', 'assets/commonAssets/timebg.png');
        // Load the MP3 audio file
        this.load.audio('celebration', 'sounds/celebration.mp3');
        this.load.audio('wrongSound', 'sounds/WrongCelebrationSound.mp3');
        this.load.audio('horizontally', 'questionSounds/GMSS-03-G7/ENG/V1.mp3');
        this.load.audio('vertically', 'questionSounds/GMSS-03-G7/ENG/V2.mp3');
        // this.load.audio('frontView', 'questionSounds/V3.mp3');

        //star anim
        this.load.atlas('starAnim', 'assets/commonAssets/starAnim.png', 'assets/commonAssets/starAnim.json');

        //game Assets
        this.load.atlas('Box2', 'assets/gradeAssets/GMSS-03-G7/box_1.png', 'assets/gradeAssets/GMSS-03-G7/box_1.json');

        this.load.image('Box1', 'assets/gradeAssets/GMSS-03-G7/box.png');

        this.load.atlas('TickBtn', 'assets/gradeAssets/GMSS-03-G7/Right click.png', 'assets/gradeAssets/GMSS-03-G7/Right click.json');
        this.load.image('beetroot_1', 'assets/gradeAssets/GMSS-03-G7/beetroot_1.png');
        this.load.image('beetroot_2', 'assets/gradeAssets/GMSS-03-G7/beetroot_2.png');//horizontal

        this.load.image('bread_1', 'assets/gradeAssets/GMSS-03-G7/bread_1.png');
        this.load.image('bread_2', 'assets/gradeAssets/GMSS-03-G7/bread_2.png');//vertical

        this.load.image('bringle_1', 'assets/gradeAssets/GMSS-03-G7/bringle_1.png');
        this.load.image('bringle_2', 'assets/gradeAssets/GMSS-03-G7/bringle_2.png');//horizontal
        this.load.image('bringle_3', 'assets/gradeAssets/GMSS-03-G7/bringle_3.png');//vertical

        this.load.image('butter_fruit_1', 'assets/gradeAssets/GMSS-03-G7/butter fruit_1.png');
        this.load.image('butter_fruit_2', 'assets/gradeAssets/GMSS-03-G7/butter fruit_2.png');//horizontal
        this.load.image('butter_fruit_3', 'assets/gradeAssets/GMSS-03-G7/butter fruit_3.png');//vertical

        this.load.image('cucumber_1', 'assets/gradeAssets/GMSS-03-G7/cucumber_1.png');
        this.load.image('cucumber_2', 'assets/gradeAssets/GMSS-03-G7/cucumber_2.png');//horizontal
        this.load.image('cucumber_3', 'assets/gradeAssets/GMSS-03-G7/cucumber_3.png');//vertical

        this.load.image('Kiwi_fruit_1', 'assets/gradeAssets/GMSS-03-G7/Kiwi fruit_1.png');
        this.load.image('Kiwi_fruit_2', 'assets/gradeAssets/GMSS-03-G7/Kiwi fruit_2.png');//horizontal
        this.load.image('Kiwi_fruit_3', 'assets/gradeAssets/GMSS-03-G7/Kiwi fruit_3.png');//vertical

        this.load.image('onion_1', 'assets/gradeAssets/GMSS-03-G7/onion_1.png');
        this.load.image('onion_2', 'assets/gradeAssets/GMSS-03-G7/onion_2.png');//vertical
        this.load.image('onion_3', 'assets/gradeAssets/GMSS-03-G7/onion_3.png');//horizontal

        this.load.image('Orange_1', 'assets/gradeAssets/GMSS-03-G7/Orange_1.png');
        this.load.image('Orange_2', 'assets/gradeAssets/GMSS-03-G7/Orange_2.png');//horizontal
        this.load.image('Orange_3', 'assets/gradeAssets/GMSS-03-G7/Orange_3.png');//vertical

        this.load.image('potato_1', 'assets/gradeAssets/GMSS-03-G7/potato_1.png');
        this.load.image('potato_2', 'assets/gradeAssets/GMSS-03-G7/potato_2.png');//horizontal
        this.load.image('potato_3', 'assets/gradeAssets/GMSS-03-G7/potato_3.png');//vertical

        this.load.image('Quins_fruit_1', 'assets/gradeAssets/GMSS-03-G7/Quins fruit_1.png');
        this.load.image('Quins_fruit_2', 'assets/gradeAssets/GMSS-03-G7/Quins fruit_2.png');//horizontal
        this.load.image('Quins_fruit_3', 'assets/gradeAssets/GMSS-03-G7/Quins fruit_3.png');//vertical

        this.load.image('star_fruit_1', 'assets/gradeAssets/GMSS-03-G7/star fruit_1.png');
        this.load.image('star_fruit_2', 'assets/gradeAssets/GMSS-03-G7/star fruit_2.png');//horizontal

        this.load.image('tomato_1', 'assets/gradeAssets/GMSS-03-G7/tomato_1.png');
        this.load.image('tomato_2', 'assets/gradeAssets/GMSS-03-G7/tomato_2.png');//horizontal
        this.load.image('tomato_3', 'assets/gradeAssets/GMSS-03-G7/tomato_3.png');//vertical

        this.load.image('horizontal_arrow', 'assets/gradeAssets/GMSS-03-G7/arrow_1.png');//horizontal
        this.load.image('vertical_arrow', 'assets/gradeAssets/GMSS-03-G7/arrow_2.png');//vertical

        // all shapes

        this.load.image('cylinder_green', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_1.png');
        this.load.image('cylinder_pink', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_2.png');
        this.load.image('rectangle_shape', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_3.png');
        this.load.image('square_shape_green', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_4.png');
        this.load.image('square_shape_pink', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_5.png');
        this.load.image('circle_shape', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_6.png');
        this.load.image('drop_shape_blue', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_7.png');
        this.load.image('star_shape_pink', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_8.png');
        this.load.image('heart_shape', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_9.png');
        this.load.image('hexagon_shape', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_10.png');
        this.load.image('ovel_shape_vertical', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_11.png');
        this.load.image('triangle_shape_pink', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_12.png');
        this.load.image('flower_shape', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_13.png');
        this.load.image('square_shape_orange', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_14.png');
        this.load.image('ovel_shape_horizontal', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_15.png');
        this.load.image('star_shape_green', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_16.png');
        this.load.image('parallel_shape_vertical', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_17.png');
        this.load.image('waterdrop_shape', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_18.png');
        this.load.image('drop_shape_pink', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_19.png');
        this.load.image('triangle_shape_green', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_20.png');
        this.load.image('parallel_shape_horizontal', 'assets/gradeAssets/GMSS-03-G7/all Shaps/shape_21.png');
        // this.load.image('box_panel', 'assets/gradeAssets/GMSS-03-G7/box.png');
    }
    create() {
        this.background = this.add.image(0, 0, 'bg');
        this.background.setOrigin(0, 0);
        this.background.displayWidth = this.sys.game.config.width; // Set width to match the canvas width
        this.background.displayHeight = this.sys.game.config.height; // Set height to match the canvas height

        console.log(this.background.width)
        console.log(this.background.height)

        this.navBar = this.add.image(750, 20, "navBar");
        this.navBar.displayWidth = this.sys.game.config.width; // Set width to match the canvas width
        this.navBar.setScale(2, 1.5); // Double the size of the image
        this.timebg = this.add.image(500, 25, "timebg");
        this.timebg.setScale(1.5, 1.5);

        //timer
        this.counterForTimer = 0;
        this.seconds = 0;
        this.minutes = 0;

        this.timeDisplay = this.add.text(477, 15, this.formatTime(this.minutes, this.seconds), { fill: '#ADFF2F' });
        this.timeDisplay.align = 'center';
        this.timeDisplay.setFont('Oh Whale');
        this.timeDisplay.setFontSize(20);

        // Create an instance of the audio
        // this.celebration = this.sound.add('celebration', { loop: true });
        this.celebration = this.sound.add('celebration');
        this.wrongSound = this.sound.add('wrongSound');
        this.horizontally = this.sound.add('horizontally');
        this.vertically = this.sound.add('vertically');
        // this.front = this.sound.add('frontView');

        //star anim 
        this.starsGroup;
        this.count = 0;
        this.numberOfQuestions = 0;
        this.y = 70;
        this.count1 = 0;
        this.generateStarsForTheScene(6);

        this.initialRandomisation();
    }
    update() {
        this.counterForTimer++;

        if (this.counterForTimer >= 60) {
            this.counterForTimer = 0;

            if (this.seconds < 59) {
                this.seconds++;
            } else {
                this.seconds = 0;

                if (this.minutes < 59) {
                    this.minutes++;
                } else {
                    // Handle what happens when the timer reaches its maximum (e.g., game over).
                }
            }
        }

        this.timeDisplay.setText(this.formatTime(this.minutes, this.seconds));

    }
    formatTime(minutes, seconds) {
        // Helper function to format time as "mm:ss"
        const minStr = minutes < 10 ? '0' + minutes : minutes;
        const secStr = seconds < 10 ? '0' + seconds : seconds;
        return minStr + ':' + secStr;
    }
    generateStarsForTheScene(count) {
        this.starsGroup = this.add.group();
        for (let i = 0; i < count; i++) {
            this.star = this.starsGroup.create(650, this.y, 'starAnim', 'Symbol 10 copy instance 10000');
            for (let j = 0; j < i; j++) {
                if (this.starsGroup.getChildren()[j]) {
                    this.starsGroup.getChildren()[j].x -= 15;
                    this.starsGroup.getChildren()[i].x += 15;
                    console.log(this.starsGroup.getChildren()[j].y);
                    console.log(this.starsGroup.getChildren()[i].y);
                }
            }
            console.log("count");
        }
        // for (var i = 0; i < count; i++) {
        //     this.starsGroup.create(480 - 15, 10, 'starAnim','Symbol 10 copy instance 10000');
        //     for (var j = 0; j < i; j++) {
        //         if (this.starsGroup.getChildAt(j)) {
        //             this.starsGroup.getChildAt(j).x -= 15;
        //             this.starsGroup.getChildAt(i).x += 15;
        //         }
        //     }
        // }

    }
    //Adding a star to the above created six stars.
    starActions(y) {
        console.log("starActions")

        const starAnim = this.starsGroup.getChildren()[this.numberOfQuestions];

        if (starAnim) {
            // Set the texture smoothing to false
            starAnim.setTexture('starAnim', 'Symbol 10 copy instance 10000');

            const anim = this.anims.create({
                key: 'star',
                frames: this.anims.generateFrameNames('starAnim', {
                    prefix: 'Symbol 10 copy instance ',
                    start: 10000, // Adjust the start frame index if needed
                    end: 10035,   // Adjust the end frame index if needed
                    zeroPad: 0, // Adjust the zeroPad if needed
                }),
                repeat: 0, // Set the number of times to repeat the animation
            });

            // Play the animation
            starAnim.play('star');

            // Increment the numberOfQuestions variable
            console.log(this.starsGroup.getChildren()[this.numberOfQuestions].y);
            console.log(this.starsGroup.getChildren()[this.numberOfQuestions].y);
            this.numberOfQuestions++;

        }
        //We create a new animation using this.anims.create(). 
        //You'll need to adjust the animation configuration options according to your actual sprite sheet structure (e.g., start, end, zeroPad, etc.)

        // starAnim = this.starsGroup.getChildAt(this.numberOfQuestions);
        // starAnim.smoothed = false;
        // anim = starAnim.animations.add('star');
        // this.numberOfQuestions++;
        // anim.play();
    }
    // Define a function to shuffle an array using Fisher-Yates shuffle algorithm
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    initialRandomisation() {
        this.objectArray = ['beetroot', 'bread', 'star_fruit', 'bringle', 'butter_fruit', 'cucumber', 'Kiwi_fruit', 'onion', 'Orange', 'potato', 'Quins_fruit', 'tomato'];
        //'beetroot', 'bread', 'star_fruit', 'bringle', 'butter_fruit', 'cucumber', 'Kiwi_fruit', 'onion', 'Orange', 'potato', 'Quins_fruit', 'tomato'
        this.shuffleArray(this.objectArray);
        console.log(this.objectArray, "this.objectArray");

        this.optionObjectOrder_name = ['cylinder_green', 'rectangle_shape', 'square_shape_green', 'circle_shape', 'drop_shape_blue', 'star_shape_green',
            'heart_shape', 'hexagon_shape', 'ovel_shape_vertical', 'triangle_shape_pink', 'flower_shape', 'square_shape_orange', 'ovel_shape_horizontal',
            'parallel_shape_vertical', 'parallel_shape_horizontal', 'waterdrop_shape'];

        this.initialscreenLoad();
    }
    initialscreenLoad() {
        this.tick = this.add.sprite(1450, 600, 'TickBtn');
        this.opArray = []
        this.Box1 = this.add.sprite(400, 360, 'Box1');
        this.Box1.setScale(1.5, 1.3);

        this.tick.setScale(1.5, 1.2);
        this.tick.setInteractive({ useHandCursor: true });//setInteractive is used for inputenable.
        // Add an event listener for a pointer down event (e.g., mouse click or touch)
        this.tick.on('pointerdown', () => {
            // Change the sprite's image frame when clicked
            // 'pointer' contains information about the pointer that triggered the event
            this.tick.setFrame('Symbol 10 instance 10001'); // Replace 'newFrame' with the frame name you want to set
            this.tickValidation();
        });

        this.objectCutting = [1, 2];//1, 2//horizontal,vertically
        this.shuffleArray(this.objectCutting);
        console.log(this.objectCutting, "this.objectCutting ");

        if (this.objectCutting[0] == 1) this.horizontally.play();
        if (this.objectCutting[0] == 2) this.vertically.play();


        switch (this.objectArray[this.count1]) {
            case 'beetroot':
                this.initialObj = this.add.image(400, 360, 'beetroot_1');

                if (this.objectCutting[0] == 1 || 2) {
                    //horizontal cutting line
                    this.horizontal_arrow = this.add.image(400, 360, 'horizontal_arrow');
                    this.horizontal_arrow.setScale(0.8, 0.8);

                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question1.play();
                        //// this.Question_flag = 1;
                    }
                }

                // this.correctShape = ['circle_shape'];
                this.correctShape = [3]

                // this.wrongShapes = ['rectangle_shape', 'square_shape_green', 'star_shape_pink'];
                this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14, 15];
                this.shuffleArray(this.wrongShapes);
                console.log(this.wrongShapes);
                break;
            case 'bread':
                this.initialObj = this.add.image(400, 360, 'bread_1');

                if (this.objectCutting[0] == 1 || 2) {
                    //vertical cutting line
                    this.vertical_arrow = this.add.image(400, 360, 'vertical_arrow');

                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question2.play();
                        // this.Question_flag = 1;
                    }
                }

                // this.correctShape = ['square_shape_orange'];
                this.correctShape = [11]
                // this.wrongShapes = ['triangle_shape_pink', 'drop_shape_blue', 'flower_shape'];//'triangle_shape_green','drop_shape_pink'
                this.wrongShapes = [0, 1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 15];
                this.shuffleArray(this.wrongShapes);
                break;
            case 'star_fruit':
                this.initialObj = this.add.image(400, 360, 'star_fruit_1');
                if (this.objectCutting[0] == 1 || 2) {
                    //horizontal cutting line
                    this.horizontal_arrow = this.add.image(400, 360, 'horizontal_arrow');
                    this.horizontal_arrow.setScale(0.8, 0.8);

                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question1.play();
                        // this.Question_flag = 1;
                    }
                }

                // this.correctShape = ['star_shape_green'];//'star_shape_pink'
                this.correctShape = [5]

                // this.wrongShapes = ['ovel_shape_horizontal', 'circle_shape', 'square_shape_green'];//'square_shape_pink','square_shape_orange'
                this.wrongShapes = [0, 1, 2, 3, 4, 6, 7, 9, 11, 12, 13, 14, 15];
                this.shuffleArray(this.wrongShapes);
                break;
            case 'bringle':
                this.initialObj = this.add.image(400, 360, 'bringle_1');
                if (this.objectCutting[0] == 1) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question1.play();
                        // this.Question_flag = 1;
                    }
                }
                if (this.objectCutting[0] == 2) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question2.play();
                        // this.Question_flag = 1;
                    }
                }

                if (this.objectCutting[0] == 1) {
                    //horizontal cutting line
                    this.horizontal_arrow = this.add.image(400, 360, 'horizontal_arrow');
                    this.horizontal_arrow.setScale(0.9, 0.9);
                    this.wrongShapes = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14, 15];
                }
                if (this.objectCutting[0] == 2) {
                    //vertical cutting line
                    this.vertical_arrow = this.add.image(400, 360, 'vertical_arrow');
                    this.wrongShapes = [1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15];
                }

                this.correctShape = ['cylinder_green', 'circle_shape'];//'cylinder_pink' horizontal  'circle_shape' vertical
                this.correctShape = [0, 3]

                // this.wrongShapes = ['rectangle_shape', 'cylinder_pink', 'square_shape_green', 'circle_shape'];//'cylinder_green','square_shape_orange','square_shape_pink'
                this.shuffleArray(this.wrongShapes);
                break;
            case 'butter_fruit':
                this.initialObj = this.add.image(400, 360, 'butter_fruit_1');
                if (this.objectCutting[0] == 1) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question1.play();
                        // this.Question_flag = 1;
                    }
                }
                if (this.objectCutting[0] == 2) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question2.play();
                        // // this.Question_flag = 1;
                    }
                }

                if (this.objectCutting[0] == 1) {
                    //horizontal cutting line
                    this.horizontal_arrow = this.add.image(400, 360, 'horizontal_arrow');
                    this.horizontal_arrow.setScale(0.8, 0.8);

                    // this.correctShape = ['circle_shape'];
                    this.correctShape = [3]
                    //this.wrongShapes = ['drop_shape_blue', 'hexagon_shape', 'triangle_shape_pink'];//'drop_shape_pink','triangle_shape_green'
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14, 15];
                }
                if (this.objectCutting[0] == 2) {
                    //vertical cutting line
                    this.vertical_arrow = this.add.image(400, 360, 'vertical_arrow');

                    // this.correctShape = ['drop_shape_pink'];//'drop_shape_blue'
                    this.correctShape = [4]
                    // this.wrongShapes = ['circle_shape', 'parallel_shape_horizontal', 'triangle_shape_pink'];//'drop_shape_pink','triangle_shape_green'
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 12, 13, 14];
                }
                this.shuffleArray(this.wrongShapes);
                break;
            case 'cucumber':
                this.initialObj = this.add.image(400, 360, 'cucumber_1');
                this.initialObj.setScale(0.8, 0.8);
                if (this.objectCutting[0] == 1) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question1.play();
                        // // this.Question_flag = 1;
                    }
                }
                if (this.objectCutting[0] == 2) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question2.play();
                        // this.Question_flag = 1;
                    }
                }

                if (this.objectCutting[0] == 1) {
                    //horizontal cutting line
                    this.horizontal_arrow = this.add.image(400, 360, 'horizontal_arrow');
                    this.horizontal_arrow.setScale(0.9, 0.9);

                    // this.correctShape = ['cylinder_green'];//cylinder_pink
                    this.correctShape = [0]
                    //this.wrongShapes = ['rectangle_shape', 'circle_shape', 'square_shape_green'];//'square_shape_pink','square_shape_orange'
                    this.wrongShapes = [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14];
                }
                if (this.objectCutting[0] == 2) {
                    //vertical cutting line
                    this.vertical_arrow = this.add.image(400, 360, 'vertical_arrow');

                    // this.correctShape = ['circle_shape'];
                    this.correctShape = [3]
                    // this.wrongShapes = ['rectangle_shape', 'cylinder_green', 'square_shape_green'];//'cylinder_pink','square_shape_pink','square_shape_orange'
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14, 15];
                }
                this.shuffleArray(this.wrongShapes);
                break;
            case 'Kiwi_fruit':
                this.initialObj = this.add.image(400, 360, 'Kiwi_fruit_1');
                if (this.objectCutting[0] == 1) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question1.play();
                        // this.Question_flag = 1;
                    }
                }
                if (this.objectCutting[0] == 2) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question2.play();
                        // this.Question_flag = 1;
                    }
                }

                if (this.objectCutting[0] == 1) {
                    //horizontal cutting line
                    this.horizontal_arrow = this.add.image(400, 360, 'horizontal_arrow');
                    this.horizontal_arrow.setScale(0.8, 0.8);

                    // this.correctShape = ['circle_shape'];
                    this.correctShape = [3]
                    // this.wrongShapes = ['ovel_shape_horizontal', 'star_shape_pink', 'square_shape_green'];//'star_shape_green','square_shape_pink','square_shape_orange'
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14, 15];
                }
                if (this.objectCutting[0] == 2) {
                    //vertical cutting line
                    this.vertical_arrow = this.add.image(400, 360, 'vertical_arrow');

                    // this.correctShape = ['ovel_shape_vertical'];
                    this.correctShape = [8]
                    // this.wrongShapes = ['triangle_shape_pink', 'drop_shape_blue', 'square_shape_green'];//'triangle_shape_green','drop_shape_pink','cylinder_pink','square_shape_pink','square_shape_orange'
                    this.wrongShapes = [1, 2, 3, 5, 6, 7, 9, 11, 13, 14];
                }
                this.shuffleArray(this.wrongShapes);
                break;
            case 'onion':
                this.initialObj = this.add.image(400, 360, 'onion_1');
                if (this.objectCutting[0] == 1) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question1.play();
                        // this.Question_flag = 1;
                    }
                }
                if (this.objectCutting[0] == 2) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question2.play();
                        // this.Question_flag = 1;
                    }
                }


                if (this.objectCutting[0] == 1) {
                    //horizontal cutting line
                    this.horizontal_arrow = this.add.image(400, 360, 'horizontal_arrow');
                    this.horizontal_arrow.setScale(0.8, 0.8);

                    // this.correctShape = ['circle_shape'];
                    this.correctShape = [3]
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14, 15];

                    // this.wrongShapes = ['ovel_shape_horizontal', 'star_shape_pink', 'square_shape_green'];//'star_shape_green','square_shape_pink','square_shape_orange'
                }
                if (this.objectCutting[0] == 2) {
                    //vertical cutting line
                    this.vertical_arrow = this.add.image(400, 360, 'vertical_arrow');

                    // this.correctShape = ['waterdrop_shape'];
                    this.correctShape = [15]
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14];

                    //  this.wrongShapes = ['ovel_shape_horizontal', 'star_shape_pink', 'square_shape_green'];//'star_shape_green','square_shape_pink','square_shape_orange'

                }
                this.shuffleArray(this.wrongShapes);
                break;
            case 'Orange':
                this.initialObj = this.add.image(400, 360, 'Orange_1');
                if (this.objectCutting[0] == 1) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question1.play();
                        // this.Question_flag = 1;
                    }
                }
                if (this.objectCutting[0] == 2) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question2.play();
                        // this.Question_flag = 1;
                    }
                }


                if (this.objectCutting[0] == 1) {
                    //horizontal cutting line
                    this.horizontal_arrow = this.add.image(400, 360, 'horizontal_arrow');
                    this.horizontal_arrow.setScale(0.8, 0.8);

                    // this.correctShape = ['circle_shape'];
                    this.correctShape = [3]
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14, 15];
                    // this.wrongShapes = ['drop_shape_blue', 'star_shape_pink', 'cylinder_green'];//'drop_shape_pink','star_shape_green','cylinder_pink'
                }
                if (this.objectCutting[0] == 2) {
                    //vertical cutting line
                    this.vertical_arrow = this.add.image(400, 360, 'vertical_arrow');

                    // this.correctShape = ['circle_shape'];
                    this.correctShape = [3]
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14, 15];
                    // this.wrongShapes = ['drop_shape_blue', 'star_shape_pink', 'cylinder_green'];//'drop_shape_pink','star_shape_green','cylinder_pink'
                }
                this.shuffleArray(this.wrongShapes);
                break;
            case 'potato':
                this.initialObj = this.add.image(400, 360, 'potato_1');
                if (this.objectCutting[0] == 1) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question1.play();
                        // this.Question_flag = 1;
                    }
                }
                if (this.objectCutting[0] == 2) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question2.play();
                        // this.Question_flag = 1;
                    }
                }


                if (this.objectCutting[0] == 1) {
                    //horizontal cutting line
                    this.horizontal_arrow = this.add.image(400, 360, 'horizontal_arrow');
                    this.horizontal_arrow.setScale(0.8, 0.8);

                    // this.correctShape = ['ovel_shape_horizontal'];//ovel_shape_vertical
                    this.correctShape = [12]
                    this.wrongShapes = [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15];
                    // this.wrongShapes = ['circle_shape', 'heart_shape', 'hexagon_shape'];//'drop_shape_pink','star_shape_green','cylinder_pink'
                }
                if (this.objectCutting[0] == 2) {
                    //vertical cutting line
                    this.vertical_arrow = this.add.image(400, 360, 'vertical_arrow');

                    // this.correctShape = ['circle_shape'];
                    this.correctShape = [3]
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14, 15];
                    // this.wrongShapes = ['triangle_shape_pink', 'parallel_shape_horizontal', 'ovel_shape_horizontal'];//'triangle_shape_green','ovel_shape_vertical'
                }
                this.shuffleArray(this.wrongShapes);
                break;
            case 'Quins_fruit':
                this.initialObj = this.add.image(400, 360, 'Quins_fruit_1');
                if (this.objectCutting[0] == 1) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question1.play();
                        // this.Question_flag = 1;
                    }
                }
                if (this.objectCutting[0] == 2) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question2.play();
                        // // this.Question_flag = 1;
                    }
                }

                if (this.objectCutting[0] == 1) {
                    console.log("Quins_fruitShow");
                    //horizontal cutting line
                    this.horizontal_arrow = this.add.image(400, 360, 'horizontal_arrow');
                    this.horizontal_arrow.setScale(0.8, 0.8);

                    // this.correctShape = ['ovel_shape_horizontal'];//'ovel_shape_horizontal'ovel_shape_vertical
                    this.correctShape = [12]
                    this.wrongShapes = [1, 2, 3, 5, 6, 7, 9, 11, 13, 14];//  
                    // this.wrongShapes = ['star_shape_pink', 'circle_shape', 'square_shape_green'];//'star_shape_green','square_shape_pink','square_shape_orange'
                }
                if (this.objectCutting[0] == 2) {
                    console.log("Quins_fruitShow");
                    //vertical cutting line
                    this.vertical_arrow = this.add.image(400, 360, 'vertical_arrow');

                    // this.correctShape = ['waterdrop_shape'];
                    this.correctShape = [15]
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14];
                    // this.wrongShapes = ['star_shape_pink', 'circle_shape', 'parallel_shape_vertical'];//'star_shape_green'
                }
                this.shuffleArray(this.wrongShapes);
                console.log(this.wrongShapes, " this.wrongShapes");
                break;
            case 'tomato':
                this.initialObj = this.add.image(400, 360, 'tomato_1');
                if (this.objectCutting[0] == 1) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question1.play();
                        // // this.Question_flag = 1;
                    }
                }
                if (this.objectCutting[0] == 2) {
                    if (this.count1 === 0) {
                        // this.pauseVoice();
                        // this.Ask_Question2.play();
                        // // this.Question_flag = 1;
                    }
                }


                if (this.objectCutting[0] == 1) {
                    //horizontal cutting line
                    this.horizontal_arrow = this.add.image(400, 360, 'horizontal_arrow');
                    this.horizontal_arrow.setScale(0.9, 0.9);

                    // this.correctShape = ['circle_shape'];//'ovel_shape_horizontal'
                    this.correctShape = [3]
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14, 15];
                    // this.wrongShapes = ['drop_shape_blue', 'hexagon_shape', 'triangle_shape_pink'];//'drop_shape_pink','triangle_shape_green'
                }
                if (this.objectCutting[0] == 2) {
                    //vertical cutting line
                    this.vertical_arrow = this.add.image(400, 360, 'vertical_arrow');

                    // this.correctShape = ['circle_shape'];
                    this.correctShape = [3]
                    this.wrongShapes = [0, 1, 2, 5, 6, 7, 9, 10, 11, 13, 14, 15];
                    // this.wrongShapes = ['triangle_shape_pink', 'star_shape_pink', 'square_shape_green'];//'triangle_shape_green','star_shape_green',,'square_shape_pink','square_shape_orange'
                }
                this.shuffleArray(this.wrongShapes);
                break;
        }

        this.optionOrder = [this.correctShape[0], this.wrongShapes[0], this.wrongShapes[1], this.wrongShapes[2]];//1,2,3,4//box option randomizing
        this.shuffleArray(this.optionOrder);
        console.log(this.optionOrder, "this.optionOrder");

        this.op1 = this.add.sprite(900, 210, 'Box2', 'Symbol 7 instance 10000')
        this.op1.setScale(1.4, 1.3)
        this.opArray.push(this.op1)
        this.op2 = this.add.sprite(1210, 210, 'Box2', 'Symbol 7 instance 10000')
        this.op2.setScale(1.4, 1.3)
        this.opArray.push(this.op2)
        this.op3 = this.add.sprite(900, 500, 'Box2', 'Symbol 7 instance 10000')
        this.op3.setScale(1.4, 1.3)
        this.opArray.push(this.op3)
        this.op4 = this.add.sprite(1210, 500, 'Box2', 'Symbol 7 instance 10000')
        this.op4.setScale(1.4, 1.3)
        this.opArray.push(this.op4)

        this.option1Val = this.optionOrder[0];
        this.option2Val = this.optionOrder[1];
        this.option3Val = this.optionOrder[2];
        this.option4Val = this.optionOrder[3];

        this.frm1 = this.add.sprite(900, 210, this.optionObjectOrder_name[this.option1Val]);
        this.frm1.setScale(1.7, 1.7)
        this.frm1.name = this.option1Val;
        this.op1.name = this.option1Val

        this.frm2 = this.add.sprite(1210, 210, this.optionObjectOrder_name[this.option2Val]);
        this.frm2.setScale(1.7, 1.7)
        this.frm2.name = this.option2Val;
        this.op2.name = this.option2Val

        this.frm3 = this.add.sprite(900, 500, this.optionObjectOrder_name[this.option3Val]);
        this.frm3.setScale(1.7, 1.7)
        this.frm3.name = this.option3Val;
        this.op3.name = this.option3Val

        this.frm4 = this.add.sprite(1210, 500, this.optionObjectOrder_name[this.option4Val]);
        this.frm4.setScale(1.7, 1.7)
        this.frm4.name = this.option4Val;
        this.op4.name = this.option4Val

        this.opArray.forEach(element => {
            element.setInteractive({ useHandCursor: true });
            element.on('pointerdown', () => this.cylinderOpClicked(element));
        });
    }
    cylinderOpClicked(target) {
        console.log("cylinderOpClicked");
        // this.clickSound.currentTime = 0;
        // this.clickSound.play()
        this.opArray.forEach(element => element.setFrame('Symbol 7 instance 10000'));
        this.box = target;
        target.setFrame('Symbol 7 instance 10001');//Symbol 7 instance 10001  red wrong button
    }

    tickValidation(target) {
        if (this.op1.frame.name === 'Symbol 7 instance 10001' && this.op1.name == this.correctShape[0]) {
            this.tick.input.enabled = false;
            this.celebration.play();
            this.starActions(5);
            this.opArray.forEach(element => {
                element.input.enabled = false;
            });
            setTimeout(() => {
                // this.clearScreen();
                var config = {
                    targets: [this.op1, this.op2, this.op3, this.op4, this.frm1, this.frm2, this.frm3, this.frm4], // The objects you want to animate
                    alpha: 0, // The property you want to tween (in this case, alpha)
                    duration: 500, // Duration of the animation in milliseconds
                    ease: 'Linear', // Easing function (e.g., Linear for constant speed)
                    onComplete: function () {
                        // This function will be called when the tween is complete
                        console.log('Tween complete');
                    },
                };

                var tween = this.tweens.add(config);

                // Start the animation
                tween.play();
                setTimeout(() => {
                    this.tick.destroy();
                    this.op1.destroy();
                    this.op2.destroy();
                    this.op3.destroy();
                    this.op4.destroy();
                    this.frm1.destroy();
                    this.frm2.destroy();
                    this.frm3.destroy();
                    this.frm4.destroy();
                    this.cutObjectshow();
                }, 1000);
            }, 1000);
            // setTimeout(() => {
            //     if (this.numberOfQuestions < 6)
            //         this.initialScreen();
            // }, 2000);

        }
        else if (this.op2.frame.name === 'Symbol 7 instance 10001' && this.op2.name == this.correctShape[0]) {
            this.tick.input.enabled = false;
            this.celebration.play();
            this.starActions(5);
            this.opArray.forEach(element => {
                element.input.enabled = false;
            });
            setTimeout(() => {
                // this.clearScreen();
                var config = {
                    targets: [this.op1, this.op2, this.op3, this.op4, this.frm1, this.frm2, this.frm3, this.frm4], // The objects you want to animate
                    alpha: 0, // The property you want to tween (in this case, alpha)
                    duration: 500, // Duration of the animation in milliseconds
                    ease: 'Linear', // Easing function (e.g., Linear for constant speed)
                    onComplete: function () {
                        // This function will be called when the tween is complete
                        console.log('Tween complete');
                    },
                };

                var tween = this.tweens.add(config);

                // Start the animation
                tween.play();
                setTimeout(() => {
                    this.tick.destroy();
                    this.op1.destroy();
                    this.op2.destroy();
                    this.op3.destroy();
                    this.op4.destroy();
                    this.frm1.destroy();
                    this.frm2.destroy();
                    this.frm3.destroy();
                    this.frm4.destroy();
                    this.cutObjectshow();
                }, 1000);
            }, 1000);
            // setTimeout(() => {
            //     if (this.numberOfQuestions < 6)
            //         this.initialScreen();
            // }, 2000);

        }
        else if (this.op3.frame.name === 'Symbol 7 instance 10001' && this.op3.name == this.correctShape[0]) {
            this.tick.input.enabled = false;
            this.celebration.play();
            this.starActions(5);
            this.opArray.forEach(element => {
                element.input.enabled = false;
            });
            setTimeout(() => {
                // this.clearScreen();
                var config = {
                    targets: [this.op1, this.op2, this.op3, this.op4, this.frm1, this.frm2, this.frm3, this.frm4], // The objects you want to animate
                    alpha: 0, // The property you want to tween (in this case, alpha)
                    duration: 500, // Duration of the animation in milliseconds
                    ease: 'Linear', // Easing function (e.g., Linear for constant speed)
                    onComplete: function () {
                        // This function will be called when the tween is complete
                        console.log('Tween complete');
                    },
                };

                var tween = this.tweens.add(config);

                // Start the animation
                tween.play();
                setTimeout(() => {
                    this.tick.destroy();
                    this.op1.destroy();
                    this.op2.destroy();
                    this.op3.destroy();
                    this.op4.destroy();
                    this.frm1.destroy();
                    this.frm2.destroy();
                    this.frm3.destroy();
                    this.frm4.destroy();
                    this.cutObjectshow();
                }, 1000);
            }, 1000);
            // setTimeout(() => {
            //     if (this.numberOfQuestions < 6)
            //         this.initialScreen();
            // }, 2000);

        }
        else if (this.op4.frame.name === 'Symbol 7 instance 10001' && this.op4.name == this.correctShape[0]) {
            this.tick.input.enabled = false;
            this.celebration.play();
            this.starActions(5);
            this.opArray.forEach(element => {
                element.input.enabled = false;
            });


            // this.clearScreen();
            setTimeout(() => {
                // this.clearScreen();
                var config = {
                    targets: [this.op1, this.op2, this.op3, this.op4, this.frm1, this.frm2, this.frm3, this.frm4], // The objects you want to animate
                    alpha: 0, // The property you want to tween (in this case, alpha)
                    duration: 500, // Duration of the animation in milliseconds
                    ease: 'Linear', // Easing function (e.g., Linear for constant speed)
                    onComplete: function () {
                        // This function will be called when the tween is complete
                        console.log('Tween complete');
                    },
                };

                var tween = this.tweens.add(config);

                // Start the animation
                tween.play();
                setTimeout(() => {
                    this.tick.destroy();
                    this.op1.destroy();
                    this.op2.destroy();
                    this.op3.destroy();
                    this.op4.destroy();
                    this.frm1.destroy();
                    this.frm2.destroy();
                    this.frm3.destroy();
                    this.frm4.destroy();
                    this.cutObjectshow();
                }, 1000);
            }, 1000);
            // setTimeout(() => {
            //     if (this.numberOfQuestions < 6)
            //         this.initialScreen();
            // }, 2000);

        }
        else {
            console.log("errorrrrrrr1")
            this.wrongSound.play();
            this.box.setFrame('Symbol 7 instance 10002');
            // this.opArray(element => element.setFrame('Symbol 7 instance 10002'));
            setTimeout(() => {
                this.opArray.forEach(element => element.setFrame('Symbol 7 instance 10000'));
            }, 800);
        }
    }

    cutObjectshow() {
        this.Box2 = this.add.sprite(1100, 360, 'Box1');
        this.Box2.setScale(1.5, 1.3);
        this.Box2.alpha = 0;

        switch (this.objectArray[this.count1]) {
            case 'beetroot':
                this.horizontal_arrow.destroy();
                this.lastObject = this.add.image(1100, 360, 'beetroot_2');
                break;
            case 'bread':
                this.vertical_arrow.destroy();
                this.lastObject = this.add.image(1100, 360, 'bread_2');
                break;
            case 'star_fruit':
                this.horizontal_arrow.destroy();
                this.lastObject = this.add.image(1100, 360, 'star_fruit_2');
                break;
            case 'bringle':
                if (this.objectCutting[0] == 1) {
                    this.lastObject = this.add.image(1100, 360, 'bringle_2');//130,190//30,70==100,120
                    // this.lastObject.scale.setTo(0.8, 0.8);
                    this.horizontal_arrow.destroy();

                }
                if (this.objectCutting[0] == 2) {
                    this.lastObject = this.add.image(1100, 360, 'bringle_3');
                    this.vertical_arrow.destroy();

                }
                break;
            case 'butter_fruit':
                if (this.objectCutting[0] == 1) {
                    this.lastObject = this.add.image(1100, 360, 'butter_fruit_2');//130,190//30,70==100,120
                    // this.lastObject.scale.setTo(0.8, 0.8);
                    this.horizontal_arrow.destroy();

                }
                if (this.objectCutting[0] == 2) {
                    this.lastObject = this.add.image(1100, 360, 'butter_fruit_3');
                    this.vertical_arrow.destroy();

                }
                break;
            case 'cucumber':
                if (this.objectCutting[0] == 1) {
                    this.lastObject = this.add.image(1100, 360, 'cucumber_2');//130,190//30,70==100,120
                    // this.lastObject.scale.setTo(0.8, 0.8);
                    this.horizontal_arrow.destroy();

                }
                if (this.objectCutting[0] == 2) {
                    this.lastObject = this.add.image(1100, 360, 'cucumber_3');
                    this.vertical_arrow.destroy();

                }
                break;
            case 'Kiwi_fruit':
                if (this.objectCutting[0] == 1) {
                    this.lastObject = this.add.image(1100, 360, 'Kiwi_fruit_2');//130,190//30,70==100,120
                    // this.lastObject.scale.setTo(0.8, 0.8);
                    this.horizontal_arrow.destroy();

                }
                if (this.objectCutting[0] == 2) {
                    this.lastObject = this.add.image(1100, 360, 'Kiwi_fruit_3');
                    this.vertical_arrow.destroy();

                }
                break;
            case 'onion':
                if (this.objectCutting[0] == 1) {
                    this.lastObject = this.add.image(1100, 360, 'onion_3');//130,190//30,70==100,120
                    // this.lastObject.scale.setTo(0.8, 0.8);
                    this.horizontal_arrow.destroy();

                }
                if (this.objectCutting[0] == 2) {
                    this.lastObject = this.add.image(1100, 360, 'onion_2');
                    this.vertical_arrow.destroy();

                }
                break;
            case 'Orange':
                if (this.objectCutting[0] == 1) {
                    this.lastObject = this.add.image(1100, 360, 'Orange_2');//130,190//30,70==100,120
                    // this.lastObject.scale.setTo(0.8, 0.8);
                    this.horizontal_arrow.destroy();

                }
                if (this.objectCutting[0] == 2) {
                    this.lastObject = this.add.image(1100, 360, 'Orange_3');
                    this.vertical_arrow.destroy();

                }
                break;
            case 'potato':
                if (this.objectCutting[0] == 1) {
                    this.lastObject = this.add.image(1100, 360, 'potato_2');//130,190//30,70==100,120
                    // this.lastObject.scale.setTo(0.8, 0.8);
                    this.horizontal_arrow.destroy();

                }
                if (this.objectCutting[0] == 2) {
                    this.lastObject = this.add.image(1100, 360, 'potato_3');
                    this.vertical_arrow.destroy();

                }
                break;
            case 'Quins_fruit':
                if (this.objectCutting[0] == 1) {
                    this.lastObject = this.add.image(1100, 360, 'Quins_fruit_2');//130,190//30,70==100,120
                    // this.lastObject.scale.setTo(0.8, 0.8);
                    this.horizontal_arrow.destroy();

                }
                if (this.objectCutting[0] == 2) {
                    this.lastObject = this.add.image(1100, 360, 'Quins_fruit_3');
                    this.vertical_arrow.destroy();

                }
                break;
            case 'tomato':
                if (this.objectCutting[0] == 1) {
                    this.lastObject = this.add.image(1100, 360, 'tomato_2');//130,190//30,70==100,120
                    this.lastObject.scale.setTo(0.8, 0.8);
                    this.horizontal_arrow.destroy();

                }
                if (this.objectCutting[0] == 2) {
                    this.lastObject = this.add.image(1100, 360, 'tomato_3');
                    this.vertical_arrow.destroy();

                }
                break;
        }

        this.lastObject.alpha = 0;

        // Create a Phaser Tweens animation
        var config = {
            targets: [this.lastObject,this.Box2], // The objects you want to animate
            alpha: 1, // The property you want to tween (in this case, alpha)
            duration: 2000, // Duration of the animation in milliseconds
            ease: 'Linear', // Easing function (e.g., Linear for constant speed)
            onComplete: function () {
                // This function will be called when the tween is complete
                console.log('Tween complete');
            },
        };

        var tween = this.tweens.add(config);

        // Start the animation
        tween.play();

        setTimeout(() => {
            this.clearScreen();
        }, 3000);
        setTimeout(() => {
            if (this.numberOfQuestions < 6)
                this.initialscreenLoad();
        }, 3500);
    }
    clearScreen() {
        this.Box1.destroy();
        this.Box2.destroy();
        this.initialObj.destroy();
        this.lastObject.destroy();

        this.count1++;
    }
}