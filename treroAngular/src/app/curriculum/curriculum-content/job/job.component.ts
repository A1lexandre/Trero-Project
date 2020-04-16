import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobForms: FormArray;

  constructor(private fBuilder: FormBuilder) { }

  ngOnInit() {

    this.jobForms = this.fBuilder.array([this.jobForm()]);

  }

  jobForm(): FormGroup {
    return this.fBuilder.group({
      cargo: [null, [Validators.required]],
      nome_empresa: [null, [Validators.required]],
      entrada: [null, [Validators.required]],
      saida: [null, [Validators.required]],
      desc_cargo: [null, [Validators.required]]
    });
  }

}
