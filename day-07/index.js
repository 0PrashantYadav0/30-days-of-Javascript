
function objectInJs(){
  const book1 = {
    title : "my book",
    author: "my name",
    year : "2024"
  }

  const book2 = {
    title : "my book 2",
    author: "my name 2",
    year : "2023"
  }

  console.log(book1)

  console.log(`Title of my book ${book1.title}`)

  console.log(`Author of my book ${book1.author}`)

  function getTitleAndAuthor(){
    return `Title of my book ${book1.title} and author of my book ${book1.author}`
  }

  console.log(getTitleAndAuthor());

  function changeTheYear(year){
    book1.year = year;
  }

  changeTheYear(2025)
  console.log(book1)

  const library = {
    name: "lib", 
    books: [book1, book2],
  }

  console.log(library)

  console.log(library.books[0].author)

  function forToIn(){
    for(let key in book1){
      console.log(key + ": " + book1[key]);
    }
  }

  function keys(){
    console.log("keys")
    const keys = Object.keys(book1)
    console.log(keys)
  }

  function values(){
    console.log("values")
    const values = Object.values(book1);
    console.log(values)
  }

  // forToIn();
  values()
  keys();
}

const useOfThis =  {
  name: "my name", 
  work:"none",
  printAll : function (){
    console.log(this.name)
  }
}

// useOfThis.printAll()
objectInJs();