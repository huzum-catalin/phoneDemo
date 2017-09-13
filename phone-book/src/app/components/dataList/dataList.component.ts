
import { Component, OnInit } from '@angular/core';
import { Phone }              from '../../classes/phone';
import { PhoneDataService }       from '../../services/phoneDataService';
import { PaginationService } from '../../services/paginationService';

@Component({
  selector: 'data-list',
  templateUrl: './dataList.component.html',
  styleUrls: ['./dataList.component.css'],
  providers: [ PhoneDataService ]
})
export class DataListComponent implements OnInit {
  
 public phoneList: Phone[];
 public pagedPhoneList: Phone[];
 private  _phoneDataService : PhoneDataService;
 private  errMsg:string;
 private filterApplied:boolean;
 
 // pager object
    pager: any = {};
    
 private counter:number;

 constructor(private _service: PhoneDataService, private paginationService: PaginationService) {
  this._phoneDataService = _service;
  this.counter = 1;
  this.filterApplied = false;
 }  

 ngOnInit() { 
   this.getPhoneData();
 
  }

  getPhoneData() {
    this._phoneDataService.getData()

                     .subscribe( data=>this.onComplete(data),
                       error =>  this.errMsg = <any>error)
  }

  onComplete(data){
    this.phoneList = this.mapPhoneData(data);
    this.setPage(1);
  }

  mapPhoneData(data) {
    let res = [];
    for (var property in data) {
      if (data.hasOwnProperty(property)) {
          // do stuff
          let phone = data[property];
          res.push(phone);
      }
    }
    return res;
};

sortData(column) {
  console.log("Filtering about " + column);
  switch(column) {
    case 'price':
    this.phoneList.sort((n1,n2)=>(n1.priceFrom - n2.priceFrom));
    this.setPage(1);
    break;
  }
};

sortAscending(phone1:Phone,phone2:Phone) {

}

filterData(input) {
  
  this.pagedPhoneList = this.phoneList.filter(x => x.description.toLowerCase().indexOf(input.toLowerCase())>=0);
  this.filterApplied = true;
  if(input === '')
  {
    this.filterApplied = false;
    this.setPage(1);
  }
}

 setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.paginationService.getPager(this.phoneList.length, page);
 
        // get current page of items
        if(!this.filterApplied) {
          this.pagedPhoneList = this.phoneList.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
        else
        {
          this.pagedPhoneList = this.pagedPhoneList.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
    }

  nextPage(){
    if(this.counter < this.pager.totalPages)
    this.counter++;
    this.setPage(this.counter);
  }

  previousPage(){
    if(this.counter > 1) {
    this.counter--;
    this.setPage(this.counter);
  }
  return;
  }

}
