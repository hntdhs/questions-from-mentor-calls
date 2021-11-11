// forEach, map filter

// Q: Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

function addKeyAndValue(arr, key, val) {
    arr.forEach(function(val) {
        val[key] = value;
    })
    return arr;
}
// Don't understand the val[key] = key thing. Is val[key] the value or the key and why does it appear only one of the key/value is being set? I remember having issues with the right commands when working with objects when I first started.


// Q: Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str) {
    let splitArr = str.split("")
    let obj = {};
    const vowels = 'aeiou';

    splitArr.forEach(function(val) {
        let lowerCasedLetter = val.toLowerCase();
        if(vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    })

}
//.split method automatically turns things into array? if not I'm not seeing where we turn the string into an array so  we can work with it. isn't there a toString method or something similar?


// Q: Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
        return val * idx;
    });
}
// Would not adding idx as an argument to the callback (so it's just val) and then doing return val * arr[i]; also work? If not, why not? 



// Q: Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

function filterByValue(arr, key) {
    arr.filter(function(val) {
        return val[key] !== undefined;
    });
}
// Why does return val[key] return the whole object and not just the key?



// Q: Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find(arr, searchVal) {
    return arr.filter(function(val) {
        return val === searchVal;
    })[0];
}
// Does the [0] handle returning undefined if the searchVal isn't present in the array?



//Q: Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

function removeVowels(str) {
    const vowels = 'aeiou';
    return str
        .toLowerCase()
        .split("")
        .filter(function(val) {
            return vowels.indexOf(val) !== -1;
        })
        .join("");
}
// Does .join turn it from an array back into a string?



// Q: Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

function doubleOddNumbers(arr) {
    return arr
        .filter(function(val) {
            return val % 2 !== 0;
        })    
        .map(function(val) {
            return val * 2;
        });   
}
// I notice with this one it does return arr on its own line and then the filter and map stuff indented below, whereas the others except for the string one right before do return arr.filter(function) on one line. Is there a particular reason for that or does either work?


// some/every


// Q: Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

function hasNoDuplicates(arr) {
    return arr.every(function(val) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}
// Not sure how this one works. I don't think I've seen lastIndexOf before, but I feel like we need to compare val to every other number in the array, and I don't see how this accomplishes that.



// Q: Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

function hasCertainKey(arr, key) {
    return arr.every(function(val) {
        return key in val;
    })
}
// I don't remember seeing 'in' like that - is it as simple as it looks?


// find

// Q: Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array and return this object. If the object is not found, return undefined.

function removeUser(usersArray, str) {
    let foundIndex = usersArray.findIndex(function(user) {
        return user.username === username;
    })
    if(foundIndex === -1) return;

    return usersArray.splice(foundIndex, 1)[0];
}
// Honestly I couldn't even figure out what this one was asking for and the answer isn't helping. Maybe I'd understand the answer better if I understood the question better.


// reduce

// Q: Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

function extractValue(arr, key) {
    return arr.reduce(function(accumulator, next) {
        accumulator.push(next[key])
        return keyValues[key]
    }, []);
}

// I assume that empty array is there because that's where you put an empty array you're going to push things onto using reduce, rather than declare an empty array as a variable right after the first line of the function - is that right?



// Q: Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str) {
    const vowels = 'aeiou';
    return str.split('').reduce(function(accumulator, next) {
        let lowerCased = next.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1) {
            if(accumulator[lowerCased]) {
                accumulator[lowerCased]++;
            } else {
                accumulator[lowerCased] = 1;
            }
        }
        return accumulator;
    }, {})
}

// so accumulator in this case is the empty object, and that's why we have accumulator[lowerCased]++ and all that?
// I'm not straight on how to signify keys and values of an object in code like this. accumulator[lowerCased] - that's the value to the key?



// Q: Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

function addKeyAndValue (arr, key, value) {
    return arr.reduce(function(acc,next,idx) {
        acc[idx][key] = value;
        return acc;
    }, acc);
}
// We're not setting the value explicitly it seems, just the key. Why do we only have to do one (talking about acc[idx][key] = value)?



// Q: Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.

function partition(arr, cb) {
    return arr.reduce(function(acc,next) {
        if(cb(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
    }, [[], []]);
}
// Will need to go over this one. 
// cb(next) - I'm sure that's the next value in the array we're working with, but I'm not sure why cb(next) signifies that
// basic question - if(cb(next)) means "if truthy" right?
// how is that if/else pushing the result into one array or the other? 
// in the videos (or somewhere else I was reading, not sure), it said that when you put something where that array of two arrays is here, you're initializing the reduce method with that thing. Maybe I don't understand what initialize means, because I don't understand how that array is "initializing" anything.