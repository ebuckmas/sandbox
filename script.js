console.log('Hello World');

function mario(levels) {
    for (let i = 1; i <= levels; i++) {
        let build = [];
        build.length = levels;
        build.fill('*', 0, build.length);
        //console.log(build);
        //calc num of blanks
        let blanks = levels - i;
        //console.log(blanks)
        //fill with blanks from 0 to blanks + 1
        let filled = build.fill(' ', 0, blanks);
        console.log(filled.join(''));

    }
}


mario(10);