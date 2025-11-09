import { Component, computed, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();

  imagePath = computed(() => {
    return 'users/' + this.avatar();
  });

  onSelectUser() {
    this.select.emit(this.id());
  }
}
