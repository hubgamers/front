export class Player {
  id : string;
  
  username : string;
  
  userId : string;
  
  constructor(id: string, username: string, userId: string) {
    this.id = id;
    this.username = username;
    this.userId = userId;
  }
}