const spell = ["z", "d", "x"];
const dic = ["def", "dww", "dzx", "loveaw"];

const solution = (spell, dic) => {
    for (const el of dic) {
        const spellCopy = [...spell];
        let ok = true;

        for (let i = 0; i < el.length; i++) {
            const char = el[i];
            const idx = spellCopy.indexOf(char); 

            if (idx === -1) { 
                ok = false;
                break;
            }
            spellCopy.splice(idx, 1); 
        }

        if (ok && spellCopy.length === 0) return 1; 
    }
    return 2;
};


solution(spell, dic);