export interface Spell {
  name: string;
  description: string;
  casting_time: string;
  range: string;
  components: {
    verbal?: boolean;
    somatic?: boolean;
    material?: boolean;
    materials?: string;
    raw?: string;  // Add this if it exists in your JSON
  };
  duration: string;
  concentration: boolean;
  ritual: boolean;
  level: number;
  school: string;
  classes: string[];
  subclasses?: string[];
  type: string;
  attack?: string;
  saving_throw?: string;
  damage?: {
    type?: string;
    levels?: Record<string, string>;
  };
  higher_levels?: string;
  heal?: {
    levels?: Record<string, string>;
  };
}