import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isSubmitted = false;
  ratingScores = [1, 2, 3, 4, 5];

  private fb = inject(FormBuilder);
  ratingForm = this.fb.group({
    rating: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  get rating() {
    return this.ratingForm.get('rating');
  }

  onSubmit() {
    this.isSubmitted = this.ratingForm.valid;
  }
}
