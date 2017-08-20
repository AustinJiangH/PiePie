/*
* Author: Austin
* Date: 2017/08/19
* */
let loadingOptions = {
    pole:'loading-screen-pole',
    axises: [
        [0,  '10rem  roundie-loading loading-axis-0  '],
        [1,  '5rem  roundie-loading loading-axis-1  '],
        [2,  '5rem  roundie-loading loading-axis-2  '],
        [3,  '5rem  roundie-loading loading-axis-3  '],
        [4,  '5rem  roundie-loading loading-axis-4  '],
        [5,  '5rem  roundie-loading loading-axis-5  '],
        [6,  '5rem  roundie-loading loading-axis-6  '],
        [7,  '5rem  roundie-loading loading-axis-7  '],
        [8,  '5rem  roundie-loading loading-axis-8  '],
        [9,  '5rem  roundie-loading loading-axis-9  '],
        [10, '5rem  roundie-loading loading-axis-10 '],
        [11, '5rem  roundie-loading loading-axis-11 ']
    ],
    pies: [
        '40px accent-2 roundie-loading loading-pie-0   red  ',
        '25px accent-2 roundie-loading loading-pie-1   grey ',
        '25px accent-2 roundie-loading loading-pie-2   grey ',
        '25px accent-2 roundie-loading loading-pie-3   grey ',
        '25px accent-2 roundie-loading loading-pie-4   grey ',
        '25px accent-2 roundie-loading loading-pie-5   grey ',
        '25px accent-2 roundie-loading loading-pie-6   grey ',
        '25px accent-2 roundie-loading loading-pie-7   grey ',
        '25px accent-2 roundie-loading loading-pie-8   grey ',
        '25px accent-2 roundie-loading loading-pie-9   grey ',
        '25px accent-2 roundie-loading loading-pie-10  grey ',
        '25px accent-2 roundie-loading loading-pie-11  grey ',
    ],

};


const Roundie = {

    options: {
        pole:'',
        axises: [
            [0,  '8rem '],
            [1,  '8rem '],
            [2,  '8rem '],
            [3,  '8rem '],
            [4,  '8rem '],
            [5,  '8rem '],
            [6,  '8rem '],
            [7,  '8rem '],
            [8,  '8rem '],
            [9,  '8rem '],
            [10, '8rem '],
            [11, '8rem ']
        ],
        pies: '20px green',

    },

    init:() =>{
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
                    if(axisElems[j].className.match(/[0-9]+rem/)){
                        let remLen =  Number(axisElems[j].className.match(/[0-9]+rem/)[0].slice(0,-3));
                        let x = remLen*axisRates[i][0];
                        let y = remLen*axisRates[i][1];
                        axisElems[j].style.transform = `translate(${x}rem, ${y}rem)`;

                        // add lines
                        if(axisElems[j].className.match(/line/)){
                            let string = document.createElement('div');
                            string.className += 'string';
                            string.style.width = `${remLen}rem`;
                            axisElems[j].appendChild(string);
                        }
                    }else if(axisElems[j].className.match(/[0-9]+px/)){
                        let pxLen = Number(axisElems[j].className.match(/[0-9]+px/)[0].slice(0,-2));
                        let x = pxLen*axisRates[i][0];
                        let y = pxLen*axisRates[i][1];
                        axisElems[j].style.transform = `translate(${x}px, ${y}px)`;

                        // add lines
                        if(axisElems[j].className.match(/line/)){
                            let string = document.createElement('div');
                            string.className += 'string';
                            string.style.width = `${pxLen}px`;
                            axisElems[j].appendChild(string);
                        }
                    }
                }
            }
        }

        // set pies
        let allPieElems = document.querySelectorAll('.pie');
        if(allPieElems){
            for(let i = 0; i < allPieElems.length; i++){
                let pie = allPieElems[i];
                if(pie.className.match(/[0-9]+rem|[0-9]+px/)){

                    // get unit of radius
                    let unit = /rem/.test(pie.className.match(/[0-9]+rem|[0-9]+px/)[0]) ? 'rem' : 'px';

                    // compute radius
                    let radius;
                    if(unit === 'rem'){
                        radius = Number(pie.className.match(/[0-9]+rem|[0-9]+px/)[0].slice(0,-3));
                    }else if(unit === 'px'){
                        radius = Number(pie.className.match(/[0-9]+rem|[0-9]+px/)[0].slice(0,-2));
                    }

                    // set style to pie
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

    loading:()=>{
        let loadingScreen =  document.createElement('div');
        loadingScreen.id = 'roundie-loading-screen';
        Roundie.addNode(loadingScreen, loadingOptions);
        Roundie.init();
        let loadingColors = [
            'red',
            'pink',
            'purple',
            'indigo',
            'blue',
            'cyan',
            'teal',
            'green',
            'lime',
            'yellow',
            'amber',
            '1deep-orange',
        ];

        document.querySelector('body').appendChild(loadingScreen);
        for(let i = 0; i < 12; i++){
            let a = i % 12;
            let b = (i % 12) + 1;
            setTimeout(()=>{
                // former
                document.querySelector(`.loading-axis-${a}`).className = document.querySelector(`.loading-axis-${a}`).className.replace(/10rem/,'5rem');
                document.querySelector(`.loading-pie-${a}`).className = document.querySelector(`.loading-pie-${a}`).className.replace(/40px/, '25px');
                // next
                document.querySelector(`.loading-axis-${b}`).className = document.querySelector(`.loading-axis-${b}`).className.replace(/5rem/,'10rem');
                document.querySelector(`.loading-pie-${b}`).className = document.querySelector(`.loading-pie-${b}`).className.replace(/grey/, loadingColors[b]).replace(/25px/, '40px');

                Roundie.init();
            },i*1000);
        }
    },

    endLoading:()=>{
        setTimeout(()=>{
            let loadingScreen =  document.querySelector('#roundie-loading-screen');
            loadingScreen.style.animationDuration = '1500ms';
            loadingScreen.className += 'slide-top';
            setTimeout(function(){
                loadingScreen.style.display = 'none';
            },2500);
        },11000);


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
