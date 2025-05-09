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

/** ↓ Constants are evaluated once during the build / first server start */
export const teamData = readSheet('team');
export const newsData = readSheet('news');
export const pubData = readSheet('publications');
