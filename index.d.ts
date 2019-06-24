
interface IUserInsecureData {
  discord_id: string;
  nickname: string;
  user_id: number;
  username: string;
  role: number;
  faction?: number;
  head: number;
  hair: number;
  hair_color: number;
  is_male: boolean;
  created_at: Date;
  last_seen: Date;
}

interface IUserSecureData extends IUserInsecureData {
  health: number;
  hunger: number;
  thirst: number;
  x_pos: number;
  y_pos: number;
  z_pos: number;
  rotation: number;
  inventory: IIncomingInventory[];
}

interface IUser extends IUserSecureData, IUserInsecureData {
  hash?: Buffer;
  getMoney: () => (number);
  secureData: () => IUserSecureData;
  insecureData: () => IUserInsecureData;
}

interface IIncomingInventory {
  id: string;
  quantity: number;
  mag?: number;
}

interface ISaveData {
  health: number;
  hunger: number;
  thirst: number;
  x_pos: number;
  y_pos: number;
  z_pos: number;
  rotation: number;
  inventory: IIncomingInventory[];
}

interface IRole {
  role_id: number;
  role_name: string;
}

interface IRegistrationPayload {
  username: string;
  password: string;
  confirmPassword: string;
  key: string;
}

interface IKey {
  key_id: string;
  key: string;
  owner: string;
  generator_discord_id: string;
  discord_id: string;
}

interface IFaction {
  faction_id: number;
  faction_name: string;
  color: string;
  role_id: string;
  users: Array<Partial<IUser>>;
}

interface IAppearance {
  nickname: string;
  head: number;
  hair: number;
  hair_color: number;
  is_male: boolean;
}
