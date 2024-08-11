/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

const person = {
    name: "ali",
    age: 30,
    city: "Kuwait"

};

console.log(person);


/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/

person.email = "address@coded.com";
console.log(person);


/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'grade', it should return false.
********************************/

function hasKey(obj, key) {
    if (obj[key]) { 
        return (true);       
    } else {
        return (false);
    }
};

hasKey(person, "name"); /****it will not read it ******/

console.log(hasKey(person, "name"));
console.log(hasKey(person, "grade"));

// or 
function hasKey1(obj, key) {
    if (obj[key]) { 
        console.log(true);       
    } else {
        console.log(false);
    }
};

hasKey1(person, "name");
hasKey1(person, "grade");

// ..........

const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];


  /******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to print the titles of all the movies.
  ********************************/
  

function List(params) {
    const result = params.filter( (movies)=>{
        console.log (movies.title);
    }); 
}
// const result = movies.filter( (movies)=>{
//     console.log (movies.title);
// });

List(movies);


  
//   not required :
  /******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
  
  
  
  /******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
  
  