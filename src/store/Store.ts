export type UserId = string;

export interface Chat {
  id: string;
  userId: UserId;
  name: string;
  message: string;
  upvotes: UserId[]; //who has upvoted what has to be stored
}

export abstract class Store {
  constructor() {}

  initRoom(roomId: string) {}

  getChats(room: string, limit: number, offset: number) {}

  addChat(userId: UserId, name: string, room: string, message: string) {}

  upvote(userId: UserId, room: string, chatId: string) {}
}
