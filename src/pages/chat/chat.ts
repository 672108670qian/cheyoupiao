import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { FormControl, FormBuilder } from '@angular/forms';
import {NgModule} from "@angular/compiler/src/core";


// @IonicPage()
// @Component({
//   selector: 'page-chat',
//   templateUrl: 'chat.html',
// })
// export class ChatPage {

//   toUser = {
//     _id: '534b8e5aaa5e7afc1b23e69b',
//     pic: 'assets/img/avatar/ian-avatar.png',
//     username: 'Venkman',
//   };

//   user = {
//     _id: '534b8fb2aa5e7afc1b23e69c',
//     pic: 'assets/img/avatar/marty-avatar.png',
//     username: 'Marty',
//   };

//   doneLoading = false;

//   chats = [
//     {
//       _id: 1,
//       date: new Date(),
//       userId: this.user._id,
//       username: this.user.username,
//       pic: this.user.pic,
//       text: 'OH CRAP!!'
//     },
//     {
//       _id: 2,
//       date: new Date(),
//       userId: this.toUser._id,
//       username: this.toUser.username,
//       pic: this.toUser.pic,
//       text: 'what??'
//     },
//     {
//       _id: 3,
//       date: new Date(),
//       userId: this.toUser._id,
//       username: this.toUser.username,
//       pic: this.toUser.pic,
//       text: 'Pretty long message with lots of content'
//     },
//     {
//       _id: 4,
//       date: new Date(),
//       userId: this.user._id,
//       username: this.user.username,
//       pic: this.user.pic,
//       text: 'Pretty long message with even way more of lots and lots of content'
//     },
//     {
//       _id: 5,
//       date: new Date(),
//       userId: this.user._id,
//       username: this.user.username,
//       pic: this.user.pic,
//       text: '哪尼??'
//     },
//     {
//       _id: 6,
//       date: new Date(),
//       userId: this.toUser._id,
//       username: this.toUser.username,
//       pic: this.toUser.pic,
//       text: 'yes!'
//     }
//   ];

//   @ViewChild(Content) content: Content;

//   public chatForm: any;
//   chatBox: any;

//   constructor(public navParams: NavParams,
//               public navCtrl: NavController,
//               public formBuilder: FormBuilder) {
//     this.chatForm = formBuilder.group({
//       chat: new FormControl('')
//     });
//     this.chatBox = '';
//   }

//   ionViewDidLoad() {
//     let modelData: string = '用户名：' + this.navParams.get('chatId');
//     console.log(modelData);
//   }

//   // 发送消息
//   send(chat) {
//     if (chat && chat !== '') {
//       // this.messageService.sendMessage(chatId, message);

//       const chatData =
//         {
//           toId: this.toUser._id,
//           _id: 6,
//           date: new Date(),
//           userId: this.user._id,
//           username: this.toUser.username,
//           pic: this.toUser.pic,
//           text: chat
//         };

//       this.chats.push(chatData);
//       this.scrollToBottom();

//       setTimeout(() => {
//         const replyData =
//           {
//             toId: this.toUser._id,
//             _id: 6,
//             date: new Date(),
//             userId: this.toUser._id,
//             username: this.toUser.username,
//             pic: this.toUser.pic,
//             text: 'Just a quick reply'
//           };
//         this.chats.push(replyData);
//         this.scrollToBottom();
//       }, 1000);
//     }
//     this.chatBox = '';
//   }

//   scrollToBottom() {
//     setTimeout(() => {
//       this.content.scrollToBottom();
//     }, 100);
//   }

//   viewProfile(chat: string){
//     console.log(chat);
//   }

// }


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-chat',
   templateUrl: 'chat.html',
 })
 export class ChatPage {
  data:any;
   constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('test');
   }

   ionViewDidLoad(navParams: NavParams) {
    console.log('ionViewDidLoad ChatPage');
   }

 }
