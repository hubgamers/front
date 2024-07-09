import type { Player } from '@/models/Player'

export class TeamDTO {
  name: string;
  
  tags: string[];
  
  description: string;
  
  visibility: boolean;
  
  players: Player[];
  
  organizerId: string;
  
  logo: string;
  
  banner: string;
  
  constructor(name: string, tags: string[], description: string, visibility: boolean, players: Player[], organizerId: string, logo: string, banner: string) {
    this.name = name;
    this.tags = tags;
    this.description = description;
    this.visibility = visibility;
    this.players = players;
    this.organizerId = organizerId;
    this.logo = logo;
    this.banner = banner;
  }
}