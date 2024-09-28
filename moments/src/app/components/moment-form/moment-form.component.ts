import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from '../../Interfaces/Moments';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css',
})
export class MomentFormComponent {
  @Input() btnText!: string;
  @Output() onSubmit = new EventEmitter<any>();
  momentoForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.momentoForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

  get title(){
    return this.momentoForm.get("title")!;
  }
  get description(){
    return this.momentoForm.get("description")!;
  }
  get image(){
    return this.momentoForm.get("image")!;
  }

  onFileSelected(event: any){
    const file: File = event.target.files[0];
    console.log(file)
    this.momentoForm.patchValue({image:file})
  }

  Submit() {
    if(this.momentoForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.momentoForm.value)
  }
}
