import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Hero} from './hero';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
})
export class FormControlComponent implements OnInit {

  profileForm = this.fb.group({
    firstName : ['', Validators.required],
    lastName : [''],
    address : this.fb.group({
      street : [''],
      city : [''],
      state : [''],
      zip : [''],
    }),
    // aliases : this.fb.array([
    //   this.fb.control(''),
    // ]),
  });


  constructor(
    private  fb: FormBuilder,
  ) { }

  ngOnInit() {
       let myHero =  new Hero(42, 'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover');
    console.log('My hero is called ' + myHero.name);
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.log(1);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName : 'Nancy',
      address : {
        street : '123 Drew Street'
      }
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
