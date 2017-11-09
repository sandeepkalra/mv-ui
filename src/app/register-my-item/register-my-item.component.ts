import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register-my-item',
  templateUrl: './register-my-item.component.html',
  styleUrls: ['./register-my-item.component.scss']
})
export class RegisterMyItemComponent implements OnInit {
  filteringAsync: boolean = false;
  filteredAsync: string[];
  objects: any[] = [
    {id: 1, city: 'San Diego', population: '4M'},
    {id: 2, city: 'San Franscisco', population: '6M'},
    {id: 3, city: 'Los Angeles', population: '5M'},
    {id: 4, city: 'Austin', population: '3M'},
    {id: 5, city: 'New York City', population: '10M'},
  ];

  strings: string[] = [
    'stepper',
    'expansion-panel',
    'markdown',
    'highlight',
    'loading',
    'media',
    'chips',
    'http',
    'json-formatter',
    'pipes',
    'need more?',
  ];

  asyncModel: string[] = this.strings.slice(0, 2);

  filteredObjects: string[];

  objectsModel: string[] = this.objects.slice(0, 4);

  ngOnInit(): void {
    this.filterObjects('');
  }

  filterObjects(value: string): void {
    this.filteredObjects = this.objects.filter((obj: any) => {
      if (value) {
        return obj.city.toLowerCase().indexOf(value.toLowerCase()) > -1;
      } else {
        return false;
      }
    }).filter((filteredObj: any) => {
      return this.objectsModel ? this.objectsModel.indexOf(filteredObj) < 0 : true;
    });
  }





  filterAsync(value: string): void {
    this.filteredAsync = undefined;
    if (value) {
      this.filteringAsync = true;
      // Timeout isn't actually needed here, only added for demo to simulate async behavior
      setTimeout(() => {
        this.filteredAsync = this.strings.filter((item: any) => {
          return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
        }).filter((filteredItem: any) => {
          return this.asyncModel ? this.asyncModel.indexOf(filteredItem) < 0 : true;
        });
        this.filteringAsync = false;
      }, 2000);
    }
  }



}
