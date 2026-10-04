import type { StaticImageData } from 'next/image';

/**
 * Representa una entrada genérica en un registro con nombre y un recurso visual parametrizado.
 */
export type RegistryEntry<AssetKey extends string> = {
  name: string;
} & Record<AssetKey, StaticImageData>;

/**
 * Tipo para un registro/diccionario genérico que mapea llaves a sus entradas con recursos visuales.
 */
export type AssetRegistry<AssetKey extends string, TKeys extends string | number | symbol = string> = 
  Record<TKeys, RegistryEntry<AssetKey>>;
