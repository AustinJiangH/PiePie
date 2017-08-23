/*
* Author: Austin J.
* Date: 2017/08/19
* Description: This JavaScript file is a supplement to PiePie.css.
*              It works and only works with PiePie.css.
* License: All Rights Reserved (for now)
* GitHub: https://github.com/AustinJiangH/PiePie
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

let rayList = [];
for(let i = 0; i < 360; i++){
    let rayName = `ray-${i}`;
    rayList.push(rayName);
}




// PiePie Object
let PiePie = {

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

        /*/!*
        * for scaling on mobile devices
        * *!/
        mobileScaleRate: 1.66,

        /!*
        * transition duration of elements with 'pop' class name
        *!/
        popDuration: 400,

        bounceDuration: 1000,*/
    },

    variables:{
        /*
         * for scaling on mobile devices
         * */
        mobileScaleRate: 1.66,

        /*
         * transition duration of elements with 'pop' class name
         */
        popDuration: 400,

        bounceDuration: 1000,

        /* using user agent string to tell whether it's mobile or not*/
        isMobile: /Android|iPhone|Mobile/i.test(navigator.userAgent),

    },




    /* set pies' styles to the dom */
    setPies: () =>{

        // get all pie elements
        let allPieElems = document.querySelectorAll('.pie');
        if(allPieElems){
            allPieElems.forEach((pie)=>{
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
                         * 'PiePie.variables.mobileScaleRate = 1.333'
                         * */
                        if(PiePie.variables.isMobile){radius = radius/PiePie.variables.mobileScaleRate}
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
            });
        }
    },

    /* set axises to the dom*/
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


        allAxises.forEach((axis)=>{
            // translate the axises
            let axisElems = document.querySelectorAll(`.${axis}`);
            if(axisElems){
                PiePie.setRays(axisElems, Number(axis.replace(/axis-/, ''))*30);
            }
        });
    },

    /* set rays to the dom */
    setRays: (axis = false, deg = false) => {

        /* functions used */

        // get unit of length from class name
        // get unit of length from class name
        function getUnit(elem){
            return /rem/.test(elem.className.match(/[0-9]+rem|[0-9]+px/)[0]) ? 'rem' : 'px'
        }

        // get length from class name
        function getLength(elem, unit){
            let length;
            if(unit === 'rem'){
                length =  Number(elem.className.match(/[0-9]+rem/)[0].slice(0,-3));

                /*
                 * to beautify the layout on mobile devices
                 * you can set the rate before using
                 * 'PiePie.variables.mobileScaleRate = 1.333'
                 * */
                if(PiePie.variables.isMobile){
                    length = length/PiePie.variables.mobileScaleRate;
                }
            }else if(unit === 'px'){
                length =  Number(elem.className.match(/[0-9]+px/)[0].slice(0,-2));
            }
            return length;
        }

        // get bounce length
        function getBounceLength(elem, unit){
            let bounceLength;
            if(unit === 'rem'){
                bounceLength =  Number(elem.className.match(/bounce-[0-9]+rem/)[0].match(/[0-9]+/)[0]);

                /*
                 * to beautify the layout on mobile devices
                 * you can set the rate before using
                 * 'PiePie.variables.mobileScaleRate = 1.333'
                 * */
                if(PiePie.variables.isMobile){
                    bounceLength = bounceLength/PiePie.variables.mobileScaleRate;
                }
            }else if(unit === 'px'){
                bounceLength =  Number(elem.className.match(/bounce-[0-9]+px/)[0].match(/[0-9]+/)[0]);
            }
            return bounceLength;
        }

        function appendString(elem, length, unit){
            let string = document.createElement('div');
            string.className += 'string';
            string.style.width = `${length}${unit}`;
            elem.appendChild(string);
        }

        function appendPop (elem, length, x, y, unit){
            // set a listener on parent node
            elem.parentNode.addEventListener('mouseover', ()=>{

                // create an element to make sure the children do not vanish immediate after the mouse leaves
                let invisibleElem = document.createElement('div');
                invisibleElem.className += 'invisible-pie pie';
                invisibleElem.style.width = `${length*1.7}${unit}`;
                invisibleElem.style.height = `${length*1.7}${unit}`;
                invisibleElem.style.borderRadius = `${length}${unit}`;
                invisibleElem.style.top = `${length*-0.85}${unit}`;
                invisibleElem.style.left = `${length*-0.85}${unit}`;
                invisibleElem.addEventListener('mouseover',()=>{
                    elem.style.transform = `translate(${x}${unit}, ${y}${unit}) rotate(0deg)`;
                });
                elem.parentNode.appendChild(invisibleElem);
                elem.style.transform = `translate(${x}${unit}, ${y}${unit}) rotate(0deg)`;
            });
            elem.parentNode.addEventListener('mouseout', ()=>{
                setTimeout(()=>{
                    let invisibleElem2 = elem.parentNode.querySelector('.invisible-pie');
                    elem.parentNode.removeChild(invisibleElem2);
                },300);
                elem.style.transform = `translate(0, 0) rotate(270deg)`;
            });
        }

        function appendBounce (elem, length, bounceLength, x, y ,bx, by, unit){
            // add general style
            elem.style.transition = `${PiePie.variables.bounceDuration/2}ms ease`;

            // add bounce line
            if(/line/.test(elem.className)){
                let string = document.createElement('div');
                string.className += 'string';
                string.style.transition = `${PiePie.variables.bounceDuration/2}ms ease`;

                // set bounce animation
                setInterval(()=>{
                    elem.style.transform = `translate(${x+bx}${unit}, ${y+by}${unit})`;
                    string.style.width = `${length + bounceLength}${unit}`;
                    setTimeout(()=>{
                        elem.style.transform = `translate(${x}${unit}, ${y}${unit})`;
                        string.style.width = `${length}${unit}`;
                    },PiePie.variables.bounceDuration/2)
                },PiePie.variables.bounceDuration);
                elem.appendChild(string);
            } else {

                // set bounce animation
                setInterval(()=>{
                    elem.style.transform = `translate(${x+bx}${unit}, ${y+by}${unit})`;
                    setTimeout(()=>{
                        elem.style.transform = `translate(${x}${unit}, ${y}${unit})`;
                    },PiePie.variables.bounceDuration/2)
                },PiePie.variables.bounceDuration);
            }
        }


        function ray(rays, i){
            if(rays){
                rays.forEach((ray)=>{
                    ray.style.height = '0px';
                    ray.style.width = '0px';
                    ray.style.position = 'absolute';

                    if(ray.className.match(/[0-9]+rem|[0-9]+px/)){
                        // get unit
                        let unit = getUnit(ray);
                        let length = getLength(ray, unit);

                        // x and y

                        let x = length*Math.sin(i*2*Math.PI/360);
                        let y = length*Math.cos(i*2*Math.PI/360)*(-1);
                        // console.log(`${i}-${x}-${y}`)

                        // line with out bounce
                        // line with bounce will be added in bounce part
                        if(ray.className.match(/line/) && !ray.className.match(/bounce/)){
                            appendString(ray, length, unit);
                        }

                        // add style to axises
                        if(/pop/.test(ray.className)){
                            appendPop(ray, length, x, y, unit);

                        } else{
                            /*
                             * these are the ray with out pop class
                             * */
                            ray.style.transform = `translate(${x}${unit}, ${y}${unit})`;


                            /*
                             * add bounce style
                             * */
                            if(/bounce/.test(ray.className)){

                                // get unit
                                let bounceLength = getBounceLength(ray, unit);

                                // get bounce x and y
                                let bx = bounceLength*Math.sin(i*2*Math.PI/360);
                                let by = bounceLength*Math.cos(i*2*Math.PI/360)*(-1);

                                appendBounce(ray, length,bounceLength, x, y ,bx, by, unit);

                            } // end of bounce
                        }

                    }else {
                        console.error(`PiePie.js: ${ray} has no length, please add a length!`);
                    }
                });
            }
        }

        if(axis){
            ray(axis, deg);
        }else{
            for(let i = 0; i < rayList.length; i++){
                let rays = document.querySelectorAll(`.${rayList[i]}`);
                ray(rays, i);
            }
        }
    },

    /* to init the whole dom
    * NOTE: this must be called when the dom is READY !!!*/
    init:() =>{

        /* call the methods of PiePie itself */
        PiePie.setAxises();
        PiePie.setPies();
        PiePie.setRays();
    },

    /* create and show loading page at the beginning */
    loading:()=>{
        let loadingScreen =  document.createElement('div');
        loadingScreen.id = 'PiePie-loading-screen';
        let text = document.createElement('div');
        text.innerHTML = loadingOptions.text;
        text.className += 'PiePie-loading-text';
        loadingScreen.appendChild(text);
        PiePie.addNodes(loadingScreen, loadingOptions);
        PiePie.init();
        document.body.appendChild(loadingScreen);
    },

    /* remove loading page */
    endLoading:()=>{
        setTimeout(()=>{
            let loadingScreen =  document.querySelector('#PiePie-loading-screen');
            loadingScreen.style.animationDuration = '1500ms';
            loadingScreen.className += 'slide-top';
            setTimeout(()=>{
                loadingScreen.style.display = 'none';
            },2500);
        },2000);
    },

    addNodes: (nodes, options) => {

        /*main function*/
        function node(elem, options){
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
        }

        // check to add nodes
        if(nodes.constructor.name === "NodeList"){
            nodes.forEach((node)=>{
                node(node, options)
            });
        }else{
            node(nodes, options)
        }

    },

    /* pop some words*/
    pop: (popWords)=>{
        let popPosition = document.querySelector('#pop-position');
        if(!popPosition){
            popPosition = document.createElement('div');
            popPosition.id = 'pop-position';
            document.body.appendChild(popPosition);
        }
        let popWindow = document.createElement('div');
        popWindow.className += ' pop-window pop-in ';
        popWindow.innerHTML = popWords;
        popPosition.appendChild(popWindow);
        setTimeout(()=>{
            popWindow.className += ' pop-window pop-out ';
        },5000);
        setTimeout(()=>{
            popWindow.style.display = 'none';
        },5300);

    },

    /* add or remove classes */
    addClass: (elem, className)=>{
        if(elem.constructor.name === "NodeList"){
            elem.forEach((e)=>{
                e.className += ` ${className} `;
            });
        }else{
            elem.className += ` ${className} `;
        }
    },

    add: (elem, className)=>{
        PiePie.addClass(elem, className);
    },

    removeClass: (elem, className)=>{
        if(elem.constructor.name === "NodeList"){
            elem.forEach((e)=>{
                e.className = e.className.replace(new RegExp(className), ' ');
            });
        }else{
            elem.className = elem.className.replace(new RegExp(className), ' ');
        }

    },

    rm: (elem, className)=>{
        PiePie.removeClass(elem, className);
    },

    toggleClass: (elem, removeClass, addClass) => {
        PiePie.rm(elem, removeClass);
        PiePie.add(elem, addClass);
    },

    toggle: (elem, removeClass, addClass) => {
        PiePie.toggleClass(elem, removeClass, addClass);
    },

};

window.PiePie = PiePie;