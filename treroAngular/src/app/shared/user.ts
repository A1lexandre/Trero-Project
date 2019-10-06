import { Injectable } from '@angular/core';

export interface User {
  id: string;
  name: String;
  data_nasc: Date;
  email: string;
  sexo: string;
  passsword: string;
  passwordConfirmation: string;
}