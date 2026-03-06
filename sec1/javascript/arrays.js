const myarr = [34,'hello',true,null,undefined];

console.log(myarr);

console.log(myarr.length);

const movies = ['Mean girls', 'Legally Blonde', 'The Devil Wears Prada', 'Clueless'];

//indexing
console.log(movies[0]);
console.log(movies.indexOf('The Devil Wears Prada'));

console.log(movies[-3]); //undefined

console.log(movies.at(-3));

movies[1] = 'The Notebook';
console.log(movies);

//adding and removing elements
movies.push('10 Things I Hate About You');
movies.unshift('She’s All That');
console.log(movies);


// movies.pop();
// movies.shift();
// console.log(movies);

//slicing

console.log(movies.slice(1,3)); //does not include the end index
console.log(movies.slice(2)); //slices from index 2 to the end
console.log(movies.slice(-2)); //slices the last 2 elements

//splicing
console.log(movies);
//movies.splice(3,2,) // removing elements
movies.splice(2,1,'Easy A','The Princess Diaries'); //replacing elements
console.log(movies);

