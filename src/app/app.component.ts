import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-rating';
  isSubmitted = false;
  private fb = inject(FormBuilder);
  ratingForm = this.fb.group({
    rating: [null, [Validators.required]],
  });

  get rating() {
    return this.ratingForm.get('rating');
  }

  onSubmit() {
    this.isSubmitted = true;

    if (!this.ratingForm.valid) {
      return false;
    } else {
      console.log(this.rating);
      return true;
    }
  }
}
