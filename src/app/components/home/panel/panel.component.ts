
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WebService } from '../../../services/web.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  webForm: FormGroup;
  totalCost: number;

  @Output() costUpdated: EventEmitter<number>;


  constructor(private webService: WebService) {
    this.webForm = new FormGroup({
      pages: new FormControl(''),
      languages: new FormControl('')
    });

    this.totalCost = 0;
    this.costUpdated = new EventEmitter<number>();
  }


  ngOnInit(): void {
    this.webForm.valueChanges.subscribe(() => {
      this.updateCost();
    });
  }


  updateCost(): void {
    const pages = Number(this.webForm.get('pages')?.value) || 0;
    const languages = Number(this.webForm.get('languages')?.value) || 0;
    this.totalCost = this.webService.calculateCost(pages, languages);

    this.costUpdated.emit(this.totalCost);
  }


  increment(controlName: string): void {
    const currentValue = Number(this.webForm.get(controlName)?.value) || 0;
    this.webForm.get(controlName)?.setValue(currentValue + 1);
  }


  decrement(controlName: string): void {
    const currentValue = Number(this.webForm.get(controlName)?.value) || 0;
    if (currentValue > 0) {
      this.webForm.get(controlName)?.setValue(currentValue - 1);
    }
  }
}
