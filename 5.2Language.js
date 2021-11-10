function lang(language){
    switch(language){
        case 'mandarin':
            return  (`MOST number of native speakers!`);
            break;
        case 'spanish':
            return(`2nd place in number of native speakers`)
            break;
        case 'english':
            return(`3rd place`)
            break;
        case 'hindi':
            return(`4th place`)
            break;
        case 'arabic':
            return(`5th place`)
            break;
        default:
            return(`Not in the top 5`)
    }    
}
let g = lang('hindi')
console.log(g)