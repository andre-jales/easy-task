import { Component, computed, EventEmitter, input, output } from '@angular/core';

interface IUser {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<IUser>();
  select = output<string>();

  imagePath = computed(() => {
    return 'users/' + this.user().avatar;
  });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
