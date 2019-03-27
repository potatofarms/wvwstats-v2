import { IMatchScoresPercentage } from "./matchscores.model";

export interface IServerMatchInfo {
  world: number;
  all_worlds: Array<number>;
  kills: number;
  deaths: number;
  victory_points: number;
  score: number;
  skirmish_score: number;
  scorePercent: IMatchScoresPercentage;
  ppt: number;
}
