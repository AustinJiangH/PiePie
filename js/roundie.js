/*
* Author: Austin
* Date: 2017/08/19
* */

function addSingleNode(elem, options){
    console.log('adding nodes');

}

const Roundie = {
    options: {
        pole:'',
        dots: [
            [0,  '5rem', ''],
            [1,  '5rem', ''],
            [2,  '5rem', ''],
            [3,  '5rem', ''],
            [4,  '5rem', ''],
            [5,  '5rem', ''],
            [6,  '5rem', ''],
            [7,  '5rem', ''],
            [8,  '5rem', ''],
            [9,  '5rem', ''],
            [10, '5rem', ''],
            [11, '5rem', '']
        ],
        pies: [
            ['1rem', 'cyan']
        ],
        /*
        [
            ['3rem', 'cyan'],
            ['3rem', 'cyan']
        ]
        */
    },
    addNode: (elem, options) => {
        let pole = document.createElement('div');
        pole.className += ` pole ${options.pole}`;
        for (let i = 0; i < options.dots.length; i++){
            let dot =  document.createElement('div');
            dot.className += ` axis-${options.dots[i][0]} len-${options.dots[i][1]} ${options.dots[i][2]}`;
            if(options.pies){
                for(let i = 0; i < options.pies.length; i++){
                    let pie =  document.createElement('div');
                    pie.className += ` pie-${options.pies[i][0]} ${options.pies[i][1]}`;
                    dot.appendChild(pie);
                }
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
