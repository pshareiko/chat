import { DateFormatterService } from '../../../common/date-formatter.service';
import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { ChatType, IChat, IMessage } from '../chat.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat[chat]',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  @Input() chat!: IChat;

  constructor(private router: Router, public dateFormatter: DateFormatterService) {}

  getDisplayName(): string {
    if (this.chat.chatType === ChatType.PERSONAL_CHAT) {
      const receiver = this.chat.participants[0];
      return `${receiver.firstName} ${receiver.lastName}`;
    }

    if (this.chat.chatType === ChatType.SELF_CHAT) {
      return 'Self Chat';
    }

    if (this.chat.chatType === ChatType.GROUP_CHAT) {
      return 'Group Chat';
    }

    return 'Unknown chat';
  }

  getLabel(): string {
    if (this.chat.chatType !== ChatType.PERSONAL_CHAT) {
      return '';
    }

    return this.chat.participants[0].username;
  }

  openDialogue(): void {
    this.router.navigate(['/chats/', this.chat.chatId]);
  }
}
