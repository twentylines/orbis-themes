import { constants } from 'node:fs';
import { open } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const LIMIT = 1024 * 1024;

async function readJson(file) {
  const handle = await open(file, constants.O_RDONLY | constants.O_NOFOLLOW);
  try {
    const before = await handle.stat();
    if (!before.isFile() || before.size > LIMIT) throw new Error('Invalid input');
    const data = Buffer.allocUnsafe(LIMIT + 1);
    let bytes = 0;
    while (bytes < data.length) {
      const chunk = await handle.read(data, bytes, data.length - bytes, null);
      if (chunk.bytesRead === 0) break;
      bytes += chunk.bytesRead;
    }
    const after = await handle.stat();
    if (bytes > LIMIT || bytes !== before.size || after.size !== before.size || after.mtimeMs !== before.mtimeMs) throw new Error('Invalid input');
    return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(data.subarray(0, bytes)));
  } finally {
    await handle.close();
  }
}

async function main(args) {
  if (args.length !== 3 || !['catalogue', 'document'].includes(args[0])) {
    console.error('Usage: node scripts/validate.mjs <catalogue|document> <file.json> <Orbis checkout>');
    return 2;
  }
  const [kind, file, checkout] = args;
  try {
    const moduleName = kind === 'catalogue' ? 'theme-framework-catalogue' : 'theme-framework-validation';
    const moduleUrl = pathToFileURL(path.resolve(checkout, 'packages/common/dist/schemas', `${moduleName}.js`));
    const validator = await import(moduleUrl.href);
    const input = await readJson(file);
    if (kind === 'catalogue') {
      const result = validator.validateThemeFrameworkCatalogue(input);
      process.stdout.write(`Catalogue valid: ${result.themes.length} entries.\n`);
    } else {
      const result = validator.validateThemeFrameworkDocument(input);
      if (!result.valid) throw new Error('Invalid document');
      process.stdout.write('Theme document valid.\n');
    }
    return 0;
  } catch {
    console.error('Validation failed. Build the documented Orbis common package and check the input against its schema and semantic rules.');
    return 1;
  }
}

process.exitCode = await main(process.argv.slice(2));
