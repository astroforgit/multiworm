    const snakeHeadi = 5;
    const snakeBodyi = 6;
    const grassi = 'g';
    const wall = 1;
    const dirti = 1;
    const spikei = 3
    const foodi = 4;



    var assetlist = [
    {
        name: 'snakeHead'
        , value: 5
    }
    , {
        name: 'snakeBody'
        , value: 6
    }
    , {
        name: 'grass'
        , value: 'g'
    }
    , {
        name: 'grass1'
        , value: 'g1'
    }
    , {
        name: 'grass2'
        , value: 'g2'
    }
    , {
        name: 'grass3'
        , value: 'g3'
    }
    , {
        name: 'dirt'
        , value: 1
    }
    , {
        name: 'spike'
        , value: 3
    }
    , {
        name: 'food'
        , value: 4
    }
    ];


    var snakeHead = [
			'.222222.'


        , '22222222'


        , '22D22D22'


        , '22D22D22'


        , '22222222'


        , '22222222'


        , '22222222'


        , '22222222'
		];

    var snakeBody = [
			'22222222'


        , '22222222'


        , '22222222'


        , '22222222'


        , '22222222'


        , '22222222'


        , '22222222'


        , '22222222'
		];

    var grass = [
			'BBBBBBBB'


        , 'BBBBBBBB'


        , 'B66BB6BB'


        , '66666666'


        , '66666666'


        , '66666666'


        , '66666666'


        , '66666666'
		];

    var grass1 = [
			'BBBBBBBB'


        , 'BBBBBBBB'


        , 'B66BB6BB'


        , 'B6666666'


        , 'B6666666'


        , '66666666'


        , '66666666'


        , '66666666'
		];

    var grass2 = [
			'BBBBBBBB'


        , 'BBBBBBBB'


        , 'B66BB6BB'


        , '6666666B'


        , '6666666B'


        , '66666666'


        , '66666666'


        , '66666666'
		];

    var grass3 = [
			'BBBBBBBB'


        , 'BBBBBBBB'


        , 'B66BB6BB'


        , 'B666666B'


        , 'B666666B'


        , '66666666'


        , '66666666'


        , '66666666'
		];

    var dirt = [
			'66666666'


        , '66666666'


        , '66666666'


        , '66666666'


        , '66666666'


        , '66666666'


        , '66666666'


        , '66666666'
		];

    var spike = [
			'33883337'


        , '23737823'


        , '83783283'


        , '38383733'


        , '33382773'


        , '72383788'


        , '83773323'


        , '33233733'
		];

    var end = [
			'........'


        , '........'


        , '........'


        , '...88...'


        , '...88...'


        , '........'


        , '........'


        , '........'
		];

    var pixel = [
			'........'


        , '........'


        , '........'


        , '...22...'


        , '...22...'


        , '........'


        , '........'


        , '........'
		];



    var food = [
			'..7777..'


        , '..7887..'


        , '..7887..'


        , '..7777..'


        , '....A...'


        , '....A99.'


        , '..99A...'


        , '....A...'
		];

    var rain = [
			'........'


        , '........'


        , '........'


        , '....2...'


        , '...2....'


        , '........'


        , '........'


        , '........'
		];
 /*
         this.textures.generate('end', {
             data: end
             , pixelWidth: 4
             , pixelHeight: 4
         });
         this.textures.generate('pixel', {
             data: pixel
             , pixelWidth: 4
             , pixelHeight: 4
         });
         this.textures.generate('rain', {
             data: rain
             , pixelWidth: 4
             , pixelHeight: 4
         });

         */
