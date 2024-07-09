import type { Region } from '@/models/Region'
import type { Player } from '@/models/Player'
import type { Invitation } from '@/models/Invitation'
import type { SocialMedia } from '@/models/SocialMedia'

export class Team {
  id: string;
  
  name: string;
  
  tag: string;
  
  description: string;
  
  visibility: boolean;
  
  game: string;
  
  platform: string;
  
  region: Region;
  
  players: Player[];
  
  organizerId: string;
  
  logo: string;
  
  banner: string;
  
  socialMedia: SocialMedia;
  
  invitations: Invitation[];
  
  constructor(id: string, name: string, tag: string, description: string, visibility: boolean, game: string, platform: string, region: Region, players: Player[], organizerId: string, logo: string, banner: string, socialMedia: SocialMedia, invitations: Invitation[]) {
    this.id = id;
    this.name = name;
    this.tag = tag;
    this.description = description;
    this.visibility = visibility;
    this.game = game;
    this.platform = platform;
    this.region = region;
    this.players = players;
    this.organizerId = organizerId;
    this.logo = logo;
    this.banner = banner;
    this.socialMedia = socialMedia;
    this.invitations = invitations;
  }
}