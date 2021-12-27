import { Component, OnInit } from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet={
    name: 'puppie',
    image: 'https://gamek.mediacdn.vn/133514250583805952/2020/6/4/-1591253249203679369585.jpg',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
