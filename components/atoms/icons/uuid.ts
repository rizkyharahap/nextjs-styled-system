let lastId = 0;

export function uuid(): string {
  lastId++;
  return `icon-${lastId}`;
}
