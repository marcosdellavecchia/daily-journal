import { getCurrentDate } from '../core/helpers';

const noteDate: string = getCurrentDate();

export const gratitudeTemplate: string = `🗓 ${noteDate} 
\n🙏 What am I grateful for?:  
\n👏 What I've achieved yesterday? 
\n💪 What I'd like to accomplish today?\n`;

export const freeTemplate: string = `🗓 ${noteDate} 
\n`;
