import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { Job } from './../../shared/models/job';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  existingJobForms: FormArray;
  existingJobs: Job[] = [];

  constructor(private fBuilder: FormBuilder,
              private http: HttpClient) { }

  ngOnInit() {

    this.existingJobForms = this.fBuilder.array([]);

    this.http.get('http://localhost:3000/jobs').subscribe(
      (data: Job[]) => {
      this.existingJobs = data;
      this.getSetExistingJobs();
    }
    );

    console.log(this.existingJobs);

  }

  createJobForm(job: Job): FormGroup {

    return this.fBuilder.group({
      cargo: [job.cargo, [Validators.required]],
      nome_empresa: [job.nome_empresa, [Validators.required]],
      entrada: [job.entrada, [Validators.required]],
      saida: [job.saida, [Validators.required]],
      desc_cargo: [job.desc_cargo, [Validators.required]]
    });
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
