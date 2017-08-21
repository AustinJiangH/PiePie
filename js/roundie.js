/*
* Author: Austin J.
* Date: 2017/08/19
* Description: This JavaScript file is a supplement to Roundie.css.
*              It works and only works with Roundie.css.
* License: All Rights Reserved (for now)
* GitHub: https://github.com/AustinJiangH/roundie.css
* */


let loadingOptions = {

    pole:'loading-screen-pole',

    axises: [
        [0,  '6rem loading-axis-0 '],
        [1,  '6rem loading-axis-1 '],
        [2,  '6rem loading-axis-2 '],
        [3,  '6rem loading-axis-3 '],
        [4,  '6rem loading-axis-4 '],
        [5,  '6rem loading-axis-5 '],
        [6,  '6rem loading-axis-6 '],
        [7,  '6rem loading-axis-7 '],
        [8,  '6rem loading-axis-8 '],
        [9,  '6rem loading-axis-9 '],
        [10, '6rem loading-axis-10'],
        [11, '6rem loading-axis-11']
    ],

    pies: [
        '2rem accent-2 loading-pie-0  red',
        '2rem accent-2 loading-pie-1  pink',
        '2rem accent-2 loading-pie-2  purple',
        '2rem accent-2 loading-pie-3  indigo',
        '2rem accent-2 loading-pie-4  blue',
        '2rem accent-2 loading-pie-5  cyan',
        '2rem accent-2 loading-pie-6  teal',
        '2rem accent-2 loading-pie-7  green',
        '2rem accent-2 loading-pie-8  lime',
        '2rem accent-2 loading-pie-9  yellow',
        '2rem accent-2 loading-pie-10 amber',
        '2rem accent-2 loading-pie-11 deep-orange',
    ],

    /*
    * This is the text shown at the loading page
    * */
    text: '',
};


