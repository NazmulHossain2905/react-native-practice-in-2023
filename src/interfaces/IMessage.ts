export interface IMessage {
  id: number | string;
  message: string;
  time: number | string;
  type: IType;
}

type IType = 'send' | 'receive';
