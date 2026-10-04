import poobThumbnail from '@thumbnails/poob-thumbnail.webp';
import arswThumbnail from '@thumbnails/arsw-thumbnail.webp';
import hautThumbnail from '@thumbnails/haut-thumbnail.webp';
import prometeoThumbnail from '@thumbnails/prometeo-thumbnail.webp';
import smartripThumbnail from '@thumbnails/smartrip-thumbnail.webp';
import elysiumThumbnail from '@thumbnails/elysium-thumbnail.webp';
import talentmapThumbnail from '@thumbnails/ptia-thumbnail.webp';
import ezflixThumbnail from '@thumbnails/mbda-thumbnail.webp';
import aquasenseThumbnail from "@thumbnails/aquasense-thumbnail.webp";
import sustainableWaterAwarenessThumbnail from '@thumbnails/lsod-thumbnail.webp';
import qifyThumbnail from '@thumbnails/qify-thumbnail.webp';
import { AssetRegistry, RegistryEntry } from './genericRegistry';

/**
 * Identificadores fuertemente tipados de proyectos.
 */
export enum ProjectId {
  POOB = 'poob',
  ARSW = 'arsw',
  HAUT = 'haut',
  PROMETEO = 'prometeo',
  SMARTRIP = 'smartrip',
  ELYSIUM = 'elysium',
  TALENTMAP = 'talentmap',
  EZFLIX = 'ezflix',
  SUSTAINABLEWATERAWARENESS = 'sustainableWaterAwareness',
  QIFY = 'qify',
  AQUASENSE = 'aquasense',
}

export type ProjectInfo = RegistryEntry<'thumbnail'>;

/**
 * Registro oficial de proyectos asociando cada ID a su nombre y miniatura/thumbnail.
 */
export const ProjectRegistry = {
  [ProjectId.POOB]: {
    name: 'POOB vs. Zombies',
    thumbnail: poobThumbnail,
  },
  [ProjectId.ARSW]: {
    name: 'Power Garden: Juicy Brawl!',
    thumbnail: arswThumbnail,
  },
  [ProjectId.HAUT]: {
    name: 'AI Grading Automation Workflows Backup',
    thumbnail: hautThumbnail,
  },
  [ProjectId.PROMETEO]: {
    name: 'Prometeo - Smart Gym Management System',
    thumbnail: prometeoThumbnail,
  },
  [ProjectId.SMARTRIP]: {
    name: 'SmarTrip - AI-Powered Multi-Platform Tourism Ecosystem',
    thumbnail: smartripThumbnail,
  },
  [ProjectId.ELYSIUM]: {
    name: 'Elysium - Laboratory Reservation System',
    thumbnail: elysiumThumbnail,
  },
  [ProjectId.TALENTMAP]: {
    name: 'TalentMap AI',
    thumbnail: talentmapThumbnail,
  },
  [ProjectId.EZFLIX]: {
    name: 'EZFlix - Relational Database System',
    thumbnail: ezflixThumbnail,
  },
  [ProjectId.SUSTAINABLEWATERAWARENESS]: {
    name: 'Sustainable Water Awareness & Community Engagement Initiative',
    thumbnail: sustainableWaterAwarenessThumbnail,
  },
  [ProjectId.QIFY]: {
    name: 'Qify - Quality Attribute DSL',
    thumbnail: qifyThumbnail,
  },
  [ProjectId.AQUASENSE]: {
    name: 'AquaSense n8n Workflows',
    thumbnail: aquasenseThumbnail,
  },
} satisfies AssetRegistry<'thumbnail', ProjectId>;
