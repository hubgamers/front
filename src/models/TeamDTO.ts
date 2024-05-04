import type { Player } from '@/models/Player'

export class TeamDTO {
  name: string;
  
  tag: string;
  
  description: string;
  
  visibility: boolean;
  
  game: string;
  
  platform: string;
  
  players: Player[];
  
  organizerId: string;
  
  logo: string;
  
  banner: string;
  
  constructor(name: string, tag: string, description: string, visibility: boolean, game: string, platform: string, players: Player[], organizerId: string, logo: string, banner: string) {
    this.name = name;
    this.tag = tag;
    this.description = description;
    this.visibility = visibility;
    this.game = game;
    this.platform = platform;
    this.players = players;
    this.organizerId = organizerId;
    this.logo = logo;
    this.banner = banner;
  }
}