let Roundie = {

    /* default, initial or sample options */
    options: {

        /*
        * this is the additional class name of the .pole element created
        * */
        pole:'',

        /*
        * initial(default) settings of axises
        * */
        axises: [
            [0,  '5rem'],
            [1,  '5rem'],
            [2,  '5rem'],
            [3,  '5rem'],
            [4,  '5rem'],
            [5,  '5rem'],
            [6,  '5rem'],
            [7,  '5rem'],
            [8,  '5rem'],
            [9,  '5rem'],
            [10, '5rem'],
            [11, '5rem']
        ],

        /*
        * initial (default) pies settings
        * */
        pies: [
            '2rem accent-2 red',
            '2rem accent-2 pink',
            '2rem accent-2 purple',
            '2rem accent-2 indigo',
            '2rem accent-2 blue',
            '2rem accent-2 cyan',
            '2rem accent-2 teal',
            '2rem accent-2 green',
            '2rem accent-2 lime',
            '2rem accent-2 yellow',
            '2rem accent-2 amber',
            '2rem accent-2 deep-orange',
        ],

        /*
        * for scaling on mobile devices
        * */
        mobileScaleRate: 1.66,

        /*
        * transition duration of elements with 'pop' class name
        */
        popDuration: 400,

        bounceDuration: 1000,
    },

    /* using user agent string to tell whether it's mobile or not*/
    isMobile: /Android|iPhone|Mobile/i.test(navigator.userAgent),

    /* set pies' styles to the dom */
    setPies: () =>{

        // get all pie elements
        let allPieElems = document.querySelectorAll('.pie');
        if(allPieElems){
            for(let i = 0; i < allPieElems.length; i++){
                let pie = allPieElems[i];

                /*
                * if the pie is without a radius class name, it won't be working
                * */
                if(pie.className.match(/[0-9]+rem|[0-9]+px/)){

                    // get unit of radius
                    /*
                     * using regular expression to get the length from class list of an element
                     * */
                    let unit = /rem/.test(pie.className.match(/[0-9]+rem|[0-9]+px/)[0]) ? 'rem' : 'px';

                    // compute radius
                    let radius;
                    if(unit === 'rem'){
                        radius = Number(pie.className.match(/[0-9]+rem|[0-9]+px/)[0].slice(0,-3));

                        /*
                         * to beautify the layout on mobile devices
                         * you can set the rate before using
                         * 'Roundie.options.mobileScaleRate = 1.333'
                         * */
                        if(Roundie.isMobile){radius = radius/Roundie.options.mobileScaleRate}
                    }else if(unit === 'px'){
                        radius = Number(pie.className.match(/[0-9]+rem|[0-9]+px/)[0].slice(0,-2));
                    }

                    /*
                    * compute and set styles to pies
                    * */
                    let height = radius*1.1;
                    pie.style.height = `${height}${unit}`;
                    pie.style.width = `${height}${unit}`;
                    let padding = radius*0.45;
                    pie.style.padding = `${padding}${unit}`;
                    let top = radius*(-1);
                    pie.style.top = `${top}${unit}`;
                    pie.style.left = `${top}${unit}`;
                    pie.style.borderRadius = `${radius}${unit}`;
                }
            }
        }
    },

    /*/!*set rings' styles to the dom*!/
    setRings: ()=>{
        let allRings = document.querySelectorAll('.ring');
        if(allRings){
            for(let i = 0; i < allRings.length; i++){
                let ring = allRings[i];

                /!*
                 * if the pie is without a radius class name, it won't be working
                 * *!/
                if(ring.className.match(/[0-9]+rem|[0-9]+px/)){

                    // get unit of radius
                    /!*
                     * using regular expression to get the length from class list of an element
                     * *!/
                    let unit = /rem/.test(ring.className.match(/[0-9]+rem|[0-9]+px/)[0]) ? 'rem' : 'px';

                    // compute radius
                    let radius;
                    if(unit === 'rem'){
                        radius = Number(ring.className.match(/[0-9]+rem|[0-9]+px/)[0].slice(0,-3));

                        /!*
                         * to beautify the layout on mobile devices
                         * you can set the rate before using
                         * 'Roundie.options.mobileScaleRate = 1.333'
                         * *!/
                        if(Roundie.isMobile){radius = radius/Roundie.options.mobileScaleRate}
                    }else if(unit === 'px'){
                        radius = Number(ring.className.match(/[0-9]+rem|[0-9]+px/)[0].slice(0,-2));
                    }

                    /!*
                     * compute and set styles to pies
                     * *!/
                    let height = radius*1.1;
                    ring.style.height = `${height}${unit}`;
                    ring.style.width = `${height}${unit}`;
                    let padding = radius*0.45;
                    ring.style.padding = `${padding}${unit}`;
                    let top = radius*(-1);
                    ring.style.top = `${top}${unit}`;
                    ring.style.left = `${top}${unit}`;
                    ring.style.borderRadius = `${radius}${unit}`;
                }
            }
        }
    },*/

    /* set axis to the dom*/
    setAxises: () => {

        // 12 directions
        /*
        * the names of different axis directions
        * the number and direction corresponds to that of a clock, except that 0 is 12 on clock
        * */
        let allAxises = [
            "axis-0" ,
            "axis-1" ,
            "axis-2" ,
            "axis-3" ,
            "axis-4" ,
            "axis-5" ,
            "axis-6" ,
            "axis-7" ,
            "axis-8" ,
            "axis-9" ,
            "axis-10",
            "axis-11",
        ];

        // rate for axis x and axis y
        /*this */
        let axisRates = [
            [0, -1],
            [0.5, -0.86602540378445],
            [0.86602540378445, -0.5],
            [1, 0],
            [0.86602540378445, 0.5],
            [0.5, 0.86602540378445],
            [0, 1],
            [-0.5, 0.86602540378445],
            [-0.86602540378445, 0.5],
            [-1, 0],
            [-0.86602540378445, -0.5],
            [-0.5, -0.86602540378445],
        ];

        // set axises
        for (let i = 0; i < allAxises.length; i++){

            // translate the axises
            let axisElems = document.querySelectorAll(`.${allAxises[i]}`);
            if(axisElems){
                for ( let j = 0; j < axisElems.length; j++){
                    if(axisElems[j].className.match(/[0-9]+rem|[0-9]+px/)){

                        // get unit of radius
                        /*
                        * using regular expression to get the length from class list of an element
                        * */
                        let unit = /rem/.test(axisElems[j].className.match(/[0-9]+rem|[0-9]+px/)[0]) ? 'rem' : 'px';

                        // get length of the axis
                        /*
                        * right now only two units are supported 'px' and 'rem'
                        * */
                        let length;
                        if(unit === 'rem'){
                            length =  Number(axisElems[j].className.match(/[0-9]+rem/)[0].slice(0,-3));

                            /*
                            * to beautify the layout on mobile devices
                            * you can set the rate before using
                            * 'Roundie.options.mobileScaleRate = 1.333'
                            * */
                            if(Roundie.isMobile){
                                length = length/Roundie.options.mobileScaleRate;
                            }
                        }else if(unit === 'px'){
                            length =  Number(axisElems[j].className.match(/[0-9]+px/)[0].slice(0,-2));
                        }

                        // compute length on x and y
                        let x = length*axisRates[i][0];
                        let y = length*axisRates[i][1];


                        // add lines
                        /*
                         * adding lines before adding styles is to assure that lines are beneath the pies
                         * */
                        if(axisElems[j].className.match(/line/) && !axisElems[j].className.match(/bounce/)){
                            let string = document.createElement('div');
                            string.className += 'string';
                            string.style.width = `${length}${unit}`;
                            axisElems[j].appendChild(string);
                        }

                        // add style to axises
                        if(/pop/.test(axisElems[j].className)){

                            // set a listener on parent node
                            axisElems[j].parentNode.addEventListener('mouseover', ()=>{

                                // create an element to make sure the children do not vanish immediate after the mouse leaves
                                let invisibleElem = document.createElement('div');
                                invisibleElem.className += 'invisible-pie pie';
                                invisibleElem.style.width = `${length*1.7}${unit}`;
                                invisibleElem.style.height = `${length*1.7}${unit}`;
                                invisibleElem.style.borderRadius = `${length}${unit}`;
                                invisibleElem.style.top = `${length*-0.85}${unit}`;
                                invisibleElem.style.left = `${length*-0.85}${unit}`;
                                invisibleElem.addEventListener('mouseover',()=>{
                                    axisElems[j].style.transform = `translate(${x}${unit}, ${y}${unit}) rotate(0deg)`;
                                });
                                axisElems[j].parentNode.appendChild(invisibleElem);
                                axisElems[j].style.transform = `translate(${x}${unit}, ${y}${unit}) rotate(0deg)`;
                            });
                            axisElems[j].parentNode.addEventListener('mouseout', ()=>{
                                setTimeout(()=>{
                                    let invisibleElem2 = axisElems[j].parentNode.querySelector('.invisible-pie');
                                    axisElems[j].parentNode.removeChild(invisibleElem2);
                                },300);
                                axisElems[j].style.transform = `translate(0, 0) rotate(270deg)`;
                            });

                        } /* end of pop */ else{
                            /*
                            * these are the axises with out pop class
                            * */
                            axisElems[j].style.transform = `translate(${x}${unit}, ${y}${unit})`;


                            /*
                            * add bounce style
                            * */
                            if(/bounce/.test(axisElems[j].className)){

                                // get unit
                                let unit = /bounce-[0-9]+rem/.test(axisElems[j].className.match(/bounce-[0-9]+rem|bounce[0-9]+px/)[0]) ? 'rem' : 'px';
                                let bounceLength;
                                if(unit === 'rem'){
                                    bounceLength =  Number(axisElems[j].className.match(/bounce-[0-9]+rem/)[0].match(/[0-9]+/)[0]);

                                    /*
                                     * to beautify the layout on mobile devices
                                     * you can set the rate before using
                                     * 'Roundie.options.mobileScaleRate = 1.333'
                                     * */
                                    if(Roundie.isMobile){
                                        bounceLength = bounceLength/Roundie.options.mobileScaleRate;
                                    }
                                }else if(unit === 'px'){
                                    bounceLength =  Number(axisElems[j].className.match(/bounce-[0-9]+px/)[0].match(/[0-9]+/)[0]);
                                }

                                // get bounce x and y
                                let bx = bounceLength*axisRates[i][0];
                                let by = bounceLength*axisRates[i][1];

                                // add general style
                                axisElems[j].style.transition = `${Roundie.options.bounceDuration/2}ms ease`;

                                // add bounce line
                                if(/line/.test(axisElems[j].className)){
                                    let string = document.createElement('div');
                                    string.className += 'string';
                                    string.style.transition = `${Roundie.options.bounceDuration/2}ms ease`;

                                    // set bounce animation
                                    setInterval(()=>{
                                        axisElems[j].style.transform = `translate(${x+bx}${unit}, ${y+by}${unit})`;
                                        string.style.width = `${length + bounceLength}${unit}`;
                                        setTimeout(()=>{
                                            axisElems[j].style.transform = `translate(${x}${unit}, ${y}${unit})`;
                                            string.style.width = `${length}${unit}`;
                                        },Roundie.options.bounceDuration/2)
                                    },Roundie.options.bounceDuration);
                                    axisElems[j].appendChild(string);
                                } else {

                                    // set bounce animation
                                    setInterval(()=>{
                                        axisElems[j].style.transform = `translate(${x+bx}${unit}, ${y+by}${unit})`;
                                        setTimeout(()=>{
                                            axisElems[j].style.transform = `translate(${x}${unit}, ${y}${unit})`;
                                        },Roundie.options.bounceDuration/2)
                                    },Roundie.options.bounceDuration);
                                }
                            } // end of bounce
                        }
                    } else{
                        console.error(`Roundie.js: ${axisElems[j]} has no length, please add a length!`);
                    }
                }
            }
        }
    },

    /* to init the whole dom
    * NOTE: this must be called when the dom is READY !!!*/
    init:() =>{

        /* call the methods of Roundie itself */
        Roundie.setAxises();
        Roundie.setPies();
        // Roundie.setRings();
    },

    /* create and show loading page at the beginning */
    loading:()=>{
        let loadingScreen =  document.createElement('div');
        loadingScreen.id = 'roundie-loading-screen';
        let text = document.createElement('div');
        text.innerHTML = loadingOptions.text;
        text.className += 'roundie-loading-text';
        loadingScreen.appendChild(text);
        Roundie.addNode(loadingScreen, loadingOptions);
        Roundie.init();
        document.body.appendChild(loadingScreen);
    },

    /* remove loading page */
    endLoading:()=>{
        setTimeout(()=>{
            let loadingScreen =  document.querySelector('#roundie-loading-screen');
            loadingScreen.style.animationDuration = '1500ms';
            loadingScreen.className += 'slide-top';
            setTimeout(()=>{
                loadingScreen.style.display = 'none';
            },2500);
        },2000);
    },

    addNode: (elem, options) => {

        // create pole element
        let pole = document.createElement('div');
        pole.className += ` pole ${options.pole}`;

        // create axis(dot) elements
        for (let i = 0; i < options.axises.length; i++){
            let dot =  document.createElement('div');
            dot.className += ` axis-${options.axises[i][0]} ${options.axises[i][1]}`;

            // create pies
            if(typeof options.pies === 'string'){
                let pie =  document.createElement('div');
                pie.className += ` pie ${options.pies}`;
                dot.appendChild(pie);
            }else if(typeof options.pies === 'object'){
                let pie =  document.createElement('div');
                pie.className += ` pie ${options.pies[i]}`;
                dot.appendChild(pie);
            }
            pole.appendChild(dot);
        }
        elem.appendChild(pole);
    },

    addNodes: (nodes, options) => {
        for (let i = 0; i < nodes.length; i++){
            let node = nodes[i];
            Roundie.addNode(node, options)
        }
    }
};

window.Roundie = Roundie;