import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function optionalEmail(c: AbstractControl): ValidationErrors | null {
  if (c.value == null || c.value == '') {
    return null;
  }
  return Validators.email(c);
}
