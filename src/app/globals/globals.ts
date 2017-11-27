// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  is_logged_in:boolean = false;
  manufacturer_list:string[] = [];
  categories:string[] = [];
  role: string = 'test';
}

