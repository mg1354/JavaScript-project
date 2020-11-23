
"use strict"

function getBookInfo(){}

function Book(name, topic, pages, ISBN) {
    this.name = name;
    this.topic = topic;
    this.pages = pages;
    this.ISBN = ISBN;
    this.getBookInfo = function() {
        return "name:" + this.name+"\n"+
               "topic:" +  this.topic +"\n"+
               "pages:" + this.pages +"\n"+
               "ISBN:" + this.ISBN+"\n"+
               "-------------"
            }
}

var books = [];
 books.push(new Book("A","t1",50,123456));
 books.push(new Book("B","t2",100,456789));
 books.push(new Book("C","t3",75,987456));
 
 var  x = "y";
 for (let i = 1  ; i>0 & x == "y" ; i++){
    var x = prompt("Will you add a book?( y for yes and n for no)");
     if (x == "y" ){
       addBook();
     }else {
     x =="n";
     }
  }

   //books.forEach(getBookInfo);
    /* forEach() method gives error, I tried alot but I could not fix it.
     instead I used a for loop.If it is posible please send me the reason, Thanks.*/
 
 for (let i=0 ; i < books.length; i++) {
        console.log(books[i].getBookInfo());
    }
 
 function addBook() {
    
        books.push(new Book(prompt("Pleasei enter the book's name:"),
                            prompt("Please enter the book's toppic:"),
                            prompt("Please enter the book's pages:"), 
                            prompt("Please enter the book's ISBN:")));
        }       
             



    