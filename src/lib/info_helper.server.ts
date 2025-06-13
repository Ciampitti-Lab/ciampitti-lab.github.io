import path from 'node:path';
import fs from 'node:fs';
import * as XLSX from 'xlsx';

/** Generic helper — called once at import time */
function readSheet<T = unknown>(sheetName: string): T[] {
  const file = path.join(process.cwd(), 'public', 'data', 'info.xlsx');
  const buffer = fs.readFileSync(file);          // binary read
  const wb = XLSX.read(buffer, { type: 'buffer' });

  if (!wb.SheetNames.includes(sheetName))
    throw new Error(`Sheet “${sheetName}” not found in ${file}`);

  return XLSX.utils.sheet_to_json<T>(wb.Sheets[sheetName]);
}

// Interface for team data
interface TeamMember {
  id: string | number;
  name: string;
  role: string;
  pfp_file_name: string;
  linkedin: string;
  research_info: string;
}

// Interface for news post data
interface NewsPost {
  id: string | number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  md_file_name: string;
  img_file_name: string;
}
// Interface for publication data
interface Publication {
  id: string | number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  url: string;
  doi: string;
}
/** Constants are evaluated once during the build / first server start */
export const teamData = readSheet<TeamMember>('team');
export const newsData = readSheet<NewsPost>('news');
export const pubData = readSheet<Publication>('publications');
