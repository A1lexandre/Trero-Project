import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  existingJobForms: FormArray;
  jobForms: FormArray;

  existingJobs = [
    {cargo: 'Cumin', nome_empresa: 'Rufinos'},
    {cargo: 'Programador', nome_empresa: 'WebDevop'},
    {cargo: 'Programador Java Pleno', nome_empresa: 'Accenture'}
  ];

  constructor(private fBuilder: FormBuilder) { }

  ngOnInit() {

    this.existingJobForms = this.fBuilder.array([]);
    this.jobForms = this.fBuilder.array([]);

    this.getSetExistingJobs();

  }

  createJobForm(data = {
    cargo: null,
    nome_empresa: null
  }): FormGroup {

        return this.fBuilder.group({
          cargo: [data.cargo, [Validators.required]],
          nome_empresa: [data.nome_empresa, [Validators.required]],
          entrada: [null, [Validators.required]],
          saida: [null, [Validators.required]],
          desc_cargo: [null, [Validators.required]]
        });
  }


  addJobForm() {
    this.jobForms.push(this.createJobForm());
  }

  getSetExistingJobs() {
    this.existingJobs.forEach( job => {
      this.existingJobForms.push(this.createJobForm(job));
    });
    this.existingJobForms.disable();
  }

  editJob(index) {
    this.existingJobForms.controls[index].enable();
  }

  saveJob(index) {
    this.existingJobForms.controls[index].disable();
  }

  deleteJob(index) {
    this.existingJobForms.removeAt(index);
  }


}
