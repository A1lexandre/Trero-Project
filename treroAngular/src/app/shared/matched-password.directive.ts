import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appMatchedPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: MatchedPasswordDirective, multi: true}]
})

export class MatchedPasswordDirective implements Validator {
  
  @Input('appMatchedPassword') matchedPassword: string;

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {

    return this.matchedPassword !== control.value ? {'UnmatchedPassword': {value: control.value}} : null;

  } 

}
