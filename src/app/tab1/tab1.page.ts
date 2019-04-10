import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({ dollar: null, rub: null });
    this.form
      .get('dollar')
      .valueChanges.subscribe(res => this.form.get('rub').setValue(res * 64.3, { emitEvent: false }));
    // this.form
    //   .get('rub')
    //   .valueChanges.subscribe(res => this.form.get('dollar').setValue(res * 0.015, { emitEvent: false }));
  }
}
