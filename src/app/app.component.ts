import { Component } from '@angular/core';
import { RandomUserService } from './services/random-user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 data: Array<any>
 page: number=1;
 totalRecords:number | undefined;
 constructor(private randomUser:RandomUserService){
   this.data=new Array<any>()


 }
 submit(){
   this.randomUser.getData().subscribe((data)=>{
     this.data=data.results;
     this.totalRecords=data.results.length;
   })
 }
}
