import fs from 'fs';
import path from 'path';

type TokenData = {
  email: string;
  course: string;
  approved: boolean | null;
};

const filePath = path.resolve(process.cwd(), 'tokens.json');

// Load existing tokens from file
function loadTokenStore(): Record<string, TokenData> {
  if (!fs.existsSync(filePath)) return {};
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch {
    return {};
  }
}

// Save current token map to file
function saveTokenStore(store: Record<string, TokenData>) {
  fs.writeFileSync(filePath, JSON.stringify(store, null, 2));
}

let tokenMap = loadTokenStore();

export function saveToken(token: string, data: TokenData) {
  tokenMap[token] = data;
  saveTokenStore(tokenMap);
}

export function getTokenData(token: string): TokenData | undefined {
  return tokenMap[token];
}

export function updateApprovalStatus(token: string, approved: boolean) {
  const data = tokenMap[token];
  if (data) {
    data.approved = approved;
    tokenMap[token] = data;
    saveTokenStore(tokenMap);
  }
}
