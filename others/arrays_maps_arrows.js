var myarr = [1,2,3,4]
// push and pop and slice list items
var myjson = [
                {"name" : "mark", "age":25}, 
                {"name" : "ann", "age":32}
            ]
var people = {
                mom: "wilma flintstone",
                dad: "fred flintstone",
                daughter: "pebbles",
                son: "bambam"
              };
var students = [
                { name: "Malcolm", score: 80 },
                { name: "Zoe", score: 85 },
                { name: "Kaylee", score: 99 },
                { name: "Simon", score: 99 },
                { name: "Wash", score: 79 }
            ];
//iterating through list
myarr.forEach(function(item) { // anonymous fxs
    console.log(item)
});
myarr.forEach(item => console.log(item)) //arrow 1

myarr.forEach(item => { //arrow 2
    console.log(item);
});
// foreach before vs map now
std_names = students.map(item => item.name);
// Map will also provide the index position of the array.
// This is similar to enumerate in Python.
var myarrMapped = myarr.map(function(value, index) {
    return `Stage ${index}: ${value}`;
  });
var myarrMapped2 = myarr.map((item, index) => `${index}: ${item}`);
console.log("this is my arrmapped2");
console.log(myarrMapped2);

//jsobjs - works in lists and json objects
console.log("printing Object.keys(obj),",Object.keys(people)); // Display only the keys of the object
console.log("printing Object.values(obj),",Object.values(people)); // Display only the values of the object
console.log("printing Object.entries(obj),",Object.entries(myarr)); // Display a key-value pair held in an array
Object.keys(userInfo).forEach(key => console.log(key));
Object.values(userInfo).forEach(value => console.log(value));
Object.entries(userInfo).forEach(([key, value]) => console.log(`Key: ${key} and Value ${value}`));

// Array of objects
var users = [
    { name: "Eric", age: 32, location: "North America" },
    { name: "Sally", age: 23, location: "Europe" },
    { name: "Cassandra", age: 27, location: "North America" }];
  // Loop through array of objects then each object
  users.forEach((user) => {
    console.log(user); // have each of the json objectcs per iteration
    // Get the entries for each object in the array
    Object.entries(user).forEach(([key, value]) => {
      // Log the key and value
      console.log(`Key: ${key} and Value ${value}`);
    });
  });