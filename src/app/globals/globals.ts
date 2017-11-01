// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  is_logged_in:boolean = false;
  role: string = 'test';
}

