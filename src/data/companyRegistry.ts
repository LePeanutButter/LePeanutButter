import crehanaLogo from '@logos/crehana.webp';
import oxfordLogo from '@logos/oxford-placement.webp';
import toeflLogo from '@logos/toefl-junior.webp';
import sprachLogo from '@logos/sprach-institut.webp';
import eciLogo from '@logos/eci.webp';
import orbidiLogo from '@logos/orbidi.webp';
import { AssetRegistry, RegistryEntry } from './genericRegistry';

/**
 * Identificadores fuertemente tipados de empresas/entidades.
 */
export enum CompanyId {
  CREHANA = 'crehana',
  OXFORD = 'oxford',
  TOEFL = 'toefl',
  SPRACH = 'sprach',
  ECI = 'eci',
  ORBIDI = 'orbidi',
}

export type CompanyInfo = RegistryEntry<'logo'>;

/**
 * Registro oficial de empresas asociando cada ID a su nombre y logo.
 */
export const CompanyRegistry = {
  [CompanyId.CREHANA]: {
    name: 'Crehana',
    logo: crehanaLogo,
  },
  [CompanyId.OXFORD]: {
    name: 'Oxford Placement Test',
    logo: oxfordLogo,
  },
  [CompanyId.TOEFL]: {
    name: 'TOEFL Junior',
    logo: toeflLogo,
  },
  [CompanyId.SPRACH]: {
    name: 'Sprach Institut',
    logo: sprachLogo,
  },
  [CompanyId.ECI]: {
    name: 'Escuela Colombiana de Ingenieria Julio Garavito',
    logo: eciLogo,
  },
  [CompanyId.ORBIDI]: {
    name: 'ORBIDI',
    logo: orbidiLogo,
  },
} satisfies AssetRegistry<'logo', CompanyId>;
