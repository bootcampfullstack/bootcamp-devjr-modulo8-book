import { Component} from '@angular/core';
import { Book} from '../../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
 
   newBook : Book = {} as Book;
   
   books: Book[] = [
      {
        id: 1,
        title: "Java 24 horas",
        author: "Glauco Todesco",
        price : 40.50
      },
      {
        id: 2,
        title: "Angular 24 horas",
        author: "Fernanda Maria",
        price : 36.50
      },
      {
        id: 3,
        title: "AWS 24 horas",
        author: "Juliana Silva",
        price : 43.25
      },
      {
        id: 4,
        title: "JavaScript 24 horas",
        author: "Antenor Lucas",
        price : 28.5
      }
   ];

   saveBook(){
      this.newBook.id = this.books.length + 1;
      this.books.push(this.newBook);
      this.newBook =  {} as Book;
   }

}
