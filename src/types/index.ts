export interface Spell {
    casting_time: string;
    classes: string[];
    components: {
      material: boolean;
      raw: string;
      somatic: boolean;
      verbal: boolean;
    };
    description: string;
    duration: string;
    level: string;
    name: string;
    range: string;
    ritual: boolean;
    school: string;
    tags: string[];
    type: string;
  }

export type FilterOptions = {
    source?: string;
    name?: string;
    level?: number;
    classes?: string[];
    school?: string;
    ritual?: boolean;
    concentration?: boolean;
    castingTime?: string;
    range?: string;
    spellAttack?: boolean;
    damageType?: string[];
};