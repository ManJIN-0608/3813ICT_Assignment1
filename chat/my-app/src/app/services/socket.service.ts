import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { nextTick } from 'q';

const SERVER_URL = 'http://localhost:3000';
// const SERVER_URL = 'http://localhost:3000/chat';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;
  constructor() { }

  public initSocket(): void {
    this.socket = io(SERVER_URL);
  }

  public send(message: string): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<any> {
    let observable = new Observable(observer => {
      this.socket.on('message', (data:string) => observer.next(data));
    });
    return observable;
  }

  // joinroom(selroom):void{
  //   this.socket.emit("joinroom", selroom);
  // }

  // leaveroom(selroom):void{
  //   this.socket.emit("leaveroom", selroom);
  // }

  // joined(next){
  //   this.socket.on('joined', res=>next(res));
  // }

  // reqnumusers(selroom){
  //   this.socket.emit('numusers', selroom);
  // }

  // getnumusers(next){
  //   this.socket.on('numusers', res=>next(res));
  // }

  // reqroomList(){
  //   this.socket.emit('chanelname', 'list please');
  // }

  // getroomList(next){
  //   this.socket.on('channelname', res=>next(res));
  // }

  // notice(next){
  //   this.socket.on('notice', res=>next(res));
  // }

  // sendMessage(message: string): void {
  //   this.socket.emit('message', message);
  // }

  // getMessage(next){
  //   this.socket.on('message', (message)=>next(message));
  // }

}
