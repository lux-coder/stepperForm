import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

interface TType{
  value: string;
  viewValue: string;
}

interface VType{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  generalForm: FormGroup;
  additionalForm: FormGroup;
  locationForm: FormGroup;


  ttypes: TType[] =[
    {value: 'Prijevoz suhe robe', viewValue: 'dry-0'},
    {value: 'Prijevoz rashlađene robe', viewValue: 'cool-1'},
    {value: 'Prijevoz specijalne robe', viewValue: 'special-2'}
  ];

  vtypes: VType[] = [
    {value: 'kom', viewValue:'kom'},
    {value: 'kg', viewValue:'kg'},
    {value: 'palete', viewValue:'palete'}
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.generalForm = new FormGroup({
      client: new FormControl('', [Validators.required]),
      type: new FormControl(''),
      value: new FormControl('')
    });
    this.additionalForm = new FormGroup({
      material: new FormControl(''),
      quantity: new FormControl(''),
    });
    this.locationForm = new FormGroup({
      startLocation: new FormControl(''),
      endLocation: new FormControl(''),
      handoverTime: new FormControl(''),
      deliveryTime: new FormControl('')
    });
  }

}
