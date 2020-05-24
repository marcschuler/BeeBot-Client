import { Injectable } from '@angular/core';

export class Entry{
  name: string;
  type: string;
  defaultValue: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class GenericCompService {

  constructor() { }
}
