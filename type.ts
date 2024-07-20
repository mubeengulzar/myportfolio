import { IconType } from "react-icons"

export interface EServices{
    title:string,
    dec:string,
    Icon:IconType
}

export interface Skill {
    Icon: IconType;
    name: string;
    level: string;
  }

export interface IProject{
id: number,
name: string,
dec:string,
image_path:string,
deploy:string,
github:string,
category:Category[];
key_tech:string[];

}

export type Category ="React Js"| "Node js" | "React Native" | " Mongo " |"Express" ;