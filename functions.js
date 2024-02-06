/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animalsArr, name){
//    for(let animal of animalsArr){
//     if(animal.name === name){
//         return animal;
//     }
    
// }
for(let i = 0; i < animalsArr.length; i++){
    if(animalsArr[i].name === name){
        return animalsArr[i];
    }
}
return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacementObj){
//if name exists on animals,
for(let i = 0; i < animals.length; i++){
    if(animals[i].name === name){
        animals[i] = replacementObj;
    }
}
//replace with replacement
return;
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            //remove it
            animals.splice(i, 1)
        }
    }
    return;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animalObj){
    //checks if the animalObj has a name prop with a length
if(animalObj['name'].length > 0 && animalObj['species'].length > 0){
for(let i = 0; i < animals.length; i++){
    if(animals[i].name !== animalObj.name){
        animals.push(animalObj);
    }
    return;
}
}
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}