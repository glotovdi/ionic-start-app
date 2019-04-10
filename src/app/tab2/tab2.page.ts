import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({ eu: null, rub: null });
    this.form.get('eu').valueChanges.subscribe(res => this.form.get('rub').setValue(res * 72.3, { emitEvent: false }));
    // this.form
    //   .get('rub')
    //   .valueChanges.subscribe(res => this.form.get('dollar').setValue(res * 0.015, { emitEvent: false }));
  }
}
